'use strict'

export default class Celestial {

    constructor(state = 'sun') {

        // set properties

        this.state = state

        this.materials = {
            sun: new THREE.MeshPhongMaterial({ color: COLORS.yellow }),
            moon: new THREE.MeshPhongMaterial({ color: COLORS.white })
        }

        this.mesh = new THREE.Object3D()
        this.mesh.name = 'celestial'
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
        let mesh = new THREE.Mesh(geometry, this.materials[this.state])

        mesh.position.set(5, 4, 10)
        mesh.name = 'celestial--sphere'

        this.meshes.push({ type: 'sphere', mesh: mesh })

    }

    render() {



    }

}
