import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    const { title, status } = this.props;
    
    return (
        <View style={viewStyle} >
            <Text style={textStyle} >
                {title}
            </Text>
            <Text>
                {status}
            </Text>
        </View>
    )
}


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems : 'center'
    },
    textStyle: {
        
    }
}

export default Header;