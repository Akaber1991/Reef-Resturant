import React from 'react';
import ReactDOM from 'react-dom';
import ListItem
import json

class ListItems extends React.Component {
  render() {
    const listItems = json.map(jsonPart) =>
    <ListItem item="{jsonPart}" />
);
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default ListItems
