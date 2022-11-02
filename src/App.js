import Header from './components/Header'
import FeedbackItems from './components/FeedbackItems';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => {
            return item.id !== id
        }))
    }

    const loading = false;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <>
            <Header />  
            <div className="container">
                <FeedbackItems feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App