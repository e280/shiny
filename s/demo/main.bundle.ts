
import {dom} from "@e280/sly"
import {copyShowcase} from "../views/copy/showcase.js"
import {tabsShowcase} from "../views/tabs/showcase.js"
import {buttonShowcase} from "../views/button/showcase.js"
import {drawerShowcase} from "../views/drawer/showcase.js"

dom.render(dom(".gallery"), [
	buttonShowcase(),
	copyShowcase(),
	tabsShowcase(),
	drawerShowcase(),
])

console.log("✨shiny✨")

