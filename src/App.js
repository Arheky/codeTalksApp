import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from './styles/colors';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';
import Rooms from './pages/Rooms/Rooms';
import RoomsDetail from './pages/RoomsDetail/RoomsDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
           name="AuthStack"
           component={AuthStack}
           options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
             name="RoomsPage"
             component={Rooms}
             options={{
              title: 'odalar',
              headerTitleAlign: 'center',
              headerTintColor: colors.brightorange,
              headerRight: () => (
                <Icon
                 name="logout"
                 size={30}
                 color={colors.darkorange}
                 onPress={() => auth().signOut()}
                />
              ),
             }}
            />
            <Stack.Screen
             name="RoomsDetailPage"
             component={RoomsDetail}
             options={({route}) => ({
              title: route.params.item.roomname,
              headerTitleAlign: 'center',
              headerTintColor: colors.brightorange,
              headerRight: () => (
                <Icon
                 name="logout"
                 size={30}
                 color={colors.darkorange}
                 onPress={() => auth().signOut()}
                />
              ),
             })}
            />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;