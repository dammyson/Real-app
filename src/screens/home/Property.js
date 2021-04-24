/* eslint-disable react/prop-types, react/jsx-one-expression-per-line, react/jsx-closing-tag-location */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../components/theme/colors";

const PropertyComponent = ({
  propertyName,
  propertyValue,
  defaultValue,
  actionLabel,
  verticalMargin,
  onActionPress
}) => (
  <View style={[styles.container, { marginVertical: verticalMargin }]}>
    {actionLabel && (
      <TouchableOpacity onPress={onActionPress}>
       
      </TouchableOpacity>
    )}
  </View>
);

PropertyComponent.defaultProps = {
  verticalMargin: 20
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 4
  },
  propertyName: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 10
  },
  propertyType: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5
  },
  propertyValue: {
    fontSize: 14,
    color: "#585757",
    marginBottom: 5
  },
  action: {
    marginTop: 10,
    width: 170,
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 5,
    backgroundColor: colors.placeholder_color,
    color: "#FFF"
  }
});

export default PropertyComponent;
