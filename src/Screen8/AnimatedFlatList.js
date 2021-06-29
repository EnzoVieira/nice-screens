import React from "react"
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const { width, height } = Dimensions.get("screen")
const CELL_WIDTH = width * 0.64
const CELL_HEIGHT = CELL_WIDTH * 1.4
const SPACING = 8
const SNAP_SIZE = CELL_WIDTH + SPACING * 2
const SPACER_ITEM_SIZE = (width - SNAP_SIZE) / 2

const data = [
  { name: "left-spacer" },
  {
    name: "Couple",
    image:
      "https://images.pexels.com/photos/6401663/pexels-photo-6401663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    backgroundImage:
      "https://images.pexels.com/photos/6401654/pexels-photo-6401654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    date: "10 de maio de 2019 18:10",
  },
  {
    name: "Space",
    image:
      "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    backgroundImage:
      "https://images.pexels.com/photos/4254551/pexels-photo-4254551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    date: "10 de maio de 2019 18:10",
  },
  {
    name: "Snow",
    image:
      "https://images.pexels.com/photos/1891882/pexels-photo-1891882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    backgroundImage:
      "https://images.pexels.com/photos/3784152/pexels-photo-3784152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    date: "10 de maio de 2019 18:10",
  },
  {
    name: "City",
    image:
      "https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    backgroundImage:
      "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    date: "10 de maio de 2019 18:10",
  },
  { name: "right-spacer" },
]

export default function AnimatedFlatList() {
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => `${item.name}.${index}`}
        contentContainerStyle={{
          //   paddingHorizontal: width / 2 - CELL_WIDTH / 2 - SPACING * 2,
          alignItems: "center",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_SIZE}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        bounces={false}
        renderItem={({ item, index }) => {
          if (!item.image) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />
          }

          const inputRange = [
            (index - 2) * SNAP_SIZE,
            (index - 1) * SNAP_SIZE,
            index * SNAP_SIZE,
          ]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, 100, 50],
          })

          return (
            <Animated.View
              style={{ padding: SPACING, transform: [{ translateY }] }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  height: CELL_HEIGHT,
                  width: CELL_WIDTH,
                  resizeMode: "cover",
                }}
              />
            </Animated.View>
          )
        }}
      />

      {data.map((item, index) => {
        const inputRange = [
          (index - 2) * SNAP_SIZE,
          (index - 1) * SNAP_SIZE,
          index * SNAP_SIZE,
        ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        })

        return (
          <>
            <Animated.View
              key={`index.${index}`}
              style={{
                height: height * 0.8,
                position: "absolute",
                //   overflow: "hidden",
                zIndex: data.length - index - 30,
                opacity,
              }}
            >
              <Image
                source={{
                  uri: item.backgroundImage,
                }}
                style={{
                  height: height * 0.8,
                  width,
                  resizeMode: "cover",
                }}
                blurRadius={3}
              />
              <LinearGradient
                colors={["transparent", "#fff"]}
                style={{
                  width,
                  height: CELL_HEIGHT * 0.8,
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </Animated.View>
          </>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
