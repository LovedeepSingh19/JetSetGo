import { Stack, router, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FlightSearchForm from "./components/FlightSearchForm";
import { getFlightsData } from "./services/api";
import axios from "axios";
import FlightOptionItem from "./components/FlightOptionItem";
import { Provider } from "react-redux";
import { store } from "./services/store";

type indexProps = {};
export type ListItem = {
  aircraft: string;
  airline: string;
  arrivalTime: string;
  departureTime: string;
  destination: string;
  duration: string;
  flightNumber: string;
  gate: string;
  id: number;
  origin: string;
  price: number;
  seatsAvailable: number;
};

const index: React.FC<indexProps> = () => {
  const [items, setItems] = useState<ListItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const initialState = store.getState().value;
    if (initialState === null || initialState.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    const unsubscribe = store.subscribe(() => {
      setItems(store.getState().value);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) {
      getFlightsData().then((e) => {
        setLoading(false);
      });
    }
  }, [loading]);

  const onSearch = async ({
    price,
    from,
    to,
    Returndate,
    Departuredate,
    airlines,
  }: {
    price: number;
    from: string;
    to: string;
    Returndate: Date;
    Departuredate: Date;
    airlines: string;
  }) => {
    setLoading(true);
    let sortedItems;
    // const filteredItemsDate = items!.filter(item => {
    //   const departureTime = new Date(item.departureTime);
    //   return departureTime >= Returndate && departureTime <= Departuredate;
    // });
    const filteredAirlines = items!.filter(
      (item: any) => item.airline === airlines
    );
    if(filteredAirlines.length == 0 || airlines === ""){

      const filteredItems = items!.filter(
        (item: any) => item.origin === from && item.destination === to
      );
      console.log("filteredItems");
      console.log(filteredItems);
      if (filteredItems.length != 0 && (to !== "" || from !== "")) {
        if (price === 0) {
          sortedItems = [...filteredItems].sort(
            (a: any, b: any) => a.price - b.price
          );
        } else {
          sortedItems = [...filteredItems].sort(
            (a: any, b: any) => b.price - a.price
          );
        }
  
        setItems(sortedItems);
      } else if (filteredItems.length != 0 || to == "" || from == "") {
        if (price === 0) {
          sortedItems = [...items!].sort((a: any, b: any) => a.price - b.price);
        } else {
          sortedItems = [...items!].sort((a: any, b: any) => b.price - a.price);
        }
  
        setItems(sortedItems);
      } else {
        setItems([]);
      }
    }else{
      if (price === 0) {
        sortedItems = [...filteredAirlines].sort(
          (a: any, b: any) => a.price - b.price
        );
      } else {
        sortedItems = [...filteredAirlines].sort(
          (a: any, b: any) => b.price - a.price
        );
      }
      setItems(sortedItems);
    }
    setLoading(false);
  };

  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <Tabs.Screen options={{ headerShown: false, title: "Home" }} />
        <View style={{ paddingTop: 15 }}>

        <FlightSearchForm onSearch={onSearch} />
        </View>
        {loading && (
          <View style={{ alignItems: "center" }}>
            <ActivityIndicator />
            <Text>Searching for the best prices...</Text>
          </View>
        )}
        {items != null && items!.length === 0 && (
          <View style={{ alignItems: "center" }}>
            <Text>No flights available...</Text>
          </View>
        )}
        <ScrollView>
          {items &&
            items.map((item: ListItem) => (
              <TouchableHighlight
                key={item.id}
                underlayColor="#DDDDDD"
                onPress={() =>
                  router.push({
                    pathname: "/screens/BookingPage",
                    params: {
                      price: item.price,
                      airline: item.airline,
                      from: item.origin,
                      to: item.destination,
                      seats: item.seatsAvailable,
                      arrival: item.arrivalTime,
                      depart: item.departureTime,
                      duration: item.duration,
                    },
                  })
                }
              >
                <FlightOptionItem flight={item} />
              </TouchableHighlight>
            ))}
          <View style={{ height: 260 }} />
        </ScrollView>
        <StatusBar />
      </SafeAreaView>
    </LinearGradient>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
