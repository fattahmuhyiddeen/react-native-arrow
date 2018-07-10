import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

const Arrow = ({ size, color }) => {
  const arrowWidth = size / 3.5;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      overflow: "visible",
      width: size * 1.9,
      height: size * 1.6
    },
    arrowTail: {
      backgroundColor: color,
      width: size * 1.3,
      height: arrowWidth,
      left: size * 0.4,
      borderTopColor: "transparent",
      borderStyle: "solid",
      position: "absolute",
      top: size * 0.66
    },
    arrowHead2: {
      backgroundColor: color,
      width: size,
      height: arrowWidth,
      borderTopColor: "transparent",
      borderStyle: "solid",
      transform: [{ rotate: "45deg" }],
      position: "absolute",
      top: size * 0.9
    },
    arrowHead1: {
      backgroundColor: color,
      width: size,
      height: arrowWidth,
      borderTopColor: "transparent",
      borderStyle: "solid",
      transform: [{ rotate: "135deg" }],
      position: "absolute",
      top: size * 0.4
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.arrowHead1} />
      <View style={styles.arrowHead2} />
      <View style={styles.arrowTail} />
    </View>
  );
};

Arrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

Arrow.defaultProps = {
  size: 15,
  color: "white"
};
export default Arrow;
