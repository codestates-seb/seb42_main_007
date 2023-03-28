import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Loading from "./loading";

class LoadingIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={false}
        src={Loading}
        style={{ height: '6rem', width: '6rem' }}
      ></Player>
    );
  }
}

export default LoadingIndicator;
