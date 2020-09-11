// Importing the react class for componnet building
import React from 'react';
import Button from 'react-bootstrap/Button';

// API calls 
import axios from 'axios';

// Global store
import { connect } from 'react-redux'

// Loading .env parameters
const host_site = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_BACKEND_PORT

// Defining the sign class
class Sign extends React.Component {

    state = {
        signName: this.props.name,
        logo: this.props.logo,
        dispatch: this.props.dispatch
    }

    playGame = () => {
        axios.get('http://' + host_site + ':' + port + '/game?outcome=' + this.state.signName).then(
            res => this.state.dispatch({
                type: "SET_SIGNS",
                signUser: this.state.signName,
                signAI: res.data.computer_sign,
                outcome: res.data.outcome
            })
        ).then(
            res => {
                if (res.outcome === 1) {
                    this.state.dispatch({
                        type: 'INCREMENT_USER_WINS'
                    })
                }

                if (res.outcome === 0) {
                    this.state.dispatch({
                        type: 'INCREMENT_DRAWS'
                    })
                }

                if (res.outcome === -1) {
                    this.state.dispatch({
                        type: 'INCREMENT_AI_WINS'
                    })
                }
            }
        )
    }

    render() {
        return (
            <div>
                <div className='signName'>
                    {this.state.signName}
                </div>
                <Button onClick={this.playGame}>
                    <img src={this.state.logo} alt={this.state.signName} />
                </Button>
            </div>
        )
    }
}

export default connect()(Sign);