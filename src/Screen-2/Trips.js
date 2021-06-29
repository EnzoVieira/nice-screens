import React, { useEffect } from "react"
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Animated,
} from "react-native"
import { SimpleLineIcons } from "@expo/vector-icons"
import { SharedElement } from "react-navigation-shared-element"

import places from "./places"

const { width } = Dimensions.get("screen")
const CELL_WIDTH = width * 0.64
const CELL_HEIGHT = CELL_WIDTH * 1.4
const SPACING = 8
const FULL_SIZE = CELL_WIDTH + SPACING * 2

export default function Trips({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 20,
          left: 10,
          width: 80,
          zIndex: 999,
        }}
        onPress={() => navigation.goBack()}
      >
        <SimpleLineIcons name="arrow-left" color="white" size={20} />
        <Text style={styles.backButton}>Sair</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "white",
          fontSize: 26,
          fontWeight: "800",
          position: "absolute",
          top: 60,
          left: 10,
        }}
      >
        Trips
      </Text>
      <FlatList
        contentContainerStyle={{ marginTop: 100 }}
        data={places}
        renderItem={({ item }) => (
          <PlacesCard place={item} navigation={navigation} />
        )}
        keyExtractor={item => item.key}
        horizontal
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
      />
    </View>
  )
}

function PlacesCard({ place, navigation }) {
  const value = new Animated.Value(0)
  useEffect(() => {
    Animated.timing(value, {
      toValue: 1,
      duration: 300,
      delay: 500,
      useNativeDriver: true,
    }).start()
  }, [])
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("CityDetails", { place })}
    >
      <View
        style={{
          flex: 1,
          opacity: 1,
        }}
      >
        <SharedElement id={`item.${place.key}.key`} style={{ flex: 1 }}>
          <Image source={{ uri: place.image }} style={styles.image} />
        </SharedElement>

        <View style={{ position: "absolute", bottom: 40, left: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "800",
            }}
          >
            {place.name}
          </Text>
          <Text style={{ color: "white", opacity: 0.8, fontWeight: "600" }}>
            {place.country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  backButton: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },
  cardContainer: {
    width: CELL_WIDTH,
    height: CELL_HEIGHT,
    marginHorizontal: SPACING,
    borderRadius: SPACING,
    padding: SPACING,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
})
