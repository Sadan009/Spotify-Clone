import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { tracks } from "@/assets/data/tracks";
import TrackListItem from "@/src/components/TrackListItem";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* Header */}
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput
          value={search}
          onChangeText={(e) => setSearch(e)}
          style={styles.input}
          placeholder="What do you want to listen"
          placeholderTextColor="white"
        />
        <Text onPress={() => setSearch('')} style={{ color: "white" }}>Cancel</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => {
          return <TrackListItem track={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#121314",
    padding: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
});
