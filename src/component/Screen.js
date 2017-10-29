class Screen {
	constructor({ breakpoint, callback }) {
		this.breakpoint = breakpoint
		this.callback = callback
		this.handleMatchMediaQuery = this.handleMatchMediaQuery.bind(this)
		this.init()
	}

	init() {
		this.addMatchMediaListener()
		this.handleMatchMediaQuery(this.getMatchSmallMediaBreakpoint())
	}

	addMatchMediaListener() {
		this.getMatchSmallMediaBreakpoint().addListener(this.handleMatchMediaQuery)
	}

	getMatchSmallMediaBreakpoint() {
		return window.matchMedia(`(max-width: ${this.breakpoint}px)`)
	}

	handleMatchMediaQuery(mediaQuery) {
		this.callback(mediaQuery.matches ? 'small' : 'large')
		console.log(this.callback)
	}
}

export default Screen