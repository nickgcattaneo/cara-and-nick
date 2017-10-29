import './Text.css'

class Text {
	constructor({ text }) {
		this.text = text
	}
	render() {
		return `
			<div class="text-container">${this.text}</div>
		`
	}
}

export default Text