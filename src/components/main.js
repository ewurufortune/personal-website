import { useState, useEffect } from "react";
import { Card, Tag, Row, Col, List } from "antd"; // Assuming you have imported Card, Tag, Row, and Col from Ant Design
import { LaptopOutlined, CodeOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { Collapse } from 'antd';
import $ from 'jquery'; 

const { Panel } = Collapse;


const { Meta } = Card;

const imageUrls = [
  "https://pbs.twimg.com/media/FlmAQpcXEAQ2903?format=png&name=small",
  "https://pbs.twimg.com/media/FlWnktIXgAACfO1?format=jpg&name=large",
  "https://pbs.twimg.com/media/FlWnm3JWAAA1bUK?format=jpg&name=large",
  "https://pbs.twimg.com/media/FlWnh4fXgAEbodv?format=jpg&name=large",
  "https://pbs.twimg.com/media/FlWndWvX0AU1WbV?format=jpg&name=large",
  "https://pbs.twimg.com/media/FlWnbDvXEAQFR2T?format=png&name=medium",
  "https://pbs.twimg.com/media/FlWnZIRXwAAfo8Y?format=png&name=small",
  "https://pbs.twimg.com/media/GBi9DdIWEAA-4EF?format=jpg&name=medium",
  "images/brick.png",
  "images/taskharbor.png",
  "images/watermark.png",
  "images/color-palette.png",
  "images/fe.png",
  "images/journal.png",
  "images/chart-sim.png",
  "images/watermark.png",
];

const projects = [
  {
    id: 1,
    title: "My Google Keeper Clone",
    description:
      "Streamline Your Thoughts: Your Personal Productivity Powerhouse!",
    imageUrl: imageUrls[0],
    link: "https://google-keeper-clone-app.vercel.app/",
  },

  {
    id: 14,
    title: "Journal by Fortune",
    description:
      "Capture Your Thoughts: Your Personal Space for Reflection and Creativity.",
    imageUrl: imageUrls[13],
    link: "https://journal-by-fortune.onrender.com/",
  },

  {
    id: 15,
    title: "Music Chart Simulator",
    description:
      "Create Your Playlist: Experience the Thrill of Music Chart Simulation.",
    imageUrl: imageUrls[14],
    link: "https://chart-sim.vercel.app/",
  },

  {
    id: 4,
    title: "EdTechX",
    description:
      "Transforming Education: Empowering Minds, One Click at a Time.",
    imageUrl: imageUrls[3],
    link: "https://edtechx.vercel.app/",
  },
  {
    id: 8,
    title: "MCN Web3",
    description: "Explore the Future: Navigating Web3 with MCN Innovations.",
    imageUrl: imageUrls[7],
    link: "https://marknet.vercel.app/",
  },
  {
    id: 7,
    title: "MongoDB Todo List",
    description:
      "Organize Your Life: Manage Tasks Seamlessly with MongoDB-Powered Todo Lists.",
    imageUrl: imageUrls[6],
    link: "https://todolist-with-database.onrender.com/",
  },
  {
    id: 12,
    title: "Image Color Palette Generator",
    description:
      "Discover the Hues: Generate Stunning Color Palettes from Your Images.",
    imageUrl: imageUrls[11],
    link: "https://image-color-palette-generator.onrender.com",
  },
  {
    id: 5,
    title: "Auto Avenue",
    description:
      "Driving the Future: Your Ultimate Destination for Car Enthusiasts.",
    imageUrl: imageUrls[4],
    link: "https://auto-avenue.netlify.app/",
  },
  {
    id: 10,
    title: "taskHarbor",
    description:
      "Navigate Your Tasks: Simplify Your Day with the taskHarbor To-Do List.",
    imageUrl: imageUrls[9],
    link: "https://taskharbour-taxw.onrender.com/",
  },
  {
    id: 6,
    title: "CareerXP",
    description:
      "Craft Your Future: Create, Share, and Generate Career Paths with Expert Advice.",
    imageUrl: imageUrls[5],
    link: "https://careerxp.onrender.com/",
  },

  {
    id: 9,
    title: "Breakout Game",
    description:
      "Relive the Classic: Experience the Timeless Thrills of the Breakout Game.",
    imageUrl: imageUrls[8],
    link: "https://github.com/ewurufortune/breakout-game",
  },
  {
    id: 2,
    title: "ReSource",
    description:
      "Unlock the Power of Curation: Crafting and Sharing Top 5s Made Effortless!",
    imageUrl: imageUrls[1],
    link: "https://oursource.onrender.com/",
  },

  {
    id: 11,
    title: "Watermarker",
    description:
      "Protect Your Work: Add Watermarks Easily with the Watermarker Tool.",
    imageUrl: imageUrls[10],
    link: "https://github.com/ewurufortune/watermark",
  },

  {
    id: 13,
    title: "About Me",
    description: "Explore My Journey: Learn More About Fortune Ewuru.",
    imageUrl: imageUrls[12],
    link: "https://fortune-ewuru.vercel.app/",
  },
  {
    id: 3,
    title: "Moving Train Autos",
    description:
      "Revolutionizing Car Sales: Your Journey Starts Here. (one of my earlier works when i first started)",
    imageUrl: imageUrls[2],
    link: "https://carsalessitefortuneewuru.netlify.app/",
  },
];

const paragraphStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  marginBottom: "20px",
};

const quoteStyle = {
  fontStyle: "italic",
  color: "#555",
  fontSize: "20px",
  marginTop: "10px",
  marginBottom: "20px",
};

export default function Main() {
  const [activeSection, setActiveSection] = useState("home");
  const [words] = useState([
    'Responsive Design',
    'Application Programming Interfaces (APIs)',
    'React',
    'Backend',
    'Full Stack Development',
    'JavaScript Frameworks | React & Next.JS',
    'Version Control',
    'SEO (Search Engine Optimization)',
    'RESTful API',
    'Web Components',
    'Authentication and Authorization',
    'Single Page Applications (SPAs)',
    'Microservices',
    'Cross-Origin Resource Sharing (CORS)',
    'Continuous Integration (CI)',
    'Scalability',
    'Code Splitting',
    'Continuous Deployment (CD)',
    'Web Accessibility (a11y)',
    'NPM (Node Package Manager)',
    'Session and Cookies'
  ]);
  let part, i = 0, offset = 0, len = words.length, forwards = true, skipCount = 0, skipDelay = 15, speed = 70;

  const wordFlick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $('.word').text(part);
    }, speed);
  };

  useEffect(() => {
    wordFlick();
  }, []); // Run the effect only once on component mount

  const handleNavLinkClick = (section, e) => {
    e.preventDefault(); // Prevent default behavior of anchor tag
    setActiveSection(section);
  };

  const tagStyle = {
    fontSize: "1.2em",
    height: "38px",
    lineHeight: "32px",
    marginBottom: 10,
    fontFamily: "Montserrat, sans-serif",
  };

  const trapeziumStyle = {
    background: "linear-gradient(135deg, #007BFF, #00BFFF)",
    clipPath: "polygon(10% 0%, 100% 0, 90% 100%, 0% 100%)",
    display: "inline",
    color: "white",
    padding: "2px 5px",
    borderRadius: "10px", // Adjust the radius as needed
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="wrapper">
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* Nav */}
      <nav id="nav">
        <a
          href="#"
          onClick={(e) => handleNavLinkClick("home", e)}
          className="icon solid fa-home"
        >
          <span>Home</span>
        </a>
        <a
          href="#work"
          onClick={(e) => handleNavLinkClick("work", e)}
          className="icon solid fa-folder"
        >
          <span>Portfolio</span>
        </a>
        {/* <a href="#contact" onClick={(e) => handleNavLinkClick('contact', e)} className="icon solid fa-envelope"><span>Contact</span></a> */}
        <a
          href="#interests"
          onClick={(e) => handleNavLinkClick("interests", e)}
          className="icon solid fa-heart"
        >
          <span>Interests</span>
        </a>
        <a
          href="https://github.com/ewurufortune?tab=repositories"
          className="icon brands fa-github"
        >
          <span>Github</span>
        </a>
        <a
          href="https://twitter.com/EwuruFortune"
          className="icon brands fa-twitter"
        >
          <span>Twitter</span>
        </a>
      </nav>

      {/* <!-- Main --> */}
      <div id="main" style={{
        borderRadius: '10px'
      }}>
        {/* <!-- Me --> */}
        {activeSection === "home" && (
          <article id="home" className="panel intro"    >
            <header>
            <h1 className="animate-character" style={{ fontWeight: 'bold', fontFamily: 'YourLuxuriousFont, sans-serif', textAlign: 'center' }}>
        FORTUNE EWURU
      </h1>             
      <p style={{ textAlign: 'center' }}>Backend Web Developer</p>
      <div style={{ textAlign: 'center', paddingTop:'5%' }} className="word"></div>
            </header>
            <a
              href="#work"
              class="jumplink pic"
              onClick={(e) => handleNavLinkClick("work", e)}
            >
              <span class="arrow icon solid fa-chevron-right">
                <span>See my work</span>
              </span>
              <img src="images/me.jpg" alt="" />
            </a>
          </article>
        )}
        {/* Interests Section */}
        {activeSection === "interests" && (
          <article id="interests" className="panel">
            <header style={{ textAlign: "center" }}>
              <h2>Technologies</h2>
            </header>
            <Row gutter={16}>
              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 1" src="images/basics.png" />}
                >
                  {/* <h3>Technology 1</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/next.png" />}
                >
                  {/* <h3>NextJS</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/sass.png" />}
                >
                  {/* <h3>Technology 2</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/node_logo.png" />}
                >
                  {/* <h3>Technology 2</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/redux.png" />}
                >
                  {/* <h3>Technology 2</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/python.png" />}
                >
                  {/* <h3>Python</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={
                    <img alt="Technology 3" src="images/mongodb_logo.png" />
                  }
                >
                  {/* <h3>Technology 3</h3> */}
                </Card>
              </Col>
              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/react.png" />}
                >
                  {/* <h3>React</h3> */}
                </Card>
              </Col>
              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={<img alt="Technology 2" src="images/flask.png" />}
                >
                  {/* <h3>Flask</h3> */}
                </Card>
              </Col>

              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Technology 2"
                      src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=300/uploads/users/1199/posts/30082/preview_image/pygame.jpg"
                    />
                  }
                >
                  {/* <h3>Technology 2</h3> */}
                </Card>
              </Col>
              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Technology 2"
                      src="      https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/512px-SQLAlchemy.svg.png
"
                    />
                  }
                >
                  {/* <h3>Technology 2</h3> */}
                </Card>
              </Col>
              <Col span={6} style={{ marginBottom: "16px" }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Technology 2"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg"
                    />
                  }
                >
                  {/* <h3>Technology 2</h3> */}
                </Card>
              </Col>
            </Row>

            <div style={{ textAlign: "center" }}>
              <header style={{ marginBottom: "20px" }}>
                <h2>Interests</h2>
              </header>
              <div style={{ marginTop: "20px" }}>
                <Tag icon={<LaptopOutlined />} color="magenta" style={tagStyle}>
                  Programming
                </Tag>
                <Tag icon={<LaptopOutlined />} color="red" style={tagStyle}>
                  APIs
                </Tag>
                <Tag icon={<LaptopOutlined />} color="gold" style={tagStyle}>
                  Database Management
                </Tag>
                <Tag icon={<CodeOutlined />} color="lime" style={tagStyle}>
                  Web Development
                </Tag>
                <Tag color="volcano" style={tagStyle}>
                  Open to Collaborations{" "}
                </Tag>
                <Tag color="orange" style={tagStyle}>
                  Technical Writing{" "}
                </Tag>
                <Tag color="blue " style={tagStyle}>
                  Backend Development{" "}
                </Tag>
                {/* Add more tags/icons as needed */}
              </div>
            </div>
          </article>
        )}
        {/* <!-- Work --> */}
        {activeSection === "work" && (
          <article id="work" className="panel">
            <header>
              <h2>My Projects</h2>
            </header>
            <>
              <p style={paragraphStyle}>
                As a devoted full-stack developer I find{" "}
                <span style={trapeziumStyle}> immense joy </span> in crafting
                lines of code that breathe life into{" "}
                <span style={trapeziumStyle}>innovative </span>and purposeful
                projects.
              </p>
              <p style={paragraphStyle}>
                <span style={trapeziumStyle}>Coding</span>, for me, is not just
                a skill; it's a passionate pursuit that allows me to weave
                together creativity and problem-solving with each keystroke.
              </p>
              <p style={paragraphStyle}>
                I thrive on the exhilarating journey of transforming abstract
                ideas into tangible solutions that make a{" "}
                <span style={trapeziumStyle}>positive impact</span> on the
                world. It's not merely about crafting algorithms and
                functionalities; it's about creating experiences, solving
                real-world <span style={trapeziumStyle}>problems</span>, and
                making a difference.
              </p>
              <p style={paragraphStyle}>
                Just as a{" "}
                <span style={trapeziumStyle}>
                  ..painter brings colors to a canvas...
                </span>
                , I bring functionality to lines of code, creating digital
                masterpieces that resonate with efficiency and elegance.
              </p>
              <p style={paragraphStyle}>
                Each project I undertake is a canvas for my creativity, where I
                strive to design solutions that not only address{" "}
                <span style={trapeziumStyle}>challenges</span> but also add a
                touch of innovation and delight.
              </p>
              <p style={quoteStyle}>
                "
                <span style={trapeziumStyle}>
                  ..Coding is my language of expression...
                </span>
                , and through it, I bring my ideas to life."
              </p>
              <p style={paragraphStyle}>
                Whether it's building{" "}
                <span style={trapeziumStyle}>applications</span> that streamline
                processes, developing{" "}
                <span style={trapeziumStyle}>software</span> that solves complex{" "}
                <span style={trapeziumStyle}>problems</span>, or crafting{" "}
                <span style={trapeziumStyle}>games</span> that captivate and
                entertain, I am fueled by the excitement of turning{" "}
                <span style={trapeziumStyle}>possibilities</span> into
                realities.
              </p>
              <p style={paragraphStyle}>
                In the vast landscape of{" "}
                <span style={trapeziumStyle}>technology</span>, I see{" "}
                <span style={trapeziumStyle}>opportunities</span> to create,
                innovate, and contribute to a world that is constantly evolving.
              </p>
              <p style={quoteStyle}>
                "Join me in this exhilarating{" "}
                <span style={trapeziumStyle}>adventure of coding..</span>, where
                every project is not just a task but a testament to the endless{" "}
                <span style={trapeziumStyle}>possibilities</span> that unfold
                when creativity meets technology."
              </p>
              <p style={paragraphStyle}>
                Let's code a future where{" "}
                <span style={trapeziumStyle}>problems</span> are opportunities,
                and every line of code is a step toward a more exciting,
                efficient, and enjoyable world.
              </p>
            </>

            <section>
              <div className="row">

              <div style={{ width: '70%', height: '70%', margin: 'auto', marginTop:'60px', marginBottom:'60px' }}>
      <a href="https://fortunehealth.vercel.app/" target="_blank" rel="noopener noreferrer">
      <img
  src='images/fortunehealth.png'
  alt="FortuneHealth landing page"
  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
/>
      </a>
      <Collapse>
  <Panel header={<h2 style={{ fontSize: '1.2rem' }}>FortuneHealth: GitHub for Healthcare Professionals</h2>} key="1">
    <div style={{ backgroundColor: '#B4D4FF', padding: '10px' }}>
      <p>
        FortuneHealth is your solution for managing and sharing hospital patient information.

        <h3>Key Features</h3>

        <ul>
          <li><strong>Patient Information Management:</strong> Easily store and manage patient records in a centralized database.</li>

          <li><strong>Test Report Templates:</strong> Create, save, and utilize test report templates to streamline the documentation of patient tests and results, ensuring consistency and efficiency in reporting processes.</li>

          <li><strong>Secure Communication:</strong> Facilitate secure communication among healthcare professionals within the system, promoting collaboration and quick decision-making.</li>

          <li><strong>Access Control:</strong> Define roles and permissions to control access to sensitive patient data, ensuring compliance with privacy regulations.</li>

          <li><strong>Audit Trail:</strong> Maintain an audit trail to track changes and access to patient information for accountability and compliance purposes.</li>
        </ul>
      </p>
    </div>
  </Panel>
</Collapse>


    </div>

                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="col-4 col-6-medium col-12-small"
                  >
                    <Popover
                      content={
                        <Card>
                          <Meta
                            title={project.title}
                            description={project.description}
                          />
                        </Card>
                      }
                    >
                      <a
                        href={project.link}
                        className="image fit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={project.imageUrl} alt={project.title} />
                      </a>
                    </Popover>
                  </div>
                ))}
                <div className="see-more-link">
                  <a
                    href="https://github.com/ewurufortune"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#007BFF", // Adjust the color as needed
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    See more...
                  </a>
                </div>
              </div>
            </section>
          </article>
        )}{" "}
        {/* <!-- Contact --> */}
        {activeSection === "contact" && (
          <article id="contact" className="panel">
            <header>
              <h2>Contact Me</h2>
            </header>
            <form action="#" method="post">
              <div>
                <div class="row">
                  <div class="col-6 col-12-medium">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div class="col-6 col-12-medium">
                    <input type="text" name="email" placeholder="Email" />
                  </div>
                  <div class="col-12">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                  <div class="col-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="6"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <input type="submit" value="Send Message" />
                  </div>
                </div>
              </div>
            </form>
          </article>
        )}
      </div>
      <button className="button-49" onClick={handleDownload}>Download Resume</button>{" "}

      {/* <!-- Footer --> */}
      <div id="footer">
        <ul class="copyright">
          <li>&copy; Fortune Ewuru.</li>
         
        </ul>
      </div>
    </div>
  );
}
