import React, {Component,PropTypes} from 'react';
// import PropTypes from './prop-types';

class Comment extends Component{
	static contextTypes = {
		themeColor:PropTypes.string
	}
	render(){
		return(
			<div className='comment'>
				<div className="comment-user">
					<span>{this.props.comment.username}</span>:
				</div>
				<p style={{ color: this.context.themeColor }}>{this.props.comment.content}</p>
			</div>
			)
	}
}

export default Comment;