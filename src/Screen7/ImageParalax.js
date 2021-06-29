import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Animated,
  ImageBackground,
} from "react-native"

const { width, height } = Dimensions.get("screen")
const ITEM_WIDTH = width * 0.64
const ITEM_HEIGHT = ITEM_WIDTH * 1.4

const TITLE_HEIGHT = 36
const SPACING = TITLE_HEIGHT / 4

const data = [
  {
    image:
      "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Pug",
  },
  {
    image:
      "https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Cheetahs",
  },
  {
    image:
      "https://images.pexels.com/photos/65320/polar-bear-bear-teddy-sleep-65320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Bears",
  },
  {
    image:
      "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Rabbit",
  },
  {
    image:
      "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Fox",
  },
]

export default function ImageParalax() {
  const scrollX = React.useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const inputRangeOpacity = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ]

        const opacity = scrollX.interpolate({
          inputRange: inputRangeOpacity,
          outputRange: [0, 1, 0],
        })

        return (
          <Animated.View
            style={{
              position: "absolute",
              overflow: "hidden",
              opacity,
              zIndex: data.length - index - 30,
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                height,
                width,
                resizeMode: "cover",
              }}
              blurRadius={10}
            />
          </Animated.View>
        )
      })}

      <Animated.FlatList
        data={data}
        keyExtractor={item => item.name}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ]

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          })

          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.37,
                  shadowRadius: 7.49,

                  elevation: 12,
                }}
              >
                <View
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: "hidden",
                    alignItems: "center",
                  }}
                >
                  <Animated.Image
                    source={{ uri: item.image }}
                    style={[
                      {
                        height: ITEM_HEIGHT,
                        width: ITEM_WIDTH * 1.4,
                        resizeMode: "cover",
                        transform: [{ translateX }],
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          )
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 50,
          left: 40,
          height: TITLE_HEIGHT,
          overflow: "hidden",
        }}
      >
        {data.map((item, index) => {
          const inputRange = [0, width, width * 2, width * 3, width * 4]

          const inputRangeOpacity = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [
              0,
              -TITLE_HEIGHT - SPACING,
              -TITLE_HEIGHT * 2 - SPACING * 2,
              -TITLE_HEIGHT * 3 - SPACING * 3,
              -TITLE_HEIGHT * 4 - SPACING * 4,
            ],
          })

          const opacity = scrollX.interpolate({
            inputRange: inputRangeOpacity,
            outputRange: [0, 1, 0],
          })

          return (
            <Animated.View
              key={`${item.name}.${index}`}
              style={{ transform: [{ translateY }] }}
            >
              <Animated.Text
                style={{
                  height: TITLE_HEIGHT,
                  marginTop: SPACING,
                  fontSize: 22,
                  fontWeight: "800",
                  color: "#0f0f0f",
                  opacity,
                  //   transform: [{ scaleY: opacity }],
                }}
              >
                {item.name}
              </Animated.Text>
            </Animated.View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
