
import {css, html} from "lit"
import {shadow, useCss, useName, useOnce} from "@e280/sly"

import showcaseCss from "./style.css.js"
import {Codebox} from "../codebox/view.js"
import {Stylebox} from "../stylebox/view.js"
import {Exhibit} from "../../parts/exhibit.js"
import {themeCss} from "../../../theme/theme.css.js"
import {ShinyTabs} from "../../../views/tabs/view.js"
import {ShinyButton} from "../../../views/button/view.js"
import {TabsControl} from "../../../views/tabs/control.js"

export const Showcase = shadow((title: string, exhibits: Exhibit[]) => {
	useName("showcase")
	useCss(themeCss, showcaseCss)

	const control = useOnce(() => new TabsControl())
	const exhibit = exhibits.at(control.index)

	return html`
		<section class=showcase>
			<header>
				<h2>✨${title}✨</h2>
				<nav>
					${ShinyTabs.with({
						props: [{control, snug: true}],
						children: exhibits.map(exhibit => ShinyButton(exhibit.name)),
					})}
				</nav>
			</header>

			${exhibit && html`
				<div class=explain>${exhibit.explain}</div>

				<div class=sides>
					<div class=codezone>
						${Codebox("lit-html", "js", exhibit.js)}
						${exhibit.css && Codebox("css", "css", exhibit.css.toString())}
					</div>

					<div class=stage>
						${Stylebox(exhibit.styleboxCss, exhibit.css ?? css``, exhibit.render())}
					</div>
				</div>
			`}
		</section>
	`
})

