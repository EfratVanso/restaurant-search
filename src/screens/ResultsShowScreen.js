import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";
import { ScrollView } from "react-native-gesture-handler";

export default function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    // run when first rendered
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.name}>{result.name}</Text>
      <Text> Address: {result.location.display_address}</Text>
      <Text> Pone: {result.phone}</Text>

      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 10,
    alignSelf: "center",
  },
});
