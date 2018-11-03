import React from 'react';
import styled from 'styled-components';

import Card from '../components/card'
import Form from '../components/form'
import Layout from '../components/layout'
import Header from '../components/header'

// TODO: Move Card & Center to secondary view
const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const IndexPage = () => (
  <React.Fragment>
    <Header center>
      <Form />
    </Header>
    <Layout>
      <Center>
        <Card avatarUrl='https://twitter-avatar.now.sh/elonmusk/' name='Elon Musk' username='elonmusk' starCount='42' />
      </Center>
    </Layout>
  </React.Fragment>
)

export default IndexPage
