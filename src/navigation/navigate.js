import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../container/LoginScreen";
import EventListingScreen from "../container/EventListingScreen";

const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

export const AuthStackNavigation = (props) => {

    return (
        <LoginStack.Navigator >
            <LoginStack.Screen name="Quote" component={LoginScreen} options={{ headerShown: false }} />
        </LoginStack.Navigator>
    );
    
};

export const HomeStackNavigation = (props) => {

    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="TabStack" component={EventListingScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
};

