import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Cards from '../screens/Cards';

export type IStackRoutes = {
    Home: undefined;
    Cards: undefined;
}

const Stack = createNativeStackNavigator<IStackRoutes>();

interface IStackParam {
    initialRoute: keyof IStackRoutes;
}

export function Routes ({initialRoute}: IStackParam){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                headerShown: false
            }}
            initialRouteName={initialRoute}>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />

                <Stack.Screen 
                    name="Cards"
                    component={Cards}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}