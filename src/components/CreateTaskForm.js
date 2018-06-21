import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing.unit * 3,
  },
});

class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      taskCategory: '',
      taskStartTime: '',
      taskEndTime: '',
    };
  }

  handleChange = (e) => {
    this.setState({ taskCategory: e.target.value });
  }

  saveTask = () => {
    this.props.addNewTask({
      ...this.state,
    });
  }

  render() {
    const { classes, cancelTask } = this.props;

    return (
      <form>
        <FormControl className={classes.formControl}>
          <TextField
              id="new-task"
              label="New Task"
              onChange={(e) => {
                this.setState({
                  taskName: e.target.value,
                });
              }}
              value={this.state.taskName}
              margin="normal"
          />
        </FormControl>

        {this.props.categories.length > 0 &&
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Category</InputLabel>
          <Select
            value={this.state.taskCategory}
            onChange={this.handleChange}
            inputProps={{
              name: 'category',
              id: 'task-category',
            }}
          >
            {this.props.categories.map(category => {
              return (
                <MenuItem
                  key={category}
                  value={category}
                >
                  {category}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>}

        <div>
          <FormControl className={classes.formControl}>
            <TextField
              id="time-start"
              label="Start"
              type="time"
              defaultValue={this.state.taskStateTime}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={(e) => {
                this.setState({
                  taskStartTime: e.target.value,
                });
              }}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              id="time-end"
              label="End"
              type="time"
              defaultValue={this.state.taskEndTime}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              onChange={(e) => {
                this.setState({
                  taskEndTime: e.target.value,
                });
              }}
            />
          </FormControl>
        </div>

        <div className={classes.formActions}>
          <Button
            variant="contained"
            color="default"
            aria-label="cancel task"
            onClick={cancelTask}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            aria-label="save task"
            onClick={this.saveTask}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  addNewTask: newTask => dispatch({
    type: 'ADD_NEW_TASK',
    newTask,
  }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateTaskForm));
