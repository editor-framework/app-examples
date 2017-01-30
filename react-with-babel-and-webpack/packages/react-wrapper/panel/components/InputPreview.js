let React     = require('react')
let Component = React.Component

class InputPreview extends Component {

  render() {
    return (
      <div>
        <div class="section">
          <h3>Standard</h3>
          <div class="group g-01">
            <ui-input placeholder="Search..."></ui-input>
            <span class="text"></span>
          </div>

          <div class="group g-02">
            <ui-input value="Hello World" placeholder="Search..."></ui-input>
            <span class="text"></span>
          </div>

          <div class="group g-03">
            <ui-input value="Disabled" placeholder="Search..." disabled></ui-input>
            <span class="text"></span>
            <ui-button id="focus" class="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div class="section">
          <h3>State</h3>
          <div style="position: relative;">
            <div class="group">
              <ui-input style="width: 200px;" placeholder="Normal..."></ui-input>
              <ui-input style="width: 200px;" value="Normal"></ui-input>
            </div>
            <div class="group">
              <ui-input style="width: 200px;" placeholder="Focused..." focused></ui-input>
              <ui-input style="width: 200px;" value="Focused" focused></ui-input>
            </div>
            <div class="group">
              <ui-input style="width: 200px;" placeholder="Disabled..." disabled></ui-input>
              <ui-input style="width: 200px;" value="Disabled" disabled></ui-input>
            </div>
            <div class="fit"></div>
          </div>
        </div>

        <div class="section">
          <h3>Size</h3>
          <div class="group">
            <ui-input style="width: 200px;" class="mini" placeholder="Mini..."></ui-input>
            <ui-input style="width: 200px;" class="mini" value="Mini"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="tiny" placeholder="Tiny..."></ui-input>
            <ui-input style="width: 200px;" class="tiny" value="Tiny"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="small" placeholder="Small..."></ui-input>
            <ui-input style="width: 200px;" class="small" value="Small"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="medium" placeholder="Medium..."></ui-input>
            <ui-input style="width: 200px;" class="medium" value="Medium"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="large" placeholder="Large..."></ui-input>
            <ui-input style="width: 200px;" class="large" value="Large"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="big" placeholder="Big..."></ui-input>
            <ui-input style="width: 200px;" class="big" value="Big"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="huge" placeholder="Huge..."></ui-input>
            <ui-input style="width: 200px;" class="huge" value="Huge"></ui-input>
          </div>
          <div class="group">
            <ui-input style="width: 200px;" class="massive" placeholder="Massive..."></ui-input>
            <ui-input style="width: 200px;" class="massive" value="Massive"></ui-input>
          </div>
        </div>

        <div class="section">
          <h3>Readonly</h3>
          <div class="group">
            <ui-input placeholder="Search..." readonly></ui-input>
            <ui-input placeholder="Search..." value="Hello World" readonly></ui-input>
          </div>
        </div>

        <div class="section">
          <h3>Unnavigable</h3>
          <div class="group">
            <ui-input placeholder="Search..." unnavigable></ui-input>
            <ui-input placeholder="Search..." value="Hello World" unnavigable></ui-input>
          </div>
          <div class="group">
            <ui-input placeholder="Search..." unnavigable disabled></ui-input>
            <ui-input placeholder="Search..." value="Hello World" unnavigable disabled></ui-input>
          </div>
        </div>

      </div>

    )
  }
}

module.exports = InputPreview
