
import {Content} from "@e280/sly"
import {CSSResult} from "lit"

export type Exhibit = {
	name: string
	explain: Content
	render: () => Content
	js: string
	css?: CSSResult
	styleboxCss: CSSResult
}

export const exhibit = (e: Exhibit) => e

