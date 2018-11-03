import React, { Component } from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'
import Image from '../components/image'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    axios
      // .get('https://api.github.com/users/jay9596')
      .get('.netlify/function/info')
      .then(res => {
        let data = JSON.parse(res)
        console.log(data)
        this.setState({
          user: {
            name: data.name,
            avatar: data.avatar,
            followers: data.followers,
            following: data.following,
          },
        })
      })
      .catch(err => {
        // callback(err, null)
        console.error(err)
      })
  }

  render() {
    return (
      <ul>
        {this.state.user.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    )
  }
}
export default IndexPage
