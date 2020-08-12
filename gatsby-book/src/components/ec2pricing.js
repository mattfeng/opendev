import React, { Component } from "react"
import pricingData from "../data/ec2-linux-demand.json"

class EC2Pricing extends Component {
  render() {
    return <div>
      <p>{ JSON.stringify(pricingData) }</p>
    </div>
  }
}

export default EC2Pricing