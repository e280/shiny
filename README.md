
![](https://i.imgur.com/F1J78wH.png)

# ✨shiny✨
> *sly web ui library*

- ▶️ ***see all the components at https://shiny.e280.org/*** 👈
- 👷 built with [🦝sly](https://github.com/e280/sly) and [🔥lit](https://lit.dev/)
- 🎨 customizable via css vars and shadow parts
- 🧩 using [tabler icons](https://github.com/tabler/tabler-icons)
- 🧑‍💻 a project by https://e280.org/



<br/><br/>

## 🍭 shiny install and setup
- install shiny and friends into your project
    ```bash
    npm install @e280/shiny @e280/sly lit
    ```
- use some shiny views in your lit html
    ```js
    import {html} from "lit"
    import {dom} from "@e280/sly"
    import {ShinyButton, ShinyCopy} from "@e280/shiny"

    dom.render(dom(".demo"), html`
      <div>
        example text
        ${ShinyButton("e280")}
        ${ShinyCopy("hello world")}
      </div>
    `)
    ```
- go shopping for more views at https://shiny.e280.org/



<br/><br/>

## 💅 shiny css customization
- put this in your `<head>`
    ```html
    <style>
      html {
        --shiny-bg: #111;
        --shiny-alpha: #def;

        --shiny-rounded: 0.5em;
        --shiny-padding: 0.5em;

        --shiny-prime: #d068ff;
        --shiny-code: #3f1;
        --shiny-link: cyan;
        --shiny-selection: white;
        --shiny-selection-bg: #f70;

        --shiny-lame: #8888;
        --shiny-angry: #f50;
        --shiny-zesty: #cf0;
        --shiny-happy: #0fa;
        --shiny-calm: #0af;
        --shiny-sad: #74f;
        --shiny-quirky: #f49;

        --shiny-inactive-opacity: 0.5;
        --shiny-anim-duration: 150ms;
      }
    </style>
    ```



<br/><br/>

## 🧑‍💻 by e280
reward us with github stars  
build with us at https://e280.org/ if you're good at dev  

