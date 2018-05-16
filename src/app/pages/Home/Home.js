import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import axios from "axios";

import './Home.css';
import Playlists from '../../components/Playlists/Playlists'
import { AUTHORIZATION, URL } from '../../config'

class Home extends Component {
  state = {
    playlists: []
  };

  async componentDidMount() {
    const { data } = await axios(URL, {
      headers: { Authorization: AUTHORIZATION }
    });
    this.setState({ playlists: data.playlists.items });
  }


  render() {
    return (
      <div className="App">
        <AppBar title="Spotifood" showMenuIconButton={false} />
        <main className="App-main">
          <Playlists list={this.state.playlists} />
        </main>
      </div>
    );
  }
}

export default Home;