import React, { Component } from 'react';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import Delete from '@material-ui/icons/Delete';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import moment from 'moment';

import Task from './Task';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: true,
    }
  }

  toggleExpandable = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    const {
      category,
      tasks,
      removeCategory
    } = this.props;

    let categoryDurationTime = 0;
    const tasksList = (
      <List>
        {tasks.map(task => {
          const durationTimeInMillis = task.endTime - task.startTime;
          const durationTime = moment.duration().humanize();
          categoryDurationTime += durationTimeInMillis;
          return (
            <ListItem key={task.name}>
              <Task
                task={ {...task, durationTime } }
              />
            </ListItem>
          );
        })}
      </List>
    );
    return (
      [
        <ListItem key={category}>
          <ListItemText key="item-text" primary={`${category} (${moment.duration(categoryDurationTime).humanize()})`} />
          <IconButton
            key="remove-icon"
            aria-label="Delete"
            onClick={() => {
              this.props.removeCategory(category);
            }}
          >
            <Delete />
          </IconButton>
          <IconButton
            key="expand-toggle"
            aria-label="Expand Toggle"
            onClick={() => {
              this.toggleExpandable();
            }}
          >
            { this.state.isExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItem>,
        <Collapse in={this.state.isExpanded} timeout="auto" unmountOnExit>
          {tasksList}
        </Collapse>
      ]
    )

  }
}

export default Category;
