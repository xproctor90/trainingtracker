import { Component } from 'react';
import { setIdToken, setAccessToken } from '../../utils/auth-service';

class Callback extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/workout";
  }

  render() {
    return null;
  }
}

export default Callback;