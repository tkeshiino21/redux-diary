import styled from 'styled-components';

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 48px;
  font-size: 10vw;
  font-family: 'Kaushan Script';
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Button = styled.button`
  position: absolute;
  top: 300px;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 1.5em;
  color: "palevioletred";
  font-size: 1em;
  padding: 0.25em 1em 1.5em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;