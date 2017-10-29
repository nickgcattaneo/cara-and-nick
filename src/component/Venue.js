import './Venue.css'
import Article from './Article'
import Section from './Section'

class Venue {
	render() {
		return `
			${new Section({
				heading: 'Wedding Weekend'
			}).render(`
				${new Article().render(`
					<p>TODO</p>
				`)}
			`)}
		`
	}
}

export default Venue