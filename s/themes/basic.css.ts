
import {css} from "lit"
import {cssReset} from "@e280/sly"
export const basic = css`

${cssReset}

:host {
	--bg: var(--shiny-bg, #111);
	--fg: var(--shiny-fg, #afa);
}

`

