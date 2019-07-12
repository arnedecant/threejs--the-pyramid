'use strict'

export default class Pyramid {

    constructor(size = 7) {

        // set properties

        this.materials = {
            sandstone: new THREE.MeshPhongMaterial({ color: 0xffffaa })
        }
        this.mesh = new THREE.Object3D()
        this.mesh.name = this.type = 'pyramid'
        this.meshes = []

        this.size = size

        // init

        this.init()

    }

    init() {

        let geometry = new THREE.ConeBufferGeometry(this.size, this.size, 4)
        let mesh = new THREE.Mesh(geometry, this.materials.sandstone)

        mesh.position.set(-2, 2, 2)
        mesh.rotateX(Math.PI * 0.52)
        mesh.rotateY(Math.PI * 0.4)

        this.mesh = mesh

    }

    render() {

        

    }

}
