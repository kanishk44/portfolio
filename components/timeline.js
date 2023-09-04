import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Timeline = ({ darkMode }) => {
  return (
    <section className="py-10">
      <h2 className="text-3xl text-center py-10 dark:text-slate-50">
        Experience
      </h2>
      <VerticalTimeline lineColor="#00bbf0">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00bbf0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #00bbf0" }}
          date="Sept 2021 - May 2023"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<FaGraduationCap />}
        >
          <h3 className="text-white text-xl">
            New Jersey Institute of Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ying Wu College of Computing
          </h4>
          <p>
            Candidate for Master of Science in Computer Science with a GPA of
            3.85, with intensive coursework in Web Development, Software Design
            &amp; Production Methodology, Cloud Computing, Data Structures &amp;
            Algorithms, Operating Systems Design, and Data Management & Systems
            Design.
          </p>
        </VerticalTimelineElement>

        {/* Add more VerticalTimelineElement components for other experiences */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00bbf0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #00bbf0" }}
          date="Nov 2021 - Present"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="text-white text-xl">Full-Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Jersey Institute of Technology
          </h4>
          <p>
            Collaborated closely with the development team to conceptualize,
            design, and refine web applications using React, Node.js, Express,
            and MongoDB. Contributed to the creation of interactive and
            user-friendly interfaces that aligned with project requirements and
            facilitated seamless user experiences. Played a key role in
            developing full stack applications by implementing frontend
            components using React, building RESTful APIs with Node.js and
            Express, and integrating MongoDB databases for data storage.
            Provided hands-on guidance and assistance to team members, fostering
            an environment of knowledge sharing and mutual support. Assisted in
            designing and implementing new features for web applications,
            ensuring they met functional specifications and followed best coding
            practices. Conducted thorough testing of features, identifying, and
            addressing any bugs or issues to deliver high-quality software to
            users. Utilized MongoDB to design and implement database schemas,
            ensuring efficient data storage and retrieval for the applications.
            Employed indexing and query optimization techniques to enhance
            database performance and responsiveness. Conducted code reviews,
            evaluating team members&apos; code for adherence to coding
            standards, functionality, and overall quality. Provided constructive
            feedback and suggestions for improvement, fostering a culture of
            continuous learning and growth. Contributed to the deployment
            process of applications using tools like Docker, ensuring smooth
            transitions from development to production environments.
            Collaborated with DevOps teams to address any deployment-related
            issues and optimize application performance. Participated in team
            discussions to provide feedback on code quality, architecture, and
            application design, encouraging iterative development and
            improvement.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00bbf0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #00bbf0" }}
          date="Oct 2019 - Aug 2021"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="text-white text-xl">Vidushi Infotech SSP Pvt. Ltd.</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Frontend Developer
          </h4>
          <p>
            Developed and maintained robust, scalable, and user-friendly web
            applications for both in-house projects and client websites, using
            React for frontend components and SASS for styling. Utilized best
            practices and coding standards to write clean, efficient, and
            documented code that met project requirements and design
            specifications. Worked closely with multidisciplinary teams,
            including designers and technical experts, in a fast-paced startup
            environment to bring innovative web projects to life. Engaged in
            collaborative brainstorming sessions to contribute ideas, provide
            technical insights, and ensure seamless integration of design and
            functionality. Participated actively in cross-functional meetings,
            sharing progress updates, and seeking feedback to align development
            efforts with project goals. Embraced an agile development approach,
            participating in daily scrums to provide updates on progress,
            identify potential roadblocks, and adjust tasks as needed to meet
            sprint objectives. Collaborated with product owners and stakeholders
            to refine user stories and ensure clear understanding of project
            requirements and priorities. Adapted to changing project needs and
            requirements, effectively managing priorities and delivering
            incremental updates within sprint cycles. Conducted thorough testing
            of websites across various browsers and devices to ensure consistent
            user experience and cross-browser compatibility. Employed responsive
            design principles and media queries to create layouts that
            seamlessly adjusted to different screen sizes, contributing to an
            enhanced user experience. Implemented comprehensive testing
            strategies, including unit testing and integration testing, to
            identify and rectify potential bugs, glitches, and performance
            bottlenecks. Collaborated with quality assurance teams to perform
            thorough testing, ensuring high-quality, bug-free deliverables that
            met project specifications and user expectations.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
