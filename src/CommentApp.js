import React, {Component,PropTypes} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// import PropTypes from './prop-types';

class CommentApp extends Component{
	static childContextTypes = {
		themeColor:PropTypes.string
	}
	constructor(){
		super();
		this.state={
			comments:[],
			themeColor:'red'
		}
	}
	getChildContext(){
		return { themeColor:this.state.themeColor }
	}
	handleSubmitComment(comment){
		if(!comment) return;
		if(!comment.username) return alert("请输入用户名!");
		if(!comment.content) return alert('请输入评论内容！');
		this.state.comments.push(comment);
		this.setState({
			comments:this.state.comments
		})
	}
	render(){
		return(
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments}/>
			</div>
			)
	}
}

export default CommentApp;