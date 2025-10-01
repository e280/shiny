
import {unsafeCSS} from "lit"

export type CssVars = {
	"bg": string
	"alpha": string
	"lame": string
	"inactive-opacity": string

	// normative color vibes
	"angry": string // red
	"zesty": string // yellow
	"happy": string // green
	"calm": string // cyan
	"sad": string // blue
	"quirky": string // magenta
}

export function defaultCssVars(): CssVars {
	return {
		"bg": "#111",
		"alpha": "#def",
		"inactive-opacity": "0.5",
		"lame": "#8888",
		"angry": "#f50",
		"zesty": "#cf0",
		"happy": "#0fa",
		"calm": "#0af",
		"sad": "#74f",
		"quirky": "#f49",
	}
}

export function renderCssVars(vars: CssVars) {
	return unsafeCSS(
		Object.entries(vars)
			.map(([key, value]) => `--${key}: var(--shiny-${key}, ${value});`)
			.join("\n")
	)
}

