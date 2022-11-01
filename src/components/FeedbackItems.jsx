import FeedbackItem from "./FeedbackItem"

function FeedbackItems({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <div> No List Available</div>
    }

    return <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
        ))}
    </div>    
}
export default FeedbackItems