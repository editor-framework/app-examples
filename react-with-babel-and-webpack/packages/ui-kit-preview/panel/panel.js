'use strict';

Editor.Panel.extend({
  style: `
    :host {
      display: flex;
      flex-direction: column;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .toolbar {
      display: flex;
      flex-direction: row;
      align-items: center;

      padding: 10px;
    }

    #view {
      flex: 1;

      padding: 10px;
      padding-top: 0px;

      overflow-y: auto;
      overflow-x: hidden;
    }

    div.section {
      border-bottom: 1px solid #666;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    div.section:last-child {
      border-bottom: 0px;
    }

    div.group {
      min-width: 420px;
      margin-bottom: 5px;

      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }

    span {
      margin-right: 0.25em;
    }

    .item {
      min-width: 100px;
      min-height: 100px;

      position: relative;

      margin-bottom: 10px;
      margin-right: 10px;
    }

    .placeholder {
      height: 20px;

      margin-bottom: 10px;
      margin-right: 10px;

      background-color: rgba( 0, 0, 0, 0.3 );
    }

    .placeholder.label {
      width: 100px;
    }

    .placeholder.line {
    }

    .placeholder.image {
      width: 100px;
      height: 100px;
    }
  `,

  template: `
    <div class="toolbar">
      <ui-select id="select">
        <option value="button">ui-button</option>
        <option value="checkbox">ui-checkbox</option>
        <option value="color">ui-color</option>
        <option value="color-picker">ui-color-picker</option>
        <option value="hint">ui-hint</option>
        <option value="icon">icons</option>
        <option value="input">ui-input</option>
        <option value="loader">ui-loader</option>
        <option value="markdown">ui-markdown</option>
        <option value="num-input">ui-num-input</option>
        <option value="prop">ui-prop</option>
        <option value="section">ui-section</option>
        <option value="select">ui-select</option>
        <option value="slider">ui-slider</option>
        <option value="text-area">ui-text-area</option>
      </ui-select>
      <span>Ctrl/Cmd + F: show current focus</span>
    </div>
    <div id="view" class="scroll"></div>
  `,

  listeners: {
  },

  ready () {
    this.$ = {
      select: this.shadowRoot.querySelector('#select'),
      view: this.shadowRoot.querySelector('#view'),
    };

    this.addEventListener('keydown', event => {
      if (event.metaKey || event.ctrlKey) {
        if (Editor.KeyCode(event.keyCode) === 'f') {
          if ( Editor.UI.focusedElement ) {
            console.log(Editor.UI.focusedElement._curFocus);
          } else {
            console.log(null);
          }
        }
      }
    });

    this.$.select.addEventListener('confirm', event => {
      let value = event.target.value;

      this.profiles.local.scrollTop = 0;
      this.profiles.local.select = value;
      this.profiles.local.save();

      this.showPreview(value);
    });

    this.$.select.value = this.profiles.local.select;
    this.showPreview(this.profiles.local.select);
  },

  close () {
    this.profiles.local.scrollTop = this.$.view.scrollTop;
    this.profiles.local.save();
  },

  showPreview (name) {
    Editor
      .import(`packages://ui-kit-preview/panel/${name}-preview.js`)
      .then(initFn => {
        initFn(this);
        setTimeout(() => {
          this.$.view.scrollTop = this.profiles.local.scrollTop;
        }, 10);
      });
  },

  _updateEventText (eventEL, name) {
    clearTimeout(this._timeoutID);

    if ( !this._events ) {
      this._events = [];
    }
    if ( this._events.length >= 5 ) {
      this._events.pop();
    }
    this._events.push(name);

    eventEL.innerHTML = `event: ${this._events.join(',')}`;

    this._timeoutID = setTimeout(() => {
      eventEL.innerHTML = 'event: ---';
      this._events = [];
    }, 200);
  },
});
