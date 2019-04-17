import React, { Component } from 'react';
import './App.css';
import Title from '../src/components/title'
import Subtitle from '../src/components/subtitle'
import ButtonContainer from '../src/components/buttonContainer'
import LinksFooter from '../src/components/linksFooterContainer'
import TermsConditionsContainer from '../src/components/termsConditionsContainer'
import EachTerm from '../src/components/eachTerm'
import ImagePostedBy from '../src/components/imagePostedBy'
import PostedByContainer from '../src/components/postedByContainer'

class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <header className="App-header">
          <Title>tumblr</Title>
          <Subtitle />
          <ButtonContainer>
            <button type="button" class="btn btn-primary">Start</button>
            <button type="button" class="btn btn-light">Login</button>
          </ButtonContainer>
        </header>

        <LinksFooter>
          <TermsConditionsContainer>
            <EachTerm>Conditions</EachTerm>
            <EachTerm>Privacy</EachTerm>
            <EachTerm>Jobs</EachTerm>
            <EachTerm>Help</EachTerm>
          </TermsConditionsContainer>
          <PostedByContainer>
            <EachTerm>Posted by <a className="name-posted-by" href="/">Vladimir Putin</a></EachTerm>
            <ImagePostedBy />
          </PostedByContainer>
        </LinksFooter>
      </div>
    );
  }
}

export default App;
