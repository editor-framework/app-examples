let React     = require('react')
let Component = React.Component

class LoaderPreview extends Component {

  render() {
    return (
      <div>
        <div class="section">
          <h3>Standard</h3>
          <div class="item">
            <ui-loader>Loading</ui-loader>
          </div>

          <div class="item">
            <ui-loader color="rgba(128,0,0,0.3)">Color Mask</ui-loader>
          </div>

          <div class="item">
            <ui-loader indeterminate>Indeterminate</ui-loader>
          </div>

          <div class="item">
            <ui-loader class="transparent">Transparent</ui-loader>
          </div>
        </div>

        <div class="section">
          <h3>Size</h3>
          <div class="group">
            <div class="item">
              <ui-loader class="mini">Mini</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="tiny">Tiny</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="small">Small</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="medium">Medium</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="large">Large</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="big">Big</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="huge">Huge</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="massive">Massive</ui-loader>
            </div>
          </div>

          <div class="group">
            <div class="item">
              <ui-loader class="mini" inline>Mini</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="tiny" inline>Tiny</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="small" inline>Small</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="medium" inline>Medium</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="large" inline>Large</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="big" inline>Big</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="huge" inline>Huge</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="massive" inline>Massive</ui-loader>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Speed</h3>
          <div class="group">
            <div class="item">
              <ui-loader class="very-slow">Very Slow</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="slow">Slow</ui-loader>
            </div>

            <div class="item">
              <ui-loader>Normal</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="fast">Fast</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="very-fast">Very Fast</ui-loader>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Color</h3>
          <div class="group">
            <div class="item">
              <ui-loader class="red">Red</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="blue">Blue</ui-loader>
            </div>

            <div class="item">
              <ui-loader class="green">Green</ui-loader>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>Inline</h3>
          <div class="layout horizontal">
            <ui-input placeholder="Search"></ui-input>
            <ui-loader inline class="mini"></ui-loader>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = LoaderPreview
