import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import  database from './firebase/firebase';




const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

 const  promise = store.dispatch(startSetExpenses());

 promise.then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
 })
ReactDOM.render(<p>loading ...</p>, document.getElementById('app'));





