
import {dom} from "@e280/sly"
import {shiny} from "../shiny.js"
import {aura} from "../themes/aura.css.js"

dom.register(
	shiny({theme: aura}).components
)

