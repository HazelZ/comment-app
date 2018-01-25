import React,{ Component } from 'react';
import PropTypes from 'prop-types';


export default class CommentInput extends Component{
  static defaultTypes={
    onSubmit:PropTypes.func
  }
  constructor(){
    super();
    this.state={userName:'',content:''}
  }

  compinentWillMount(){
    this._loadUserName();
  }
  componentDidMount(){
    this.commentTextarea.focus()
  }
  _saveUserName(username){
    localStorage.setItem('username',username)
  }
  _loadUserName(){
    const userName = localStorage.getItem('username')
    if(userName){
      this.setState({ userName })
    }
  }
  _saveContent(content){
    localStorage.setItem('content',content)
  }
  _loadContent(){
    const content = localStorage.getItem('content')
    if(content){
      this.setState({ content })
    }
  }
  handleUserNameChange(e){
    this.setState({userName:e.target.value})
  }
  handleUserNameBlur(e){
    this._saveUserName(e.target.value)
  }
  handleContent(e){
    this.setState({content:e.target.value})
  }
  handleContentBlur(e){
    this._saveContent(e.target.value)
  }
  handleSubmit(){
    if(this.props.onSubmit){
      const { userName,content } = this.state;
      this.props.onSubmit({ userName,content })
      this.setState({content:''})
    }
  }
  render(){
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名:</span>
          <div className='comment-field-input' >
            <input 
            className='comment-field-input' 
            value={this.state.userName} 
            onChange={this.handleUserNameChange.bind(this)}
            onBlur={this.handleUserNameBlur.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <label className='comment-field-name'>评论内容:</label>
          <div className='comment-field-input'>
            <textarea 
            ref={textarea=>{this.commentTextarea=textarea }} 
            value={this.state.content}
            onChange={ this.handleContent.bind(this) }
            onBlur={ this.handleContentBlur.bind(this) }></textarea>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={ this.handleSubmit.bind(this) }>确认</button>
        </div>
      </div>
    )
  }
}