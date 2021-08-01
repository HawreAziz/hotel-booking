import React from 'react'
import {
    Animated,
    ImageSourcePropType,
    View,
    Text,
} from 'react-native'
import COLORS from '../consts/colors'

interface CardProps {
    hotel: {
        id: string;
        name: string;
        location: string;
        image: ImageSourcePropType,
        price: number,
        details: string;
    };
    index: number;
    cardWidth: number,
    scrollX: Animated.Value;
}

const Card: React.FunctionComponent<CardProps> = ({ hotel, index, cardWidth, scrollX }) => {

    const inputRange = [
        (index - 1) * cardWidth,
        index * cardWidth,
        (index + 1) * cardWidth
    ]

    const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.7, 0, 0.7]
    })

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

    return (
        <>
            <Animated.View style={{ ...styles.card, ...styles.overLay, opacity }} />
            <View style={styles.card}>
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
            </View>

        </>
    );
}
}

export default Card;
