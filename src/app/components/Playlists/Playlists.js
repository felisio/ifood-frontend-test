import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://i.scdn.co/image/9d1dc6049bd57e889e76887bdf4bc96089323d28',
    title: 'Top Brasil',
    author: 'jill111',
  },
  {
    img: 'https://gds.portal5g-media.com/contentFiles/image/2016/12/VEN/principal/97273_w840h0_1482403716jamp-burger-mushroom-burger.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://gds.portal5g-media.com/contentFiles/image/2016/12/VEN/principal/97273_w840h0_1482403716jamp-burger-mushroom-burger.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
];

const Playlists = ({ list }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Playlists</Subheader>
      {list.map((item) => (
        <GridTile
          key={item.id}
          title={item.name}
          subtitle={<span>tipo: <b>{item.type}</b></span>}
        >
          <img src={item.images[0].url} alt={item.name} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Playlists