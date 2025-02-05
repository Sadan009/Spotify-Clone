import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Track } from "../types";

type TrackListItem = {
  track: Track;
};

const TrackListItem = ({ track }: TrackListItem) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: track.album.images[0]?.url }} style={styles.img} />
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  img: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default TrackListItem;
