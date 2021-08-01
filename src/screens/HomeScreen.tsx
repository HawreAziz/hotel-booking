import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    ViewStyle,
    Text,
    TextStyle,
    ScrollView,
    FlatList, // TODO Add scrollView to home screen
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProps } from '../../types';
import CarouselList from '../components/CarouselList';
import Categories from '../components/Categories';
import Search from '../components/Search';
import TopCard from '../components/TopCard';
import COLORS from '../consts/colors';
import hotels from '../consts/hotels';


interface StyleProps {
    header: ViewStyle;
    headerText: TextStyle;
    showAllView: ViewStyle;
}

const HomeScreen: React.FunctionComponent<NavigationProps<'Home'>> = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar style='auto' />
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerText}>Find your hotel</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.headerText}>in </Text>
                        <Text style={[styles.headerText, { color: COLORS.grey }]}>Paris</Text>
                    </View>
                </View>
                <Icon name='person-outline' size={50} color={COLORS.grey} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>

                <Search />
                <Categories
                    categoryNames={['All', 'Popular', 'Top Rated', 'Featured', 'Luxury']}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                />

                <CarouselList hotels={hotels} goToDetail={(hotel) => navigation.navigate('Detail', { hotel })} />
                <View style={styles.showAllView}>
                    <Text style={{ color: COLORS.primary }}>Top hotels</Text>
                    <Text style={{ color: COLORS.primary }}>Show all</Text>
                </View>
                <FlatList
                    data={hotels}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <TopCard hotel={item} onPress={(hotel) => navigation.navigate('Detail', { hotel })} />
                    }}
                    contentContainerStyle={{
                        paddingLeft: 30,
                        paddingTop: 10,
                        paddingBottom: 20,
                    }}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create<StyleProps>({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    showAllView: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
});

export default HomeScreen;
