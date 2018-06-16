import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategory: '',
      categories: [],
    };
  }

  renderCategories() {
    return (
      <List>
        {this.state.categories.map(category => {
          return (
            [<Divider />,
            <ListItem key={category}>
              <ListItemText primary={category} />
            </ListItem>]
          );
        })}
      </List>
    );
  }

  render() {
    return (
      <div>
        <form
          style={{
            alignItems: 'baseline',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <TextField
              id="name"
              label="Name"
              onChange={(e) => {
                this.setState({
                  newCategory: e.target.value,
                });
              }}
              value={this.state.newCategory}
              margin="normal"
          />
          <Button
            variant="raised"
            color="primary"
            onClick={() => {
              this.setState({
                categories: [...this.state.categories, this.state.newCategory],
                newCategory: '',
              });
            }}
          >
            Add
          </Button>
        </form>
        {this.renderCategories()}
      </div>
    );
  }
}

export default CategoriesContainer;
