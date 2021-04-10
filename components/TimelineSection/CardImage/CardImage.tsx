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
  image: string;
  imageTitle: string;
  description: string;
  buttons: React.ReactNode[];
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
}) => {
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={
          <>
            <span className={styles.date}>{date}</span>
            <br />
            {subHeader}
          </>
        }
      />
      <CardMedia
        classes={{ root: styles.image }}
        image={image}
        title={imageTitle}
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>{buttons}</CardActions>
    </Card>
  );
};

export default CardImage;
