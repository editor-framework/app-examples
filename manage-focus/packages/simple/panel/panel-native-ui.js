'use strict';

Editor.Panel.extend({
  style: `
    .prop {
      margin: 5px;
    }

    span {
      width: 80px;
    }

    .buttons {
      position: absolute;
      right: 5px;
      bottom: 5px;
    }
  `,

  template: `
    <div class="prop layout horizontal center">
      <span>Name</span>
      <input class="flex-1"></input>
    </div>
    <div class="prop layout horizontal center">
      <span>ID</span>
      <input type="number" class="flex-1"></input>
    </div>

    <div class="buttons">
      <button>OK</button>
      <button>Cancel</button>
    </div>
  `,

  listeners: {
  },
});
