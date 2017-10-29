import './Section.css'

import Heading from './Heading'

class Section {
	constructor({ heading }) {
		this.heading = heading
	}
	
	render(children) {
		const { heading } = this
		return `
			<section class="section-container" id="${heading.toLowerCase().replace(/( |\/)/g, '-')}">
				${heading ? (`
					${new Heading({ heading }).render()}
				`): ''}
				${children}
			</section>
		`
	}
}

export default Section