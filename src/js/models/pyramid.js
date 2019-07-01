'use strict'

export default class Pyramid {

    constructor(radius, tilesize) {

        // set properties

        this.materials = {
            sandstone: new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true })
        }
        this.mesh = new THREE.Object3D()
        this.mesh.name = this.type = 'pyramid'
        this.meshes = []

        this.radius = radius
        this.tilesize = tilesize

        // init

        this.init()

    }

    init() {

        // TODO: fix this... 

        // let geometry = new THREE.CylinderGeometry(this.radius, this.tilesize * 3, this.tilesize * 3, 4)
        // this.mesh = new THREE.Mesh(geometry, this.materials.sandstone)

        // let geometry = new THREE.ConeBufferGeometry(5, 20, 32)
        // let material = new THREE.MeshBasicMaterial({ color: 0xffff00 })
        // this.mesh = new THREE.Mesh(geometry, material)
        // this.mesh.position.set(0.5, 0.1, 0)

    }

    render() {

        

    }

}
