import React from 'react';
import styles from './CardImage.module.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';

interface CardImageProps {
  title: string;
  date: string;
  subHeader: string;
  image?: string;
  imageTitle?: string;
  description?: React.ReactNode;
  buttons?: React.ReactNode[];
  icon: React.ReactNode;
}
//TODO doesn't fit on mobile
//TODO add date on mobile
const CardImage: React.FC<CardImageProps> = ({
  title,
  date,
  subHeader,
  image,
  imageTitle,
  description,
  buttons,
  icon,
}) => {
  return (
    <Card raised>
      <CardHeader
        avatar={icon}
        title={<Typography variant='h6'>{title}</Typography>}
        subheader={
          <Typography variant='subtitle2'>
            <span className={styles.date}>{date}</span>
            <br />
            {subHeader}
          </Typography>
        }
      />
      {image && (
        <CardMedia
          classes={{ root: styles.image }}
          image={image}
          title={imageTitle}
        />
      )}
      {description && (
        <CardContent>
          <Typography
            variant='body2'
            component='p'
            className={styles.description}
          >
            {description}
          </Typography>
        </CardContent>
      )}
      {buttons && <CardActions>{buttons}</CardActions>}
    </Card>
  );
};

export default CardImage;
