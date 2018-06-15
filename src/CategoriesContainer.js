import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class CategoriesContainer extends Component {
  render() {
    return (
      <div>
        <TextField
            id="name"
            label="Name"
            onChange={console.log('name')}
            margin="normal"
        />
        <Button variant="raised" color="primary">
          Test
        </Button>
      </div>
    );
  }
}

export default CategoriesContainer;
