import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <u1 className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Undergraduate Teaching Assistant"
            company="National University of Singapore (NUS)"
            companyLink="https://nus.edu.sg/"
            time="Aug 2023-Dec 2023"
            address="21 Lower Kent Ridge Road, Singapore"
            work="Taught a class of 37 students for the module CS2040: Data Structure and Algorithms
            | It covers data structures (linked lists, stacks, queues, hash tables, binary heaps, trees, and graphs), searching and sorting algorithms, and analysis of algorithms"
          />
          <Details
            position="Data and AI Intern"
            company="International Business Machines (IBM)"
            companyLink="https://www.ibm.com/us-en/"
            time="Aug 2023-Dec 2023"
            address="Marina Bay Financial Tower 2, Singapore"
            work="Contributed to the IBM Data and AI team by exploring and building AI models with the new Watsonx.ai platform
            | Conduct exploratory data analysis, refine ML algorithms, and deploy AI solutions, including NLP models, driving actionable insights and improved business outcomes for clients
            | Collaborated with a cross-functional team of Data Scientists, Architects, and Software Engineers to construct and deploy machine learning solutions, solving complex enterprise-scale problems"
          />
          <Details
            position="Machine Learning Intern"
            company="Agency for Science, Technology & Research (A*STAR)"
            companyLink="https://www.a-star.edu.sg/"
            time="May 2023-Dec 2023"
            address="I2R, Singapore"
            work="Contributed to the Wound Healing Prediction with Machine Learning project as part of a joint attachment with A*STAR and SRIS
            | Developed predictive models using machine learning algorithms such as kNN, logistic regression, Naive Bayes, Random Forest, XGboost, Gradient Boosting, and LightGBM
            | Utilized Python libraries including scikit-learn, Keras, and TensorFlow for model development and training"
          />
          <Details
            position="Research Analyst"
            company="Skin Research Institute of Singapore (SRIS)"
            companyLink="https://www.a-star.edu.sg/sris"
            time="May 2023-Dec 2023"
            address="11 Mandalay Road, Singapore"
            work="Proficient in using Python for data analysis, including data cleaning and manipulation with libraries such as NumPy and Pandas
            | Skilled in creating data visualizations using the Matplotlib and Seaborn libraries in Python
            | Experienced in applying statistical analysis techniques such as regression analysis and hypothesis testing to draw insights from data"
          />
          <Details
            position="Data Analyst and Corporate Planning Intern"
            company="Economic Development Board Investment (EDBI)"
            companyLink="https://edbi.com/home/"
            time="Nov 2022-Feb 2023"
            address="250 North Bridge Road, Singapore"
            work="Developed and maintained KPI reports to track progress against specific EDBI goals
            | Conducted trend analysis to identify potential areas of growth for EDBI and provided insights and recommendations to senior management based on data analysis
            | Researched and analysed data to implement data-driven solutions to support corporate planning initiatives with data visualisation"
          />
          <Details
            position="Contestant"
            company="NUS AI In Healthcare Datathon"
            companyLink="https://sg-ai.org/"
            time="Dec 2022"
            address="21 Lower Kent Ridge Road, Singapore"
            work="Created statistical analysis using R and Python to find the optimal temperature range for ICU patients
            | Analysed using the Generalized Additive Model (GAM) to pinpoint optimal range
            | Created a predictive model to forecast inpatient length of stay using machine learning techniques"
          />
        </u1>
      </div>
    </div>
  );
};

export default Experience;
