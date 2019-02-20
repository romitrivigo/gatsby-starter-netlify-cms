import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import FaqPreview from './preview-templates/FaqPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('faq', FaqPreview)
CMS.registerPreviewTemplate('faqs', FaqPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
