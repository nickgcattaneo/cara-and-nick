import './ImageSlider.css'

let index = 0

class ImageSlider {
	constructor({ imgPaths }) {
		this.imgPaths = imgPaths
		this.id = index
		this.$index = 0
		index++
	}

	init() {
		const { id } = this
		setTimeout(() => {
			const imgs = document.querySelectorAll(`#img-slider-${id} [class^="img-slider-img"]`)
			Array.prototype.forEach.call(document.querySelectorAll('[class^="img-slider-controller"'), node => {
				node.addEventListener('click', () => {
					if (node.getAttribute('class').includes('left')) this.$index--
					else this.$index++
					if (this.$index < 0) this.$index = imgs.length - 1
					else if (this.$index > imgs.length - 1) this.$index = 0
					Array.prototype.forEach.call(imgs, (img, _index) => {
						img.setAttribute('class', `img-slider-img${_index === this.$index ? ' img-slider-img-active' : ''}`)
					})
				})
			})
		}, 1000)
	}

	render() {
		const { id, imgPaths } = this
		return `
			<div id="img-slider-${id}" class="img-slider-container">
				<div class="img-slider-controller-left fa fa-arrow-circle-left fa-2x"></div>
				${imgPaths.reduce((html, path, _index) => {
					return html + `<img class="img-slider-img${_index === 0 ? ' img-slider-img-active' : ''}" src="${path}"/>`
				}, '')}
				<div class="img-slider-controller-right fa fa-arrow-circle-right fa-2x"></div>
			</div>
		`
	}
}

export default ImageSlider