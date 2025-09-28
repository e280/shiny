
import {ssg, html} from "@e280/scute"

const title = "shiny"
const description = "✨ web ui components"
const domain = "shiny.e280.org"
const favicon = "/assets/favicon.png"

export default ssg.page(import.meta.url, async orb => ({
	title,
	js: "demo/demo.bundle.min.js",
	css: "demo/demo.css",
	favicon,
	dark: true,
	socialCard: {
		themeColor: "#d068ff",
		title,
		description,
		siteName: "@e280/shiny",
		image: "https://" + domain + favicon,
	},

	body: html`
		<h1>
			<strong>✨shiny✨</strong>
			<small>v${orb.packageVersion()}</small>
		</h1>

		<section>
			<p>web ui components</p>
			<p><a href="https://github.com/e280/shiny#readme">readme</a></p>
		</section>

		<shiny-demo></shiny-demo>
	`,
}))

