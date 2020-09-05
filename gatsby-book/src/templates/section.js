/**
 * The template for a section within a chapter.
 * 
 * Book > Chapters > Sections
 */

import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import EC2Pricing from "../components/ec2pricing"

require(`katex/dist/katex.min.css`)

const shortcodes = {
  EC2Pricing,
  Link
}

class Section extends Component {
  render() {
    const { title } = this.props.data.mdx.frontmatter
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
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