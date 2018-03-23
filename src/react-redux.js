import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
	class Connect extends Component{
		static contextTypes = {
			store: PropTypes.object
		}
		
		constructor(){
			super()
			this.state = { 
				allProps:{} 
			}
		}

		componentWillMount(){
			const {store} = this.context;
			this._updateProps();
			store.subscribe(() => this._updateProps())
		}

		_updateProps(){
			const { store } = this.context;
			let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {};
			let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}

			this.setState({
				allProps:{
					...stateProps,
					...dispatchProps,
					...this.props
				}
			})
		}

		render(){
			return <WrappedComponent {...this.state.allProps}/>
		}
	}

	return Connect
}


export class Provider extends Component{
	static propTypes = {
		store: PropTypes.object,
		children: PropTypes.any
	}

	static childContextTypes = {
		store: PropTypes.object
	}

	getChildContext(){
		return {store: this.props.store}
	}

	render(){
		return (
			<div>{this.props.children}</div>
			)
	}
}


















// connect函数接受一个组件 WrappedComponent 作为参数，
// 把这个组件包含在一个新的组件Connect里面，Connect会去context里面取出store
// 再把store里面的数据取出来通过props传给 WrappedComponent
// 
// 每个传进去的组件需要store里面的数据都是不一样的，所以除了给高阶组件传入dumb组件以外
// 还需要告诉高阶组件我们需要什么数据，它才能正确地去取数据