// import React from "react"
// import { View, Text, StyleSheet, SafeAreaView } from "react-native"
// import { SharedElement, sharedElements } from "react-navigation-shared-element"

// function Details({ route, navigation }) {
//   const { item } = route.params

//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <SharedElement id={`item.${item.key}.name`}>
//         <Text style={[styles.type]}>{item.type}</Text>
//         <Text style={[styles.subType]}>{item.subType}</Text>
//       </SharedElement>
//     </SafeAreaView>
//   )
// }
// Details.sharedElements = route => {
//   const { item } = route.params
//   return [
//     {
//       id: `item.${item.key}.name`,
//       animation: "fade",
//       resize: "clip",
//     },
//   ]
// }

// export { Details }

// const styles = StyleSheet.create({
//   type: {
//     fontWeight: "800",
//     fontSize: 22,
//   },
//   subType: {
//     fontSize: 12,
//     opacity: 0.8,
//   },
// })

import React, { useRef, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons"
const { height } = Dimensions.get("window")
const ITEM_HEIGHT = height * 0.5
import { SharedElement } from "react-navigation-shared-element"

export default function Details({ route, navigation }) {
  const { food } = route.params

  // useEffect(() => {
  //   fetch(`https://source.unsplash.com/1600x900/?${food.type}`).then(resp => {
  //     console.log(resp)
  //   })
  // }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          width: 30,
          height: 30,
          position: "absolute",
          top: 30,
          left: 20,
          zIndex: 9999,
        }}
      >
        <SimpleLineIcons name="arrow-left" color="white" size={20} />
      </TouchableOpacity>
      <View style={[styles.banner, { backgroundColor: food.color }]}>
        <Image
          source={{ uri: food.image }}
          style={{ position: "absolute", height: "100%", width: "100%" }}
        />
        <View style={{ marginLeft: 20, marginBottom: 30 }}>
          <SharedElement id={`item.${food.key}.title`}>
            <View>
              <Text style={styles.title}>{food.type}</Text>
              <Text style={styles.subTitle}>{food.subType}</Text>
            </View>
          </SharedElement>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.subTitle}>{food.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  descriptionContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
  },
  subTitle: {
    color: "#888",
    textTransform: "uppercase",
  },
  banner: {
    height: ITEM_HEIGHT,
    justifyContent: "flex-end",
  },
})

// const Details = ({ navigation, route }) => {
//   const { item } = route.params
//   return (
//     <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
//       <SharedElement id={`item.${item.id}.image_url`}>
//         <Image
//           source={{ uri: item.image_url }}
//           style={{
//             width: "100%",
//             height: ITEM_HEIGHT,
//             borderBottomLeftRadius: 20,
//             borderBottomRightRadius: 20,
//           }}
//           resizeMode="cover"
//         />
//       </SharedElement>
//       <MaterialCommunityIcons
//         name="close"
//         size={28}
//         color="#fff"
//         style={{
//           position: "absolute",
//           top: 40,
//           right: 20,
//           zIndex: 2,
//         }}
//         onPress={() => {
//           navigation.goBack()
//         }}
//       />
//       <View
//         style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 20 }}
//       >
//         <SimpleLineIcons size={40} color="white" name={item.iconName} />
//         <View style={{ flexDirection: "column", paddingLeft: 6 }}>
//           <Text
//             style={{
//               color: "white",
//               fontSize: 24,
//               fontWeight: "bold",
//               lineHeight: 28,
//             }}
//           >
//             {item.title}
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontSize: 16,
//               fontWeight: "bold",
//               lineHeight: 18,
//             }}
//           >
//             {item.description}
//           </Text>
//         </View>
//       </View>
//       <ScrollView
//         indicatorStyle="white"
//         style={{
//           paddingHorizontal: 20,
//           backgroundColor: "#0f0f0f",
//         }}
//         contentContainerStyle={{ paddingVertical: 20 }}
//       >
//         <Text
//           style={{
//             fontSize: 18,
//             color: "#fff",
//             lineHeight: 24,
//             marginBottom: 4,
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//         <Text
//           style={{
//             fontSize: 18,
//             color: "#fff",
//             lineHeight: 24,
//             marginBottom: 4,
//           }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//     </View>
//   )
// }
// Details.sharedElements = route => {
//   const { item } = route.params
//   return [
//     {
//       id: `item.${item.id}.image_url`,
//       animation: "move",
//       resize: "clip",
//     },
//   ]
// }

// export default Details
