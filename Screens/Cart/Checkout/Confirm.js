import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";
import { produceWithPatches } from "immer";

var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  const confirm = props.route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm order</Text>
        {props.route.params ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address:{confirm.order.order.shippingAddress1}</Text>
              <Text>Address2:{confirm.order.order.shippingAddress2}</Text>
              <Text>City:{confirm.order.order.city}</Text>
              <Text>Zip code:{confirm.order.order.zip}</Text>
              <Text>Country:{confirm.order.order.country}</Text>
            </View>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Confirm;
