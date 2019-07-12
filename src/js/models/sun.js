'use strict'

export default class Sun {

    constructor() {

        // set properties

        this.materials = {
            sun: new THREE.MeshStandardMaterial({ color: COLORS.yellow })
        }

        this.mesh = new THREE.Object3D()
        this.mesh.name = 'sun'
        this.meshes = []

        this.radius = 2
        this.segments = 64

        // init

        this.init()

    }

    init() {

        this.createSphere()

        this.meshes.forEach((obj) => {

            obj.mesh.castShadow = true
            obj.mesh.receiveShadow = true

            this.mesh.add(obj.mesh)

        })

    }

    createSphere() {

        let geometry = new THREE.SphereBufferGeometry(this.radius, this.segments, this.segments)
        let mesh = new THREE.Mesh(geometry, this.materials.sun)

        mesh.position.set(5, 4, 10)
        mesh.name = 'sun--sphere'

        this.meshes.push({ type: 'sphere', mesh: mesh })

    }

    render() {



    }

}
