import './LoadingBar.css'
import ProgressBar from 'progressbar.js'

class LoadingBar {
	constructor({ callback, id }) {
		this.callback = callback
		this.el = document.getElementById(id)
	}

	render() {
		const { callback, el } = this
		el.innerHTML = ''
		const loadingEl = document.createElement('div')
		loadingEl.setAttribute('id', 'loading')
		loadingEl.setAttribute('class', 'loading-el')
		el.appendChild(loadingEl)
		const progressBarEl = new ProgressBar.Line('#loading', {
			color: 'rgb(50, 50, 50)',
			duration: 1000,
			strokeWidth: .25,
			step: (state, circle) => {
				const value = Math.round(circle.value() * 100) + ' %'
				if (value === 0) circle.setText('')
				else circle.setText(value)
			}
		})
		progressBarEl.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'
		progressBarEl.text.style.fontWeight = 'bold'
		progressBarEl.animate(1.0)
		setTimeout(() => {
			loadingEl.setAttribute('class', 'loading-el loading-el-complete')
			setTimeout(callback, 1000)
		}, 1000)
	}
}

export default LoadingBar