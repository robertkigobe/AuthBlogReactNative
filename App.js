// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';
// import UsersListScreen from './screens/UsersListScreen';
// import ChatScreen from './screens/ChatScreen';
// import CreateBlogScreen from './screens/CreateBlogScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="UsersList" component={UsersListScreen} />
//         <Stack.Screen name="Chat" component={ChatScreen} />
//         <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import UsersListScreen from './screens/UsersListScreen';
import ChatScreen from './screens/ChatScreen';
import CreateBlogScreen from './screens/CreateBlogScreen';
import BlogsScreen from './screens/BlogsScreen'; // Import your BlogsScreen
import BlogDetailScreen from './screens/BlogDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Authentication and chat screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />

        {/* Main screen navigation after login */}
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }} // Hide the header for the tab navigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Tab Navigator for Users List and Blogs
function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blogs" component={BlogsScreen} />
      <Tab.Screen name="Users" component={UsersListScreen} />
    </Tab.Navigator>
  );
}

export default App;
