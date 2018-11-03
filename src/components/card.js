import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 320px;
  width: 100%;
  background-color: #F8F9FB;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  max-width: 720px;
  margin-top: 150px;
`;

const Avatar = styled.img`
  display: flex;
  height: 200px;
  width: 200px;
  max-height: 200px;
  max-width: 200px;
  min-height: 200px;
  min-width: 200px;
  background-color: #eaeaef;
  border-radius: 50%;
  margin-top: -100px;
  box-shadow: 0 10px 90px rgba(0,0,0,0.25);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = ({ avatarUrl, name, username, starCount }) => (
  <Container><Avatar src={avatarUrl} /><Info><h1>{name}</h1> <h2>{username}</h2> Stars: {starCount}</Info></Container>
);

export default Card;