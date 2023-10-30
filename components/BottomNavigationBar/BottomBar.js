// Imports
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

// Icons
import NewsIcon from "../../assets/icons/news.png";
import MicIcon from "../../assets/icons/mic.png";
import AnalyticsIcons from "../../assets/icons/analytics.png";
import ProgramIcon from "../../assets/icons/program.png";
import CompareIcon from "../../assets/icons/compare.png";
import TrophyIcon from "../../assets/icons/trophy1.png";

const BottomBar = () => {
  return (
    <View style={styles.bottomNavigation}>
      <View style={styles.navigationItem}>
        <Image source={NewsIcon} />
        <Text style={styles.text}>Zprávy</Text>
      </View>
      <View style={styles.navigationItem}>
        <Image source={MicIcon} />
        <Text style={styles.text}>Rozhovory</Text>
      </View>
      <View style={styles.navigationItem}>
        <Image source={AnalyticsIcons} />
        <Text style={styles.text}>Analýzy</Text>
      </View>
      <View style={styles.navigationItem}>
        <Image source={ProgramIcon} />
        <Text style={styles.text}>Program</Text>
      </View>
      <View style={styles.navigationItem}>
        <Image source={CompareIcon} />
        <Text style={styles.text}>Porovnání</Text>
      </View>
      <View style={styles.navigationItem}>
        <Image source={TrophyIcon} />
        <Text style={styles.text}>Tabulky</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 60,
  },
  navigationItem: {
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 8,
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default BottomBar;
