import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategory: '',
    };
  }

  addNewCategory = (e) => {
    e.preventDefault();
    if (this.state.newCategory) {
      this.props.addNewCategory(this.state.newCategory);
      this.setState({
        newCategory: '',
      });
    }
  }

  renderCategories() {
    return (
      <List>
        {this.props.categories.map(category => {
          return (
            [<Divider key={`${category}-divider`} />,
            <ListItem key={category}>
              <ListItemText key="item-text" primary={category} />
              <IconButton
                key="remove-icon"
                aria-label="Delete"
                onClick={() => {
                  this.props.removeCategory(category);
                }}
              >
                <DeleteIcon />
              </IconButton>
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
          onSubmit={this.addNewCategory}
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
            variant="contained"
            color="primary"
            aria-label="add category"
            onClick={this.addNewCategory}
          >
            Add Category
          </Button>
        </form>
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  tasks: state.tasks,
})

const mapDispatchToProps = dispatch => ({
  addNewCategory: newCategory => dispatch({
    type: 'ADD_NEW_CATEGORY',
    newCategory
  }),
  removeCategory: category => dispatch({
    type: 'REMOVE_CATEGORY',
    category,
  }),
  removeTask: task => dispatch({
    type: 'REMOVE_TASK',
    task,
  }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
