import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class BienvenidaVideo extends Component {
    render() {
      return (
        <div>
            <h5> How to create a list using a range on python </h5>
          <ReactPlayer
            url='https://www.youtube.com/channel/UCmuJzgRbzGm0gZcNwujmo_w/'
            className='react-player'
            controls
            width='30%'
            height='200px'
          />
        </div>
      );
    }
  }

  export default BienvenidaVideo

