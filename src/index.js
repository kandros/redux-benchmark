import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import counter from './reducers'
import {Provider} from 'react-redux';
import App from './components/App'
import todos from './todos100'

const store = createStore(counter, {todos}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootEl
)

render()
store.subscribe(render)
