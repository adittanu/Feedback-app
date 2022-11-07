import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure want to delete?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const handleAdd = (newFeedback) => { 
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const loading = false;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <Router>
            <Header />  
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={handleAdd}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        </>
                    } />
                        
                    <Route path='/About' element={<AboutPage/>}/>
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
    )
}

export default App