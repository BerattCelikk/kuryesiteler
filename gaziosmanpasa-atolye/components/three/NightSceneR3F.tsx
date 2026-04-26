"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function GridFloor() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.04;
  });
  return (
    <group ref={ref}>
      <gridHelper args={[40, 40, "#22D3EE", "#1A2235"]} position={[0, -1.5, 0]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.55, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshBasicMaterial color="#080B12" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors, count } = useMemo(() => {
    const count = 220;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const coral = new THREE.Color("#E8435A");
    const cyan = new THREE.Color("#22D3EE");
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 12;
      const a = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      positions[i * 3 + 2] = Math.sin(a) * r;
      const c = Math.random() > 0.55 ? coral : cyan;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors, count };
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] = Math.sin(t * 0.7 + i * 0.3) * 0.35;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.85} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Beacon() {
  const ringRefs = [useRef<THREE.Mesh>(null), useRef<THREE.Mesh>(null), useRef<THREE.Mesh>(null)];
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ringRefs.forEach((r, i) => {
      if (!r.current) return;
      const phase = (t + i * 0.7) % 2;
      const s = 0.3 + phase * 1.5;
      r.current.scale.setScalar(s);
      const mat = r.current.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0, 1 - phase / 2) * 0.7;
    });
  });
  return (
    <group position={[0, -1.45, 0]}>
      <mesh>
        <coneGeometry args={[0.35, 1.0, 12]} />
        <meshStandardMaterial color="#E8435A" emissive="#E8435A" emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
      {ringRefs.map((r, i) => (
        <mesh key={i} ref={r} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
          <ringGeometry args={[0.5, 0.55, 64]} />
          <meshBasicMaterial color="#E8435A" transparent opacity={0.7} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function CameraParallax() {
  const { camera } = useThree();
  useFrame(({ mouse }) => {
    camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.04;
    camera.position.y += (8 + mouse.y * 0.8 - camera.position.y) * 0.04;
    camera.lookAt(0, -1, 0);
  });
  return null;
}

export default function NightSceneR3F() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 8, 12], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#080B12", 8, 32]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 5, 0]} color="#E8435A" intensity={2} distance={20} />
      <Suspense fallback={null}>
        <GridFloor />
        <Particles />
        <Beacon />
        <CameraParallax />
        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
