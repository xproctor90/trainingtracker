import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const GitHubLink = (props) => (
  <div>
    <FlatButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      label="GitHub Link"
      secondary={true}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

export default GitHubLink;