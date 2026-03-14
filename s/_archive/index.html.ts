
import {ssg, html} from "@e280/scute"

const favicon = "/assets/favicon.png"

export default ssg.page(import.meta.url, async orb => ({
	title: "shiny",
	js: "demo/demo.bundle.min.js",
	css: "demo/demo.css",
	favicon,
	dark: true,
	socialCard: {
		themeColor: "#d068ff",
		siteName: "@e280/shiny",
		title: "✨shiny✨",
		description: "web ui components",
		image: "https://shiny.e280.org" + favicon,
	},

	body: html`
		<h1>
			<strong>✨shiny✨</strong>
			<small>v${orb.packageVersion()}</small>
		</h1>

		<section>
			<p>web ui components</p>
			<p><a href="https://github.com/e280/shiny#readme">readme for installation</a></p>
		</section>

		<shiny-demo></shiny-demo>
	`,
}))

