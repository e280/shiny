
import {templateString as css} from "@e280/stz"
import {coreString} from "./parts/core.js"
import {varsString} from "./parts/vars.js"
import {resetString} from "./parts/reset.js"
export const themeString = css`

@layer vars, reset, core, underlay, view, overlay;

${varsString}
${resetString}
${coreString}

`

