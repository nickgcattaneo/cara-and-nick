import './Registry.css'
import Article from './Article'
import Section from './Section'

class Registry {
	render() {
		return `
			${new Section({
				heading: 'Registry Information'
			}).render(`
				${new Article().render(`
					<p>You can find all of our registry information <a href="TODO">here</a>.</p>
				`)}
			`)}
		`
	}
}

export default Registry