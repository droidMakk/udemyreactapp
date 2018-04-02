import React,{ Component } from "react";
import { View } from 'react-native';
import Header from './header';
import AlbumDetails from './AlbumDetails';
import axios from 'axios';

// GET https://rallycoding.herokuapp.com/api/music_albums

export default class AlbumList extends Component {
    constructor(){
        super();
        this.state = {
            albums: [],
            albumStatus: ' '
        };
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({albums: response.data, albumStatus: response.status});
        });
    }

    render(){
        return(
            <View>
                <Header title="Album List" status={this.state.albumStatus} />
                <AlbumDetails albums={this.state.albums}/>
            </View>
        );
    }
}
