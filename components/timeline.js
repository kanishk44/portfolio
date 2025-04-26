import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Timeline = ({ darkMode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

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
          date="March 2025 - Present"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="text-white text-xl">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Zoomlocal Pvt. Ltd.
          </h4>
          <p>
            ● Working on a social media workflow automation tool to help
            businesses manage their social media content generation with Vue.js,
            Node.js, Firebase, & GCP.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00bbf0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #00bbf0" }}
          date="April 2024 - June 2024"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="text-white text-xl">Backend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Zoomlocal Pvt. Ltd.
          </h4>
          <p>
            ● Built a Social Media Posts Aggregator for given Industry,
            Hashtags, and social handles for platforms like Twitter, Instagram,
            Facebook & YouTube using Node.js/Vue.js and deployed it on GCP
            (Google Cloud Platform).
          </p>
        </VerticalTimelineElement>

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
          date="May 2022 - May 2023"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="text-white text-xl">Teaching Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Jersey Institute of Technology
          </h4>
          <p>
            ● Worked closely with the course instructor to ideate & design lab
            assignments for linux kernel programming.
            <br /> ● Assisted a class of 39 students with lab assignments &
            homework related to linux kernel and writing simple kernel modules.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00bbf0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #00bbf0" }}
          date="Oct 2020 - Aug 2021"
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
            ● Developed and maintained React-based code for in-house and client
            websites, reducing bug reports by 20%
            <br /> ● Collaborated with cross-functional teams in an agile
            environment, accelerating project timelines by 15%
            <br /> ● Optimized website performance by 30% and ensured
            cross-browser compatibility with 98% user satisfaction
            <br /> ● Implemented WCAG accessibility standards and utilized Git
            for streamlined workflow management
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
