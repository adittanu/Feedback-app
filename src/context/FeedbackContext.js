import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => { 
    const [feedback, setFeedback] = useState(FeedbackData)

    // eslint-disable-next-line no-unused-vars
    const [feedbackEdit, setFeedbackEdit] = useState({
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

    // * Move Feedback to edit
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            isEdit : true
        })
    }

    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext