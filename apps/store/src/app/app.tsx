import { StoreFeatureGameDetail } from '@egghead/store/feature-game-detail';
import { Header } from '@egghead/store/ui-shared';
import { formatRating } from '@egghead/store/util-formatters';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { getAllGames } from '../fake-api';
import './app.scss';

export const App = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="container">
        <div className="games-layout">
          {getAllGames().map((x) => (
            <Card
              key={x.id}
              onClick={() => history.push(`/game/${x.id}`)}
              className="game-card"
            >
              <CardActionArea>
                <CardMedia
                  className="game-card-media"
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="game-rating"
                  >
                    <strong>Rating:</strong> {formatRating(x.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <Route path="/game/:id" component={StoreFeatureGameDetail} />
      </div>
    </>
  );
};

export default App;
