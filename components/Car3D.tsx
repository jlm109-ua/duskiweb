"use client";

import { useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function Model({ scale, position, model }: { scale: number[], position: number[], model: string }) {
    const { scene } = useGLTF(model);

    return <primitive object={scene} scale={scale} position={position} />;
}

function FitCameraToModel({ adjustPosition, model }: { adjustPosition: boolean, model: string }) {
    const { camera, gl: { domElement } } = useThree();
    const { scene } = useGLTF(model);

    useEffect(() => {
        const box = new THREE.Box3().setFromObject(scene);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());

        camera.near = size / 100;
        camera.far = size * 100;
        camera.updateProjectionMatrix();

        camera.position.copy(center);
        camera.position.x += size / 3;
        camera.position.y += size / 50;
        camera.position.z += size / 40;
        camera.lookAt(center);

        if (adjustPosition) {
            camera.position.y += 0.5;
        }

        return () => {
            scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    mesh.geometry.dispose();
                    if (mesh.material instanceof THREE.Material) {
                        mesh.material.dispose();
                    } else if (Array.isArray(mesh.material)) {
                        mesh.material.forEach((material) => material.dispose());
                    }
                }
            });
        };
    }, [scene, camera, domElement, adjustPosition]);

    return null;
}

export default function Car3D({ scale = [5, 5, 5], position = [0, -0.5, 0], adjustPosition = true, model = '' }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Canvas style={{ background: 'none', width: '1200', height: '70vh' }}>
            <Suspense fallback={null}>
                <ambientLight intensity={1.5} />
                <pointLight position={[20, 20, 20]} />
                <Model scale={scale} position={position} model={model} />
                <FitCameraToModel adjustPosition={adjustPosition} model={model} />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}