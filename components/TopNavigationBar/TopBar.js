// Imports
import React from "react";
import { View, StyleSheet, Image } from "react-native";

// Icons
import ArrowLeftIcon from "../../assets/icons/arrow_left.png";
import SearchIcon from "../../assets/icons/search.png";
import HomeIcon from "../../assets/icons/home.png";

const TopBar = () => {
  return (
    <View style={styles.topNavigation}>
      <Image source={ArrowLeftIcon} />
      <View style={styles.imagesContainer}>
        <Image source={SearchIcon} />
        <Image style={{ marginLeft: 20 }} source={HomeIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavigation: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imagesContainer: {
    flexDirection: "row",
  },
});

export default TopBar;
