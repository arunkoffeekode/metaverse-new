import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useLoader, } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import glgt from "../img/Couple_on_mountain.glb"
import Header from './Header/Header'
function Vr() {
    const gltf = useLoader(GLTFLoader, glgt)
    return (
        <div>
            <div className='mountain'>

                <Header className="he"></Header>


                <Canvas
                    camera={{ position: [-0.1, 2, 2] }} shadows
                // camera={{ position: [-0.15, 1, 3] }} shadows
                >

                    {/* <ambientLight intensity={1} /> */}
                    <ambientLight />

                    <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
                    <OrbitControls enableZoom={false} rotateSpeed={0.4} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate />

                    <primitive object={gltf.scene}
                        position={[0, -3, 0]}
                        children-0-castShadow
                    />

                </Canvas>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-7 col-sm-12'>
                            <div className="dt">
                                <div className='vr-details'>
                                    <div className='vr-details-box'>
                                        <h5 className='cursor-scale'>Now Get The<br />
                                            <span> Real Dating </span> Experience </h5>
                                        <p className='cursor-scale small'>a social network and virtual world where users can chat and play games with each other. Social-e is a dating feature, that allows users to express their interest in each other and users have organized virtual dating events and meetups.</p>
                                        <button type='button' className='vr-btn'>Explore</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-lg-7 col-md-5 col-sm-12'>
                            <div className="social-ft">
                                <ul>
                                    <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-facebook-square fb"></i></span></a></li>
                                    <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-linkedin fb"></i></span></a></li>
                                    <li><a target="_blank" href="#" className='btn--skew btn'><span><i class="fa fa-instagram fb"></i></span></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vr