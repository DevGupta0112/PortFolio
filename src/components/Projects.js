import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AMzon prime.jpeg";
import projImg2 from "../assets/img/Airbnb Tableau.jpeg";
import projImg3 from "../assets/img/BIKE SALES IMAGE.jpeg";
import projImg4 from "../assets/img/Coffe sals image.jpeg";
import projImg5 from "../assets/img/COVID TABLEAU.jpeg";
import projImg6 from "../assets/img/Netflix TAbleau.jpeg";
import projImg7 from "../assets/img/WEB scraping.png";
import projImg8 from "../assets/img/SQL IMAGE2.jpeg";
import projImg9 from "../assets/img/SQL IMAGE1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import budget from "../assets/img/Budget.jpeg"
import rest from "../assets/img/reastaurent.jpeg"
import nash from "../assets/img/NAshvile.jpeg"
import dataPro from "../assets/img/Data pro.jpeg"
import mazo from "../assets/img/MAZO SALES.jpeg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const excel = [
    {
      title: "Bike Sales",
      link: "https://github.com/DevGupta0112/Excel/blob/main/Bikes%20Sales.xlsx",
      imgUrl: projImg3,
    },
    {
      title: "Coffee Orders",
      link: "https://github.com/DevGupta0112/Excel/blob/main/Coffee%20Orders.xlsx",
      imgUrl: projImg4,
    },
    {
      title: "Covid 19 India",
      link: "https://github.com/DevGupta0112/Microsoft-Excel-Projects/blob/main/Covid-19%20India%20Analysis.xlsx",
      imgUrl: projImg5
    },
  ]

  const sql = [
    {
      title: "BUDGET SQL QUERIES",
      link: "https://github.com/DevGupta0112/SQL-SSMS/blob/main/BUDGET%20SQL%20QUIERS.sql",
      imgUrl: budget
    },
    {
      title: "Restaurant Analysis",
      link: "https://github.com/DevGupta0112/SQL-SSMS/blob/main/Cognifiz%20Internship%20task%20Queries.sql",
      imgUrl: rest
    },
    {
      title: "Data Cleaning Nashville Housing",
      link: "https://github.com/DevGupta0112/SQL-SSMS/blob/main/Data%20Cleaning%20Nashville%20Housing.sql",
      imgUrl: nash
    },
  ]

  const tableau = [
    {
      title: "COVID ANALYSIS",
      link: "https://github.com/DevGupta0112/Tableau-Public/blob/main/COVID%20ANALYSIS.twbx",
      imgUrl: projImg5
    },
    {
      title: "NETFLIX ANALYSIS",
      link: "https://github.com/DevGupta0112/Tableau-Public/blob/main/NETFLIX.twbx",
      imgUrl: projImg6
    },
    {
      title: "SEATTLE AIRBNB",
      link: "https://github.com/DevGupta0112/Tableau-Public/blob/main/SEATTLE%20AIRBNB.twbx",
      imgUrl: projImg2
    },

  ]

  const powerbi = [
    {
      title: "AMAZON PRIME",
      link: "https://github.com/DevGupta0112/Microsoft-PowerBI/blob/main/AMAZON%20PRIME.pbix",
      imgUrl: projImg1
    },
    {
      title: "BUDGET Analysis",
      link: "https://github.com/DevGupta0112/Microsoft-PowerBI/blob/main/BUDGET%20Analysis%20Unifeid%20Mentor%20Internship.pbix",
      imgUrl: budget,
    },
    {
      title: "Data Professional Survey",
      link: "https://github.com/DevGupta0112/Microsoft-PowerBI/blob/main/Data%20Professional%20Survey.pbix",
      imgUrl: dataPro,
    },
  ]

  const python = [
    {
      title: "WEB SCRAPPING",
      link: "https://github.com/DevGupta0112/Python_Jupiter/blob/main/WEB%20SCRAPPING.ipynb",
      imgUrl: projImg7,
    },
    {
      title: "Amazon sales analysis",
      link: "https://github.com/DevGupta0112/Python_Jupiter/blob/main/Amazon%20sales%20analysis.py",
      imgUrl: mazo,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ cursor: "pointer" }}>Excel</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second"
                          style={{ cursor: "pointer" }}>SQL</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"
                          style={{ cursor: "pointer" }}>Tableau</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth"
                          style={{ cursor: "pointer" }}>PowerBI</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth"
                          style={{ cursor: "pointer" }}>Python</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            excel.map((project, index) => {
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
                            sql.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            tableau.map((project, index) => {
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
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {
                            powerbi.map((project, index) => {
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
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          {
                            python.map((project, index) => {
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
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgimg"></img>
    </section>
  )
}
