/**
 * The template for a section within a chapter.
 * 
 * Book > Chapters > Sections
 */

import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import EC2Pricing from "../components/ec2pricing"

require(`katex/dist/katex.min.css`)

const shortcodes = {
  EC2Pricing
}

class Section extends Component {
  render() {
    return (
      <Layout>
        <h1>{ this.props.data.mdx.frontmatter.title }</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>
            { this.props.data.mdx.body }
          </MDXRenderer>
        </MDXProvider>
      </Layout>
    )
  }
}

export default Section

export const query = graphql`
query($slug: String!) {
  mdx(slug: { eq: $slug }) {
    slug
    body
    frontmatter {
      title
      slug
    }
  }
}
`