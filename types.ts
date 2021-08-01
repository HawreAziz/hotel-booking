import { NavigationProp, RouteProp } from "@react-navigation/native"
import { ImageSourcePropType } from "react-native"

export interface HotelProps {
    id: string;
    name: string;
    location: string;
    image: ImageSourcePropType,
    price: number,
    details: string;
}

export type NavigationParamList = {
    Home: undefined;
    Detail: { hotel: HotelProps };
}


export type NavigationProps<T extends keyof NavigationParamList> {
    navigation: NavigationProp<NavigationParamList, T>;
    route: RouteProp<NavigationParamList, T>;
}