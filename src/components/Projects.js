import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import kenjeffy from "../assets/img/kenjeffy.jpg";
import gergil from "../assets/img/gergil.jpg";
import trendybeatz from "../assets/img/trendybeatz.jpg";
import tunezjam from "../assets/img/tunezjam.jpg";
import deawoo from "../assets/img/deawoo.jpg";
import globleindex from "../assets/img/globleindex.jpg";
import ekammi from "../assets/img/ekammi.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Kenjeffy.com",
      url: "https://kenjeffy.com",
      description: "Business Sales Management Software for fuel station",
      imgUrl: kenjeffy,
    },
    {
      title: "Gergil.com",
      url:"https://gergil.com",
      description: "Business Sales Management Software for fuel station",
      imgUrl: gergil,
    },
    {
      title: "trendybeatz.com",
      url: "https://trendybeatz.com",
      description: "Music Listings Site",
      imgUrl: trendybeatz,
    },
    {
      title: "tunezjam.com",
      url: "https://tunezjam.com",
      description: "Music Listings Site",
      imgUrl: tunezjam,
    },
    {
      title: "daewooencnigeria.com",
      url: "https://www.daewooencnigeria.com/",
      description: "Deawoo Nigeria website -a construction company",
      imgUrl: deawoo,
    },
    {
      title: "globleindex.com",
      url: "https://globleindex.com/",
      description: "A business listing directory with board breaking systems",
      imgUrl: globleindex,
    },
  ];


  const projectsecond = [
    {
      title: "ekammi.com",
      url: "https://ekammi.com/",
      description: "A loan Application with website and Admin Dashboard",
      imgUrl: ekammi,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My experience with PHP Laravel, CSS, JavaScript, Bootstrap, Mysql. I developed a complete web application from scratch, including system analysis and database design to fully operational softwares. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projectsecond.map((projectsecond, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projectsecond}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
