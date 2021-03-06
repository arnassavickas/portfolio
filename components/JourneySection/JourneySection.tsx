import React from 'react';
import styles from './JourneySection.module.scss';

import Timeline from '@material-ui/lab/Timeline';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import SchoolIcon from '@material-ui/icons/School';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import Typography from '@material-ui/core/Typography';

import TimelineCard from '../TimelineCard/TimelineCard';
import { Button } from '@material-ui/core';

const JourneySection: React.FC = () => {
  return (
    <section id='timeline' className={styles.section}>
      <Typography variant='h4' component='h2'>
        Experience and Education
      </Typography>
      <Typography variant='h5' component='h3'>
        Courses
      </Typography>

      <Timeline align='alternate'>
        <TimelineCard
          date='12/2020 - 01/2021'
          title='Full Stack open'
          subHeader='Course by Helsinki University'
          description={
            <div>
              <div>Got introduced to full-stack web development.</div>
              <div>
                Tech used: React Hooks, TypeScript, Redux, Node.js, Express,
                MongoDB, GraphQL, ESlint, Prettier, Jest, Cypress, Heroku,
                Material-UI
              </div>
            </div>
          }
          buttons={[
            <Button
              key='fullstackopengithub'
              variant='outlined'
              href='https://github.com/arnassavickas/Full-Stack-Open'
              target='_blank'
            >
              More Details
            </Button>,
            <Button
              key='fullstackopencourse'
              variant='outlined'
              href='https://fullstackopen.com/en/'
              target='_blank'
            >
              Course
            </Button>,
          ]}
          icon={<CodeTwoToneIcon color='primary' />}
        />
        <TimelineCard
          date='09/2020 - 10/2020'
          title='CS50x Introduction to Computer Science'
          subHeader='Course by Harvard University'
          description={
            <div>
              <div>The course, that sparked my love for programming.</div>
              <div>Tech used: C, Python, Flask, SQL, HTML, CSS</div>
            </div>
          }
          buttons={[
            <Button
              key='cs50github'
              variant='outlined'
              href='https://github.com/arnassavickas/CS50-2020'
              target='_blank'
            >
              More Details
            </Button>,
            <Button
              key='cs50course'
              variant='outlined'
              href='https://cs50.harvard.edu/x/'
              target='_blank'
            >
              Course
            </Button>,
          ]}
          icon={<CodeTwoToneIcon color='primary' />}
        />
      </Timeline>
      <Typography variant='h5' component='h3'>
        Jobs
      </Typography>
      <Timeline align='alternate'>
        <TimelineCard
          date='09/2016 - Present'
          title='Sales Manager'
          subHeader={[
            'Air Idea, UAB (Vilnius)',
            <br key='br' />,
            'Supplies and consulting company for printing houses in Baltics',
          ]}
          description={
            <div>
              <div>Regular communication with ~50 suppliers and end- users</div>
              <div>Taking care of custom project developments</div>
              <div>Conflict management during delays or quality issues</div>
            </div>
          }
          icon={<WorkOutlineOutlinedIcon color='primary' />}
        />
        <TimelineCard
          date='08/2015 - Present'
          title='Internet Assessor'
          subHeader='Lionbridge (Remote Contract)'
          description={
            <div>
              <div>Evaluation of search engine results</div>
              <div>Website quality and relevance assessment</div>
              <div>Rating string translations</div>
            </div>
          }
          icon={<WorkOutlineOutlinedIcon color='primary' />}
        />
      </Timeline>
      <Typography variant='h5' component='h3'>
        University
      </Typography>
      <Timeline align='alternate'>
        <TimelineCard
          date='2018 - 2020'
          title='Master of Printing Engineering'
          subHeader='Vilnius Gediminas Technical University'
          icon={<SchoolIcon color='primary' />}
        />
        <TimelineCard
          date='2014 - 2018'
          title='Bachelor of Printing Engineering'
          subHeader='Vilnius Gediminas Technical University'
          icon={<SchoolIcon color='primary' />}
        />
      </Timeline>
    </section>
  );
};

export default JourneySection;
