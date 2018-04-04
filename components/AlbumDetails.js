import React, { Component } from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { Button } from './Button';

class AlbumDetails extends Component{

    onPressButton = () => {
        Linking.openURL(this.props.album.url).catch(err => {console.error('Error opening \n',err)})
    }

    render(){
        const { title, artist, thumbnail_image, image } = this.props.album;
        const {
            containerStyle,
            albumArtContainer,
            thumbnailStyle,
            headerContentStyle,
            headerStyle
        } = styles;

        return (
            <Card>
                <CardSection key={title} >
                    <View style={containerStyle}>
                        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={albumArtContainer} source={{ uri: image }} />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onPressButton.bind(this)}>
                        Purchase
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    headerStyle:{
        fontSize: 18
    },
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    thumbnailStyle:{
        width: 50,
        height: 50
    },
    albumArtContainer: {
        flex: 1,
        height: 300,
        width: null
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 3
    }
}

export default AlbumDetails;