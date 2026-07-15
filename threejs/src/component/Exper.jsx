import { OrbitControls } from '@react-three/drei'
import React from 'react'

const Exper = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls/>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export default Exper
