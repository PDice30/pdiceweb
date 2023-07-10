import { useState } from "react";
const Posts = () => {
  const [clicks, setClicks] = useState(0);

  const handleButtonClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div>
      <h1>Posts!</h1>
      <button onClick={handleButtonClick}>Clicked {clicks} times!</button>
    </div>
  );
}

export default Posts;