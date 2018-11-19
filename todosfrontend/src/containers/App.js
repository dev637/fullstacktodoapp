import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoList from '../TodoList';
import Navbar from './Navbar';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <TodoList />
      </div>
    </Router>
  </Provider>
);

export default App;