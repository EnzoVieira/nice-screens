import React from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native"
import { PanGestureHandler, State } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("screen")
const BOX_WIDTH = width * 0.7
const BOX_HEIGHT = BOX_WIDTH * 1.2

export default function GestureAnimations({ navigation }) {
  const translateY = new Animated.Value(0)
  let offset = 0

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  )

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if (translationY >= 180) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 360 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 360 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-200, 0, 360],
                    outputRange: [-50, 0, 360],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.animatedViewText}>Push me down!</Text>
        </Animated.View>
      </PanGestureHandler>

      <Animated.Text
        style={[
          styles.title,
          {
            opacity: translateY.interpolate({
              inputRange: [0, 180, 240],
              outputRange: [0, 0, 1],
            }),
          },
        ]}
      >
        Hello, world!
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  backButton: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 20,
    marginLeft: 30,
  },
  animatedView: {
    backgroundColor: "white",
    position: "absolute",
    top: height / 2 - BOX_HEIGHT / 2,
    left: width / 2 - BOX_WIDTH / 2,
    width: BOX_WIDTH,
    height: BOX_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "800",
    position: "absolute",
    alignSelf: "center",
    top: height / 2 - 20,
  },
  animatedViewText: {
    fontSize: 26,
    fontWeight: "800",
    fontStyle: "italic",
  },
})
