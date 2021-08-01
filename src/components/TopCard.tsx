import React from 'react'
import { View, Text, Image, ViewStyle, StyleSheet, ImageStyle, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HotelProps } from '../../types'
import COLORS from '../consts/colors'

interface Props {
    hotel: HotelProps
    onPress: (hotel: HotelProps) => void;
}

interface StyleProps {
    container: ViewStyle;
    imageStyle: ImageStyle;
    textView: ViewStyle;
}

const TopCard: React.FC<Props> = ({ hotel, onPress }) => {
    return (
        <Pressable onPress={() => onPress(hotel)}>

            <View style={styles.container}>
                <View style={{ flexDirection: 'row', position: 'absolute', zIndex: 1, right: 10, alignItems: 'center' }}>
                    <Icon name='star' size={25} color={COLORS.orange} />
                    <Text style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 18 }}>5.0</Text>
                </View>
                <Image source={hotel.image} style={styles.imageStyle} />
                <View style={styles.textView}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{hotel.name}</Text>
                    <Text style={{ fontSize: 7, color: COLORS.primary }}>{hotel.location}</Text>
                </View>
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        height: 120,
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 15,
        borderRadius: 10,
        marginRight: 20
    },
    imageStyle: {
        height: '60%',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5
    }
})

export default TopCard;
