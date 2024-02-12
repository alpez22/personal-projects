import React from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  // Extract the education data from the contentData file
  const education = contentData.academics;

  // Calculate the total credits for each year
  const totalCreditsPerYear = education.years.map((year) => {
    return parseFloat(
      year.courses.reduce((total, course) => {
        return total + course.credits;
      }, 0)
    );
  });

  // Render the education section
  return (
    <Fade triggerOnce={true}>
      <section id="education">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a">
                  {education.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">{education.section.description}</p>
                <p className="subtitle-a">Expected Graduation Date: May 2025.</p>
                <p className="subtitle-a">Current GPA: 3.6.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                {education.years.map((year, index) => (
                  <div className="col-md-6" key={index}>
                    <Fade
                      delay={index * 200}
                      cascade={false}
                      triggerOnce={true}
                    >
                      <div className="education">
                        <table>
                          <thead>
                            <tr>
                              <th>
                                {year.semester} {year.year} Courses{year.deansList ? " (Dean's List)" : ""}
                              </th>
                              <th>
                                Total Credits:{" "}
                                {totalCreditsPerYear[index].toFixed(1)}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {year.courses.map((course, index) => (
                              <tr key={index}>
                                <td data-tooltip={course.abbreviation}>
                                  {course.name}
                                </td>
                                <td>{course.credits.toFixed(1)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Education;
