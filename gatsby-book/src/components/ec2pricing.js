import React, { Component } from "react"
import pricingData from "../data/ec2-linux-demand.json"

class EC2Pricing extends Component {
  render() {
    let prices = pricingData["prices"]
      .sort((a, b) => {
        let delta = ('' + a["attributes"]["aws:ec2:instanceType"].split(".")[0]).localeCompare(b["attributes"]["aws:ec2:instanceType"].split(".")[0])

        if (delta !== 0) {
          return delta
        }

        return Number.parseInt(a["attributes"]["aws:ec2:vcpu"]) > Number.parseInt(b["attributes"]["aws:ec2:vcpu"])
      })

    return (
      <table>
        <tr>
          <th>Instance Type</th>
          <th>vCPU</th>
          <th>Memory</th>
          <th>Price</th>
        </tr>

        {
          prices.map((i) => {
            const attr = i["attributes"]
            const price = Number.parseFloat(i["price"]["USD"]).toFixed(2)

            return (
              <tr>
                <td>{ attr["aws:ec2:instanceType"] }</td>
                <td>{ attr["aws:ec2:vcpu"] }</td>
                <td>{ attr["aws:ec2:memory"] }</td>
                <td>{ price }</td>
              </tr>
            )
          })
        }

      </table>
    )
  }
}

export default EC2Pricing