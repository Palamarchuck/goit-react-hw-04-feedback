import React, { Component } from "react";
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onFeedbackHandle = (key) => {
        this.setState(prevState => {
            return {

                [key]: prevState[key] + 1
            }
        })
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, item) => total + item, 0)}
    

    
    countPositiveFeedbackPercentage = () => {
        
        return Math.round (this.state.good / this.countTotalFeedback() * 100)
    }


    render() {
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onFeedbackHandle}/>
                </Section>
                
                <Section title="Statistics">
                    {total === 0 ? (<Notification message={"There is no feedback"} />) : (
                        <Statistics
                            good={this.state.good }
                            neutral={this.state.neutral }
                            bad={this.state.bad  }
                            total={ total}
                            positivePercentage={percentage } />
                    )}
                    </Section>          
                
            
            </div>
        );
        }
}

export default Feedback