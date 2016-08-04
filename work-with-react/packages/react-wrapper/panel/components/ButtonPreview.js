let React     = require('react')
let Component = React.Component

class ButtonPreview extends Component {

  render() {
    let style = {
      width: "100px"
    }
    
    return (
      <div>
        <div className="section">
          <h3>Standard</h3>
          <div className="group g-01">
            <ui-button>Click</ui-button>
          </div>

          <div className="group g-02">
            <ui-button disabled>Click</ui-button>
            <ui-button id="focus" className="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div className="section">
          <h3>State</h3>
          <div style={{position: "relative"}}>
            <div className="group">
              <ui-button style={style} pressed>Pressed</ui-button>
              <ui-button style={style} className="red" pressed>Pressed</ui-button>
              <ui-button style={style} className="green" pressed>Pressed</ui-button>
              <ui-button style={style} className="blue" pressed>Pressed</ui-button>
            </div>
            <div className="group">
              <ui-button style={style} focused>Focused</ui-button>
              <ui-button style={style} className="red" focused>Focused</ui-button>
              <ui-button style={style} className="green" focused>Focused</ui-button>
              <ui-button style={style} className="blue" focused>Focused</ui-button>
            </div>
            <div className="group">
              <ui-button style={style} disabled>Disabled</ui-button>
              <ui-button style={style} className="red" disabled>Disabled</ui-button>
              <ui-button style={style} className="green" disabled>Disabled</ui-button>
              <ui-button style={style} className="blue" disabled>Disabled</ui-button>
            </div>
            <div className="fit"></div>
          </div>
        </div>

        <div className="section">
          <h3>Unnavigable</h3>
          <div className="group">
            <ui-button unnavigable>OK</ui-button>
            <ui-button unnavigable>Cancel</ui-button>
          </div>
        </div>

        <div className="section" style={{display: "none"}}>
          <h3>Animated (TODO)</h3>
          <div className="group">
            <ui-button className="animated">
              <div className="visible">Build</div>
              <div className="hidden">Go</div>
            </ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Size</h3>
          <div className="group">
            <ui-button className="mini">Mini</ui-button>
            <ui-button className="tiny">Tiny</ui-button>
            <ui-button className="small">Small</ui-button>
            <ui-button className="medium">Medium</ui-button>
            <ui-button className="large">Large</ui-button>
            <ui-button className="big">Big</ui-button>
            <ui-button className="huge">Huge</ui-button>
            <ui-button className="massive">Massive</ui-button>
          </div>
          <div className="group">
            <ui-button className="mini"><i className="icon-ok"></i></ui-button>
            <ui-button className="tiny"><i className="icon-ok"></i></ui-button>
            <ui-button className="small"><i className="icon-ok"></i></ui-button>
            <ui-button className="medium"><i className="icon-ok"></i></ui-button>
            <ui-button className="large"><i className="icon-ok"></i></ui-button>
            <ui-button className="big"><i className="icon-ok"></i></ui-button>
            <ui-button className="huge"><i className="icon-ok"></i></ui-button>
            <ui-button className="massive"><i className="icon-ok"></i></ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Colored</h3>
          <div className="group">
            <ui-button style={style}>Default</ui-button>
            <ui-button style={style} className="red">Red</ui-button>
            <ui-button style={style} className="green">Green</ui-button>
            <ui-button style={style} className="blue">Blue</ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Transparent</h3>
          <div className="group">
            <ui-button className="transparent">Default</ui-button>
            <ui-button className="red transparent">Red</ui-button>
            <ui-button className="green transparent">Green</ui-button>
            <ui-button className="blue transparent">Blue</ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Transparent State</h3>
          <div style={{position: "relative"}}>
            <div className="group">
              <ui-button style={style} className="transparent" pressed>Pressed</ui-button>
              <ui-button style={style} className="transparent red" pressed>Pressed</ui-button>
              <ui-button style={style} className="transparent green" pressed>Pressed</ui-button>
              <ui-button style={style} className="transparent blue" pressed>Pressed</ui-button>
            </div>
            <div className="group">
              <ui-button style={style} className="transparent" focused>Focused</ui-button>
              <ui-button style={style} className="transparent red" focused>Focused</ui-button>
              <ui-button style={style} className="transparent green" focused>Focused</ui-button>
              <ui-button style={style} className="transparent blue" focused>Focused</ui-button>
            </div>
            <div className="group">
              <ui-button style={style} className="transparent" disabled>Disabled</ui-button>
              <ui-button style={style} className="transparent red" disabled>Disabled</ui-button>
              <ui-button style={style} className="transparent green" disabled>Disabled</ui-button>
              <ui-button style={style} className="transparent blue" disabled>Disabled</ui-button>
            </div>
            <div className="fit"></div>
          </div>
        </div>

        <div className="section">
          <h3>Transparent Icon</h3>
          <div className="group">
            <ui-button className="transparent"><i className="icon-eye"></i></ui-button>
            <ui-button className="red transparent"><i className="icon-cancel"></i></ui-button>
            <ui-button className="green transparent"><i className="icon-ok"></i></ui-button>
            <ui-button className="blue transparent"><i className="icon-cw"></i></ui-button>
          </div>
        </div>

        <div className="section">
          <h3>Transparent Size</h3>
          <div className="group">
            <ui-button className="transparent mini">Mini</ui-button>
            <ui-button className="transparent tiny">Tiny</ui-button>
            <ui-button className="transparent small">Small</ui-button>
            <ui-button className="transparent medium">Medium</ui-button>
            <ui-button className="transparent large">Large</ui-button>
            <ui-button className="transparent big">Big</ui-button>
            <ui-button className="transparent huge">Huge</ui-button>
            <ui-button className="transparent massive">Massive</ui-button>
          </div>
          <div className="group">
            <ui-button className="transparent mini"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent tiny"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent small"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent medium"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent large"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent big"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent huge"><i className="icon-ok"></i></ui-button>
            <ui-button className="transparent massive"><i className="icon-ok"></i></ui-button>
          </div>
        </div>

      </div>
    )
  }
}


module.exports = ButtonPreview
