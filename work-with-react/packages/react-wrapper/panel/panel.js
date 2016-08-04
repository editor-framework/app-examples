'use strict';

let React       = Editor.require('packages://react-wrapper/node_modules/react')
let render      = Editor.require('packages://react-wrapper/node_modules/react-dom').render

let MainPreview = Editor.require('packages://react-wrapper/panel/dist/bundle.js')


Editor.Panel.extend({
  template: `
    <div id="view" class="scroll"></div>
  `,

  $: {
    "view": "#view"
  },

  ready () {
    // Render the React component and inject it into the #view wrapper.
    render(
      React.createElement(MainPreview),
      this.$view
    )
  }
})
