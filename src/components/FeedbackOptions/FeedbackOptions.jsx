import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback, }) => {
    return (
    <ul className={styles.feedbackList}>
        {options.map(option => {
            return (
                    <li key={option} className={styles.feedbackListItem}>
                        <button className={styles.feedbackBtn}  onClick={(event) => onLeaveFeedback(event)} >{option}</button>
                    </li>
                )
            })
            }
    </ul>        
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions