// import "../style/main/main.scss"
// import * as THREE from "three";
// import React, { Component } from 'react';

// const Main = () => {
//     constructor() {
//         const divContainer = document.querySelector("#webgl-container");
//         this._divContainer = divContainer;

//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setPixelRatio(window.devicePixelRatio);
//         divContainer.appendChild(renderer.domElement);
//         this._renderer = renderer;

//         const scene = new THREE.Scene();
//         this._scene = scene;

//         this._setupCamera();
//         this._setuplight();
//         this._setupModel();

//         window.onresize = this.resize.bind(this);
//         this.resize();

//         requestAnimationFrame(this.render.bind(this));
//     }

//     _setupCamera() {
//         const width = this._divContainer.clientWidth;
//         const height = this._divContainer.clientHeight;
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             width / height,
//             0.1,
//             100
//         );
//         camera.position.z = 2;
//         this._camera = camera;
//     }

//     _setuplight() {
//         const color = 0xffffff;
//         const intensity = 1;
//         const light = new THREE.DirectionalLight(color, intensity);
//         light.position.set(-1, 2, 4);
//         this._scene.add(light);
//     }

//     // _setupModel() {
//     //     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     //     const material = new THREE.MeshPhongMaterial({color: 0x44a88});

//     //     const cube = new THREE.Mesh(geometry, material); 

//     //     this._scene.add(cube);
//     //     this._cube = cube;
//     // }

//     _setupModel() {
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     // 이미지 텍스처 로더 생성
//     const textureLoader = new THREE.TextureLoader();
//     // 이미지 텍스처 로드 (여기서는 'example.jpg'를 사용합니다. 실제 경로에 맞게 수정하세요.)
//     const texture = textureLoader.load('kim.png');
//     // 텍스처를 사용하는 재질 생성
//     const material = new THREE.MeshPhongMaterial({map: texture});

//     const cube = new THREE.Mesh(geometry, material); 

//     this._scene.add(cube);
//     this._cube = cube;
// }


//     resize() {
//         const width = this._divContainer.clientWidth;
//         const height = this._divContainer.clientHeight;

//         this._camera.aspect = width / height;
//         this._camera.updateProjectionMatrix();

//         this._renderer.setSize(width, height);
//     }

//     render(time) {
//         this._renderer.render(this._scene, this._camera);
//         this.update(time);
//         requestAnimationFrame(this.render.bind(this));
//     }

//     update(time) {
//         time *= 0.001;
//         this._cube.rotation.x = time;
//         this._cube.rotation.y = time;
//     }
// }

// window.onload = function() {
//     new App();
// }

//     return (
//         <>
//             <div id="webgl-container"></div>
//         </>
//     )
// }
// export default Main