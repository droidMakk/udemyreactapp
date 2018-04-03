import React,{ Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Card from './card';
import CardSection from './CardSection';


class AlbumDetails extends Component {
    render(){
        const { title, artist, thumbnail_image, image } = this.props.album;
        const { 
            imageContainer, 
            containerStyle,
            albumArtContainer
        } = styles;

        return (
            <Card>
                <CardSection key={title} >
                        <View  style={containerStyle}>
                            <View style={imageContainer}>
                                <Image source= { {uri : thumbnail_image} } />
                            </View>
                            <View>
                                <Text>{title}</Text>
                                <Text>{artist}</Text>
                            </View>
                        </View>
                </CardSection>
                <CardSection>
                    <View style={albumArtContainer}>
                        <Image source={{ uri: image }} />
                    </View>
                </CardSection>
                <CardSection>
                    <TouchableOpacity>
                        <Text>
                            Click Me!
                        </Text>
                    </TouchableOpacity>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    containerStyle: {
        display: 'flex',
        alignContent: 'space-around'
    },
    imageContainer: {
        width: 20
    },
    albumArtContainer: {
        flex: 1,
        alignSelf: 'stretch',
        width: 100
    }
}

export default AlbumDetails;