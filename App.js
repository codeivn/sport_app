// Imports
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// Components
import TopBar from "./components/TopNavigationBar/TopBar";
import BottomBar from "./components/BottomNavigationBar/BottomBar";

const MainScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Navigation Bar */}
      <TopBar />
      {/* Screen Content */}
      <View style={styles.content}>
        {/* Main Container */}
        <View style={styles.containerWithMargin}>
          <View>
            <View style={styles.iconRow}>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 30,
                }}
              >
                <Image
                  style={{ marginVertical: 15 }}
                  source={require("./assets/images/logo2.png")}
                />
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  FC Porto
                </Text>
              </View>

              <Text style={{ color: "white", fontSize: 30 }}>:</Text>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: 30,
                }}
              >
                <Image
                  style={{ marginVertical: 15 }}
                  source={require("./assets/images/logo1.png")}
                />
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "600" }}
                >
                  Barcelona
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.grayContainer}>
            <View>
              <Image
                style={styles.image}
                source={require("./assets/images/league.png")}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <View style={styles.row}>
                  <Image
                    style={styles.image}
                    source={require("./assets/icons/stadium_green.png")}
                  />
                  <Text style={styles.placeName}>Stadion</Text>
                </View>
                <View style={styles.row}>
                  <Image
                    style={styles.image}
                    source={require("./assets/icons/hand_green.png")}
                  />
                  <Text style={styles.placeName}>Navstevnost</Text>
                </View>
                <View style={styles.row}>
                  <Image
                    style={styles.image}
                    source={require("./assets/icons/whistle_green.png")}
                  />
                  <Text style={styles.placeName}>Rozhodci</Text>
                </View>
                <View style={styles.row}>
                  <Image
                    style={styles.image}
                    source={require("./assets/icons/trophy_green.png")}
                  />
                  <Text style={styles.placeName}>Soutez</Text>
                </View>
              </View>

              <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <View style={styles.row}>
                  <Text style={styles.placeName}>Camp Nou</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.placeName}>88 000</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.placeName}>Szymon Marciniak</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.placeName}>La Liga</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textRow}>
          <Text style={{ color: "white", marginRight: 40 }}>prehled</Text>
          <Text style={{ color: "white", marginRight: 40 }}>soupiska</Text>
          <Text style={{ color: "white", marginRight: 40 }}>statistiky</Text>
          <Text style={{ color: "white" }}>H2H</Text>
        </View>
        {/* Results Containers */}
        <View style={styles.newContainer}>
          <View style={styles.leftHalf}>
            <View style={styles.iconWithBorder}>
              <Image
                style={{ borderRightWidth: 1, borderColor: "white" }}
                source={require("./assets/images/league_logo.png")}
              />
              <View style={styles.border} />
            </View>
            <View style={styles.leftColumn}>
              <View style={styles.row}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("./assets/images/porto.png")}
                />
                <Text style={styles.itemText}>FC Porto</Text>
              </View>
              <View style={styles.row}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("./assets/images/barca.png")}
                />
                <Text style={styles.itemText}>Barcelona</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightHalf}>
            <Text style={{ color: "white", marginRight: 15 }}>19.10.22</Text>
            <View style={styles.rightColumn}>
              <Text style={styles.rightColumnText}>3</Text>
              <Text style={styles.rightColumnText}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.newContainer}>
          <View style={styles.leftHalf}>
            <View style={styles.iconWithBorder}>
              <Image
                style={{ borderRightWidth: 1, borderColor: "white" }}
                source={require("./assets/images/league_logo.png")}
              />
              <View style={styles.border} />
            </View>
            <View style={styles.leftColumn}>
              <View style={styles.row}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("./assets/images/porto.png")}
                />
                <Text style={styles.itemText}>FC Porto</Text>
              </View>
              <View style={styles.row}>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("./assets/images/barca.png")}
                />
                <Text style={styles.itemText}>Barcelona</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightHalf}>
            <Text style={{ color: "white", marginRight: 15 }}>19.10.22</Text>
            <View style={styles.rightColumn}>
              <Text style={styles.rightColumnText}>3</Text>
              <Text style={styles.rightColumnText}>1</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Bottom Navigation Bar */}
      <BottomBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#242424",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerWithMargin: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 10,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  grayContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#373737",
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  placeName: {
    marginLeft: 15,
    fontSize: 18,
    color: "white",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  plainText: {
    fontSize: 18,
    color: "white",
  },
  newContainer: {
    flexDirection: "row",
    backgroundColor: "#373737",
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 10,
  },
  leftHalf: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconWithBorder: {
    flexDirection: "row",
    alignItems: "center",
  },
  border: {
    width: 1,
    height: "100%",
    backgroundColor: "white",
  },
  leftColumn: {
    marginLeft: 10,
  },
  itemText: {
    fontSize: 16,
    color: "white",
  },
  rightHalf: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rightHalfText: {
    fontSize: 16,
    color: "white",
  },
  rightColumn: {
    alignItems: "center",
    marginTop: 10,
  },
  rightColumnText: {
    fontSize: 16,
    color: "white",
  },
});

export default MainScreen;
