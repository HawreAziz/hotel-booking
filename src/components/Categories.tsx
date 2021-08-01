import React from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import COLORS from '../consts/colors'

interface Props {
    categoryNames: string[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
}

interface StyleProps {
    container: ViewStyle;
    textStyle: TextStyle;
    selectedView: ViewStyle;
}

const Categories: React.FC<Props> = ({ categoryNames, currentIndex, setCurrentIndex }) => {
    return (
        <View style={styles.container}>
            {
                categoryNames.map((categoryName, index) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            key={index}
                            onPress={() => setCurrentIndex(index)}
                        >
                            <Text style={styles.textStyle} >{categoryName}</Text>
                            {
                                currentIndex === index &&
                                <View style={[styles.selectedView, { width: categoryName.length * 5 }]} />
                            }
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create<StyleProps>({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.grey,
    },
    selectedView: {
        height: 5,
        backgroundColor: COLORS.dark,
    }
});

export default Categories
