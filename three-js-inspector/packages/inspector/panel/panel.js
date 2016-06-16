'use strict';

//
Editor.Panel.extend({
  dependencies: [
  ],

  style: `
    :host {
      display: flex;
      flex-direction: column;
      margin: 5px;
      margin-right: 0px;
      overflow-y: scroll;
    }

    :host::-webkit-scrollbar-track {
      border: 5px solid transparent;
      background: none !important;
      background-clip: content-box;
    }
  `,

  // template: `
  //   <h2>Procedural</h2>
  //   <div id="procedural"></div>

  //   <h2>Predefine</h2>
  //   <div id="predefine">
  //     <ui-prop name="Name" type="string" value="Foobar"></ui-prop>
  //     <ui-prop name="Content" type="string" value="Hello\nWorld" multiline></ui-prop>
  //     <ui-prop name="ID" type="number" value="2000"></ui-prop>
  //     <ui-prop name="Enable" type="boolean" value="true"></ui-prop>
  //     <ui-prop name="Info" type="object" value='{"foo": "foo", "bar": "bar", "foobar": 20}'></ui-prop>
  //     <ui-prop name="Color" type="color" value="#09f"></ui-prop>
  //   </div>
  // `,

  template: `
    <div id="view" class="flex-1">
    </div>
  `,

  $: {
    view: '#view',
    procedural: '#procedural',
    predefin: '#predefin',
  },

  ready () {
    // this.inspect([
    //   { name: 'name', type: 'string', value: 'Foobar' },
    //   { name: 'content', type: 'string', value: 'Hello\nWorld', attrs: { multiline: true } },
    //   { name: 'id', type: 'number', value: 2000 },
    //   { name: 'enable', type: 'boolean', value: true },
    //   { name: 'info', type: 'object', value: [
    //     { name: 'foo', type: 'string', value: 'foo' },
    //     { name: 'bar', type: 'string', value: 'bar' },
    //     { name: 'foobar', type: 'number', value: 20 },
    //   ]},
    //   { name: 'color', type: 'color', value: '#09f' },
    // ]);

    Editor.Ipc.sendToPanel('scene', 'scene:query-dump', (err, data) => {
      if ( !err ) {
        this.inspect(data);
      }
    });
  },

  // ipc
  messages: {
    'inspector:inspect' ( event, data ) {
      this.inspect(data);
    },
  },

  inspect ( data ) {
    Editor.UI.clear(this.$view);
    this.evaluate( this.$view, 0, null, data );
  },

  evaluate ( parent, indent, path, data ) {
    data.forEach(p => {
      let el;
      let displayName = Editor.UI.toHumanText(p.name);

      if ( p.type === 'object' ) {
        el = new Editor.UI.Prop(
          displayName, null, p.type, p.attrs, indent
        );

        if ( path ) {
          el._path = `${path}.${p.name}`;
        } else {
          el._path = p.name;
        }

        parent.appendChild(el);
        this.evaluate( el._childWrapper, indent + 1, p.name, p.value );
      } else if ( p.type === 'enum' ) {
        el = new Editor.UI.Prop(
          displayName, p.value, p.type, p.attrs, indent
        );

        if ( path ) {
          el._path = `${path}.${p.name}`;
        } else {
          el._path = p.name;
        }

        p.options.forEach(opt => {
          el.addItem( opt.value, opt.name );
        });
        el.$input.value = p.value;

        parent.appendChild(el);
      } else {
        el = new Editor.UI.Prop(
          displayName, p.value, p.type, p.attrs, indent
        );

        if ( path ) {
          el._path = `${path}.${p.name}`;
        } else {
          el._path = p.name;
        }

        parent.appendChild(el);
      }

      el.addEventListener('confirm', () => {
        Editor.Ipc.sendToPanel('scene', 'scene:confirm', event.detail );
      });

      el.addEventListener('change', () => {
        Editor.Ipc.sendToPanel('scene', 'scene:change', event.detail );
      });

      el.addEventListener('cancel', () => {
        Editor.Ipc.sendToPanel('scene', 'scene:cancel', event.detail );
      });
    });
  },
});
