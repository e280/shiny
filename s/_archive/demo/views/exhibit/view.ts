
import {untab} from "@e280/stz"
import {Content, view} from "@e280/sly"
import {CSSResultGroup, html} from "lit"

import styleCss from "./style.css.js"
import {auraViews} from "../../viewsets.js"
import {ShinyViews} from "../../../shiny.js"
import {TabControl} from "../../../components/tabs/control.js"
import {foundationCss} from "../../../components/foundation.css.js"

export type ExhibitParams = {
	label: string
	explain: Content
	snippets: {label: string, code: string}[]
	style: CSSResultGroup
	presentation: (views: ShinyViews) => Content
}

export const Exhibit = view(use => (
		exhibit: ExhibitParams,
		views: ShinyViews,
		showcaseStyle: CSSResultGroup,
	) => {

	use.name(`exhibit-${exhibit.label}`)
	use.styles(foundationCss, styleCss, showcaseStyle, exhibit.style)

	const snippetControl = use.once(() => new TabControl())
	const snippet = exhibit.snippets.at(snippetControl.index)
	const code = snippet ? untab(snippet.code).trim() : ""

	return html`
		<div class=meta>
			${exhibit.explain}

			<div class=snippet>
				<header>
					${auraViews.ShinyTabs
						.props(snippetControl)
						.attr("snug")
						.children(exhibit.snippets.map(s =>
							auraViews.ShinyButton
								.props()
								.attr("plain")
								.children(s.label)
								.render()
						))
						.render()}
					${auraViews.ShinyCopy(code)}
				</header>
				<code>${code}</code>
			</div>
		</div>

		<div class=box>
			${exhibit.presentation(views)}
		</div>
	`
})

