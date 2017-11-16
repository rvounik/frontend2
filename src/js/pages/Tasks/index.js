// this is the root component that will ensure the Redux store is available throughout the components
import { h, Component } from 'preact';
/** @jsx h */

// preact-redux: make the store available to all container components in the application without passing it explicitly.
import { Provider } from 'react-redux'

// this defines the store we use (in old frontend: configureStore)
import { createStore } from 'redux'

// load the reducer (that handles state manipulation) and pass it on to the store
import someReducer from './reducers/someReducer.js'

// import the App component, which is the container component for this page (in old frontend: containers/App.js)
import Tasks from './components/Tasks'

// render everything (inside the frontend App.js)
export default class Index extends Component {
    render() {
        // configure the store and pass it on to the Provider later (this connects redux with (p)react)
        let store = createStore(someReducer);

        return (
            <Provider store={ store }>
                <Tasks />
            </Provider>
        )
    }
}
