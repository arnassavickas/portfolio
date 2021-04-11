import React from 'react';
import styles from './CardImage.module.scss';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';

interface CardImageProps {
  title: string;
  date: string;
  subHeader: React.ReactNode[] | string;
  src?: string;
  imageTitle?: string;
  description?: React.ReactNode;
  buttons?: React.ReactNode[];
  icon: React.ReactNode;
}

const CardImage: React.FC<CardImageProps> = ({
  title,
  date,
  subHeader,
  src,
  imageTitle,
  description,
  buttons,
  icon,
}) => {
  return (
    <Card raised>
      <CardHeader
        avatar={icon}
        title={
          <Typography variant='h6' component='h4'>
            {title}
          </Typography>
        }
        subheader={
          <Typography variant='subtitle2' component='h5'>
            <span className={styles.date}>{date}</span>
            <br />
            {subHeader}
          </Typography>
        }
      />
      {src && (
        <picture className={styles.image}>
          <source srcSet={`${src}.webp`} type='image/webp' />
          <source srcSet={`${src}.jpg`} type='image/jpeg' />
          <img src={`${src}.jpg`} alt={imageTitle} />
        </picture>
      )}
      {description && (
        <CardContent>
          <Typography
            variant='body2'
            component='div'
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
