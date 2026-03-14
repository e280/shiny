
import {templateString as css} from "@e280/stz"
export const coreString = css`

@layer core {
	::selection {
		color: var(--selection);
		background-color: var(--selection-bg);
	}

	::-webkit-scrollbar { width: 8px; }
	::-webkit-scrollbar-track { background: transparent; }
	::-webkit-scrollbar-thumb { background: #444; border-radius: 1em; }
	::-webkit-scrollbar-thumb:hover { background: #666; }

	a {
		color: var(--link);
		text-decoration: none;

		&:visited {
			color: color-mix(in srgb, purple, var(--link) 70%);
		}

		&:hover {
			color: color-mix(in srgb, white, var(--link) 90%);
			text-decoration: underline;
		}

		&:active {
			color: color-mix(in srgb, white, var(--link) 50%);
		}
	}
}

`

