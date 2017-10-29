import React from 'react';
import IconButton from 'material-ui/IconButton';

const GithubButton = (props) => (
  <div>
    <IconButton iconClassName="muidocs-icon-custom-github" />
    <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
  </div>
);

export default GithubButton;