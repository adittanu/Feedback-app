import Header from './components/Header'
import FeedbackItems from './components/FeedbackItems';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure want to delete?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const loading = false;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <>
            <Header />  
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackItems feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App