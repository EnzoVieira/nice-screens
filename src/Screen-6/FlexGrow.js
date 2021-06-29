import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const data = [
  {
    key: 1,
    color: "cyan",
    items: [
      { title: "View 1" },
      { title: "View 1" },
      { title: "View 1" },
      { title: "View 1" },
    ],
  },
  {
    key: 2,
    color: "orange",
    items: [
      { title: "View 2" },
      { title: "View 2" },
      { title: "View 2" },
      { title: "View 2" },
    ],
  },
  {
    key: 3,
    color: "magenta",
    items: [
      { title: "View 3" },
      { title: "View 3" },
      { title: "View 3" },
      { title: "View 3" },
    ],
  },
]

export default function FlexGrow() {
  const [currentIndex, setCurrentIndex] = React.useState(null)
  const arrowAnimated = React.useRef(new Animated.Value(0)).current

  const currentIndexRef = React.useRef(null)

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={item.key}>
          <TouchableHighlight
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => {
              const arrowAnimation = (toValue, delay) => {
                Animated.timing(arrowAnimated, {
                  toValue,
                  duration: 300,
                  useNativeDriver: true,
                }).start()
              }

              currentIndexRef.current = index
              setCurrentIndex(index === currentIndex ? null : index)
              console.log(index, currentIndexRef.current)
              index === currentIndexRef.current
                ? arrowAnimation(1)
                : arrowAnimation(0)
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <Text>{item.color}</Text>

              <Spin index={index} currentIndex={currentIndex}>
                <MaterialCommunityIcons
                  name="arrow-up-drop-circle"
                  size={26}
                  color="white"
                />
              </Spin>
            </View>
          </TouchableHighlight>

          <Fade
            index={index}
            currentIndex={currentIndex}
            // style={{ justifyContent: "center", alignItems: "center" }}
          >
            {item.items.map((item, index) => (
              <Text key={`${item.title}.${index}`}>{item.title}</Text>
            ))}
          </Fade>
        </View>
      ))}
    </View>
  )
}

function Spin({ children, index, currentIndex, style }) {
  const ViewScale = React.useRef(new Animated.Value(0)).current

  const animation = (toValue, delay) =>
    Animated.timing(ViewScale, {
      toValue,
      duration: 300,
      delay,
      useNativeDriver: false,
    })

  const ViewScaleValue = ViewScale.interpolate({
    inputRange: [0, 0.5, 0.75, 1],
    outputRange: ["0deg", "90deg", "135deg", "180deg"],
  })

  if (index === currentIndex) {
    animation(1, 0).start()
  } else {
    animation(0, 200).start()
  }

  return (
    <Animated.View
      style={[
        {
          transform: [{ rotate: ViewScaleValue }],
          //   backgroundColor: "white",
        },
      ]}
    >
      {children}
    </Animated.View>
  )
}

function Fade({ children, index, currentIndex, style }) {
  const mountedAnimated = React.useRef(new Animated.Value(0)).current

  const animation = (toValue, delay) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: false,
    })

  const ViewHeightValue = mountedAnimated.interpolate({
    inputRange: [0, 25, 50, 75, 100],
    outputRange: [0, 50, 75, 90, 100],
  })

  const ViewOpacityValue = mountedAnimated.interpolate({
    inputRange: [0, 25, 50, 75, 100],
    outputRange: [0, 0, 0.25, 0.5, 1],
  })

  if (index === currentIndex) {
    animation(100, 0).start()
  } else {
    animation(0, 200).start()
  }

  return (
    <>
      <Animated.View
        style={[
          {
            ...style,
            height: ViewHeightValue,
            backgroundColor: "white",
            borderBottomRightRadius: 6,
            borderBottomLeftRadius: 6,
          },
        ]}
      >
        <Animated.View
          style={{ opacity: ViewOpacityValue, flex: 1, overflow: "hidden" }}
        >
          <View
            style={{
              backgroundColor: "blue",
              height: 100,
              width: "100%",
              position: "absolute",
              top: 0,
              transform: [
                {
                  translateX: -10,
                },
              ],
            }}
          />
          {children}
        </Animated.View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 20,
  },
  card: {
    height: 60,
    marginTop: 16,
  },
})
