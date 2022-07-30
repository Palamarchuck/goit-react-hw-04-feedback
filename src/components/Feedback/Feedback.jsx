// import PropTypes from 'prop-types';
import styles from './Feedback.css'
import React, {Component} from "react";
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers';

class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onIncreaseGood = () => {
        this.setState((prevState) => {
            console.log({ prevState });
            return {
                good: prevState.good + 1,
            }
        })
    }
    onIncreaseNeutral = () => {
        this.setState((prevState) => {
            console.log({ prevState });
            return { neutral: prevState.neutral + 1}
        })
    }
    onIncreaseBad = () => {
        this.setState((prevState) => {
            console.log({ prevState });
            return { bad: prevState.bad + 1,}
        })
    }
    
    countTotalFeedback = () => {
        this.setState((prevState) => {
            console.log({ prevState });
            return { total: 10}
        })
    }
    
    render() {
        
        return <div>
            <h2>Please leave feedback</h2>
            <ul>
                <li>
                    <button onClick={this.onIncreaseGood} >Good</button>
                </li>
                <li>
                    <button onClick={this.onIncreaseNeutral}>Neutral</button>
                </li>
                <li>
                    <button onClick={this.onIncreaseBad}>Bad</button>
                </li>
            </ul>
            <p>Statistics</p>
            <ul>
                <li>Good: {this.state.good}</li>
                <li>Neutral: {this.state.neutral}</li>
                <li>Bad: {this.state.bad}</li>
                <li>Total: {this.props.total}</li>
                <li>positive feedback: {}</li>
            </ul>
        </div>
    }
}

export default Feedback