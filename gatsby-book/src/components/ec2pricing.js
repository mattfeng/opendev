import React, { Component } from "react"
import pricingData from "../data/ec2-linux-demand.json"

const GPU_INSTANCES = {
  "g4dn": "16GB",
  "g3": "8GB",
  "p2": "12GB",
  "p3": "16GB"
}

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

    const instanceTypeToGPU = (itype) => {
      const info = GPU_INSTANCES[itype.split(".")[0]]
      return info
    }

    return (
      <table>
        <tr>
          <th>Instance Type</th>
          <th>vCPU</th>
          <th>Memory</th>
          <th>GPU</th>
          <th>Price</th>
        </tr>

        {
          prices.map((i) => {
            const attr = i["attributes"]
            const instanceType = attr["aws:ec2:instanceType"]
            const price = Number.parseFloat(i["price"]["USD"]).toFixed(2)
            const gpu = attr["aws:ec2:gpu"] || "n/a"
            const gpuInfo = instanceTypeToGPU(instanceType)

            return (
              <tr>
                <td>{ instanceType }</td>
                <td>{ attr["aws:ec2:vcpu"] }</td>
                <td>{ attr["aws:ec2:memory"] }</td>
                <td>{ gpu } { gpuInfo ? ` (${gpuInfo})`:undefined }</td>
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