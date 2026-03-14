
import {html} from "lit"
import {shadow, useCss, useName, useOnce} from "@e280/sly"

import {Exhibit} from "./exhibit.js"
import showcaseCss from "./showcase.css.js"
import {ShinyTabs} from "../../views/tabs/view.js"
import {themeCss} from "../../theme/theme.css.js"
import {TabControl} from "../../views/tabs/control.js"

export const Showcase = shadow((title: string, exhibits: Exhibit[]) => {
	useName("showcase")
	useCss(themeCss, showcaseCss)

	const control = useOnce(() => new TabControl())
	const exhibit = exhibits.at(control.index)

	return html`
		<section class=showcase>
			<header>
				<h2>✨${title}✨</h2>
				<nav>
					${ShinyTabs.with({
						props: [control],
						children: exhibits.map(exhibit => html`
							<button>${exhibit.name}</button>
						`),
					})}
				</nav>
			</header>

			${exhibit && html`
				<p class=explain>${exhibit.explain}</p>

				<div class=sides>
					<div class=codebox>
						<code>${exhibit.js}</code>
					</div>

					<div class=stage>
						${exhibit.render()}
					</div>
				</div>
			`}
		</section>
	`
})

