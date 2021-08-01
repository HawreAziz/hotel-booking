import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../consts/colors'

interface Props { }

interface StyleProps {
    container: ViewStyle;
    textStyle: TextStyle;
}

const Search = () => {
    return (
        <View style={styles.container}>
            <Icon name='search' size={38} />
            <TextInput style={styles.textStyle} placeholder='Search' />
        </View>
    )
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        padding: 10,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    textStyle: {
        fontSize: 22,
        color: COLORS.grey,
        marginLeft: 5,
    }
})

export default Search;
