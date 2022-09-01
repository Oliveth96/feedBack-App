import FeedBackItem from "./feedBackItem";
import PropTypes from 'prop-types';

function FeedBackList ({ feedback }){
    //An If statement to ensure we have feedback
    if (!feedback || feedback.length === 0){
        return (
            <p>No feedback yet!</p>
        )

    }
    /*console.log(feedback)*/
    return (
        //Loop through to create a list of our items.
        <div className="feedback-list">
            {feedback.map((item) =>(
                <FeedBackItem key={item.id} item={item}/>
            ))}
        </div>
    );
}

FeedBackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}

export default FeedBackList;