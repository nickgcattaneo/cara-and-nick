import './Link.css'

class Link {
	constructor({ href, text }) {
		this.href = href
		this.text = text
	}

	render() {
		const { href, text } = this
		return `
			<a class="link" href="${href}">${text}</a>
		`
	}
}

export default Link