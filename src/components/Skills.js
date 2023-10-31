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
                <div class="container mt-5 rounded">
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
                        <td>ExpressJS</td>
                      </tr>
                      <tr>
                        <td>ReactJS</td>
                      </tr>
                      <tr>
                        <td>Angular</td>
                      </tr>
                      <tr>
                        <td>HTML</td>
                      </tr>
                      <tr>
                        <td>CSS</td>
                      </tr>
                      <tr>
                        <td>Bootstrap</td>
                      </tr>
                      <tr>
                        <td>JQuery</td>
                      </tr>
                      <tr>
                        <td>GIT</td>
                      </tr>
                      <tr>
                        <td>DOM</td>
                      </tr>
                      <tr>
                        <td rowspan="2">Databases</td>
                        <td>MySQL</td>
                      </tr>
                      <tr>
                        <td>MongoDB</td>
                      </tr>
                      <tr>
                        <td rowspan="7">Tools and DataScience</td>
                        <td>Machine Learning</td>
                      </tr>
                      <tr>
                        <td>AWS</td>
                      </tr>
                      <tr>
                        <td>Postman</td>
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
                        <td>WebPack</td>
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
                  <h5>Full Stack Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Python</h5>
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
