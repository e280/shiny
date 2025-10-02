
import {aura} from "../themes/aura.css.js"
import {plain} from "../themes/plain.css.js"
import {shiny, ShinyViews} from "../shiny.js"

export const auraViews = shiny({theme: aura}).views

export const viewsets: [label: string, ShinyViews][] = [
	["aura", auraViews],
	["plain", shiny({theme: plain}).views],
]

