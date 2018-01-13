import React, { Component } from 'react';
import marked from 'marked';
import styled, { css, injectGlobal } from 'react-emotion';

import state from './components/state.js';
import HtmlOutput from './components/HtmlOutput';
import MarkupInput from './components/MarkupInput';

injectGlobal`
  html, body {
    box-sizing: border-box;
    background: linear-gradient(to right, #da4453, #89216b);
    margin: 0px;
    padding: 10px;
    height: 100%;
  }
`
const Wrapper = styled('div')({
  display: 'grid',
  gridGap: '5px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  [`@media (max-width: 576px)`]: {
    gridTemplateColumns: '1fr',
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = state
  }

  markup = (e) => this.setState({code: e.target.value})

  render() {
    const markUp = marked(this.state.code);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <Wrapper>
          <MarkupInput code={this.state.code} markup={this.markup} />
          <HtmlOutput markUp={markUp} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
