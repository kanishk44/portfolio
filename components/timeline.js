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
          date="Sept - Dec 2022"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<GiNotebook />}
        >
          <h3 className="text-white text-xl">
            Operating Systems Teaching Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ying Wu College of Computing
          </h4>
          <p>
            Worked closely with the course instructor to ideate & design lab
            assignments for linux kernel programming Guided students during lab
            assignments related to building linux kernel and writing simple
            kernel modules Helped students in homework problems related to OS
            concepts such as scheduling, memory management, deadlock, and
            paging, etc.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00bbf0", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #00bbf0" }}
          date="May 2022- May 2023"
          iconStyle={{
            background: "#00bbf0",
            color: "#fff",
            boxShadow: "0 0 0 4px #00bbf0",
          }}
          // Replace IconComponent with your custom icon component
          icon={<FaUser />}
        >
          <h3 className="text-white text-xl">Desk Attendant</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Department of Residence Life, NJIT
          </h4>
          <p>
            Handled the Front Desk Operations, Administrative Tasks, and
            assisted students with their queries.
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
            Collaborated with teams across design, tech, and product in a
            fast-paced startup environment. Developed, documented and maintained
            code for in-house and client websites using HTML, SCSS, Bootstrap,
            JavaScript and jQuery. Tested sites in various browsers and devices
            to ensure cross-browser compatibility and responsiveness.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
