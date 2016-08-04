let React     = require('react')
let Component = React.Component

class SectionPreview extends Component {

  render() {
    return (
      <div>
        <div class="section">
          <h3>Standard</h3>
          <ui-section>
            <div class="header">Normal</div>
            <ui-prop name="Name" type="string" value="Foo"></ui-prop>
            <ui-prop name="ID" type="number" value="0"></ui-prop>
            <ui-prop name="Info" foldable>
              <div class="child">
                <ui-prop name="Foo" type="boolean"></ui-prop>
                <ui-prop name="Bar" type="boolean"></ui-prop>
              </div>
            </ui-prop>
          </ui-section>

          <ui-section disabled>
            <div class="header">Disabled</div>
            <ui-prop name="Name" type="string" value="Foo"></ui-prop>
            <ui-prop name="ID" type="number" value="0"></ui-prop>
          </ui-section>
        </div>
      </div>
    )
  }
}

module.exports = SectionPreview
