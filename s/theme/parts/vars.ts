
import {templateString as css} from "@e280/stz"
export const varsString = css`

@layer vars {
	:is(:root, :host) {
		${renderVars({
			"bg": "#111",
			"alpha": "#def",

			"prime": "#d068ff",
			"code": "#3f1",
			"link": "cyan",
			"selection": "white",
			"selection-bg": "#f70",

			"lame": "#8888",
			"angry": "#f50",
			"zesty": "#cf0",
			"happy": "#0fa",
			"calm": "#0af",
			"sad": "#74f",
			"quirky": "#f49",

			"inactive-opacity": "0.5",
			"anim-duration": "300ms",
		})}
	}
}

`

function renderVar([name, value]: [string, string]) {
	return `--${name}: var(--shiny-${name}, ${value});`
}

function renderVars(varsObject: Record<string, string>) {
	return Object.entries(varsObject).map(renderVar).join("\n")
}

