import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    View,
    StyleSheet,
    ViewStyle,
    ImageStyle,
    Dimensions,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HotelProps, NavigationProps } from '../../types'
import COLORS from '../consts/colors';

interface DetailScreenProps {
    hotel: HotelProps;
}

interface StyleProps {
    header: ViewStyle;
    favoriteView: ViewStyle;
    imageStyle: ImageStyle;
    ratingView: ViewStyle;
    priceView: ViewStyle;
    priceContainer: ViewStyle;
    btnStyle: ViewStyle;
}


const { height, width } = Dimensions.get('screen');


const imageHeight = height / 2.4;

const DetailScreen: React.FunctionComponent<NavigationProps<'Detail'>> = ({ navigation, route }) => {
    const hotel = route.params?.hotel;
    if (!hotel) {
        return null;
    }

    const Rate: React.FC = () => {
        return (
            <View style={styles.ratingView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='star' color={COLORS.orange} size={25} />
                    <Icon name='star' color={COLORS.orange} size={25} />
                    <Icon name='star' color={COLORS.orange} size={25} />
                    <Icon name='star' color={COLORS.orange} size={25} />
                    <Icon name='star' color={COLORS.grey} size={25} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>4.0</Text>
                </View>
                <Text style={{ color: COLORS.grey }}>35tn reviews</Text>
            </View>
        );
    }

    const Price: React.FC<{ price: number }> = ({ price }) => {
        return (
            <View style={styles.priceContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price per night</Text>
                <View style={styles.priceView}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.primary, marginRight: 5 }}>${price}</Text>
                    <Text style={{ fontSize: 14, color: COLORS.grey, fontWeight: 'bold' }}>+breakfast</Text>
                </View>
            </View>
        );
    }


    const Button: React.FC = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log('pressed')}
                style={styles.btnStyle}
            >
                <Text style={{ fontSize: 20, color: COLORS.white }}>Book Now</Text>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView style={{ backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor='transparent' />
            <ImageBackground source={hotel.image} style={styles.imageStyle} >
                <View style={styles.header}>
                    <Icon name="arrow-back-ios" size={30} color={COLORS.white} onPress={navigation.goBack} />
                    <Icon name="bookmark-border" size={30} color={COLORS.white} />
                </View>
            </ImageBackground>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 20 }}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{hotel.name}</Text>
                    <Text style={{ color: COLORS.primary }}>{hotel.location}</Text>
                </View>
                <View style={styles.favoriteView}>
                    <Icon name="location-pin" size={28} color={COLORS.white} />
                </View>
            </View>
            <Rate />
            <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                <Text style={{ color: COLORS.primary }}>{hotel.details}</Text>
            </View>
            <Price price={hotel.price} />
            <Button />
        </ScrollView>
    )
}


const styles = StyleSheet.create<StyleProps>({
    imageStyle: {
        height: imageHeight,
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 60
    },
    favoriteView: {
        height: 70,
        width: 70,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: -60
    },
    ratingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    priceView: {
        width: width / 2,
        paddingLeft: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.secondary,
        flexDirection: 'row',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    btnStyle: {
        width: width - 40,
        height: 60,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 30
    }

})

export default DetailScreen;
