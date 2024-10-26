import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Fade } from 'react-awesome-reveal';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pl: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const JobList  = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobList = {
        "Bartels-Langness (BELA)": {
            position: "Software Developer",
            dates: "September 2024 – October 2024",
            points: [
                "Worked as a Full-Stack-Developer developing an internal tool that fetches and displays company information using NextJs and TanStack Query.",
                "Worked as a Backend-Developer developing an internal tool with NextJs and Payload, following the specifications and in collaboration with the Frontend and UI/UX-Design teams to build the necessary endpoints, collections and services.",
                "Prepared data-structures, database integration, pipelines, CI-Files, tests, jobs and runners in GitLab for proper deployment and testing.",
                "All projects were agile via SCRUM, doing sprints twice a week, and using tickets with Redmine."
            ],
        },
      "lambda9 GmbH": {
          position: "Software Developer | Apprenticeship",
          dates: "August 2021 – July 2024",
          points: [
              "Worked on several projects developing web applications with a focus on Frontend using TypeScript/JavaScript and React.",
              "Worked on different Backend projects using Kotlin, Undertow and PostgresSQL for the databases.",
              "Used Kotlin with Wicket to internationalise a full project/product by adding different functionalities that made the contents dynamic and allowed for their automatic replacement to different languages based on the browser's language or the language choice selected.",
              "Developed a plugin for Nextcloud that implemented one of the company's products into the platform for easier and faster access using PHP and VueJs",
              "All projects were agile via SCRUM, doing weekly sprints, and using tickets with Redmine."
          ],
      },
      "Lace Lingerie": {
          position: "Video Producer | MiniJob",
          dates: "February 2021 – April 2021",
          points: [
              "Created and edited videos of the various clothing items.",
              "Optimisation of the video creation process by automating certain parts of it, creating templates and configuring the video editing software for faster and more efficient work.",
          ],
      },
    }

  return (
        <Fade triggerOnce delay={300}>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <div className="joblist-container">
                <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                sx={{
                borderRight: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                    color: '#9BA4B5',
                    fontFamily: `'Dosis', sans-serif !important`,
                },
                '& .Mui-selected': {
                    color: '#FF5199FF !important',
                    fontWeight: `bold`
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: '#ff5199',
                },
                }}
                >
                    {Object.keys(jobList).map((key) => (
                        <Tab label={key} key={key} />
                    ))}
                </Tabs>
                {Object.keys(jobList).map((key, i) => (
                    <TabPanel value={value} index={i}>
                        <span className="job-position">
                            {jobList[key]["position"]}
                        </span>
                        <div className="job-dates">
                            {jobList[key]["dates"]}
                        </div>
                        
                            {!Array.isArray(jobList[key]) ? (
                                <div className="job-container">
                                    {jobList[key]["points"]?.map((point, i) => (
                                        <ul className="job-description" key={i}>
                                            <Fade 
                                            triggerOnce
                                            direction='right' 
                                            delay={`${i*5}`} 
                                            >
                                            <li className="point" key={i}>{point}</li>
                                            </Fade>
                                        </ul>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    {jobList[key].map((job) => (
                                        <div className="job-container">
                                            <span className="job-position">
                                                {job.position}
                                            </span>
                                            <div className="job-dates">
                                                {job.dates}
                                            </div>
                                            {job.points.map((point, i) => (
                                                <ul className="job-description" key={i}>
                                                <Fade 
                                                triggerOnce
                                                direction='right' 
                                                delay={`${i*5}`} 
                                                >
                                                <li className="point" key={i}>{point}</li>
                                                </Fade>
                                                </ul>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                    </TabPanel>
                ))}
                </div>
            </Box>
        </Fade>
  );
}

export default JobList;