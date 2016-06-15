'use strict';

Editor.Panel.extend({
  style: `
    :host {
      margin: 10px;
    }

    .grid {
      margin: 5px;
      border: 1px solid #888;
      flex: none;
      width: 100px;
      height: 100px;

      text-align: center;
    }
  `,

  template: `
    <h2>Work with bultin style</h2>

    <ui-select value="vertical" v-on:confirm="onSelect">
      <option value="vertical">Vertical</option>
      <option value="horizontal">Horizontal</option>
    </ui-select>

    <div class="layout {{ layoutClass }}">
      <div class="grid" v-for="n in 10">{{ n }}</div>
    </div>
  `,

  ready () {
    new window.Vue({
      el: this.shadowRoot,
      data: {
        layoutClass: 'vertical'
      },

      methods: {
        onSelect ( event ) {
          this.layoutClass = event.detail.value;
        }
      }
    });
  },
});
