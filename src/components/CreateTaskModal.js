import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

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
    return [
      <Modal
        key="modal"
        aria-labelledby="create task modal"
        aria-describedby="create a new task"
        open={this.state.isOpen}
        onClose={this.handleClose}
      >
        <div>
          test
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

export default CreateTaskModal;
