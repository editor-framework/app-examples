let React     = require('react')

let ButtonPreview      = require("./ButtonPreview")
let CheckboxPreview    = require("./CheckboxPreview")
let ColorPickerPreview = require("./ColorPickerPreview")
let HintPreview        = require("./HintPreview")
let MarkdownPreview    = require("./MarkdownPreview")
let NumInputPreview    = require("./NumInputPreview")
let PropPreview        = require("./PropPreview")
let SectionPreview     = require("./SectionPreview")
let SelectPreview      = require("./SelectPreview")
let SliderPreview      = require("./SliderPreview")
let TextAreaPreview    = require("./TextAreaPreview")

class MainPreview extends React.Component {

  render() {
    return (
      <div>
        <ButtonPreview />
        <TextAreaPreview />
      </div>
    )
  }
}

module.exports = MainPreview
