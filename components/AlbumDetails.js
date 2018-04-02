import React,{ Component } from 'react';
import { Text, Image, View } from 'react-native';
import Card from './card';
import CardSection from './CardSection';


export default class AlbumDetails extends Component{
    
    constructor(){
        super();
        this.renderAlbums = this.renderAlbums.bind(this);
    }

    renderAlbums(){
        return this.props.albums.map(album => 
            <CardSection key={album.title} >
                <Text>{album.title}</Text>
                <Text>{album.artist}</Text>
            </CardSection>
        )
    }
    
    render(){
        return(
            <Card>
                {this.renderAlbums()}
            </Card>
        )
    }
}