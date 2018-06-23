import React, { Component } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';

import CreateTaskFormContainer from '../containers/CreateTaskFormContainer';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'fixed',
    minWidth: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class CreateTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { classes } = this.props;
    return [
      <Modal
        key="modal"
        aria-labelledby="create task modal"
        aria-describedby="create a new task"
        open={this.state.isOpen}
        onClose={this.handleClose}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <CreateTaskFormContainer
            cancelTask={this.handleClose}
          />
        </div>
      </Modal>,
      <Button
        key="button"
        variant="fab"
        color="primary"
        aria-label="add"
        style={{
          position: 'fixed',
          bottom: '1em',
          right: '1em',
        }}
        onClick={() => this.setState({ isOpen: true })}
      >
        <AddIcon />
      </Button>
    ]
  }
}

const CreateTaskModalWrapped = withStyles(styles)(CreateTaskModal);

export default CreateTaskModalWrapped;
