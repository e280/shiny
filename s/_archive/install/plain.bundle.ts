
import {dom} from "@e280/sly"
import {shiny} from "../shiny.js"
import {plain} from "../themes/plain.css.js"

dom.register(
	shiny({theme: plain}).components
)

