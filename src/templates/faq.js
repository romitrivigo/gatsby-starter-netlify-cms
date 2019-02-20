import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FaqTemplate = ({ question, category, date, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {question}
              </h2>
              <p>{category}</p>
              <p>{date}</p>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FaqTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Faq = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FaqTemplate
        contentComponent={HTMLContent}
        question={post.frontmatter.question}
        answer={post.html}
      />
    </Layout>
  )
}

Faq.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Faq

export const faqQuery = graphql`
  query FaqByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
