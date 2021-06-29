import { PanGestureHandler, State } from "react-native-gesture-handler"
import React, { useRef } from "react"
import { Text, View, StyleSheet, Button } from "react-native"

export default function Gestures() {
  //   const animatedStyles = useAnimatedStyle(() => {
  //     return {
  //       transform: [{ translateX: offset.value * 255 }],
  //     }
  //   })
  return (
    <>
      <View style={[styles.box]} />
      {/* <Button onPress={() => (offset.value = Math.random())} title="Move" /> */}
    </>
  )
}

// export default function Gestures() {
//   const translateX = useRef(new Animated.Value(0)).current
//   const translateY = useRef(new Animated.Value(0)).current

//   const onGestureEvent = Animated.event([
//     {
//       nativeEvent: {
//         translationX: translateX,
//         translationY: translateY,
//       },
//     },
//   ])

//   const onHandlerStateChange = event => {
//     // if (event.nativeEvent.oldState == State.ACTIVE) {
//     //   Animated.parallel([
//     //     Animated.timing(translateX, {
//     //       toValue: 0,
//     //       duration: 500,
//     //       easing: Easing.elastic(),
//     //       useNativeDriver: true,
//     //     }),
//     //     Animated.timing(translateY, {
//     //       toValue: 0,
//     //       duration: 500,
//     //       easing: Easing.elastic(),
//     //       useNativeDriver: true,
//     //     }),
//     //   ]).start()
//     // }
//   }
//   return (
//     <View>
//       <PanGestureHandler
//         onGestureEvent={onGestureEvent}
//         onHandlerStateChange={onHandlerStateChange}
//       >
//         <Animated.View
//           style={[styles.box, { transform: [{ translateX }, { translateY }] }]}
//         />
//       </PanGestureHandler>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
})
