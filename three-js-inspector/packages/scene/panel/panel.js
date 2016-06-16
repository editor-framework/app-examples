'use strict';

let THREE = window.THREE;

//
Editor.Panel.extend({
  style: `
    :host {
      margin: 5px;
    }
  `,

  template: `
    <div id="view" class="fit"></div>
  `,

  $: {
    view: '#view'
  },

  ready () {
    this._initRenderer();
    this._initScene();
    this._repaint();
  },

  listeners: {
    'panel-resize' () {
      if ( this._renderer ) {
        window.requestAnimationFrame(() => {
          let rect = this.$view.getBoundingClientRect();
          this._renderer.setSize( rect.width, rect.height );
          this._camera.aspect = rect.width / rect.height;
          this._repaint();
        });
      }
    }
  },

  messages: {
    'scene:confirm' (event, data) {
      this._setData( this._mesh, data.path, data.value );
      this._repaint();
    },

    'scene:change' (event, data) {
      this._setData( this._mesh, data.path, data.value );
      this._repaint();
    },

    'scene:cancel' (event, data) {
      this._setData( this._mesh, data.path, data.value );
      this._repaint();
    },

    'scene:query-dump' (event) {
      let data = this._dump(this._mesh);
      event.reply(null, data);
    },
  },

  _setProp ( obj, path, value ) {
    let comps = path.split('.');
    if ( comps.length === 1 ) {
      obj[path] = value;
    } else {
      let target = obj;
      for ( let i = 0; i < comps.length-1; ++i ) {
        target = target[comps[i]];
        if ( target === undefined ) {
          break;
        }
      }
      if ( target ) {
        target[comps[comps.length-1]] = value;
      }
    }
  },

  _getProp ( obj, path ) {
    let comps = path.split('.');
    if ( comps.length === 1 ) {
      return obj[path];
    } else {
      let target = obj;
      for ( let i = 0; i < comps.length; ++i ) {
        target = target[comps[i]];
        if ( target === undefined ) {
          return null;
        }
      }
      return target;
    }
  },

  _setData ( obj, path, value ) {
    let prop = this._getProp(obj,path);
    let propType = typeof prop;

    if ( propType === 'object' ) {
      if ( prop instanceof THREE.Vector3 ) {
        prop.set( value[0], value[1], value[2] );
      } else if ( prop instanceof THREE.Euler ) {
        prop.set( value[0], value[1], value[2], 'XYZ' );
      } else if ( prop instanceof THREE.Color ) {
        prop.setRGB(value[0]/255, value[1]/255, value[2]/255);
      }
    } else if (
      propType === 'number' ||
      propType === 'boolean' ||
      propType === 'string'
    ) {
      this._setProp(obj,path,value);
    }
  },

  _initRenderer () {
    let rect = this.$view.getBoundingClientRect();

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( rect.width, rect.height );
    this.$view.appendChild( renderer.domElement );

    this._renderer = renderer;
  },

  _initScene () {
    let scene = new THREE.Scene();

    let camera = new THREE.PerspectiveCamera( 75, 16/9, 1, 10000 );
    camera.position.z = 1000;

    let geometry = new THREE.BoxGeometry( 200, 200, 200 );
    let material = new THREE.MeshStandardMaterial( { emissive: 0xff0000, wireframe: true } );

    let mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    this._scene = scene;
    this._camera = camera;
    this._mesh = mesh;

    let data = this._dump(mesh);
    Editor.Ipc.sendToPanel('inspector', 'inspector:inspect', data );
  },

  _repaint () {
    // window.requestAnimationFrame( this._repaint.bind(this) );
    // this._mesh.rotation.x += 0.01;
    // this._mesh.rotation.y += 0.02;

    this._renderer.render( this._scene, this._camera );
  },

  _dump (obj) {
    return [
      { name: 'uuid', type: 'string', value: obj.uuid },
      { name: 'name', type: 'string', value: obj.name },
      { name: 'position', type: 'vec3', value: [obj.position.x, obj.position.y, obj.position.z] },
      { name: 'rotation', type: 'vec3', value: [obj.rotation.x, obj.rotation.y, obj.rotation.z] },
      { name: 'scale', type: 'vec3', value: [obj.scale.x, obj.scale.y, obj.scale.z] },
      { name: 'visible', type: 'boolean', value: obj.visible },
      { name: 'castShadow', type: 'boolean', value: obj.castShadow },
      { name: 'receiveShadow', type: 'boolean', value: obj.receiveShadow },
      { name: 'material', type: 'object', value: [
        { name: 'blending', type: 'enum', value: obj.material.blending, options: [
          { name: 'None', value: THREE.NoBlending },
          { name: 'Normal', value: THREE.NormalBlending },
          { name: 'Additive', value: THREE.AdditiveBlending },
          { name: 'Subtractive', value: THREE.SubtractiveBlending },
          { name: 'Multiply', value: THREE.MultiplyBlending },
          { name: 'Custom', value: THREE.CustomBlending },
        ]},
        { name: 'roughness', type: 'number', value: obj.material.roughness },
        { name: 'metalness', type: 'number', value: obj.material.metalness },
        { name: 'emissive', type: 'color', value: obj.material.emissive.getHexString() },
        { name: 'wireframe', type: 'boolean', value: obj.material.wireframe },
        { name: 'opacity', type: 'number', value: obj.material.opacity, attrs: {
          min: 0.0, max: 1.0
        }},
        { name: 'transparent', type: 'boolean', value: obj.material.transparent },
      ]},
    ];
  },
});

