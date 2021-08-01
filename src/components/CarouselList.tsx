import React from 'react'
import {
    Image,
    ImageStyle,
    StyleSheet,
    View,
    ViewStyle,
    Dimensions,
    Text,
    Animated,
    Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HotelProps } from '../../types';
import COLORS from '../consts/colors'
import PriceView from './PriceView';




interface Props {
    hotels: HotelProps[]
    goToDetail: (hotel: HotelProps) => void;
}

interface StyleProps {
    imageStyle: ImageStyle;
    card: ViewStyle;
    textView: ViewStyle;
    horizontalView: ViewStyle;
    overLay: ViewStyle;
}


const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const CarouselList: React.FC<Props> = ({ hotels, goToDetail }) => {
    const [activeCardIndex, setActiveCardIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const Rate: React.FC = () => {
        return (
            <View style={{ ...styles.horizontalView, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name='star' size={18} color={COLORS.orange} />
                    <Icon name='star' size={18} color={COLORS.orange} />
                    <Icon name='star' size={18} color={COLORS.orange} />
                    <Icon name='star' size={18} color={COLORS.orange} />
                    <Icon name='star' size={18} color={COLORS.grey} />
                </View>
                <Text style={{ fontSize: 12, color: COLORS.primary }}>36tn reviews</Text>
            </View>
        );
    }


    const Card: React.FC<{ hotel: HotelProps, index: number }> = ({ hotel, index }) => {
        const inputRange = [
            (index - 1) * cardWidth,
            index * cardWidth,
            (index + 1) * cardWidth
        ]

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 0, 0.7]
        });

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.0, 0.8]
        })

        return (
            <Pressable onPress={() => index === activeCardIndex && goToDetail(hotel)} >
                <Animated.View style={{ ...styles.card, transform: [{ scale }] }}>
                    <PriceView price={hotel.price} />
                    <Animated.View style={{ ...styles.card, ...styles.overLay, opacity }} />
                    <Image source={hotel.image} style={styles.imageStyle} />
                    <View style={styles.textView}>
                        <View style={styles.horizontalView}>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{hotel.name}</Text>
                                <Text style={{ fontSize: 12, color: COLORS.primary }}>{hotel.location}</Text>
                            </View>
                            <Icon name="bookmark-border" size={26} color={COLORS.primary} />
                        </View>
                        <Rate />
                    </View>
                </Animated.View>

            </Pressable>
        );
    }

    return (
        <Animated.FlatList
            data={hotels}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
            contentContainerStyle={{
                backgroundColor: COLORS.white,
                paddingVertical: 20,
                paddingLeft: 20,
                paddingRight: cardWidth / 2 - 40,
            }}
            renderItem={({ item, index }) => {
                return <Card hotel={item} index={index} />
            }}
            onMomentumScrollEnd={(e) => setActiveCardIndex(Math.round(e.nativeEvent.contentOffset.x / cardWidth))}
            keyExtractor={item => item.id}
            snapToInterval={cardWidth}
        />
    )
}

const styles = StyleSheet.create<StyleProps>({
    imageStyle: {
        height: 180,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    card: {
        height: 250,
        width: cardWidth,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        marginRight: 20,
        elevation: 15,
    },
    textView: {
        height: 80,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        top: -20
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10
    },
    overLay: {
        position: 'absolute',
        zIndex: 100,
        opacity: 0,
    }
})

export default CarouselList;
