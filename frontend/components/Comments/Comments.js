import React from 'react';
import Comment from './Comment';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments)

  return (
    <div className='comments-wrapper'>
      {
        comments.map(comment => (
           <Comment comment={comment} key={comment.id} />
        )
      )}
      {/* map through the comments prop and render a Comment for every piece of data */}
    </div>
  );
};

export default Comments;
