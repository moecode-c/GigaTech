"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";

type PointerState = {
  x: number;
  y: number;
  isActive: boolean;
};

type ParticleLayerProps = {
  count: number;
  radius: number;
  color: string;
  size: number;
  speed: number;
  opacity: number;
  interactionRadius: number;
  interactionStrength: number;
  pointerRef: MutableRefObject<PointerState>;
  interactive: boolean;
};

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

const ParticleLayer = memo(function ParticleLayer({
  count,
  radius,
  color,
  size,
  speed,
  opacity,
  interactionRadius,
  interactionStrength,
  pointerRef,
  interactive,
}: ParticleLayerProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const positionAttributeRef = useRef<THREE.BufferAttribute>(null);
  const smoothPointer = useRef(new THREE.Vector2(0, 0));

  const basePositions = useMemo(() => {
    const data = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      const angle = pseudoRandom(index + count * 1.7) * Math.PI * 2;
      const distance = radius * (0.25 + pseudoRandom(index + count * 3.1) * 0.75);
      const spread = (pseudoRandom(index + count * 6.2) - 0.5) * 1.6;

      data[i] = Math.cos(angle) * distance;
      data[i + 1] = Math.sin(angle) * distance;
      data[i + 2] = spread;
    }

    return data;
  }, [count, radius]);

  const positionsBuffer = useMemo(() => new Float32Array(basePositions), [basePositions]);

  useFrame(({ clock }, delta) => {
    if (!pointsRef.current || speed === 0) {
      return;
    }

    const time = clock.getElapsedTime();
    pointsRef.current.rotation.y = time * speed;
    pointsRef.current.rotation.x = Math.sin(time * 0.12) * 0.08;

    if (!interactive || !positionAttributeRef.current) {
      return;
    }

    const pointerScale = pointerRef.current.isActive ? 1 : 0;
    const targetX = pointerRef.current.x * pointerScale;
    const targetY = pointerRef.current.y * pointerScale;

    smoothPointer.current.x = THREE.MathUtils.damp(smoothPointer.current.x, targetX, 2.5, delta);
    smoothPointer.current.y = THREE.MathUtils.damp(smoothPointer.current.y, targetY, 2.5, delta);

    pointsRef.current.position.x = smoothPointer.current.x * 0.15;
    pointsRef.current.position.y = smoothPointer.current.y * 0.12;

    const cursorX = smoothPointer.current.x * radius;
    const cursorY = smoothPointer.current.y * radius;
    const buffer = positionAttributeRef.current.array as Float32Array;

    for (let index = 0; index < count; index += 1) {
      const i = index * 3;
      const baseX = basePositions[i];
      const baseY = basePositions[i + 1];
      const baseZ = basePositions[i + 2];

      const dx = baseX - cursorX;
      const dy = baseY - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy) + 0.0001;
      const influence = Math.max(0, 1 - distance / interactionRadius);
      const push = influence * interactionStrength;

      buffer[i] = baseX + (dx / distance) * push;
      buffer[i + 1] = baseY + (dy / distance) * push;
      buffer[i + 2] = baseZ + Math.sin(time * 0.9 + index * 0.25) * 0.012;
    }

    positionAttributeRef.current.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute ref={positionAttributeRef} attach="attributes-position" args={[positionsBuffer, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </points>
  );
});

function useReducedMotionPreference() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

function useWindowPointer() {
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, isActive: false });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
      pointerRef.current.isActive = true;
    };

    const resetPointer = () => {
      pointerRef.current.x = 0;
      pointerRef.current.y = 0;
      pointerRef.current.isActive = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", resetPointer);
    window.addEventListener("blur", resetPointer);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", resetPointer);
      window.removeEventListener("blur", resetPointer);
    };
  }, []);

  return pointerRef;
}

export default function ThreeBackground() {
  const reducedMotion = useReducedMotionPreference();
  const pointerRef = useWindowPointer();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-55">
      <Canvas
        dpr={[1, 1.35]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 4], fov: 58, near: 0.1, far: 20 }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color("#000000"), 0)}
      >
        {/* Keep object count intentionally low for consistent FPS on low-end GPUs. */}
        <group position={[0, 0, -1]}>
          <ParticleLayer
            count={94}
            radius={2.7}
            color="#67e8f9"
            size={0.085}
            speed={reducedMotion ? 0 : 0.035}
            opacity={0.5}
            interactionRadius={1.65}
            interactionStrength={0.28}
            pointerRef={pointerRef}
            interactive={!reducedMotion}
          />
          <ParticleLayer
            count={42}
            radius={1.8}
            color="#dbeafe"
            size={0.12}
            speed={reducedMotion ? 0 : -0.03}
            opacity={0.33}
            interactionRadius={1.2}
            interactionStrength={0.2}
            pointerRef={pointerRef}
            interactive={!reducedMotion}
          />
        </group>
      </Canvas>
    </div>
  );
}
