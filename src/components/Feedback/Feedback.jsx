import { useState } from "react";
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";


const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    
    
    const onFeedbackHandleIncrement = event => {
        console.log(event.target);
        switch (event.current.target) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            
            default:
                return;
        }
    };

    
    const feedbackTypes = ['good', 'neutral', 'bad'];  
    const countTotalFeedback = () => good + neutral + bad;
    const total = countTotalFeedback();  
    const countPositiveFeedbackPercentage = () => {
        Math.round(good / countTotalFeedback() * 100)
    };

    
    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                options={feedbackTypes}
                onLeaveFeedback={onFeedbackHandleIncrement}/>
            </Section>
            
            <Section title="Statistics">
                {total === 0 ? (<Notification message={"There is no feedback"} />) : (
                    <Statistics
                        good={good }
                        neutral={neutral }
                        bad={bad  }
                        total={total}
                        positivePercentage={countPositiveFeedbackPercentage() } />
                )}
            </Section>          
                
              
        </div>
    )

}

export default Feedback;
