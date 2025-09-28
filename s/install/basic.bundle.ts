
import {dom} from "@e280/sly"
import {shiny} from "../shiny.js"
import {basic} from "../themes/basic.css.js"

dom.register(
	shiny({theme: basic}).components
)

