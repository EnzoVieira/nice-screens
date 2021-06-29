import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native"
import { PanGestureHandler, State } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("screen")

export default function InterpolateColor() {
  const xOffset = new Animated.Value(0)
  const onHandleView = new Animated.Value(0)
  let offset = 0

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
    { useNativeDriver: false }
  )

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: onHandleView,
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  )

  function onHandlerStateChange(e) {
    // const { translationY } = nativeEvent
    console.log(e.nativeEvent)
    //   console.log(nativeEvent)

    onHandleView.extractOffset()
  }

  const interpolateCol = xOffset.interpolate({
    inputRange: [0, width, width * 2, width * 3, width * 4],
    outputRange: ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  })

  const animatedStyle = {
    backgroundColor: interpolateCol,
  }

  function LabelTitle({ label, right }) {
    return (
      <View style={styles.box}>
        {/* <Text style={[styles.label]}>{label}</Text> */}
      </View>
    )
  }

  const newStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        translateX: xOffset.interpolate({
          inputRange: [0, width],
          outputRange: [width, 0],
        }),
      },
    ],
  }

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Animated.ScrollView
        style={[animatedStyle]}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={e => onScroll(e)}
        scrollToOverflowEnabled
      >
        <LabelTitle style={[styles.box]} label="Primeiro" />
        <LabelTitle style={[styles.box]} label="Segundo" right />
        <LabelTitle style={[styles.box]} label="Terceiro" />
        <LabelTitle style={[styles.box]} label="Quarto" right />
        <LabelTitle style={[styles.box]} label="Quinto" />
      </Animated.ScrollView>

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  translateY: onHandleView.interpolate({
                    inputRange: [-height / 3, 0],
                    outputRange: [-height / 3, 0],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <Animated.View style={[newStyle]}>
            <Animated.Text style={[styles.label]}>Oláqwefqwefqwe</Animated.Text>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    backgroundColor: "white",
    height: height / 3,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    justifyContent: "center",
    overflow: "hidden",
  },
  box: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
})
