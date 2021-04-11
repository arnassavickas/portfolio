import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Typography from '@material-ui/core/Typography';
//import styles from './TimelineItem.module.scss';

import CardImage from '../CardImage/CardImage';

interface TimelineCardProps {
  date: string;
  title: string;
  subHeader: React.ReactNode[] | string;
  image?: string;
  imageTitle?: string;
  description?: React.ReactNode;
  buttons?: React.ReactNode[];
  icon: React.ReactNode;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  title,
  subHeader,
  src,
  imageTitle,
  description,
  buttons,
  icon,
}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant='h6' color='textSecondary'>
          {date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <CardImage
          date={date}
          title={title}
          subHeader={subHeader}
          src={src}
          imageTitle={imageTitle}
          description={description}
          buttons={buttons}
          icon={icon}
        />
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
