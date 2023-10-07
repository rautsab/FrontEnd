import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>Hello World</Text>
      <Text style={styles.newContainer}>This is Redwan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    fontWeight: "700",
    fontSize: 16,
    color: "red"
  },
  newContainer: {
    fontWeight: "900",
    fonts: 26,
    color: "black"
  }
});

export default App;
