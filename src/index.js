import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import CommentApp from './CommentApp';
// import Index from './MountIndex';
// import Index from './ClockIndex';

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();
