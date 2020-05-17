import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 50px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 600px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #FFF;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border-right: 0;

    ${(props) => props.hasError &&
      css`border-color: #C53030;`
    }

    &::placeholder {
      color: #A8A8B3;
    }

  }

  button {
    width: 190px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 40px;
  max-width: 600px;

  a {
    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #BCBCD6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #C53030;
  margin-top: 8px;
`;
