import React, { useRef } from "react"
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from "react-native"

const { width, height } = Dimensions.get("screen")
const BOX_WIDTH = width * 0.64
const BOX_HEIGHT = BOX_WIDTH * 1.4

export default function Animations({ navigation }) {
  const value = new Animated.Value(0)

  function moveLeft() {
    Animated.timing(value, {
      toValue: -30,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      console.log("Finished")
    })
  }

  function moveRight() {
    Animated.timing(value, {
      toValue: 30,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      console.log("Finished")
    })
  }

  function moveDown() {
    // Animated.timing(valueY, {
    //   toValue: 30,
    //   duration: 300,
    //   useNativeDriver: true,
    // }).start()
  }

  function moveUp() {}

  return (
    <View style={styles.container}>
      <Text>Animations</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{ translateX: value }],
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.animatedViewText,
            {
              opacity: value.interpolate({
                inputRange: [-30, -1],
                outputRange: [1, 0],
              }),
              left: 20,
            },
          ]}
        >
          Left
        </Animated.Text>
        <Animated.Text
          style={[
            styles.animatedViewText,
            {
              opacity: value.interpolate({
                inputRange: [0, 30],
                outputRange: [0, 1],
              }),
              right: 20,
            },
          ]}
        >
          Right
        </Animated.Text>

        <Animated.Text
          style={[
            styles.animatedViewText,
            {
              opacity: value.interpolate({
                inputRange: [0, 30],
                outputRange: [0, 1],
              }),
              top: 20,
            },
          ]}
        >
          Top
        </Animated.Text>
        <Animated.Text
          style={[
            styles.animatedViewText,
            {
              opacity: value.interpolate({
                inputRange: [0, 30],
                outputRange: [0, 1],
              }),
              bottom: 20,
            },
          ]}
        >
          Bottom
        </Animated.Text>
      </Animated.View>

      <TouchableOpacity style={styles.upButton} onPress={moveUp}>
        <Text style={styles.buttonText}>{"^"}</Text>
      </TouchableOpacity>

      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.button} onPress={moveLeft}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveDown}>
          <Text style={styles.buttonText}>{"."}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveRight}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginVertical: 20,
    marginLeft: 30,
  },
  backButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 30,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  upButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    position: "absolute",
    bottom: 80,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#f0f0f0",
  },
  animatedView: {
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedViewText: {
    fontSize: 22,
    fontWeight: "800",
    fontStyle: "italic",
    position: "absolute",
  },
})
