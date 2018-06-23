import moment from 'moment';
import React, { Component } from 'react';

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
        <div>{task.name}</div>
        {task.startTime} - {task.endTime} ({moment.duration(task.endTime - task.startTime).humanize()})
      </div>
    );
  }
}

export default Task;
