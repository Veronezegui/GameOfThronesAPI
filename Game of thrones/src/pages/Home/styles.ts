import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  min-height: 100vh;
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
    width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    section {
      img {
        width: 50vw;
      }
    }
  }
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  section {
    width: 50vw;
    img {
      width: 50vw;
    }
  }
  img {
    width: 100%;
    height: 500px;
    border-radius: 9px;
  }

  @media (max-width: 600px) {
    margin-top: 100px;
    width: 360px;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 100vw;
      height: 50vh;
    }
    section {
      img {
        width: 50vw;
        height: 5vh;
        margin-top: 6vh;
      }
      h3 {
        font-size: 4vw;
      }
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 100px auto;
  padding: 50px;

  section {
    position: relative;
    min-width: 293px;
    min-height: 307px;

    .P1 {
      position: absolute;
      top: 130px;
      left: 65px;
      color: white;
      font-weight: bold;
      font-size: 30px;
      visibility: hidden;
      text-decoration: none;
    }
    .P2 {
      position: absolute;
      top: 130px;
      left: 105px;
      color: #fff;
      font-weight: bold;
      font-size: 30px;
      visibility: hidden;
      text-decoration: none;
    }
    .P3 {
      position: absolute;
      top: 130px;
      left: 105px;
      color: white;
      font-weight: bold;
      font-size: 30px;
      visibility: hidden;
      text-decoration: none;
    }
    &:hover {
      transform: scale(1.1);
      a {
        visibility: visible;
      }
    }
  }
  img {
    border-radius: 9px;
    max-width: 293px;
    min-height: 307px;
    &:hover {
      box-shadow: 1px 1px 30px black;
      filter: blur(5px);
    }
  }
  @media (max-width: 600px) {
    section {
      margin-top: 5vh;
      bottom: -320px;
      img {
        width: 190px;
        height: 10vh;
        margin-bottom: 10vh;
      }
      .P1 {
        font-size: 20px;
        left: 85px;
      }
      .P2 {
        font-size: 20px;
        left: 120px;
      }
      .P3 {
        font-size: 20px;
        left: 120px;
      }
    }
    flex-direction: column;
    width: 10vh;
  }
`;

export const Footer = styled.div`
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
  visibility: visible;
  p {
    color: white;
  }

  @media (max-width: 600px) {
    visibility: hidden;
    width: 100vw;
  }
`;
