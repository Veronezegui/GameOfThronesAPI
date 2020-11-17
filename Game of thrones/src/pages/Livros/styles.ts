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
    font-weight: bold;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F5F1F0;
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
  height: 100px;
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
  color: white;
  img {
    width: 100%;
    height: 500px;
  }
  a {
    color: white;
    text-decoration: none;
    margin-left: -1800px;
  }
  h1 {
    text-align: center;
    position: absolute;
  }

  @media (max-width: 600px) {
    a {
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
  margin-top: 30px auto;
  margin: 100px auto;
  padding: 100px;

  img {
    margin-bottom: 20px;
    border-radius: 9px;
    max-width: 293px;
    min-height: 307px;
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

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30vh;
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
    color: black;;
    width: 280px;
    height: 250px;
    display: flex;
    text-align:center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 25px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px black;
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
