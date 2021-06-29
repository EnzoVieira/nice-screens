import React from "react"
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import { SharedElement } from "react-navigation-shared-element"
import { SimpleLineIcons } from "@expo/vector-icons"

import food, { tabs, ORANGE, popularFood } from "./food"

const { width } = Dimensions.get("screen")
const CELL_WIDTH = width * 0.64
const CELL_HEIGHT = CELL_WIDTH * 1.4
const FULL_SIZE = CELL_WIDTH + 8 * 2
const SPACING = 8

export default function FoodList({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
      <StatusBar hidden />

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
        <Text style={styles.title}>Sair</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        data={food}
        renderItem={({ item }) => (
          <FoodFlatList food={item} navigation={navigation} />
        )}
        keyExtractor={item => item.key}
        horizontal
        snapToInterval={CELL_WIDTH + 8 * 2}
        decelerationRate="fast"
        // initialScrollIndex={1}
      />

      <FlatList
        contentContainerStyle={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        data={popularFood}
        renderItem={({ item }) => <PopularFoodFlatList food={item} />}
        keyExtractor={item => item.key}
        horizontal
      />
    </View>
  )
}

function FoodFlatList({ food, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { food })}
      style={{
        marginTop: 50,
        width: CELL_WIDTH,
        height: CELL_HEIGHT,
        marginHorizontal: SPACING,
        backgroundColor: food.color,
        borderRadius: SPACING,
        padding: SPACING,
      }}
    >
      <SharedElement id={`item.${food.key}.title`}>
        <View>
          <Text style={{ color: "#fff", fontSize: 32, fontWeight: "600" }}>
            {food.type}
          </Text>
          <Text style={{ color: "#888", textTransform: "uppercase" }}>
            {food.subType}
          </Text>
        </View>
      </SharedElement>
    </TouchableOpacity>
  )
}

function PopularFoodFlatList({ food }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f0f0f0",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#000", textAlign: "center", fontSize: 12 }}>
        {food.type}
      </Text>
    </TouchableOpacity>
  )
}

// const data = [
//   {
//     id: "1",
//     title: "Manarola, Italy",
//     description: "The Cliffs of Cinque Terre",
//     image_url:
//       "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
//     iconName: "location-pin",
//   },
//   {
//     id: "2",
//     title: "Venezia, Italy",
//     description: "Rialto Bridge, Venezia, Italy",
//     image_url:
//       "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80",
//     iconName: "location-pin",
//   },
//   {
//     id: "3",
//     title: "Prague, Czechia",
//     description: "Tram in Prague",
//     image_url:
//       "https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
//     iconName: "location-pin",
//   },
// ]

// const ITEM_WIDTH = width * 0.9
// const ITEM_HEIGHT = ITEM_WIDTH * 0.9

// export default function FoodList({ navigation }) {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
//       <StatusBar hidden />
//       {/* Header */}
//       <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
//         <Text style={{ color: "#888", textTransform: "uppercase" }}>
//           Saturday 9 January
//         </Text>
//         <Text style={{ color: "#fff", fontSize: 32, fontWeight: "600" }}>
//           Today
//         </Text>
//       </View>

//       <ScrollView
//         indicatorStyle="white"
//         contentContainerStyle={{ alignItems: "center" }}
//       >
//         {data.map(item => (
//           <View key={item.id}>
//             <TouchableOpacity
//               activeOpacity={0.8}
//               style={{ marginBottom: 14 }}
//               onPress={() => navigation.navigate("Details", { item })}
//             >
//               <SharedElement id={`item.${item.id}.image_url`}>
//                 <Image
//                   style={{
//                     borderRadius: 14,
//                     width: ITEM_WIDTH,
//                     height: ITEM_HEIGHT,
//                   }}
//                   source={{ uri: item.image_url }}
//                   resizeMode="cover"
//                 />
//               </SharedElement>
//               <View
//                 style={{
//                   position: "absolute",
//                   bottom: 20,
//                   left: 10,
//                 }}
//               >
//                 <View style={{ flexDirection: "row" }}>
//                   <SimpleLineIcons
//                     size={40}
//                     color="white"
//                     name={item.iconName}
//                   />
//                   <View style={{ flexDirection: "column", paddingLeft: 6 }}>
//                     <Text
//                       style={{
//                         color: "white",
//                         fontSize: 24,
//                         fontWeight: "bold",
//                         lineHeight: 28,
//                       }}
//                     >
//                       {item.title}
//                     </Text>
//                     <Text
//                       style={{
//                         color: "white",
//                         fontSize: 16,
//                         fontWeight: "bold",
//                         lineHeight: 18,
//                       }}
//                     >
//                       {item.description}
//                     </Text>
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 22,
    color: "#fff",
  },
  subType: {
    fontSize: 12,
    opacity: 0.8,
  },
})
