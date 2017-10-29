import './BackgroundImage.css'

class BackgroundImage {
	constructor({ path }) {
		this.path = path
	}

	render() {
		const { path } = this
		return `
			<div class="background-image-container">
				<img class="background-image-img" src="${path}" />
			</div>
		`
	}
}

export default BackgroundImage