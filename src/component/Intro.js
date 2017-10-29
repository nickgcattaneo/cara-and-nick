import './Intro.css'

import Article from './Article'
import Counter from './Counter'
import ImageSlider from './ImageSlider'
import Section from './Section'
import Text from './Text'

class Intro {
	render() {
		const IntroSlider = new ImageSlider({
			id: "intro-slider",
			imgPaths: [
				'public/img/nick_cara_ski.JPG',
				'public/img/tree.png'
			]
		})
		
		IntroSlider.init()
		return `
			${new Section({
				heading: 'Nick & Cara'
			}).render(`
				${new Article().render(`
					${new Text({ text: 'June 1, 2018' }).render()}
					${new Counter().render()}
					${IntroSlider.render()}
					${new Text({ text: 'join us in celebration'}).render()}
				`)}
			`)}
		`
	}
}

export default Intro