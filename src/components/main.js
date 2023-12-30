import { useState } from "react";
import { Card, Tag, Row, Col,List } from 'antd'; // Assuming you have imported Card, Tag, Row, and Col from Ant Design
import {
    LaptopOutlined,
    CodeOutlined
  } from '@ant-design/icons';
  import { Popover, } from 'antd';

  const { Meta } = Card;

    const imageUrls = [
      'https://pbs.twimg.com/media/FlmAQpcXEAQ2903?format=png&name=small',
      'https://pbs.twimg.com/media/FlWnktIXgAACfO1?format=jpg&name=large',
      'https://pbs.twimg.com/media/FlWnm3JWAAA1bUK?format=jpg&name=large',
      'https://pbs.twimg.com/media/FlWnh4fXgAEbodv?format=jpg&name=large',
      'https://pbs.twimg.com/media/FlWndWvX0AU1WbV?format=jpg&name=large',
      'https://pbs.twimg.com/media/FlWnbDvXEAQFR2T?format=png&name=medium',
      'https://pbs.twimg.com/media/FlWnZIRXwAAfo8Y?format=png&name=small',
      'https://pbs.twimg.com/media/GBi9DdIWEAA-4EF?format=jpg&name=medium',
      'images/pic09.jpg',
      'images/pic10.jpg',
      'images/pic11.jpg',
      'images/pic12.jpg',
    ];
  
    const projects = [
      {
        id: 1,
        title: 'Project 1 Title',
        description: 'Description for Project 1.',
        imageUrl: imageUrls[0],
      },
      {
        id: 2,
        title: 'Project 2 Title',
        description: 'Description for Project 2.',
        imageUrl: imageUrls[1],
      },
      {
        id: 3,
        title: 'Project 3 Title',
        description: 'Description for Project 3.',
        imageUrl: imageUrls[2],
      },
      {
        id: 4,
        title: 'Project 4 Title',
        description: 'Description for Project 4.',
        imageUrl: imageUrls[3],
      },
      {
        id: 5,
        title: 'Project 5 Title',
        description: 'Description for Project 5.',
        imageUrl: imageUrls[4],
      },
      {
        id: 6,
        title: 'Project 6 Title',
        description: 'Description for Project 6.',
        imageUrl: imageUrls[5],
      },
      {
        id: 7,
        title: 'Project 7 Title',
        description: 'Description for Project 7.',
        imageUrl: imageUrls[6],
      },
      {
        id: 8,
        title: 'Project 8 Title',
        description: 'Description for Project 8.',
        imageUrl: imageUrls[7],
      },
      {
        id: 9,
        title: 'Project 9 Title',
        description: 'Description for Project 9.',
        imageUrl: imageUrls[8],
      },
      {
        id: 10,
        title: 'Project 10 Title',
        description: 'Description for Project 10.',
        imageUrl: imageUrls[9],
      },
      {
        id: 11,
        title: 'Project 11 Title',
        description: 'Description for Project 11.',
        imageUrl: imageUrls[10],
      },
      {
        id: 12,
        title: 'Project 12 Title',
        description: 'Description for Project 12.',
        imageUrl: imageUrls[11],
      },
    ];

export default function Main() {
    const [activeSection, setActiveSection] = useState('home');
  
    const handleNavLinkClick = (section, e) => {
        e.preventDefault(); // Prevent default behavior of anchor tag
        setActiveSection(section);
      };

      const tagStyle = {
        fontSize: '1.2em',
        height: '38px',
        lineHeight: '32px',
        marginBottom: 10,
        fontFamily: 'Montserrat, sans-serif',
      };
      
  return (
    <div id="wrapper">
    {/* Nav */}
    <nav id="nav">
      <a href="#" onClick={(e) => handleNavLinkClick('home', e)} className="icon solid fa-home"><span>Home</span></a>
      <a href="#work" onClick={(e) => handleNavLinkClick('work', e)} className="icon solid fa-folder"><span>Work</span></a>
      {/* <a href="#contact" onClick={(e) => handleNavLinkClick('contact', e)} className="icon solid fa-envelope"><span>Contact</span></a> */}
      <a href="#interests" onClick={(e) => handleNavLinkClick('interests', e)} className="icon solid fa-heart"><span>Interests</span></a>
      <a href="https://github.com/ewurufortune?tab=repositories" className="icon brands fa-github"><span>Github</span></a>
      <a href="https://twitter.com/EwuruFortune" className="icon brands fa-twitter"><span>Twitter</span></a>

    </nav>

    {/* <!-- Main --> */}
        <div id="main">

            {/* <!-- Me --> */}
                

                {activeSection === 'home' && (
          <article id="home" className="panel intro">
                    <header>
                        <h1>Fortune Ewuru</h1>
                        <p>Backend Web Development</p>
                    </header>
                    <a href="#work" class="jumplink pic"  onClick={(e) => handleNavLinkClick('work', e)} >
                        <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
                        <img src="images/me.jpg" alt="" />
                    </a>
                </article>         
        )}
        
         {/* Interests Section */}
         {activeSection === 'interests' && (
          <article id="interests" className="panel">
          <header style={{ textAlign: 'center' }}>
              <h2>Technologies</h2>
            </header>
            <Row gutter={16}>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 1" src="images/basics.png" />}
              >
                <h3>Technology 1</h3>
              </Card>
            </Col>

            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/next.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/sass.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>  <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/node_logo.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>  <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/redux.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>  <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/react.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/python.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 2" src="images/flask.png" />}
              >
                <h3>Technology 2</h3>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                cover={<img alt="Technology 3" src="images/mongodb_logo.png" />}
              >
                <h3>Technology 3</h3>
              </Card>
            </Col>

            {/* Add more Col components as needed */}
          </Row>

          <div style={{ textAlign: 'center' }}>
      <header style={{ marginBottom: '20px' }}>
        <h2>Interests</h2>
      </header>
      <div style={{ marginTop: '20px' }}>
        <Tag icon={<LaptopOutlined />} color="#2db7f5" style={tagStyle}>
          Programming
        </Tag>
        <Tag icon={<LaptopOutlined />} color="#2db7f5" style={tagStyle}>
          APIs
        </Tag>
        <Tag icon={<LaptopOutlined />} color="#2db7f5" style={tagStyle}>
          Database Management
        </Tag>
        <Tag icon={<CodeOutlined />} color="#87d068" style={tagStyle}>
          Web Development
        </Tag>
        <Tag color="#108ee9" style={tagStyle}>
Open to Collaborations        </Tag>
<Tag color="#108ee9" style={tagStyle}>
Technical Writing      </Tag>
<Tag color="#108ee9" style={tagStyle}>
Backend Development       </Tag>
        {/* Add more tags/icons as needed */}
      </div>
    </div>     
              </article>
        )}

            {/* <!-- Work --> */}
                {activeSection === 'work' && (
          <article id="work" className="panel">

          <header>
                        <h2>Work</h2>
                    </header>
                    <p>
                        Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                        luctus elit eget interdum.
                    </p>
                    <section>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-4 col-6-medium col-12-small">
            <Popover
              content={
                <Card>
                  <Meta title={project.title} description={project.description} />
                </Card>
              }
              title={project.title}
            >
              <a href="#" className="image fit">
                <img src={project.imageUrl} alt={project.title} />
              </a>
            </Popover>
          </div>
        ))}
      </div>
  
    </section>
                          </article>
        )}            {/* <!-- Contact --> */}
                {activeSection === 'contact' && (
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
                                    <textarea name="message" placeholder="Message" rows="6"></textarea>
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


    {/* <!-- Footer --> */}
        <div id="footer">
            <ul class="copyright">
                <li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>

</div>
  )
}
