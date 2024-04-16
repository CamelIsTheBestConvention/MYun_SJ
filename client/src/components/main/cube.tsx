import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import "../../style/main/main.scss"

const Cube = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    // 씬, 카메라, 렌더러 생성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
    }

    // 큐브 생성
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // cube.position.set(2, 5, -5)

    camera.position.z = 5;

    // 애니메이션 루프
    const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트 언마운트 시 렌더러와 HTML 요소 제거
    return () => {
        if(mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
    };
}, []);

return <div ref={mountRef} className='cube-container'></div>;
};

export default Cube;
