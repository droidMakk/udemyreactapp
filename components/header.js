import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { viewStyle } = styles;
    const { title } = props;

    return (
        <View style={viewStyle} >
            <Text style={{fontSize: 20}}>
                {title}
            </Text>
        </View>
    )
}


const styles = {
    viewStyle: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems : 'center',
        position: 'relative',
        paddingTop: 10, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        height: 60,
        shadowColor: '#000'
    }
}

export default Header;