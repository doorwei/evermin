import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { task } = this.props;

    return (
      <div>
        {task.name}
        {task.startTime} - {task.endTime} ({task.durationTime})
      </div>
    );
  }
}

export default Task;
