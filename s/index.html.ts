
import {template, html, socialCard} from "@e280/scute"

const favicon = "/assets/favicon.png"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000;color:#aaa;}}</style>

			<title>shiny</title>
			<link rel="icon" href="${favicon}"/>
			<link rel="stylesheet" href="${orb.hashurl("demo/main.css")}"/>
			<script type="module" src="${orb.hashurl("demo/main.bundle.min.js")}"></script>

			${socialCard({
				themeColor: "#d068ff",
				siteName: "@e280/shiny",
				title: "✨shiny✨",
				description: "web ui library",
				image: "https://shiny.e280.org" + favicon,
			})}
		</head>
		<body>
			<h1>
				<strong>✨shiny✨</strong>
				<small>v${orb.packageVersion()}</small>
			</h1>

			<section>
				<p>e280's web ui library</p>
				<p><a href="https://github.com/e280/shiny#readme">readme for installation</a></p>
			</section>

			<shiny-demo></shiny-demo>
		</body>
	</html>
`)

