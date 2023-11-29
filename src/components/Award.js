import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Award = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Award</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <u1 className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="The 23rd NUS School of Computing Term Project Showcase (STePS) (Gold Award)"
            time="2023"
            place="National University of Singapore (NUS)"
            info="The gold award is awarded to NUS students in the CS6101 Exploration of Computer Science Research course for the excellent showcase and contribution in the field of Natural Language Processing (NLP)"
          />
          <Details
            type="NUS Community Impact (Mid-Term) Scholarship"
            time="2023"
            place="National University of Singapore (NUS)"
            info="The NUS Community Impact Scholarship is awarded to NUS undergraduates who exhibit leadership qualities in the conceptualising, planning and execution of projects in the areas of the Environmental Sustainability and/or Community Service"
          />
          <Details
            type="Student Life Award for Leadership Excellence (Distinction)"
            time="2022"
            place="National University of Singapore (NUS)"
            info="Organised by the Office of Student Affairs (OSA), the Student Life Awards aims to recognise exceptional students or student groups who have made noteworthy contributions to the University outside of their academia"
          />
          <Details
            type="Non Mihi Solum Award"
            time="2019"
            place="Anderson Junior College (AJC)"
            info='The Non Mihi Solum award which stands for "Not for Myself Alone" is given to only 1 student of each cohort, who displayed exemplary character and embodied the school motto of Non Mihi Solum while serving the community and the school'
          />
          <Details
            type="Valedictorian for the Class of 2018"
            time="2019"
            place="Anderson Junior College (AJC)"
            info='The Valedictorian award is given to the top student of each cohort, with meritorious academic achievement and excellent character'
          />
          <Details
            type="National Young Leaders Award (Merit)"
            time="2019"
            place="Halogen Foundation Singapore"
            info='A nationwide award reaching out to young leaders between 15 and 19 years old, the National Young Leader Award (NYLA) was launched in 2013 to recognise youths who are involved, engaged, show conviction in the things they do, and contributed immensely to the community around them'
          />
          <Details
            type="Outstanding Leaders Award (OLA)"
            time="2018"
            place="Anderson Junior College (AJC)"
            info='The award is to recognize students who have contributed immensely and also displayed excellent leadership in their respective CCAs'
          />
          <Details
            type="Singapore Police Force Book Prize"
            time="2018"
            place="Singapore Police Force (SPF)"
            info='The Singapore Police Force (SPF) Book Prize is awarded to students in recognition of their academic excellence and stellar co-curricular achievements. The award aims to motivate students in their continued pursuit of excellence in school and affirm the SPF’s commitment towards the holistic development of students as future leaders of Singapore. Every year, the SPF presents the SPF Book Prize to only 20 second-year Junior College students across Singapore'
          />
          <Details
            type="Singapore Armed Forces Young Leaders Award (SYLA)"
            time="2018"
            place="Singapore Armed Forces (SAF)"
            info='The SAF Young Leader Award (SYLA) was first introduced in 2014 to recognise individuals with excellent academic achievements and outstanding CCA performance. The award seeks to motivate individuals in their continued pursuit of excellence and their journey to becoming future leaders of Singapore. An average of 20 recipients are awarded every year'
          />
          <Details
            type="Destination Imagination Champion (Science)"
            time="2018"
            place="Destination Imagination Singapore"
            info='Destination Imagination (DI) is a project-based, student-driven program that teaches students to be innovative problem solvers. Using STEAM, teams of students collaborate, think outside the box and create unique solutions to one of seven different challenges in preparation for a fun, problem-solving competition'
          />
        </u1>
      </div>
    </div>
  );
};

export default Award;
