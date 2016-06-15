'use strict';

Editor.Panel.extend({
  style: `
    :host {
      margin: 10px;
    }

    input {
      outline: none;
      background: #333;
      border: 1px solid #555;
      color: #f90;
      padding: 5px;
    }

    input:focus {
      border: 1px solid #f90;
    }

    p span {
      font-weight: bold;
      color: #09f;
    }
  `,

  template: `
    <h2>A Simple Vue Panel</h2>

    <input v-model="message">
    <p>Input Value = <span>{{message}}</span></p>
  `,

  ready () {
    new window.Vue({
      el: this.shadowRoot,
      data: {
        message: 'Hello World'
      },
    });
  },
});
