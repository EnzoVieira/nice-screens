import React, { useRef, useEffect, useState } from "react"
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from "react-native"
import { SharedElement } from "react-navigation-shared-element"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function CityDetails({ route, navigation }) {
  const [pressed, setPressed] = useState(false)
  const { place } = route.params
  const mountedAnimation = useRef(new Animated.Value(0)).current

  const animation = (toValue, delay) =>
    Animated.timing(mountedAnimation, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    })

  useEffect(() => {
    Animated.parallel([animation(1, 1000)]).start()
  }, [])

  const translateY = mountedAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  })

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, backgroundColor: "#0f0f0f" }}
      onPress={() => {
        !pressed && animation(0).start()
        pressed && animation(1).start()
        setPressed(!pressed)
      }}
    >
      <View style={{ flex: 1 }}>
        <SharedElement id={`item.${place.key}.key`} style={{ flex: 1 }}>
          <Image source={{ uri: place.image }} style={styles.image} />
        </SharedElement>

        <TouchableOpacity
          style={{ position: "absolute", top: 20, left: 20, zIndex: 9999 }}
          onPress={() => {
            animation(0).start(() => {
              navigation.goBack()
            })
          }}
        >
          <MaterialCommunityIcons name="close" size={36} color="#0B0B0D" />
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            alignItems: "center",
          }}
        >
          <Animated.View
            style={{
              backgroundColor: "#00000060",
              paddingHorizontal: 10,
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              opacity: mountedAnimation,
            }}
          >
            <Text style={styles.placeName}>{place.name}</Text>
            <Text style={styles.placeCountry}>{place.country}</Text>
          </Animated.View>
        </View>

        <Animated.View
          style={[
            styles.paragraph,
            { opacity: mountedAnimation, transform: [{ translateY }] },
          ]}
        >
          <Text style={styles.paragraphText}>{place.description}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  paragraph: {
    backgroundColor: "#ffffff10",
    backfaceVisibility: "hidden",
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
  },
  paragraphText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },
  placeName: {
    color: "white",
    fontSize: 36,
    fontWeight: "800",
    textAlign: "center",
  },
  placeCountry: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.8,
    textAlign: "center",
  },
})
