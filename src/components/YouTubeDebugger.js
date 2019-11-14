// Code YouTubeDebugger Component Here

import React from 'react'
class YouTubeDebugger extends Ract.Component {
constructor() {
  super();

  this.state ={
    timesClicked: 0
  }
}

handleClick = () => {
  let newCount = this.state.timesClicked + 1
  this.setState({
    timesClicked: newCount
  })
}


  render() {
    return(
      <p> </p>
    )
  }
}
 export default
