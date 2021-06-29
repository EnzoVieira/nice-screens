import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import { enableScreens } from "react-native-screens"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import { NavigationContainer } from "@react-navigation/native"
enableScreens()

const Stack = createSharedElementStackNavigator()

import FoodList from "./src/Screen-1/FoodList"
import Details from "./src/Screen-1/Details"
import Trips from "./src/Screen-2/Trips"
import CityDetails from "./src/Screen-2/CityDetails"
import GestureAnimations from "./src/Screen-3/GestureAnimations"
import Animations from "./src/Screen-4/Animations"
import InterpolateColor from "./src/Screen-5/InterpolateColor"
import FlexGrow from "./src/Screen-6/FlexGrow"
import ImageParalax from "./src/Screen7/ImageParalax"
import AnimatedFlatList from "./src/Screen8/AnimatedFlatList"
import AnimatedBorderRadius from "./src/Screen9/AnimatedBorderRadius"
import Gestures from "./src/Screen10/Gestures"

export default function App() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="FoodList" headerMode="none">
    //     <Stack.Screen name="FoodList" component={FoodList} />
    //     <Stack.Screen
    //       name="Details"
    //       component={Details}
    // sharedElementsConfig={(route, otherRoute, showing) => {
    //   const { food } = route.params
    //   return [
    //     {
    //       id: `item.${food.key}.title`,
    //       animation: "fade",
    //       // resize: 'clip'
    //       // align: ''left-top'
    //     },
    //   ]
    // }}
    // options={() => ({
    //   gestureEnabled: false,
    //   transitionSpec: {
    //     open: { animation: "timing", config: { duration: 600 } },
    //     close: { animation: "timing", config: { duration: 600 } },
    //   },
    //   cardStyleInterpolator: ({ current: { progress } }) => {
    //     return {
    //       cardStyle: {
    //         opacity: progress,
    //       },
    //     }
    //   },
    // })}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <StatusBar hidden />

      <Stack.Navigator headerMode="none" initialRouteName="NavigationOptions">
        {/* Primeira tela */}
        <Stack.Screen name="NavigationOptions" component={NavigationOptions} />
        <Stack.Screen name="FoodList" component={FoodList} />
        <Stack.Screen
          name="Details"
          component={Details}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { food } = route.params
            return [
              {
                id: `item.${food.key}.title`,
                animation: "fade",
                // resize: 'clip'
                // align: ''left-top'
              },
            ]
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 500 } },
              close: { animation: "timing", config: { duration: 500 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              }
            },
          })}
        />

        <Stack.Screen name="Trips" component={Trips} />
        <Stack.Screen
          name="CityDetails"
          component={CityDetails}
          sharedElementsConfig={route => {
            const { place } = route.params
            return [
              {
                id: `item.${place.key}.key`,
                animation: "fade",
              },
            ]
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 500 } },
              close: { animation: "timing", config: { duration: 500 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              }
            },
          })}
        />

        <Stack.Screen name="GestureAnimations" component={GestureAnimations} />

        <Stack.Screen name="Animations" component={Animations} />

        <Stack.Screen name="InterpolateColor" component={InterpolateColor} />

        <Stack.Screen name="FlexGrow" component={FlexGrow} />

        <Stack.Screen name="ImageParalax" component={ImageParalax} />

        <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatList} />

        <Stack.Screen
          name="AnimatedBorderRadius"
          component={AnimatedBorderRadius}
        />

        <Stack.Screen name="Gestures" component={Gestures} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function NavigationOptions({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { marginTop: 60 }]}
        onPress={() => navigation.navigate("FoodList")}
      >
        <Text style={styles.title}>Screen 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Trips")}
      >
        <Text style={styles.title}>Screen 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GestureAnimations")}
      >
        <Text style={styles.title}>Screen 3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Animations")
        }}
      >
        <Text style={styles.title}>Screen 4</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("InterpolateColor")}
      >
        <Text style={styles.title}>Screen 5</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FlexGrow")}
      >
        <Text style={styles.title}>Screen 6</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ImageParalax")}
      >
        <Text style={styles.title}>Screen 7</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AnimatedFlatList")}
      >
        <Text style={styles.title}>Screen 8</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AnimatedBorderRadius")}
      >
        <Text style={styles.title}>Screen 9</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Gestures")}
      >
        <Text style={styles.title}>Screen 10</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 12,
    marginTop: 40,
  },
})
