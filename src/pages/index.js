import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import axios from 'axios'

// import Layout from '../components/layout'
// import Image from '../components/image'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    // Get username somehow
    const username = 'Jay9596'

    fetch(`/.netlify/functions/info?user=${username}`)
      .then(resp => resp.json())
      .then(json => {
        // console.info(json)
        this.setState({
          user: json,
        })
      })
      .then(res => {
        fetch(`/.netlify/functions/user_data?user=${username}`)
          .then(resp => resp.json())
          .then(json => {
            // console.info(json)
            this.setState({
              user: Object.assign(res, json),
            })
          })
      })
      .catch(err => console.error(err))
  }

  render() {
    const { user } = this.state
    const img_style = {
      height: '40px',
      width: '40px',
    }
    return (
      <ul>
        {console.log(this.state)}
        <li>Name: {user.name}</li>
        <li>
          Avatar: <img src={user.avatar} alt="Profile Pic" style={img_style} />
        </li>
        <li>Language: {user.language}</li>
        <li>Following: {user.following}</li>
        <li>Followers: {user.followers}</li>
        <li>Stars ⭐: {user.followers}</li>
        <li>Forks 🔱: {user.forks}</li>
      </ul>
    )
  }
}
export default IndexPage
