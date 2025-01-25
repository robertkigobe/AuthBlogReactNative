// import React, { useState, useContext, createContext } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Icon from "react-native-vector-icons/Ionicons";

// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import UsersListScreen from "./screens/UsersListScreen";
// import ChatScreen from "./screens/ChatScreen";
// import CreateBlogScreen from "./screens/CreateBlogScreen";
// import BlogsScreen from "./screens/BlogsScreen";
// import BlogDetailScreen from "./screens/BlogDetailScreen";
// import HomeScreen from "./screens/HomeScreen";
// import AboutUsScreen from "./screens/AboutUsScreen";
// import ContactUsScreen from "./screens/ContactUsScreen";
// import OurTeamScreen from "./screens/OurTeamScreen";
// import WhatWeDoScreen from "./screens/WhatWeDoScreen";
// import OurImpactScreen from "./screens/OurImpactScreen";
// import Header from "./screens/Header";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase"; // Import the auth instance

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const AuthContext = createContext();

// function MainUnAuthenticatedTabs() {
//   const { isAuthenticated } = useContext(AuthContext);

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "HomeTab") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "ProfileTab") {
//             iconName = focused ? "person" : "person-outline";
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#4a90e2",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen
//         name="HomeTab"
//         component={HomeScreen}
//         options={{ title: "Home", headerShown: false }}
//       />
//       <Tab.Screen
//         name="ProfileTab"
//         component={isAuthenticated ? BlogsScreen : LoginScreen}
//         options={{ title: "Profile", headerShown: false }}
//       />
//     </Tab.Navigator>
//   );
// }

// function MainAuthenticatedTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === "Blogs") {
//             iconName = focused ? "book" : "book-outline";
//           } else if (route.name === "Users") {
//             iconName = focused ? "people" : "people-outline";
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#4a90e2",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen
//         name="Blogs"
//         component={BlogsScreen}
//         options={{
//           title: "Blogs",
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Users"
//         component={UsersListScreen}
//         options={{
//           title: "Users",
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function DrawerNavigator() {
//   const { setIsAuthenticated } = useContext(AuthContext);

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("User logged out successfully");
//         setIsAuthenticated(false); // Set authentication state to false
//       })
//       .catch((error) => {
//         console.error("Error during logout:", error);
//       });
//   };

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         drawerActiveTintColor: "#4a90e2",
//         drawerInactiveTintColor: "gray",
//       }}
//     >
//       <Drawer.Screen
//         name="HomeDrawer"
//         component={MainUnAuthenticatedTabs}
//         options={{
//           title: "Home",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="AboutUs"
//         component={AboutUsScreen}
//         options={{
//           title: "About Us",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="information-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="OurTeam"
//         component={OurTeamScreen}
//         options={{
//           title: "Our Team",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="information-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="WhatWeDoScreen"
//         component={WhatWeDoScreen}
//         options={{
//           title: "What We Do",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="information-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="OurImpactScreen"
//         component={OurImpactScreen}
//         options={{
//           title: "Our Impact",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="information-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="ContactUs"
//         component={ContactUsScreen}
//         options={{
//           title: "Contact Us",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="call-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="MainTabs"
//         component={MainAuthenticatedTabNavigator}
//         options={{
//           title: "Blogs",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="grid-outline" size={size} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Logout"
//         component={() => null} // No screen component, just trigger logout
//         options={{
//           title: "Logout",
//           drawerIcon: ({ color, size }) => (
//             <Icon name="log-out-outline" size={size} color={color} />
//           ),
//           drawerItemStyle: { marginTop: "auto" }, // Position Logout at the bottom
//         }}
//         listeners={{
//           focus: () => handleLogout(), // Trigger logout when this item is focused
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Messages"
//           // screenOptions={{
//           //   header: () => <Header />,
//           // }}
//         >
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Signup"
//             component={SignupScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Messages"
//             component={DrawerNavigator}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
//           <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }

import React, { useState, useContext, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import UsersListScreen from "./screens/UsersListScreen";
import ChatScreen from "./screens/ChatScreen";
import CreateBlogScreen from "./screens/CreateBlogScreen";
import BlogsScreen from "./screens/BlogsScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import OurTeamScreen from "./screens/OurTeamScreen";
import WhatWeDoScreen from "./screens/WhatWeDoScreen";
import OurImpactScreen from "./screens/OurImpactScreen";
import TeamMemberBioScreen from "./screens/TeamMemberBioScreen";
import Header from "./screens/Header";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const AuthContext = createContext();

const getTabIcon = (routeName, focused) => {
  const icons = {
    HomeTab: focused ? "home" : "home-outline",
    ProfileTab: focused ? "person" : "person-outline",
    Blogs: focused ? "book" : "book-outline",
    Users: focused ? "people" : "people-outline",
  };
  return icons[routeName];
};

const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = getTabIcon(route.name, focused);
    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "#4a90e2",
  tabBarInactiveTintColor: "gray",
});

function MainUnAuthenticatedTabs() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={isAuthenticated ? BlogsScreen : LoginScreen}
        options={{ title: "Profile", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function MainAuthenticatedTabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabScreenOptions}>
      <Tab.Screen
        name="Blogs"
        component={BlogsScreen}
        options={{ title: "Blogs", headerShown: false }}
      />
      <Tab.Screen
        name="Users"
        component={UsersListScreen}
        options={{ title: "Users", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  const { setIsAuthenticated } = useContext(AuthContext);
  // First, create a separate component for Logout
  const LogoutScreen = () => null;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
      })
      .catch((error) => console.error("Error during logout:", error));
  };

  const drawerScreens = [
    {
      name: "HomeDrawer",
      component: MainUnAuthenticatedTabs,
      title: "Home",
      icon: "home-outline",
    },
    {
      name: "AboutUs",
      component: AboutUsScreen,
      title: "About Us",
      icon: "information-circle-outline",
    },
    {
      name: "OurTeam",
      component: OurTeamScreen,
      title: "Our Team",
      icon: "information-circle-outline",
    },
    {
      name: "WhatWeDoScreen",
      component: WhatWeDoScreen,
      title: "What We Do",
      icon: "information-circle-outline",
    },
    {
      name: "OurImpactScreen",
      component: OurImpactScreen,
      title: "Our Impact",
      icon: "information-circle-outline",
    },
    {
      name: "ContactUs",
      component: ContactUsScreen,
      title: "Contact Us",
      icon: "call-outline",
    },
    {
      name: "MainTabs",
      component: MainAuthenticatedTabNavigator,
      title: "Blogs",
      icon: "grid-outline",
    },
  ];

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#4a90e2",
        drawerInactiveTintColor: "gray",
      }}
    >
      {drawerScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            title: screen.title,
            drawerIcon: ({ color, size }) => (
              <Icon name={screen.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          title: "Logout",
          drawerIcon: ({ color, size }) => (
            <Icon name="log-out-outline" size={size} color={color} />
          ),
          drawerItemStyle: { marginTop: "auto" },
        }}
        listeners={{ focus: handleLogout }}
      />
    </Drawer.Navigator>
  );
}

<Stack.Screen
  name="Login"
  component={LoginScreen}
  options={{
    headerShown: false,
    drawerEnabled: true, // Enable drawer on login screen
  }}
/>;
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Messages">
          <Stack.Screen
            name="Messages"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TeamMemberBio"
            component={TeamMemberBioScreen}
            options={({ route }) => ({
              title: route.params.member.name,
            })}
          />
          <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
          <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
