import './Layout.css'

import Nav from './Nav'

import Contact from './Contact'
import Intro from './Intro'
import Registry from './Registry'
import Travel from './Travel'
import Venue from './Venue'

class Layout {
	render() {
		return `
			${new Nav().render()}
			<div class="layout-container">
				${new Intro().render()}
				${new Venue().render()}
				${new Travel().render()}
				${new Registry().render()}
				${new Contact().render()}
			</div>
		`
	}
}

export default Layout