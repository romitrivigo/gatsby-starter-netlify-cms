import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { HTMLContent } from './Content'

const _ = require('lodash')

class FaqList extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      categories: [],
      selectedCategory: ''
    }

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(category) {
    this.setState({ selectedCategory: category });
  }

  fetchCategories() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // categories:
    let categories = []
    // Iterate through each post, putting all found tags into `categories`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.category`)) {
        categories = categories.concat(edge.node.frontmatter.category)
      }
    })
    // Eliminate duplicate categories
    categories = _.uniq(categories)
    this.setState({categories: categories, selectedCategory: categories[0]});

    console.log(categories);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  render() {
    const { data } = this.props
    const { categories, selectedCategory } = this.state;
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline">
        <div className="column">
          <div className="card-box">
            <h1><b>Category</b></h1>
            { categories.map(category => (
              <p>
                <button className={`category-button ${category === selectedCategory ? 'selected' : ''}`} onClick={() => this.handleCategoryChange(category)}>{category}</button>
              </p>
            ))}
          </div>
        </div>
        <div className="column is-10">
          <div className="card-box">
            {posts && (posts.filter(({ node: post }) => post.frontmatter.category === selectedCategory).map(({ node: post }) => (
              <div
                className="column is-12"
                key={post.id}
              >
                <p><b>{post.frontmatter.title}</b></p>
                <HTMLContent className="content" content={post.html} />
              </div>
            )))}
          </div>
        </div>
      </div>
    );
  }
}

FaqList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query FaqListQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "faq" } }}
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              category
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <FaqList data={data} count={count} />
    )}
  />
)