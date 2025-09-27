
import {ssg, html} from "@e280/scute"

const title = "shiny"
const description = "✨ ui web components"
const domain = "shiny.e280.org"
const favicon = "/assets/favicon.png"

export default ssg.page(import.meta.url, async orb => ({
	title,
	js: "demo/demo.bundle.min.js",
	css: "demo/demo.css",
	favicon,
	dark: true,
	socialCard: {
		themeColor: "#95ff7b",
		title,
		description,
		siteName: "@e280/shiny",
		image: "https://" + domain + favicon,
	},

	body: html`
		<img class=icon alt="" src="/assets/favicon.png"/>

		<h1>
			<strong>@e280/shiny</strong>
			<small>v${orb.packageVersion()}</small>
		</h1>

		<p><a href="https://github.com/e280/shiny">github.com/e280/shiny</a></p>

		<shiny-example></shiny-example>
		<shiny-copy text="hello world"></shiny-copy>
	`,
}))

