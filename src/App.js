import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {

    const loading = false;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <FeedbackProvider>
            <Router>
                <Header />  
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackList/>
                                <AboutIconLink/>
                            </>
                        } />
                            
                        <Route path='/About' element={<AboutPage/>}/>
                        <Route path='/Post/*' element={<Post/>}/>
                        <Route path='/404' element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App