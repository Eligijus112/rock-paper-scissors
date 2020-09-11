// Importing the components for the App
import React, { Component } from 'react';
import './App.css';
import Sign from './components/Sign';
import Outcome from './components/Outcome';

// Importing logos for signs 
import rock from './rock.svg'
import paper from './paper.svg'
import scissors from './scissors.svg'

// Global store tracking
import { connect } from 'react-redux';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the rock paper scissors game!
          </p>
        </header>

        <div className="subHeader">
          <p> Select a sign and go head to head against the AI! </p>
        </div>

        <div className="Signs">
          <div className="Sign">
            <Sign name='Rock' logo={rock} dispatch={this.props.dispatch} />
          </div>

          <div className="Sign">
            <Sign name='Paper' logo={paper} dispatch={this.props.dispatch} />
          </div>

          <div className="Sign">
            <Sign name='Scissors' logo={scissors} dispatch={this.props.dispatch} />
          </div>
        </div>

        <div className="Outcome">
          <Outcome
            signAI={this.props.signAI}
            signUser={this.props.signUser}
            outcome={this.props.outcome}
            winsUser={this.props.winsUser}
            winsAI={this.props.winsAI}
            draws={this.props.draws}
            totalMatches={this.props.totalMatches}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (
    state.changeSigns.signUser && 
    state.changeSigns.signAI && 
    state.changeScore.totalMatches) {
    return {
      signAI: state.changeSigns.signAI,
      signUser: state.changeSigns.signUser,
      outcome: state.changeSigns.outcome,
      winsAI: state.changeScore.winsAI,
      winsUser: state.changeScore.winsUser,
      draws: state.changeScore.draws,
      totalMatches: state.changeScore.totalMatches
    }
  }
};

export default connect(mapStateToProps)(App);
