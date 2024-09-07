import React from 'react';
import { Popover, Card, Typography } from 'antd'; // Assuming you are using Ant Design
import useIntersectionObserver from './useIntersectionObserver'; // Import the custom hook

const { Meta } = Card;
const { Paragraph } = Typography;

const ProjectItem = ({ project, index }) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const [ref, isVisible] = useIntersectionObserver(options);

  return (
    <div
      ref={ref}
      className={`col-4 col-6-medium col-12-small ${isVisible ? 'animate' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Popover
        content={
          <Card style={{ maxWidth: '300px', wordWrap: 'break-word' }}>
            <Meta
              title={project.title}
              description={
                <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>
                  {project.description}
                </Paragraph>
              }
            />
          </Card>
        }
        placement="right"
        trigger="hover"
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
  );
};

export default ProjectItem;
