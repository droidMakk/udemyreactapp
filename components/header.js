import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { viewStyle } = styles;
    const { title } = props;

    return (
        <View style={viewStyle} >
            <Text>
                {title}
            </Text>
        </View>
    )
}


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems : 'center'
    }
}

export default Header;