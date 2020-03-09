import {createStore} from 'redux';
import rootReducer from './reducers';

import {wrapStore} from 'webext-redux';

console.log("service worker loaded");

const store = createStore(rootReducer, {});

wrapStore(store);
