'use strict';

Editor.Panel.extend({
  style: `
    h1 {
      color: #09f;
    }
  `,

  template: `
    <h1>This is a simple panel</h1>
  `,

  listeners: {
  },

  close () {
    let res = this.confirmClose();
    switch ( res ) {
    // confirm quit
    case 0: return true;

    // cancel quit
    case 1: return false;
    }
  },

  confirmClose () {
    return Editor.Dialog.messageBox({
      type: 'warning',
      buttons: ['ok', 'cancel'],
      title: 'Confirm Close',
      message: `Do you want to close panel ${this.getAttribute('id')}`,
      detail: `Do you want to close panel ${this.getAttribute('id')}`,
      defaultId: 0,
      cancelId: 1,
      noLink: true,
    });
  },
});
