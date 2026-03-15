
import {dom} from "@e280/sly"
import {copyShowcase} from "../views/copy/showcase.js"
import {tabsShowcase} from "../views/tabs/showcase.js"

dom.render(dom(".gallery"), [
	copyShowcase(),
	tabsShowcase(),
])

console.log("✨shiny✨")

