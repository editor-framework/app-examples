let React     = require('react')
let Component = React.Component

class NumInputPreview extends Component {

  render() {
    return (
      <div>
        <div class="section">
          <h3>Standard</h3>
          <div class="group g-01">
            <ui-num-input></ui-num-input>
            <span class="text"></span>
          </div>

          <div class="group g-02">
            <ui-num-input value="123.45"></ui-num-input>
            <span class="text"></span>
          </div>

          <div class="group g-03">
            <ui-num-input value="123.45" disabled></ui-num-input>
            <span class="text"></span>
            <ui-button id="focus" class="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div class="section">
          <h3>State</h3>
          <div style="position: relative;">
            <div class="group">
              <ui-num-input style="width: 200px;"></ui-num-input>
              <ui-num-input style="width: 200px;" value="100.0"></ui-num-input>
            </div>
            <div class="group">
              <ui-num-input style="width: 200px;" focused></ui-num-input>
              <ui-num-input style="width: 200px;" value="100.0" focused></ui-num-input>
            </div>
            <div class="group">
              <ui-num-input style="width: 200px;" disabled></ui-num-input>
              <ui-num-input style="width: 200px;" value="100.0" disabled></ui-num-input>
            </div>
            <div class="fit"></div>
          </div>
        </div>

        <div class="section">
          <h3>Size</h3>
          <div class="group">
            <span class="label" style="width: 50px;">Mini</span>
            <ui-num-input style="width: 120px;" class="mini"></ui-num-input>
            <ui-num-input style="width: 120px;" class="mini" value="-0.001"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Tiny</span>
            <ui-num-input style="width: 120px;" class="tiny"></ui-num-input>
            <ui-num-input style="width: 120px;" class="tiny" value="-0.01"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Small</span>
            <ui-num-input style="width: 120px;" class="small"></ui-num-input>
            <ui-num-input style="width: 120px;" class="small" value="-0.1"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Medium</span>
            <ui-num-input style="width: 120px;" class="medium"></ui-num-input>
            <ui-num-input style="width: 120px;" class="medium" value="1.0"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Large</span>
            <ui-num-input style="width: 120px;" class="large"></ui-num-input>
            <ui-num-input style="width: 120px;" class="large" value="10.0"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Big</span>
            <ui-num-input style="width: 120px;" class="big"></ui-num-input>
            <ui-num-input style="width: 120px;" class="big" value="100.0"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Huge</span>
            <ui-num-input style="width: 120px;" class="huge"></ui-num-input>
            <ui-num-input style="width: 120px;" class="huge" value="1000.0"></ui-num-input>
          </div>
          <div class="group">
            <span class="label" style="width: 50px;">Massive</span>
            <ui-num-input style="width: 120px;" class="massive"></ui-num-input>
            <ui-num-input style="width: 120px;" class="massive" value="10000.0"></ui-num-input>
          </div>
        </div>

        <div class="section">
          <h3>Readonly</h3>
          <div class="group">
            <ui-num-input readonly></ui-num-input>
            <ui-num-input value="123.45" readonly></ui-num-input>
          </div>
        </div>

        <div class="section">
          <h3>Unnavigable</h3>
          <div class="group">
            <ui-num-input unnavigable></ui-num-input>
            <ui-num-input value="123.45" unnavigable></ui-num-input>
          </div>
          <div class="group">
            <ui-num-input unnavigable disabled></ui-num-input>
            <ui-num-input value="123.45" unnavigable disabled></ui-num-input>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = NumInputPreview
