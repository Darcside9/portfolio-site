'use client'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
// import { Mesh } from 'three'
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4)
      meshRef.current.rotation.y = Math.sin(time / 2)
    }
  })

  return (
    <Sphere args={[2, 100, 200]} scale={1}>
      <MeshDistortMaterial
        color="#530EBB"
        attach="material"
        distort={.7}
        speed={1}
        roughness={5}
        metalness={.5}
        bumpScale={20}
      />
    </Sphere>
  )
}

export default function ThreeScene() {
  useEffect(() => {
    const handleResize = () => {
      // Adjust canvas size on window resize
      const canvas = document.querySelector('canvas')
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Initial resize

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative left-0 w-full h-full">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 200, 50]} intensity={1.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
