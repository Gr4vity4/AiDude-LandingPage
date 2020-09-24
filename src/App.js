import React, { Component, useEffect } from "react";
import {
  ThemeProvider,
  SoundsProvider,
  createTheme,
  createSounds,
  withSounds,
  Arwes,
  Row,
  Col,
  Logo,
  Content,
  Frame,
  Header,
  Link,
} from "arwes";
import { ImEarth } from "react-icons/im";

const Player = withSounds()((props) => {
  props.sounds[props.id].play();
  return true;
});

const sounds = {
  shared: { volume: 1 },
  players: {
    information: { sound: { src: ["/static/sounds/information.mp3"] } },
    ask: { sound: { src: ["/static/sounds/ask.mp3"] } },
    warning: { sound: { src: ["/static/sounds/warning.mp3"] } },
    error: { sound: { src: ["/static/sounds/error.mp3"] } },
  },
};

class App extends Component {
  componentDidMount() {
    console.log(`>>> componentDidMount`);
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes
          animate
          background="/static/images/background.jpg"
          pattern="/static/images/glow.png"
        >
          <SoundsProvider sounds={createSounds(sounds)}>
            <Player id="information" />
            <Row>
              <Col s={12} style={{ padding: 0 }}>
                <Header animate>
                  <Row>
                    <Col s={12} m={6} offset={["m3"]}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <Logo size={60} style={{ marginTop: 20 }} />
                          <Link href="/">
                            <h2
                              style={{
                                margin: 0,
                                paddingTop: "26px",
                                paddingLeft: "20px",
                              }}
                            >
                              AiDude
                            </h2>
                          </Link>
                        </div>
                        <div style={{ display: "flex" }}>
                          <ul
                            style={{
                              listStyle: "none",
                              display: "flex",
                              paddingTop: "36px",
                            }}
                          >
                            <li style={{ marginRight: "16px" }}>
                              <Link href="#">Home</Link>
                            </li>
                            <li style={{ marginRight: "16px" }}>
                              <Link href="#">Documents</Link>
                            </li>
                            <li style={{ marginRight: "16px" }}>
                              <Link href="#">Features</Link>
                            </li>
                            <li style={{ marginRight: "16px" }}>
                              <Link href="#">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Header>
              </Col>
            </Row>
            <Row>
              <Col s={12} m={6} offset={["m3"]}>
                <Frame animate={true} level={3} corners={4} layer="primary">
                  <Content style={{ margin: 20 }}>
                    <h1>Futuristic Sci-Fi Interfaces</h1>
                    <h2>Futuristic Sci-Fi Interfaces</h2>
                    <h3>Futuristic Sci-Fi Interfaces</h3>
                    <h4>Futuristic Sci-Fi Interfaces</h4>
                    <h5>Futuristic Sci-Fi Interfaces</h5>
                    <h6>Futuristic Sci-Fi Interfaces</h6>

                    <p>
                      Futuristic Sci-Fi and Cyberpunk Graphical User Interface
                      Framework for Web Apps
                    </p>

                    <p>
                      <a href="#">Intergalactic Link</a>
                    </p>

                    <blockquote>
                      Futuristic Sci-Fi and Cyberpunk Graphical User Interface
                      Framework for Web Apps
                    </blockquote>
                    <blockquote data-layer="success">
                      Futuristic Sci-Fi and Cyberpunk Graphical User Interface
                      Framework for Web Apps
                    </blockquote>
                    <blockquote data-layer="alert">
                      Futuristic Sci-Fi and Cyberpunk Graphical User Interface
                      Framework for Web Apps
                    </blockquote>
                    <blockquote data-layer="disabled">
                      Futuristic Sci-Fi and Cyberpunk Graphical User Interface
                      Framework for Web Apps
                    </blockquote>

                    <ul>
                      <li>Futuristic</li>
                      <li>Science Fiction</li>
                      <li>Cyberpunk</li>
                    </ul>
                    <ol>
                      <li>Futuristic</li>
                      <li>Science Fiction</li>
                      <li>Cyberpunk</li>
                    </ol>
                    <dl>
                      <dt>Futuristic</dt>
                      <dd>Science Fiction</dd>
                      <dt>Futuristic</dt>
                      <dd>Science Fiction</dd>
                    </dl>
                  </Content>
                </Frame>
              </Col>
            </Row>
          </SoundsProvider>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;
