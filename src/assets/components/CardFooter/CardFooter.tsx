import Upvote from "./Upvote";
import Downvote from "./Downvote";
import Comment from "./Comment";
import Bookmark from "./Bookmark";
import ShareLink from "./ShareLink";

type CardFooterProps = {
    upvotes: number;
    comments: number;
};


import { useState } from "react";

const CardFooter: React.FC<CardFooterProps> = ({ upvotes, comments }) => {
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [count, setCount] = useState(upvotes);

  const handleUpvote = () => {
    if (vote === "up") {
      setVote(null);
      setCount(count - 1);
    } else if (vote === "down") {
      setVote("up");
      setCount(count + 1);
    } else {
      setVote("up");
      setCount(count + 1);
    }
  };

  const handleDownvote = () => {
    if (vote === "down") {
      setVote(null);
    } else if (vote === "up") {
      setVote("down");
      setCount(count - 1);
    } else {
      setVote("down");
    }
  };

  return (
    <div className="card-footer">
      <Upvote count={count} isActive={vote === "up"} onClick={handleUpvote} />
      <Downvote isActive={vote === "down"} onClick={handleDownvote} />
      <Comment count={comments} />
      <Bookmark />
      <ShareLink />
    </div>
  );
};

export default CardFooter;