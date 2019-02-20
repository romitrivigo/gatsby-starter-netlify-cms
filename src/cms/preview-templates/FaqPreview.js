import React from 'react'
import PropTypes from 'prop-types'
import { FaqTemplate } from '../../templates/faq'

const FaqPreview = ({ entry, widgetFor }) => (
  <FaqTemplate
    question={entry.getIn(['data', 'title'])}
    category={entry.getIn(['data', 'category'])}
    date={entry.getIn(['data', 'date'])}
    content={widgetFor('answer')}
  />
)

FaqPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqPreview
