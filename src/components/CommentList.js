import React,{ Component } from 'react';

import Comment from './Comment.js'

export default class CommentList extends Component{
  static defaultProps={
    comments:[]
  }
  render(){
    return (<div>
      { this.props.comments.map((comment,i)=>{
        return <Comment comment={comment} key={i} />
      })}
    </div>)
  }
}