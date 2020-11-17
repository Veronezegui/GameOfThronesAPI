import styled from 'styled-components';

export const Navegação = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: flex-end;
  position: relative;
  left: 40vw;
  span {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

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
    width: 100%;
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
    width: 100vw;
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
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px auto;
  padding: 100px;

  img {
    margin-bottom: 20px;
    border-radius: 9px;
    max-width: 293px;
    min-height: 307px;
    position: relative;
    filter: brightness(-500%)
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 350px;
  width: 293px;
  margin: 50px auto;
  position: relative;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  span {
    position: absolute;
    color: white;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
  }

  @media (max-width: 600px) {
    align-items: center;
    margin-left: -15px;
    margin-bottom: 40px;
    img {
      width: 200px;
    }
  }
`;

export const Footer = styled.div`
  visibility: visible;
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
