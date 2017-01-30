let React     = require('react')
let Component = React.Component

class TextAreaPreview extends Component {

  render() {
    let btn_style   = { width: 200 }
    let small_style = { width: 100 }

    return (
      <div>

        <div className="section">
          <h3>Standard</h3>
          <div className="group g-01">
            <ui-text-area placeholder="Enter your text..."></ui-text-area>
            <span className="text"></span>
          </div>

          <div className="group g-02">
            <ui-text-area value="Hello World" placeholder="Search..."></ui-text-area>
            <span className="text"></span>
          </div>

          <div className="group g-03">
            <ui-text-area value="Disabled" placeholder="Search..." disabled></ui-text-area>
            <span className="text"></span>
            <ui-button id="focus" className="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div className="section">
          <h3>State</h3>
          <div style={{position: "relative"}}>
            <div className="group">
              <ui-text-area style={btn_style} placeholder="Normal..."></ui-text-area>
              <ui-text-area style={btn_style} value="Normal"></ui-text-area>
            </div>
            <div className="group">
              <ui-text-area style={btn_style} placeholder="Focused..." focused></ui-text-area>
              <ui-text-area style={btn_style} value="Focused" focused></ui-text-area>
            </div>
            <div className="group">
              <ui-text-area style={btn_style} placeholder="Disabled..." disabled></ui-text-area>
              <ui-text-area style={btn_style} value="Disabled" disabled></ui-text-area>
            </div>
            <div className="fit"></div>
          </div>
        </div>

        <div className="section">
          <h3>Size</h3>
          <div className="group">
            <ui-text-area style={btn_style} className="mini" placeholder="Mini..."></ui-text-area>
            <ui-text-area style={btn_style} className="mini" value="Mini"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="tiny" placeholder="Tiny..."></ui-text-area>
            <ui-text-area style={btn_style} className="tiny" value="Tiny"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="small" placeholder="Small..."></ui-text-area>
            <ui-text-area style={btn_style} className="small" value="Small"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="medium" placeholder="Medium..."></ui-text-area>
            <ui-text-area style={btn_style} className="medium" value="Medium"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="large" placeholder="Large..."></ui-text-area>
            <ui-text-area style={btn_style} className="large" value="Large"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="big" placeholder="Big..."></ui-text-area>
            <ui-text-area style={btn_style} className="big" value="Big"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="huge" placeholder="Huge..."></ui-text-area>
            <ui-text-area style={btn_style} className="huge" value="Huge"></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area style={btn_style} className="massive" placeholder="Massive..."></ui-text-area>
            <ui-text-area style={btn_style} className="massive" value="Massive"></ui-text-area>
          </div>
        </div>

        <div className="section">
          <h3>Readonly</h3>
          <div className="group">
            <ui-text-area placeholder="Readonly..." readonly></ui-text-area>
            <ui-text-area placeholder="Readonly..." value="Hello World" readonly></ui-text-area>
          </div>
        </div>

        <div className="section">
          <h3>Unnavigable</h3>
          <div className="group">
            <ui-text-area placeholder="Enter your text..." unnavigable></ui-text-area>
            <ui-text-area placeholder="Enter your text..." value="Hello World" unnavigable></ui-text-area>
          </div>
          <div className="group">
            <ui-text-area placeholder="Enter your text..." unnavigable disabled></ui-text-area>
            <ui-text-area placeholder="Enter your text..." value="Hello World" unnavigable disabled></ui-text-area>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = TextAreaPreview
