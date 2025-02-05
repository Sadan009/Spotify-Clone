import { FlatList } from "react-native";
import { tracks } from "@/assets/data/tracks";
import TrackListItem from "@/src/components/TrackListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => {
        return <TrackListItem track={item} />;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
