import React, { Component } from 'react';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CreateTaskModal from './components/CreateTaskModal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar key="app-bar" position="static" color="default">
          <Toolbar>
            Evermin
          </Toolbar>
        </AppBar>
        <CategoriesContainer key="categories-container" />
        <CreateTaskModal key="create-task-modal" />
      </div>
    );
  }
}

export default App;
