
![](https://i.imgur.com/F1J78wH.png)

# ✨shiny
> *web ui components*

- 💁 ***see all the components at https://shiny.e280.org/*** 👈
- 👷 built with [🦝sly](https://github.com/e280/sly) and [🔥lit](https://lit.dev/)
- 🍋 all components are available as ***web components*** or ***sly views***
- 🧑‍💻 a project by https://e280.org/



<br/><br/>

## ✨ instant html installation
- put this in your html `<head>`
    ```html
    <script async src="https://shiny.e280.org/install/basic.bundle.min.js"></script>
    ```
- you're ready to put shiny components in your html `<body>`
    ```html
    <shiny-copy text="hello world"></shiny-copy>
    ```
- go pick your favorites at https://shiny.e280.org/



<br/><br/>

## ✨ web app installation
- install shiny and friends
    ```sh
    npm install @e280/shiny @e280/sly lit
    ```
- import stuff
    ```ts
    import {dom} from "@e280/sly"
    import {shiny, themes} from "@e280/shiny"
    ```
- prepare the components/views and choose a theme
    ```ts
    const {components, views} = shiny({theme: themes.basic})
    ```
- (optional) register the components
    ```ts
    dom.register(components)
    ```



<br/><br/>

## ✨ views are for the cool kids
- hey, remember those `views` you got from the install snippet?
    ```ts
    const {components, views} = shiny({theme: themes.basic})
    ```
- well you can yoink out a view you wanna use
    ```ts
    const {ShinyCopy} = views
    ```
- then you can render it directly in your lit templates
    ```ts
    import {html} from "lit"
    import {dom, view} from "@e280/sly"

    dom.register({
      MyComponent: view.component(use => html`
        <div>
          ${ShinyCopy("hello world")}
        </div>
      `)
    })
    ```
    - you get nice typescript typings
    - no juggling annoying web component dom registrations
    - you're just using the shiny views directly
    - learn more about [🦝sly](https://github.com/e280/sly) and [🔥lit](https://lit.dev/)



<br/><br/>

## ✨ page-wide css customization
- put this in your `<head>` and you can customize colors and stuff
    ```html
    <style>
      :root {
	      --shiny-bg: #111;
	      --shiny-alpha: #afa;
	      --shiny-good: #0f4;
	      --shiny-bad: #f40;
	      --shiny-invalid: #8888;
	      --shiny-inactive-opacity: 0.5;
      }
    </style>
    ```



<br/><br/>

## ✨shiny is by e280
reward us with github stars  
build with us at https://e280.org/ if you're good at dev  



<br/><br/>

