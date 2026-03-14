
import {Content} from "@e280/sly"

export type Exhibit = {
	name: string
	explain: string
	render: () => Content
	js: string
	css: string
}

export const exhibit = (e: Exhibit) => e

