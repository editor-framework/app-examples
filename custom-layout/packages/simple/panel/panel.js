'use strict';

Editor.Panel.extend({
  style: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #size {
      white-space: nowrap;
    }
  `,

  template: `
    <div id="size"></div>
  `,

  $: {
    size: '#size',
  },

  ready () {
    this._updateSize();
  },

  listeners: {
    'panel-resize' () {
      this._updateSize();
    }
  },

  _updateSize () {
    this.$size.innerText = `${this.offsetWidth} X ${this.offsetHeight}`;
  }
});
