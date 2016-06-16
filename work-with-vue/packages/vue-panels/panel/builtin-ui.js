'use strict';

Editor.Panel.extend({
  style: `
    :host {
      margin: 10px;
    }

    p span {
      font-weight: bold;
      color: #09f;
    }
  `,

  template: `
    <h2>Work with builtin ui</h2>

    <ui-prop name="foo" type="string" :value="message" v-on:change="onChange"></ui-prop>
    <ui-prop name="bar" type="string" :value="message" readonly></ui-prop>
    <p>Input Value = <span>{{message}}</span></p>
  `,

  ready () {
    new window.Vue({
      el: this.shadowRoot,

      data: {
        message: 'Hello World',
      },

      methods: {
        onChange ( event ) {
          this.message = event.detail.value;
        }
      }
    });
  },
});
