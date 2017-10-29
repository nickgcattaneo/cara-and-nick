import './Root.css'
import Layout from './Layout'

class Root {
	constructor() {
		const rootEl = document.getElementById('root')
		if (!rootEl) {
			this.el = document.createElement('div')
			this.el.setAttribute('id', 'root')
			this.el.setAttribute('class', 'root')
			document.body.appendChild(this.el)
		} else this.el = rootEl
		this.render = this.render.bind(this)
	}

	render(initialRender) {
		const { el } = this
		el.setAttribute('class', 'root')
		el.style.opacity = 0
		setTimeout(() => {
			el.setAttribute('class', 'root root-animate')
			el.innerHTML = new Layout().render()
			el.style.opacity = 1
		}, initialRender ? 10 : 1000)
	}
}

export default Root