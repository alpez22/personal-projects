import React from "react";
import contentData from "../content.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

// icons used will be listed below
// make sure the react icon is imported
const iconComponents = {
  FaGithub: FaGithub,
  MdEmail: MdEmail,
  FaLinkedin: FaLinkedin
};

const Footer = () => {
  const general = contentData.general;

  return (
    <Fade triggerOnce={true} direction="up">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  {contentData.footer.line_one}{" "}
                  <strong>
                    {general.first_name} {general.middle_name}{" "}
                    {general.last_name}
                  </strong>
                  .
                </p>
                <div className="post-date">
                        {contentData.footer.links.map((link, index) => {
                          const IconComponent = iconComponents[link.icon];
                          return (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              data-tooltip={link.data_tooltip}
                            >
                              <IconComponent />{" "}
                              {/* Render the selected icon component */}
                            </a>
                          );
                        })}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
