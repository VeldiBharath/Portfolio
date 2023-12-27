import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                <div class="container table-responsive mt-5 rounded">
                  <table class="table table-bordered text-light">
                    <thead class="thead-light">
                      <tr class="table-light">
                        <th>Category</th>
                        <th>Technologies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowspan="6" class="font-weight-bold">
                          Programming Languages
                        </td>
                        <td>Python</td>
                      </tr>
                      <tr>
                        <td>C++</td>
                      </tr>
                      <tr>
                        <td>Java</td>
                      </tr>
                      <tr>
                        <td>Javascript</td>
                      </tr>
                      <tr>
                        <td>Typescript</td>
                      </tr>
                      <tr>
                        <td>C</td>
                      </tr>
                      <tr>
                        <td rowspan="10">Web Technologies</td>
                        <td>NodeJS</td>
                      </tr>
                      <tr>
                        <td>MEAN STACK</td>
                      </tr>
                      <tr>
                        <td>MERN STACK</td>
                      </tr>
                      <tr>
                        <td>RESTful API's</td>
                      </tr>
                      <tr>
                        <td>Web Security</td>
                      </tr>
                      <tr>
                        <td>Web Testing</td>
                      </tr>
                      <tr>
                        <td>Bootstrap</td>
                      </tr>
                      <tr>
                        <td>Tailwind CSS</td>
                      </tr>
                      <tr>
                        <td>JQuery</td>
                      </tr>
                      <tr>
                        <td>Render/Heroku</td>
                      </tr>
                      <tr>
                        <td rowspan="3">Databases</td>
                        <td>MySQL</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                      </tr>
                      <tr>
                        <td>Database Design and Managemen</td>
                      </tr>
                      <tr>
                        <td rowspan="14">Tools and DataScience</td>
                        <td>Machine Learning Algorithms</td>
                      </tr>
                      <tr>
                        <td>Natural Language Processing(NLP)</td>
                      </tr>
                      <tr>
                        <td>Large Language Models(LLMs)</td>
                      </tr>
                      <tr>
                        <td>ChatBots</td>
                      </tr>
                      <tr>
                        <td>Data Visualization</td>
                      </tr>
                      <tr>
                        <td>Data Engineering</td>
                      </tr>
                      <tr>
                        <td>Amazon Web Services(AWS)</td>
                      </tr>
                      <tr>
                        <td>PostMan</td>
                      </tr>
                      <tr>
                        <td>Nodemon</td>
                      </tr>
                      <tr>
                        <td>Redux</td>
                      </tr>
                      <tr>
                        <td>Mongoose</td>
                      </tr>
                      <tr>
                        <td>Cloud Computing</td>
                      </tr>
                      <tr>
                        <td>DevOps</td>
                      </tr>
                      <tr>
                        <td>Docker</td>
                      </tr>
                      

                      <tr>
                        <td rowspan="7">Algortithms and DataStructures</td>
                        <td><a href="https://github.com/VeldiBharath/AlgorithmsandDataStructures/tree/main" >Assimilation</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Algorithms and DataStructures</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Full Stack Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>DevOps</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Data Analysis</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Data Engineering</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Database</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
