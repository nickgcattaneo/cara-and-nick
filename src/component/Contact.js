import './Contact.css'
import Article from './Article'
import Section from './Section'

class Contact {
	render() {
		return `
			${new Section({
				heading: 'Contact'
			}).render(`
				${new Article().render(`
					<p>Need to get a hold of us for anything?</p>
					<p>You can email Nick directly @ <strong>nickgcattaneo@gmail.com</strong>.</p>
				`)}
			`)}
		`
	}
}

export default Contact