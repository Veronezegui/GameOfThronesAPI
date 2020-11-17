import styled from 'styled-components';



export const Main = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  section {
    position: absolute;
    text-align: center;
    h3 {
      margin-top: 40px;
      color: white;
      font-weight: bold;
      font-size: 25px;
    }
    img {
      width: 840px;
      height: 70px;
    }
  }

  @media (max-width: 600px) {
    width: 350px;
  }
`;
export const Header = styled.div`
  width: 100%;
  background: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-image: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: 500% 500%;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 360px;
    height: 500px;
  }
  h1 {
    color: white;
    position: absolute;
  }
  a {
    color: white;
    text-decoration: none;
    margin-left: -1800px;
  }

  @media (max-width: 600px) {
    width: 365px;
    justify-content: space-around;

    h1 {
      color: white;
      position: absolute;
    }
    a {
      color: white;
      text-decoration: none;
      margin-left: -300px;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  min-height: 500px;
  display: ruby-base-container;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px auto;
  padding: 50px;

  img {
    margin: 5px auto;
    border-radius: 9px;
    max-width: 193px;
    max-height: 300px;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 350px;
  width: 600px;
  margin: 5px auto;
  text-align: left;

  a {
    margin-top: 5px;
    background: #161925;
    text-decoration: none;
    color: white;
    padding: 10px;
    border-radius: 3px;
  }
  a:hover {
    transform: scale(1.1);
  }
  p {
    padding: 40px;
    flex-direction: column;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 105px;
    margin-right: 0px;
    text-indent: 0px;
    height: 50px;
    text-align: justify;
    background: #e5e5e5;
    border-radius: 9px;
    width: 100%;
  }
  img {
    left: 600px;
    width: 100%;
    height: 430px;
    margin-right: 10px auto;
  }

  @media (max-width: 600px) {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 60vw;
      height: auto;
      margin: auto;
      position: static;
      left: 50px;
    }
    p {
      margin-left: 0px;
      padding: 20px;
      width: 60vw;
      height: auto;
      left: 40px;
    }
  }
`;

export const Footer = styled.div`
  visibility: hidden;
  width: 100%;
  height: 20vh;
  background: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-image: linear-gradient(
    -45deg,
    rgb(240, 248, 255),
    rgb(30, 144, 255),
    rgb(65, 105, 225),
    rgb(25, 25, 112)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: 500% 500%;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 9px;

  p {
    color: white;
  }

  @media (max-width: 600px) {
    visibility: hidden;
    width: 100vw;
  }
`;
