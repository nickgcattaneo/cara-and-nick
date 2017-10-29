import state from '../state'
import './Nav.css'

class Nav {
	init() {
		setTimeout(() => {
			const navHamburger = document.querySelector('.nav-hamburger')
			const navList = document.querySelector('.nav-list')
			const navContainer = document.querySelector('.nav-container')
			navHamburger.addEventListener('click', () => {
				const className = navList.getAttribute('class')
				if (className.includes('closed')) navList.setAttribute('class', 'nav-list')
				else navList.setAttribute('class', 'nav-list nav-list-closed')
			})
			// navContainer.addEventListener('mouseout', ({ target }) => {
			// 	navList.setAttribute('class', 'nav-list nav-list-closed')
			// })
			
			window.addEventListener('click', ({ target }) => {
				console.log(target, navHamburger)
				if (target !== navHamburger) navList.setAttribute('class', 'nav-list nav-list-closed')
			})
		}, 500)
	}

	render() {
		this.init()
		return `
			<div class="nav-container">
				<ul class="nav-list nav-list-closed">
					${state.nav.reduce((html, item) => {
						return html + `<li><a href="#${item.toLowerCase().replace(/( |\/)/g, '-')}">${item}</a></li>`
					}, '')}
				</ul>
				<div class="nav-hamburger fa fa-bars fa-lg"></div>
			</div>
		`
	}
}

export default Nav