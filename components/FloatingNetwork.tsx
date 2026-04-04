"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, type MutableRefObject, type PointerEvent as ReactPointerEvent } from "react";
import * as THREE from "three";

type NetworkAnchor = "top-right" | "bottom-left";

type FloatingNetworkProps = {
  className?: string;
  nodeColor?: string;
  lineColor?: string;
  glowColor?: string;
  nodeCount?: number;
  anchor?: NetworkAnchor;
  interactionStrength?: number;
  lineOpacity?: number;
};

type NetworkCoreProps = {
  pointerRef: MutableRefObject<THREE.Vector2>;
  pointerVelocityRef: MutableRefObject<number>;
  pointerActiveRef: MutableRefObject<boolean>;
  burstRef: MutableRefObject<number>;
  nodeColor: string;
  lineColor: string;
  glowColor: string;
  nodeCount: number;
  anchor: NetworkAnchor;
  interactionStrength: number;
  lineOpacity: number;
};

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function createNodePositions(count: number, anchor: NetworkAnchor) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const i = index * 3;
    const xSeed = pseudoRandom(index + 2.1);
    const ySeed = pseudoRandom(index + 5.4);
    const zSeed = pseudoRandom(index + 8.7);

    const xBias = anchor === "top-right" ? Math.pow(xSeed, 0.55) : 1 - Math.pow(xSeed, 0.55);
    const yBias = anchor === "top-right" ? Math.pow(ySeed, 0.55) : 1 - Math.pow(ySeed, 0.55);

    positions[i] = THREE.MathUtils.lerp(-2, 2, xBias);
    positions[i + 1] = THREE.MathUtils.lerp(-1.8, 1.8, yBias);
    positions[i + 2] = (zSeed - 0.5) * 0.24;
  }

  return positions;
}

function createEdgePairs(positions: Float32Array, count: number) {
  const edges: number[] = [];
  const maxConnections = 6;
  const connectionCount = new Array<number>(count).fill(0);
  const maxDistance = 1.14;

  for (let a = 0; a < count; a += 1) {
    const ax = positions[a * 3];
    const ay = positions[a * 3 + 1];
    const az = positions[a * 3 + 2];

    for (let b = a + 1; b < count; b += 1) {
      if (connectionCount[a] >= maxConnections || connectionCount[b] >= maxConnections) {
        continue;
      }

      const bx = positions[b * 3];
      const by = positions[b * 3 + 1];
      const bz = positions[b * 3 + 2];
      const dx = ax - bx;
      const dy = ay - by;
      const dz = az - bz;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance <= maxDistance) {
        edges.push(a, b);
        connectionCount[a] += 1;
        connectionCount[b] += 1;
      }
    }
  }

  return edges;
}

function NetworkCore({
  pointerRef,
  pointerVelocityRef,
  pointerActiveRef,
  burstRef,
  nodeColor,
  lineColor,
  glowColor,
  nodeCount,
  anchor,
  interactionStrength,
  lineOpacity,
}: NetworkCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsAttributeRef = useRef<THREE.BufferAttribute>(null);
  const glowPointsAttributeRef = useRef<THREE.BufferAttribute>(null);
  const lineAttributeRef = useRef<THREE.BufferAttribute>(null);
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const pointsMaterialRef = useRef<THREE.PointsMaterial>(null);
  const glowPointsMaterialRef = useRef<THREE.PointsMaterial>(null);
  const cursorOrbRef = useRef<THREE.Mesh>(null);
  const cursorOrbMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const cursorHaloRef = useRef<THREE.Mesh>(null);
  const cursorHaloMaterialRef = useRef<THREE.MeshBasicMaterial>(null);
  const smoothPointer = useRef(new THREE.Vector2(0, 0));
  const energyRef = useRef(0);
  const directionalDrift = anchor === "top-right" ? 1 : -1;

  const basePositions = useMemo(() => createNodePositions(nodeCount, anchor), [anchor, nodeCount]);
  const animatedPositions = useMemo(() => new Float32Array(basePositions), [basePositions]);
  const edgePairs = useMemo(() => createEdgePairs(basePositions, nodeCount), [basePositions, nodeCount]);
  const edgePositions = useMemo(() => new Float32Array(edgePairs.length * 3), [edgePairs.length]);

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();
    pointerVelocityRef.current = Math.max(0, pointerVelocityRef.current - delta * 1.65);
    burstRef.current = Math.max(0, burstRef.current - delta * 1.05);

    const targetEnergy = Math.min(
      1,
      (pointerActiveRef.current ? 0.28 : 0.04) + pointerVelocityRef.current * 0.95 + burstRef.current * 0.75,
    );
    energyRef.current = THREE.MathUtils.damp(energyRef.current, targetEnergy, 5.4, delta);

    smoothPointer.current.x = THREE.MathUtils.damp(
      smoothPointer.current.x,
      pointerRef.current.x,
      5.6 + energyRef.current * 2.2,
      delta,
    );
    smoothPointer.current.y = THREE.MathUtils.damp(
      smoothPointer.current.y,
      pointerRef.current.y,
      5.6 + energyRef.current * 2.2,
      delta,
    );

    if (groupRef.current) {
      groupRef.current.rotation.z =
        Math.sin(time * 0.3) * 0.05 + smoothPointer.current.x * (0.14 + energyRef.current * 0.1) * directionalDrift;
      groupRef.current.rotation.x = Math.cos(time * 0.33) * 0.05 + smoothPointer.current.y * (0.1 + energyRef.current * 0.08);
      groupRef.current.position.x = smoothPointer.current.x * (0.28 + energyRef.current * 0.2);
      groupRef.current.position.y = smoothPointer.current.y * (0.2 + energyRef.current * 0.14);
      groupRef.current.scale.setScalar(1 + energyRef.current * 0.05);
    }

    const pointerX = smoothPointer.current.x * (1.85 + energyRef.current * 0.45);
    const pointerY = smoothPointer.current.y * (1.65 + energyRef.current * 0.45);
    const influenceRadius = 1.14 + energyRef.current * 0.6;

    for (let index = 0; index < nodeCount; index += 1) {
      const i = index * 3;
      const baseX = basePositions[i];
      const baseY = basePositions[i + 1];
      const baseZ = basePositions[i + 2];

      const dx = baseX - pointerX;
      const dy = baseY - pointerY;
      const distance = Math.sqrt(dx * dx + dy * dy) + 0.0001;
      const influence = Math.max(0, 1 - distance / influenceRadius);
      const push = influence * interactionStrength * (1 + energyRef.current * 1.8);
      const swirl = influence * (0.05 + energyRef.current * 0.16) * directionalDrift;
      const ripple =
        Math.sin(distance * (8.8 + energyRef.current * 3.2) - time * (4.8 + energyRef.current * 4.5) + index * 0.21) *
        burstRef.current *
        0.075;

      const driftX = Math.sin(time * 1.15 + index * 0.43) * 0.05;
      const driftY = Math.cos(time * 1.04 + index * 0.37) * 0.05;
      const driftZ = Math.sin(time * 0.92 + index * 0.29) * 0.03;

      const nx = dx / distance;
      const ny = dy / distance;

      animatedPositions[i] = baseX + driftX + nx * push - ny * swirl + nx * ripple;
      animatedPositions[i + 1] = baseY + driftY + ny * push + nx * swirl + ny * ripple;
      animatedPositions[i + 2] =
        baseZ + driftZ + influence * (0.01 + energyRef.current * 0.026) + Math.sin(time * 1.4 + index) * burstRef.current * 0.015;
    }

    if (pointsAttributeRef.current) {
      pointsAttributeRef.current.needsUpdate = true;
    }

    if (glowPointsAttributeRef.current) {
      glowPointsAttributeRef.current.needsUpdate = true;
    }

    if (lineAttributeRef.current) {
      const pairCount = edgePairs.length / 2;

      for (let pairIndex = 0; pairIndex < pairCount; pairIndex += 1) {
        const a = edgePairs[pairIndex * 2] * 3;
        const b = edgePairs[pairIndex * 2 + 1] * 3;
        const target = pairIndex * 6;

        edgePositions[target] = animatedPositions[a];
        edgePositions[target + 1] = animatedPositions[a + 1];
        edgePositions[target + 2] = animatedPositions[a + 2];
        edgePositions[target + 3] = animatedPositions[b];
        edgePositions[target + 4] = animatedPositions[b + 1];
        edgePositions[target + 5] = animatedPositions[b + 2];
      }

      lineAttributeRef.current.needsUpdate = true;
    }

    if (lineMaterialRef.current) {
      const targetOpacity = Math.min(0.95, lineOpacity + energyRef.current * 0.34 + burstRef.current * 0.16);
      lineMaterialRef.current.opacity = THREE.MathUtils.damp(lineMaterialRef.current.opacity, targetOpacity, 6.2, delta);
    }

    if (pointsMaterialRef.current) {
      const targetSize = 0.076 + energyRef.current * 0.055;
      const targetOpacity = 0.76 + energyRef.current * 0.2;
      pointsMaterialRef.current.size = THREE.MathUtils.damp(pointsMaterialRef.current.size, targetSize, 6.2, delta);
      pointsMaterialRef.current.opacity = THREE.MathUtils.damp(pointsMaterialRef.current.opacity, targetOpacity, 6.2, delta);
    }

    if (glowPointsMaterialRef.current) {
      const targetGlowSize = 0.15 + energyRef.current * 0.09;
      const targetGlowOpacity = 0.12 + energyRef.current * 0.28;
      glowPointsMaterialRef.current.size = THREE.MathUtils.damp(glowPointsMaterialRef.current.size, targetGlowSize, 6.2, delta);
      glowPointsMaterialRef.current.opacity = THREE.MathUtils.damp(
        glowPointsMaterialRef.current.opacity,
        targetGlowOpacity,
        6.2,
        delta,
      );
    }

    const orbScale = 0.12 + energyRef.current * 0.16 + burstRef.current * 0.11;

    if (cursorOrbRef.current) {
      cursorOrbRef.current.position.set(pointerX * 0.55, pointerY * 0.55, 0.13);
      cursorOrbRef.current.scale.setScalar(orbScale);
    }

    if (cursorOrbMaterialRef.current) {
      const targetOrbOpacity = pointerActiveRef.current ? 0.22 + energyRef.current * 0.58 : 0.03;
      cursorOrbMaterialRef.current.opacity = THREE.MathUtils.damp(cursorOrbMaterialRef.current.opacity, targetOrbOpacity, 8, delta);
    }

    if (cursorHaloRef.current) {
      const haloScale = 0.9 + energyRef.current * 0.75 + burstRef.current * 0.4;
      cursorHaloRef.current.position.set(pointerX * 0.55, pointerY * 0.55, 0.1);
      cursorHaloRef.current.rotation.z += delta * (0.55 + energyRef.current * 2.4);
      cursorHaloRef.current.scale.setScalar(haloScale);
    }

    if (cursorHaloMaterialRef.current) {
      const targetHaloOpacity = pointerActiveRef.current ? 0.08 + energyRef.current * 0.34 + burstRef.current * 0.22 : 0;
      cursorHaloMaterialRef.current.opacity = THREE.MathUtils.damp(
        cursorHaloMaterialRef.current.opacity,
        targetHaloOpacity,
        8,
        delta,
      );
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute ref={lineAttributeRef} attach="attributes-position" args={[edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMaterialRef}
          color={lineColor}
          transparent
          opacity={lineOpacity}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute ref={pointsAttributeRef} attach="attributes-position" args={[animatedPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMaterialRef}
          color={nodeColor}
          size={0.076}
          sizeAttenuation
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <points>
        <bufferGeometry>
          <bufferAttribute ref={glowPointsAttributeRef} attach="attributes-position" args={[animatedPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={glowPointsMaterialRef}
          color={glowColor}
          size={0.15}
          sizeAttenuation
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <mesh ref={cursorHaloRef} position={[0, 0, 0.1]}>
        <ringGeometry args={[0.22, 0.3, 48]} />
        <meshBasicMaterial
          ref={cursorHaloMaterialRef}
          color={lineColor}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={cursorOrbRef} position={[0, 0, 0.13]}>
        <sphereGeometry args={[0.16, 20, 20]} />
        <meshBasicMaterial
          ref={cursorOrbMaterialRef}
          color={glowColor}
          transparent
          opacity={0.03}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function FloatingNetwork({
  className,
  nodeColor = "#e8f3ff",
  lineColor = "#4ea3ff",
  glowColor = "#beddff",
  nodeCount = 34,
  anchor = "top-right",
  interactionStrength = 0.2,
  lineOpacity = 0.5,
}: FloatingNetworkProps) {
  const pointerRef = useRef(new THREE.Vector2(0, 0));
  const pointerVelocityRef = useRef(0);
  const pointerActiveRef = useRef(false);
  const burstRef = useRef(0);
  const lastPointerRef = useRef(new THREE.Vector2(0, 0));

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    const dx = x - lastPointerRef.current.x;
    const dy = y - lastPointerRef.current.y;
    const speed = Math.min(1, Math.sqrt(dx * dx + dy * dy) * 8);

    pointerRef.current.set(x, y);
    pointerVelocityRef.current = Math.max(pointerVelocityRef.current * 0.82, speed);
    pointerActiveRef.current = true;
    lastPointerRef.current.set(x, y);
  };

  const handlePointerDown = () => {
    burstRef.current = Math.min(1.2, burstRef.current + 0.95);
  };

  const handlePointerLeave = () => {
    pointerRef.current.set(0, 0);
    pointerVelocityRef.current = 0;
    pointerActiveRef.current = false;
    lastPointerRef.current.set(0, 0);
  };

  return (
    <div
      className={className}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerLeave}
      aria-hidden
    >
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 4.2], fov: 47, near: 0.1, far: 20 }}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color("#000000"), 0)}
      >
        <NetworkCore
          pointerRef={pointerRef}
          pointerVelocityRef={pointerVelocityRef}
          pointerActiveRef={pointerActiveRef}
          burstRef={burstRef}
          nodeColor={nodeColor}
          lineColor={lineColor}
          glowColor={glowColor}
          nodeCount={nodeCount}
          anchor={anchor}
          interactionStrength={interactionStrength}
          lineOpacity={lineOpacity}
        />
      </Canvas>
    </div>
  );
}