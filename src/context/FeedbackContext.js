import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => { 
    const [feedback, setFeedback] = useState(FeedbackData)

    // eslint-disable-next-line no-unused-vars
    const [feedbackTemp, setFeedbackTemp] = useState({
        item : {},
        isEdit : false
    })

    // * Add Feedback
    const addFeedback = (newFeedback) => { 
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // * Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure want to delete?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    // * Update feedback
    const updateFeedback = (id, updFeedback) => {
        setFeedback(feedback.map((item) => (item.id) === id ? {...item, ...updFeedback} : item))
    }

    // * Move Feedback to edit
    const editFeedback = (item) => {
        setFeedbackTemp({
            item,
            isEdit : true
        })
    }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackTemp,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext