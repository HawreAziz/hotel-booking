import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import COLORS from '../consts/colors';

interface Props {
    price: number;
}

interface StyleProps {
    container: ViewStyle;
    textStyle: TextStyle;
}

const PriceView: React.FC<Props> = ({ price }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
    }
});

export default PriceView;
