import { Link } from "react-router-dom";

import './NotesCard.css';


const LikesCommentCard = ({ like }) => {

  return (
    <div>
    <div className="post-card-box-content-container">
      <Link to={`/users/${like.id}`}>
        <div className="post-card-content-user-icon">
          {like.profileImageUrl || "🤔"}
        </div>
      </Link>
      <div className="post-like-content-box">
        <Link to={`/users/${like.id}`}>
          <div>{like.username}</div>
        </Link>
          <div className="post-like-user-follow">{like.following} </div>
      </div>
    </div>
    <span> ... </span>
    </div>
  )
}

export default LikesCommentCard;
