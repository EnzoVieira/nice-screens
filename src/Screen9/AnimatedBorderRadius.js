// import React, { useRef, useEffect, useState } from "react"
// import {
//   Text,
//   View,
//   Animated,
//   Easing,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
// } from "react-native"

// const { width, height } = Dimensions.get("window")
// const HEADER_HEIGHT = height

// export default function AnimatedBorderRadius() {
//   const animatedValue = useRef(new Animated.Value(0)).current
//   const [togglePressed, setTogglePressed] = useState(0)

//   const headerY = animatedValue.interpolate({
//     inputRange: [0, HEADER_HEIGHT / 3],
//     outputRange: [0, -HEADER_HEIGHT / 3],
//     extrapolate: "clamp",
//   })
//   const listY = animatedValue.interpolate({
//     inputRange: [0, HEADER_HEIGHT - HEADER_HEIGHT / 2],
//     outputRange: [0, -HEADER_HEIGHT],
//     extrapolate: "clamp",
//   })
//   return (
//     <View style={{ flex: 1 }}>
//       <Animated.View
//         style={{
//           alignSelf: "center",
//           position: "absolute",
//           top: -HEADER_HEIGHT / 2,
//           height: HEADER_HEIGHT,
//           width: HEADER_HEIGHT,
//           borderRadius: HEADER_HEIGHT / 2,
//           backgroundColor: "orange",
//           alignItems: "center",
//           zIndex: 99,
//           transform: [
//             {
//               translateY: headerY,
//             },
//           ],
//         }}
//       >
//         <Text style={{ paddingTop: HEADER_HEIGHT / 2 }}>Header</Text>
//       </Animated.View>

//       <Animated.FlatList
//         data={new Array(70)}
//         contentContainerStyle={{
//           paddingTop: HEADER_HEIGHT - HEADER_HEIGHT / 2,
//         }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
//           { useNativeDriver: true }
//         )}
//         renderItem={() => {
//           return (
//             <Text
//               style={{
//                 textAlign: "center",
//               }}
//             >
//               Teste
//             </Text>
//           )
//         }}
//         keyExtractor={(item, index) => `${index}`}
//       />
//     </View>
//   )
// }

import React, { useRef, useEffect, useState } from "react"
import {
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native"
import { Feather } from "@expo/vector-icons"

const { width, height } = Dimensions.get("window")

export default function AnimatedBorderRadius() {
  const scrollY = useRef(new Animated.Value(200)).current
  const viewHeight = scrollY.interpolate({
    inputRange: [200, height - 100],
    outputRange: [200, height - 100],
  })

  const animation = toValue => {
    Animated.timing(scrollY, {
      toValue,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start()
  }
  return (
    <View style={{ flex: 1, backgroundColor: "orange" }}>
      <Text>Alo</Text>
      <Animated.View
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "white",
          marginHorizontal: 20,
          height: viewHeight,
        }}
      >
        <TouchableOpacity
          onPress={() => animation(height - 100)}
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: 0,
            right: 0,
            height: 50,
            // borderRadius: 12,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            alignSelf: "center",
            top: -50,
          }}
        >
          <Feather name="arrow-up" color="grey" size={26} />
        </TouchableOpacity>

        <Animated.FlatList
          data={new Array(40)}
          // style={{ paddingVertical: 26 }}
          renderItem={() => {
            return (
              <View
                style={{
                  backgroundColor: "grey",
                  marginHorizontal: 20,
                  marginVertical: 10,
                  padding: 20,
                }}
              >
                <Text>FlatList</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => `${index}`}
        />
      </Animated.View>
    </View>
  )
}
