import './Heading.css'

class Heading {
	constructor({ heading }) {
		this.heading = heading
	}

	render() {
		return `
			<div class="heading-container">
				<div class="heading-line heading-line-left"></div>
				<h2 class="heading-text">${this.heading}</h1>
				<div class="heading-line heading-line-right"></div>
			</div>
		`
	}
}

export default Heading