
import {css} from "lit"
import {cssReset} from "@e280/sly"
export const basic = css`

${cssReset}

:host {
	display: block;
	--bg: var(--shiny-bg, #111);

	--alpha: var(--shiny-alpha, #afa);
	--good: var(--shiny-good, #0f4);
	--bad: var(--shiny-bad, #f40);
	--invalid: var(--shiny-invalid, #8888);

	--inactive-opacity: 0.5;
}

`

