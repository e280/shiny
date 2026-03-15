
import {Content} from "@e280/sly"
import {CSSResult} from "lit"

export type Exhibit = {
	name: string
	explain: string
	render: () => Content
	js: string
	css: CSSResult
}

export const exhibit = (e: Exhibit) => e

