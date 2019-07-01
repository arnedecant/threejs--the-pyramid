'use strict'

export default class Sandplain {

    constructor(radius, segments = 64) {

        // set properties

        this.radius = radius
        this.segments = segments

        this.materials = {
            sand: new THREE.MeshPhongMaterial({ color: COLORS.beige })
        }
        this.mesh = new THREE.Object3D()
        this.mesh.name = this.type = 'sandplain'
        this.meshes = []

        // init

        this.init()

    }

    init() {

        let hemisphereGeometry = new THREE.SphereBufferGeometry(this.radius, this.segments, Math.round(this.segments / 4), 0, Math.PI * 2, 0, Math.PI * 0.5)
        let hemisphere = new THREE.Mesh(hemisphereGeometry, this.materials.sand)

        let capGeometry = new THREE.CircleBufferGeometry(this.radius, this.segments)
        let cap = new THREE.Mesh(capGeometry, this.materials.sand)

        cap.rotateX(Math.PI * 0.5)
        hemisphere.add(cap)

        hemisphere.rotateX(Math.PI * -0.5)

        this.mesh.add(hemisphere)

    }

    render() {



    }

}
