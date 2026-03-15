
import {dom} from "@e280/sly"
import {buttonShowcase} from "../views/button/showcase.js"
import {copyShowcase} from "../views/copy/showcase.js"
import {tabsShowcase} from "../views/tabs/showcase.js"

dom.render(dom(".gallery"), [
	buttonShowcase(),
	copyShowcase(),
	tabsShowcase(),
])

console.log("✨shiny✨")

