import React from "react";
import Comment from "./Comment";


const comments = [
  {
    name: '이인제',
    comment: '제가 만든 첫 컴포넌트 입니다.'
  },
  {
    name: '바밤바',
    comment: '강의가 유익해요'
  },
  {
    name: '비비빅',
    comment: '훌륭한 강의에요'
  }
]

function CommentList(props){
  return(
    <div>
      {comments.map((comment) => {
        return(
          <Comment name={comment.name} comment={comment.comment} />
        )
      })}
    </div>
  )
}

export default CommentList;
