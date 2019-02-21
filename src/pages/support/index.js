import React from 'react'

import Layout from '../../components/Layout'
import FaqList from '../../components/FaqList'

export default class FaqIndexPage extends React.Component {
  render() {
    
  return (
      <Layout>
        <section className="section">
          <div className="container">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              Frequently asked questions
            </h2>
            <FaqList />
            </div>
        </section>
      </Layout>
    )
  }
}
