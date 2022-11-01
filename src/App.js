import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem';

function App() {
    const loading = false;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    )
}

export default App