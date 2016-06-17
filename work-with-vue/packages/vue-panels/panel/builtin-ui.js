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

    <ui-prop name="foo 01" type="string" :value="message" v-on:change="onChange"></ui-prop>
    <ui-prop name="foo 02" type="string" :value="message" readonly></ui-prop>
    <ui-prop name="foo 03" type="string" v-model="message"></ui-prop>
    <p>Input Value = <span>{{message}}</span></p>
  `,

  ready () {
    window.Vue.directive('model', {
      twoWay: true,
      bind () {
        this.handler = event => {
          this.set(event.detail.value);
        };
        this.el.addEventListener('change', this.handler);
      },
      unbind () {
        this.el.removeEventListener('change', this.handler);
      },
      update (newValue) {
        this.el.value = newValue;
      },
    });

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
