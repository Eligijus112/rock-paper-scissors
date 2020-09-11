// Importing the react class for componnet building
import React from 'react';

// Defining the outcome class
class Outcome extends React.Component {

    getOutcome = () => {
        if (this.props.outcome === 0) {
            return <p> Draw! </p>
        }

        if (this.props.outcome === 1) {
            return <p> User wins! </p>
        }

        if (this.props.outcome === -1) {
            return <p> AI wins! </p>
        }
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {

        const outcome = this.getOutcome()

        return (
            <div>
                {this.props.signUser &&
                    <div>
                        <p>You have chosen: <span>{this.props.signUser}</span> </p>
                        <p>AI has chosen: <span>{this.Capitalize(this.props.signAI)}</span> </p>
                        <p>Result: <span>{outcome}</span> </p>
                    </div>
                }

                {this.props.totalMatches > 0 &&
                    <div className='scoreBoard'>
                        <h2> All matches statistics: </h2>

                        <p>
                            Total played:
                            <span>
                                {' '}
                                {this.props.totalMatches}
                            </span>
                        </p>

                        <p>
                            Total User Wins:
                            <span>
                                {' '}
                                {this.props.winsUser}
                                {' '}
                                ({(this.props.winsUser * 100 / this.props.totalMatches).toFixed(2)}% of total played)
                            </span>
                        </p>

                        <p>
                            Total AI Wins:
                            <span>
                                {' '}
                                {this.props.winsAI}
                                {' '}
                                ({(this.props.winsAI * 100 / this.props.totalMatches).toFixed(2)}% of total played)
                            </span>
                        </p>

                        <p>
                            Total draws:
                            <span>
                                {' '}
                                {this.props.draws}
                                {' '}
                                ({(this.props.draws * 100 / this.props.totalMatches).toFixed(2)}% of total played)
                            </span>
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default Outcome;