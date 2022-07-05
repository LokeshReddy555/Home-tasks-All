import React, { Component, PureComponent } from 'react'

//using pure component makes it to render only 1time
// Consider using the built-in PureComponent
// instead of writing shouldComponentUpdate() by hand
export class Childclass extends PureComponent {  
//  renders 2 times because of conditional rendering in parent and runs after parent ***
 componentDidMount() {             
  console.log("Childclass Rendering inside DidMount");
 }
 //The component is only updated post-render, so documentation implies that it's
 //called after all children, and consequently the parent, have finished rerendering
 componentDidUpdate() {
  console.log("Childclass Rendering inside DidUpdate");
 }
  render() {
    console.log("Childclass Rendering inside render");
    return (
      <div>Childclass</div>
    )
  }
}

export default Childclass