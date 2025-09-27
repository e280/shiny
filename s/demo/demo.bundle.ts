
import {dom} from "@e280/sly"
import {themes} from "../themes/index.js"
import {themeComponents} from "../ui/themers.js"

dom.register(themeComponents(themes.basic))

console.log("✨ shiny")

