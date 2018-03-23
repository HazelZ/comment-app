import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './containers/Header';
import Content from './containers/Content';
// import Content from './containers/';

import './index.css'

const themeReducer = (state, action) =>{
	if(!state) return{
		themeColor:'red'
	}
	switch(action.type){
		case 'CHANGE_COLOR':
			return {...state, themeColor: action.themeColor }
		default:
		 	return state
	}
}

const store = createStore(themeReducer)

class Index extends Component{
	render(){
		return(
			<div>
				<Header />
				<Content />
			</div>
			)
	}
}


ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById('app')
)


// Dumb组件基本只做一件事，就是根据 props 进行渲染
//  Smart 组件负责根据应用的逻辑，数据，把所有相关的Dumb(Smart)组件组合起来，通过props控制它们
//  Smart组件可以使用Smart、Dumb组件。而Dumb组件最好只使用Dumb组件，否则它的复用性就会丧失

// 根据应用场景划分组件。如果一个组件并不需要太强的复用性，直接让它成为 Smart 即可，否则就让他成为 Dumb组件
// Smart并不意味着完全不能复用，Smart组件的复用性是依赖场景的，在特定的应用场景下当然是可以复用Smart的，
// Dumb则是可以跨应用场景复用










