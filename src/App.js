import Header from "./components/Header";
import FeedBackItem from "./components/feedBackItem";

function App() {
  const title = "My Blog Post";
  const body = "Welcome to my blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
    { id: 4, text: "Comment four" },
  ];

  const loading = false;
  //This is useful if you are fetching data from a backend
  const showComments = true;

  if (loading) return <h1>Loading ...</h1>;

  const commentBlock = (
    <div className="comments">
          <h3> Comments({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
  )
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
        
      {showComments && (//This is an if statement. Where True is yes, show comments, where false, do not show.
        commentBlock
      )}
    </div>
  );
}


export default App;
