'use strict';

Editor.Panel.extend({
  style: `
    .buttons {
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  `,

  template: `
    <ui-prop name="Name" type="string"></ui-prop>
    <ui-prop name="ID" type="number" input-type="int"></ui-prop>

    <div class="buttons">
      <ui-button class="green">OK</ui-button>
      <ui-button class="red">Cancel</ui-button>
    </div>
  `,

  listeners: {
  },
});
