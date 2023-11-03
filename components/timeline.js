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
            ● Spearheaded the development, debugging, and continuous maintenance
            of React-based code for both in-house and client websites, resulting
            in a 20% reduction in post-launch bug reports.
            <br /> ● Collaborated seamlessly with cross-functional teams,
            including designers and technical experts, in a startup setting,
            contributing to accelerating project timelines by 15% through
            effective teamwork and agile methodologies.
            <br /> ● Successfully followed agile methodologies, actively
            participating in daily scrum meetings and sprint planning,
            maintaining open and effective communication channels with
            stakeholders, resulting in a 10% increase in project alignment with
            business goals.
            <br /> ● Conducted rigorous cross-browser compatibility and
            responsive design testing on websites, ensuring optimal user
            experiences and achieving a 98% satisfaction rate among end-users
            due to the elimination of compatibility issues.
            <br /> ● Established performance optimization techniques, resulting
            in a 30% improvement in website loading times and overall user
            satisfaction.
            <br /> ● Ensured compliance with WCAG accessibility standards,
            making websites accessible to all users and expanding the audience
            reach.
            <br /> ● Developed a reusable component library in React,
            streamlining development processes and reducing development time by
            15%.
            <br /> ● Proficiently utilized code versioning tools like Git and
            collaboration platforms such as GitHub to streamline team workflows
            and code management.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
