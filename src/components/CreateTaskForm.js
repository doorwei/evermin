import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
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
    };
  }

  handleChange = () => {
    console.log('Hello!');
  }

  saveTask = () => {
    console.log('save task');
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

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select Category:</InputLabel>
          <Select
            value="10"
            onChange={this.handleChange}
            inputProps={{
              name: 'category',
              id: 'task-category',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </FormControl>

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

export default withStyles(styles)(CreateTaskForm);
