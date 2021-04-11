import React from 'react';
import styles from './ProjectsSection.module.scss';

import Timeline from '@material-ui/lab/Timeline';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import WorkIcon from '@material-ui/icons/Work';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TimelineCard from '../TimelineCard/TimelineCard';
import { Button } from '@material-ui/core';

const ProjectsSection: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section id='timeline' className={styles.section}>
      <Typography variant='h4' component='h2'>
        Projects
      </Typography>
      <Timeline align='alternate'>
        <TimelineCard
          date='02-2021 - Present'
          title='Photoproof'
          subHeader='React, Firebase, Material-UI, Jest'
          src='/images/photoproof'
          imageTitle='Photoproof screenshot'
          description='Advanced React web app built for a
              photographer to help clients select and comment
              photos after a photoshoot.'
          buttons={[
            <Button
              key='photoproofgithub'
              variant='outlined'
              href='https://github.com/arnassavickas/photoproof'
              target='_blank'
            >
              GitHub
            </Button>,
            <Button
              onClick={() => setOpen(true)}
              key='photoproofdemo'
              variant='outlined'
            >
              Demo
            </Button>,
          ]}
          icon={<PhotoLibraryIcon color='primary' />}
        />
        <TimelineCard
          date='03-2021'
          title='airidea.lt'
          subHeader='Wordpress, custom SEO, content creation'
          src='/images/airidea'
          imageTitle='Airidea.lt screenshot'
          description='Company’s website to provide details
          of supplied products and equipment for printing houses.'
          buttons={[
            <Button
              key='airideademo'
              variant='outlined'
              href='http://airidea.lt/'
              target='_blank'
            >
              Live site
            </Button>,
          ]}
          icon={<WorkIcon color='primary' />}
        />
        <TimelineCard
          date='01-2021'
          title='Letterhead'
          subHeader='React'
          src='/images/letterhead'
          imageTitle='Letterhead screenshot'
          description='Easy-to-use React web app to apply a
          company’s letterhead to a pdf file.'
          buttons={[
            <Button
              key='letterheadgithub'
              variant='outlined'
              href='https://github.com/arnassavickas/letterhead-pdf'
              target='_blank'
            >
              GitHub
            </Button>,
            <Button
              key='letterheaddemo'
              variant='outlined'
              href='https://letterhead.arnassavickas.lt/'
              target='_blank'
            >
              Demo
            </Button>,
          ]}
          icon={<PictureAsPdfIcon color='primary' />}
        />
        <TimelineCard
          date='03-2020'
          title='karolinavaitonyte.lt'
          subHeader='Wordpress, custom SEO'
          src='/images/karolinavaitonyte'
          imageTitle='karolinavaitonyte screenshot'
          description='Professional photographer’s website
          to showcase works and deliver finished photoshoots to clients.'
          buttons={[
            <Button
              key='karolinavaitonytedemo'
              variant='outlined'
              href='https://www.karolinavaitonyte.lt/'
              target='_blank'
            >
              Live site
            </Button>,
          ]}
          icon={<PhotoCameraIcon color='primary' />}
        />
      </Timeline>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Demo is private'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            At this moment, Photoproof is developed for custom usage only, thus
            demo link can only be provided in private.
          </DialogContentText>
          <DialogContentText id='alert-dialog-description'>
            If I have contacted you, there should be demo instructions attached.
            Otherwise, you can contact me, and will gladly share it with you.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color='primary' autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
