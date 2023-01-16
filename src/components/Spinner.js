import React, { Component } from 'react'
import Fadinglines from './Fadinglines.gif'

export class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
        <img src={Fadinglines} className="my-3"  alt="Spinner" />
    </div>
    )
  }
}

export default Spinner