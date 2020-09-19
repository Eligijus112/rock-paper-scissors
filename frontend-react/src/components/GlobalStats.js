// Importing the react class for componnet building
import React from 'react';
import Button from 'react-bootstrap/Button';

// Refresh icon 
import refresh from '../refresh.svg'

// Visualizations
import {
    PieChart, Pie, Legend, Tooltip,
  } from 'recharts';

// API calls 
import axios from 'axios';

// Loading .env parameters
const host_site = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_BACKEND_PORT

// Defining the outcome class
class GlobalStats extends React.Component {

    state = {
        wasClicked: false,
        ai_wins: null,
        user_wins: null,
        draws: null
    }

    getStats = () => {
        axios.get('http://' + host_site + ':' + port + '/stats').then(

            res => this.setState({
                wasClicked: true,
                ai_wins: res.data.ai_wins,
                human_wins: res.data.human_wins,
                draws: res.data.draws,
                total_games: res.data.total_games
            })
        )
    }

    render() {

        const myData = [
            {
              name: 'Human Wins',
              value: this.state.human_wins,
              fill: '#908ce2',
            },
            {
              name: 'AI Wins',
              value: this.state.ai_wins,
              fill: '#2fe18a',
            },
            {
              name: 'Draws',
              value: this.state.draws,
              fill: '#ef8a88',
            },
          ];

        return (
            <div>

                <div className='Sign'>
                    <p> Refresh statistics </p>
                    <Button onClick={this.getStats}>
                        <img src={refresh} alt="Refresh statistics" />
                    </Button>
                </div>

                <div >

                    {this.state.wasClicked &&
                        <div>
                            <h2>Total games played: {this.state.total_games}</h2>
                            <div className="Stats">

                            <PieChart width={400} height={400}>
                                <Pie 
                                dataKey="value" 
                                data={myData} 
                                label/>
                                <Legend />
                            </PieChart>
                                
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default GlobalStats;