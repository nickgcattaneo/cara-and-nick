import './css/global.css'

import LoadingBar from './component/LoadingBar'
import Root from './component/Root'

class App {
	constructor({ id }) {
		const el = document.createElement('div')
		el.setAttribute('id', id)
		document.body.appendChild(el)
		this.id = id
	}

	render() {
		const { id } = this
		new LoadingBar({
			callback: () => { new Root(id).render(true) },
			id
		}).render()
	}
}

const app = new App({ id: 'root' })

app.render()