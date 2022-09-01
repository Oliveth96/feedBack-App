import FeedBackItem from "./feedBackItem";

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

export default FeedBackList;