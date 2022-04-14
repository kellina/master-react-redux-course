// Import the React and ReactDOM libraries
import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";
//Create react components  -> Function or Class that produces HTML to show the user, using JSX
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00 PM"
          content="Nice blog post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 9:25 AM"
          content="Useful post!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 2:00 PM"
          content="Amazing write-up!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
