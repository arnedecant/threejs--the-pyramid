// -------------------------------------------------------------------
// :: App
// -------------------------------------------------------------------

import Globe from './models/globe.js'
import Engine from './Engine.js';
// import * as data from '../assets/data.json'

class App {

	constructor() {

		window.COLORS = {
			white: 0xffffff,
			beige: 0xf6d7b0,
			cyan: 0x248079,
			brown: 0xA98F78,
			brownDark: 0x9A6169,
			green: 0x65BB61,
			greenLight: 0xABD66A,
			blue: 0x6BC6FF,
			yellow: 0xfedd52
		}

		window.ENGINE = new Engine({debug: true})

		// init

		this.init()

	}

	init() {

		// add objects

		this.createGlobe()

		// render

		this.render()

	}

	createGlobe() {

		// create new object

		this.globe = new Globe()

		// add the globe to the scene

		ENGINE.scene.add(this.globe.mesh)
		ENGINE.scene.updateMatrixWorld(true)

	}

	render() {

        // render ENGINE

        ENGINE.render()

		// render

		this.globe.render()

		// add self to the requestAnimationFrame

		window.requestAnimationFrame(this.render.bind(this))

	}

}

export default new App()
