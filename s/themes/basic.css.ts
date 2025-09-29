
import {css} from "lit"
export const basic = css`@layer overlay {

:host {
	display: block;

	--bg: var(--shiny-bg, #111);
	--alpha: var(--shiny-alpha, #afa);
	--good: var(--shiny-good, #0f4);
	--bad: var(--shiny-bad, #f40);
	--invalid: var(--shiny-invalid, #8888);

	--inactive-opacity: var(--shiny-inactive-opacity, 0.5);
}

}`

