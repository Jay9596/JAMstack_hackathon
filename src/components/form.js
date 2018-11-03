import React from 'react';

import styled from 'styled-components';

const Input = styled.input`
    background-color: #f6f6f7;
    border-radius: 5px;
    border: none;
    color: #737f8d;
    font-size: 0.9375rem;
    font-weight: 400;
    letter-spacing: -0.025rem;
    line-height: 1.25rem;
    margin: 2px 2px 2px 0;
    max-height: 44px;
    min-height: 20px;
    padding: 10px 38px 10px 10px;
    resize: none;
    width: 100%;
    box-shadow: 0 10px 90px rgba(0,0,0,0.25);
    outline: none;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 400;
  padding: 8px 36px;
  color: #fff;
  background: #000000;
  border-radius: 6px;
  height: 44px;
  border: none;
  margin-left: 12px;

  &:hover {
    cursor: pointer;
    background: #0A0A0A;
  }
`;

const FormStyled = styled.form`
  display: flex;
`;

/**
 * This component displays the username input box
 *
 * @class Form
 * @extends {React.Component}
 */
class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window.alert('The username you entered: ' + this.state.username);
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Input autocomplete="off" name="username" placeholder="e.g. joshwcomeau" type="text" value={this.state.username} onChange={this.handleChange} required />
        <Button type="submit">Go</Button>
      </FormStyled>
    );
  }
}

export default Form;
