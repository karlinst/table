import React from 'react'
import css from './Cube.module.scss'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Main from '../Main/Main'

function Cube() {
  return (
    <div className={css.wrapper}>
      <Canvas camera={{fov:10 , position: [5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[4,3,2]}/>
        <Main/>
      </Canvas>
    </div>
  )
}

export default Cube