import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import SelectItem from './components/SelectItem';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <SelectItem defaultValue="" />,
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
