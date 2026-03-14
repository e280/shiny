
import {css} from "lit"
import {cssReset} from "@e280/sly"
export const foundationCss = css`

@layer reset, underlay, view, overlay;

${cssReset}

@layer overlay {
	[hidden] { display: none !important; }
}

`

