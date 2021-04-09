import Timeline from '@material-ui/lab/Timeline';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Typography from '@material-ui/core/Typography';
import styles from './TimelineSection.module.scss';

import TimelineCard from './TimelineCard/TimelineCard';
import { Button } from '@material-ui/core';

const TimelineSection: React.FC = () => {
  return (
    <section id='timeline' className={styles.section}>
      <Typography variant='h4' component='h2'>
        Projects
      </Typography>
      <Timeline align='alternate'>
        <TimelineCard
          date='02-2021 - Present'
          title='Photoproof'
          subHeader='React, Firebase, Material-UI'
          image='/images/photoproof.jpg'
          imageTitle='Photoproof screenshot'
          description='Advanced React web app built for a
              photographer to help clients select and comment
              photos after a photoshoot.'
          buttons={[
            <Button key='photoproofgithub' variant='outlined'>
              GitHub
            </Button>,
            <Button key='photoproofdemo' variant='outlined'>
              Demo
            </Button>,
          ]}
          icon={<PhotoCameraIcon />}
        />
        <TimelineCard
          date='03-2021'
          title='airidea.lt'
          subHeader='Wordpress, custom SEO, content creation'
          image='/images/airidea.jpg'
          imageTitle='Airidea.lt screenshot'
          description='Company’s website to provide details
          of supplied products and equipment for printing houses.'
          buttons={[
            <Button key='airideademo' variant='outlined'>
              Live site
            </Button>,
          ]}
          icon={<SettingsIcon />}
        />
        <TimelineCard
          date='01-2021'
          title='Letterhead'
          subHeader='React'
          image='/images/letterhead.jpg'
          imageTitle='Letterhead screenshot'
          description='Easy-to-use React web app to apply a
          company’s letterhead to a pdf file.'
          buttons={[
            <Button key='letterheadgithub' variant='outlined'>
              GitHub
            </Button>,
            <Button key='letterheaddemo' variant='outlined'>
              Demo
            </Button>,
          ]}
          icon={<PictureAsPdfIcon />}
        />
        <TimelineCard
          date='03-2020'
          title='karolinavaitonyte.lt'
          subHeader='Wordpress, custom SEO'
          image='/images/karolinavaitonyte.jpg'
          imageTitle='Letterhead screenshot'
          description='Professional photographer’s website
          to showcase works and deliver finished photoshoots to clients.'
          buttons={[
            <Button key='letterheaddemo' variant='outlined'>
              Live site
            </Button>,
          ]}
          icon={<PhotoLibraryIcon />}
        />
      </Timeline>
    </section>
  );
};

export default TimelineSection;
