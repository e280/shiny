
import {view} from "@e280/sly"
import {CSSResultGroup, html} from "lit"
import styleCss from "./style.css.js"
import {auraViews, viewsets} from "../../viewsets.js"
import {Exhibit, ExhibitParams} from "../exhibit/view.js"
import {TabControl} from "../../../components/tabs/control.js"
import {foundationCss} from "../../../components/foundation.css.js"

export const Showcase = view(use => (options: {
		name: string
		style: CSSResultGroup
		exhibits: ExhibitParams[]
	}) => {

	use.name(`showcase-${options.name}`)
	use.styles(foundationCss, styleCss)

	const exhibitTabControl = use.once(() => new TabControl())
	const themeTabControl = use.once(() => new TabControl())

	const exhibitViews = viewsets.at(themeTabControl.index)![1]
	const exhibit = options.exhibits.at(exhibitTabControl.index)!

	return html`
		<header>
			<h2>✨shiny-${options.name}✨</h2>
			<nav>
				${auraViews.ShinyTabs
					.props(exhibitTabControl)
					.children(options.exhibits.map(p =>
						auraViews.ShinyButton
							.props()
							.attr("sad", true)
							.children(p.label)
							.render()
					))
					.render()}
				${auraViews.ShinyTabs
					.props(themeTabControl)
					.children(viewsets.map(([theme]) =>
						auraViews.ShinyButton
							.props()
							.children(theme)
							.render()
					))
					.render()}
			</nav>
		</header>

		${Exhibit(exhibit, exhibitViews, options.style)}
	`
})

