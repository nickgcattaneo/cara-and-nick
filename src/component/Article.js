import './Article.css'

class Article {
	render(children) {
		return `
			<article class="article-container">
				${children}
			</article>
		`
	}
}

export default Article