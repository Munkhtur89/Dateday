import React, { useState } from "react";

import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [date, setDateTime] = useState("");

  const showDate = () => {
    //Get Current Date
    var date = new Date().getDate();

    //Get Current Month
    var month = new Date().getMonth() + 1;

    //Get Current Year
    var year = new Date().getFullYear();

    //Get Current Time Hours
    var hours = new Date().getHours();

    //Get Current Time Minutes
    var min = new Date().getMinutes();

    //Get Current Time Seconds
    var sec = new Date().getSeconds();

    var finalObject =
      year + "-" + month + "-" + date + " " + hours + ":" + min + ":" + sec;

    setDateTime(finalObject);
  };

  return (
    <SafeAreaView style={styleSheet.MainContainer}>
      <Text style={styleSheet.dateText}> {date} </Text>

      <TouchableOpacity
        onPress={showDate}
        activeOpacity={0.6}
        style={styleSheet.button}
      >
        <Text style={styleSheet.buttonText}>
          {" "}
          GET CURRENT DATE and TIME in React Native{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  dateText: {
    fontSize: 23,
    color: "black",
    paddingBottom: 15,
  },

  button: {
    width: "80%",
    padding: 10,
    backgroundColor: "#33691E",
    borderRadius: 7,
  },

  buttonText: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  },
});
