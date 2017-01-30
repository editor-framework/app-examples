let React     = require('react')
let Component = React.Component

class MarkdownPreview extends Component {

  render() {
    return (
      <div>
        <div class="section">
          <ui-markdown>
            ## Headers

            # H1
            ## H2
            ### H3
            #### H4
            ##### H5
            ###### H6

            Alternatively, for H1 and H2, an underline-ish style:

            Alt-H1
            ======

            Alt-H2
            ------
          </ui-markdown>

          <ui-markdown>
            ## Emphasis

            *This text will be italic*
            _This will also be italic_

            **This text will be bold**
            __This will also be bold__

            _You **can** combine them_

            ~~This text will be bold strikethrough~~
          </ui-markdown>

          <ui-markdown>
            ## Lists

            Unordered:

            * Item 1
            * Item 2
            * Item 2a
            * Item 2b

            Ordered:

            1. Item 1
            2. Item 2
            3. Item 3
            1. Item 3a
            1. Item 3b
          </ui-markdown>

          <ui-markdown>
            ## Links

            [I'm an inline-style link](https://www.google.com)

            [I'm an inline-style link with title](https://www.google.com "Google's Homepage")

            [I'm a reference-style link][Arbitrary case-insensitive reference text]

            [I'm a relative reference to a repository file](../blob/master/LICENSE)

            [You can use numbers for reference-style link definitions][1]

            Or leave it empty and use the [link text itself].

            URLs and URLs in angle brackets will automatically get turned into links.
            http://www.example.com.

          </ui-markdown>

          <ui-markdown>
            ## Images

            Inline-style:
            ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text
            1")

            Reference-style:
            ![alt text][logo]

            [logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
          </ui-markdown>

          <ui-markdown>
            ## Code and Syntax Highlighting

            Inline `code` has `back-ticks around` it.

            Blocks of code:

            ```javascript
            var s = "JavaScript syntax highlighting";
            alert(s);
            ```

            ```python
            s = "Python syntax highlighting"
            print s
            ```

            ```
            No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
            But let's throw in a <b>tag</b>.
            ```
          </ui-markdown>

          <ui-markdown>
            ## Tables

            Example:

            | Tables | Are | Cool |
            | ------------- |:-------------:| -----:|
            | col 3 is | right-aligned | $1600 |
            | col 2 is | centered | $12 |
            | zebra stripes | are neat | $1 |

            Another One:

            First Header | Second Header
            ------------ | -------------
            Content from cell 1 | Content from cell 2
            Content in the first column | Content in the second column
          </ui-markdown>

          <ui-markdown>
            ## Blockquotes

            As Kanye West said:

            > We're living the future so
            > the present is our past.

            Quote break:

            > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to
            make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a
            blockquote.
          </ui-markdown>

          <ui-markdown>
            ## Inline HTML

            You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

            <dl>
              <dt>Definition list</dt>
              <dd>Is something people use sometimes.</dd>

              <dt>Markdown in HTML</dt>
              <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>

              <dd><span style="color: #900">Foobar</span></dd>
            </dl>
          </ui-markdown>

          <ui-markdown>
            ## Horizontal Rule

            Three or more...

            ---

            Hyphens

            ***

            Asterisks

            ___

            Underscores
          </ui-markdown>
        </div>
      </div>
  )
  }
  }

  module.exports = MarkdownPreview
