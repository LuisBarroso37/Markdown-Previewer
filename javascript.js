// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
});
  
// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: placeholder
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        text: event.target.value
      });
    }
  
    render() {
      return (
        <div id="app" className="container-fluid">
          <Title />
          <Editor onChange={this.handleChange} text={this.state.text} />
          <Preview text1={this.state.text} />
        </div>
      );
    }
  }
  
  const Title = () => {
    return <h1 id="title">Markdown Previewer</h1>;
  };
  
  const Editor = props => {
    return (
      <div id="editor">
        <label id="editor-title" for="editor">Editor</label>
        <textarea
          id="editor-text"
          name="editor"
          onChange={props.onChange}
          value={props.text}
        />
      </div>
    );
  };
  
  const Preview = props => {
    return (
      <div id="preview">
        <p id="preview-title">Preview</p>
        <div id='preview-text' dangerouslySetInnerHTML={{__html: marked(props.text1, { renderer: renderer })}} />
      </div>
    );
  };
  
  const placeholder = `# This is a heading!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com).
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `;
  
ReactDOM.render(<App />, document.getElementById("root"));