import './Counter.css'
import moment from 'moment'

class Counter {
	init() {
		const time = moment('01/06/2018 16:00:00', 'DD-MM-YYYY HH:mm:ss').unix()
		setInterval(() => {
			const counter = document.querySelector('.counter-container')
			const now = moment().unix()
			const diffTime = time - now
			const duration = moment.duration(moment.duration(diffTime * 1000, 'milliseconds'))
			counter.innerHTML = `${duration.months()} month(s) - ${duration.days()} day(s) - ${duration.minutes()} minute(s) - ${duration.seconds()} second(s)`
		}, 0)
	}

	render() {
		this.init()
		return '<div class="counter-container"></div>'
	}
}

export default Counter