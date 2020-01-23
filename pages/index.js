import { Component } from 'react'

import Layout from '../components/Layout'

class Index extends Component {
  render () {
    return <Layout {...this.props}>
      <p>here</p>
    </Layout>
  }
}

export default Index