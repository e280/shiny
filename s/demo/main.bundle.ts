
import {html} from "lit"
import {dom} from "@e280/sly"
import {ShinyCopy} from "../views/copy/view.js"

dom.render(dom(".demo"), html`
	hello
	${ShinyCopy("hello")}
`)

console.log("✨shiny✨")

