
import {html} from "lit"
import {dom} from "@e280/sly"
import {copyShowcase} from "../views/copy/showcase.js"

dom.render(dom(".gallery"), html`
	${copyShowcase()}
`)

console.log("✨shiny✨")

