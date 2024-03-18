import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";

type FlightSearchFormProps = {
  onSearch: any;
};

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSearch }) => {
  // export default function SearchForm({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [airlines, setAirlines] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [price, setPrice] = useState(0);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip
      </Text>

      <TextInput
        value={from}
        onChangeText={setFrom}
        placeholder="From"
        style={styles.input}
      />

      <TextInput
        value={to}
        onChangeText={setTo}
        placeholder="To"
        style={styles.input}
      />
      <TextInput
        value={airlines}
        onChangeText={setAirlines}
        placeholder="Airlines"
        style={styles.input}
      />

      {/* <View style={styles.datePicker}>
        <Feather name="calendar" size={26} color="gray" />
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => setDepartDate(date || new Date())}
          minimumDate={new Date()}
        />
        <Text style={{ fontSize: 20, color: "gainsboro", marginLeft: 10 }}>
          |
        </Text>
        <DateTimePicker
          value={returnDate}
          onChange={(event, date) => setReturnDate(date || new Date())}
          minimumDate={departDate}
        />
      </View> */}
      <View style={styles.searchContainer}>
        <View style={[styles.priceIcons, { backgroundColor: price === 1 ? 'lightblue' : 'white' }]} onTouchEnd={() => setPrice(1)} >
          <MaterialIcons name="attach-money" size={24} color="black" />
          <AntDesign name="arrowup" size={20} color="black" />
        </View>
        <Button
          title="Search"
          onPress={() =>
            onSearch({
              price: price,
              Returndate: returnDate,
              Departuredate: departDate,
              airlines: airlines,
              from: from,
              to: to,
            })
          }
        />
        <View style={[styles.priceIcons, { backgroundColor: price === 0 ? 'lightblue' : 'white' }]} onTouchEnd={() => setPrice(0)}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <AntDesign name="arrowdown" size={20} color="black" />
        </View>
      </View>
    </View>
  );
  // }
};
export default FlightSearchForm;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 10,

    // Shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  title: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    marginVertical: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  priceIcons: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 2,
    borderRadius: 5,
    marginVertical: 5,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  datePicker: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,

    flexDirection: "row",
    alignItems: "center",
  },
});
