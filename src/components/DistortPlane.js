import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
import { MeshDistortMaterial, Sphere, GradientTexture, useCursor } from "@react-three/drei";
import { useRef, useState } from 'react'

function DistortPlane() {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
  })
  return (
    <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial ref={ref} speed={5}>
        <GradientTexture stops={[0]} colors={['#222222']} size={100} />
      </MeshDistortMaterial>
    </mesh>
  )
}





const Background3D = () => {
  return (
    <div id="about" style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'space-evenly' }}>
      <Canvas clasName="canvas">
        <Stars />
        {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/> */}

        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <DistortPlane />
        </Suspense>

      </Canvas>
      <div>
      </div>


    </div>
  )
}

export default Background3D;