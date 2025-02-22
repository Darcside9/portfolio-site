'use client'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Mesh } from 'three'

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4)
      meshRef.current.rotation.y = Math.sin(time / 2)
    }
  })

  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#530EBB"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.2}
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
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
