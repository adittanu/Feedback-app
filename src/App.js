import Header from './components/Header'
import FeedbackItems from './components/FeedbackItems';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const loading = false;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <>
            <Header />  
            <div className="container">
                <FeedbackItems feedback={feedback}/>
            </div>
        </>
    )
}

export default App