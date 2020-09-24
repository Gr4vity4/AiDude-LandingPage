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
  Image,
  Paragraph,
  Blockquote,
  Button,
} from "arwes";
import { AiFillCode } from "react-icons/ai";

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
          background="/static/images/DigitalTechnology-7.jpg"
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
                          {/* <Logo animate size={60} style={{ marginTop: 20 }} /> */}

                          <Link href="/">
                            <h2
                              style={{
                                margin: 0,
                                paddingTop: "26px",
                                paddingLeft: "20px",
                              }}
                            >
                              AiDude.io
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <AiFillCode
                        style={{
                          marginRight: "10px",
                          fontSize: "30px",
                          paddingBottom: "4px",
                        }}
                      />
                      <h1 style={{ margin: 0 }}>IDE</h1>
                    </div>
                    <div>
                      <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Paragraph>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          padding: "20px 0 20px 0",
                        }}
                      >
                        <Button animate>
                          <h5 style={{ margin: 0 }}>GO TO IDE</h5>
                        </Button>
                      </div>
                    </div>
                  </Content>
                </Frame>
                <Frame
                  animate={true}
                  level={3}
                  corners={4}
                  layer="primary"
                  style={{ marginTop: "24px" }}
                >
                  <Content style={{ margin: 20 }}>
                    <h1 style={{ margin: 0 }}>Documents</h1>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Paragraph>
                  </Content>
                </Frame>
                <Frame
                  animate={true}
                  level={3}
                  corners={4}
                  layer="primary"
                  style={{ marginTop: "24px" }}
                >
                  <Content style={{ margin: 20 }}>
                    <h1 style={{ margin: 0 }}>Features</h1>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Paragraph>
                  </Content>
                </Frame>
                <Frame
                  animate={true}
                  level={3}
                  corners={4}
                  layer="primary"
                  style={{ marginTop: "24px" }}
                >
                  <Content style={{ margin: 20 }}>
                    <h1>Contact Us</h1>
                    <div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.3375106323024!2d98.97668221546692!3d18.783106287256626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b964e881adb%3A0x6bdc1cb1e166488c!2sMaker%20Asia%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1600953703714!5m2!1sth!2sth"
                        width="100%"
                        height="450"
                        frameborder="0"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                      />
                      <Blockquote style={{ marginTop: "18px" }}>
                        Maker Asia Co., Ltd. 81/21-25 Arak Road, Pharsingha,
                        Muang Chiang Mai, TH, 50200. Tel. +66842224793 , Email :
                        info@makerasia.com
                      </Blockquote>
                    </div>
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
