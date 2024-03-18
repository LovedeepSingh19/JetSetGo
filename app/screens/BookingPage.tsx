import BookHotel from "app/components/BookHotel";
import Gallery from "app/components/Gallery";
import Info from "app/components/Info";
import formatDateTime from "app/helpers/dateTime";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs, useGlobalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

type BookingPageProps = {};

const { height, width } = Dimensions.get("screen");
const BookingPage: React.FC<BookingPageProps> = () => {
  const flightData = useGlobalSearchParams();
  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <Tabs.Screen options={{ headerShown: false, title: "Bookings" }} />
        <View style={styles.bookingHead}>
          <Gallery image={require("../../assets/airplane.jpg")} />
        </View>
        <View style={styles.bookingInfo}>
          <Info
            title={`${flightData.from} -> ${flightData.to}`}
            location={`${flightData.airline}`}
            price={flightData.price}
            rating={5}
            seats={`Total available seats - ${flightData.seats}`}
            time={`Estimated flight time - ${flightData.duration}`}
            arrival={`Onboarding time - ${formatDateTime(
              `${flightData.arrival}`
            )}`}
            departure={`Departure time - ${formatDateTime(
              `${flightData.depart}`
            )}`}
          />
        </View>
        <View style={styles.bookingFooter}>
          <BookHotel title="BOOK THIS FLIGHT" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default BookingPage;
const topSectionHeight = height / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bookingHead: {
    height: topSectionHeight,
    top: -60,
  },
  bookingInfo: {
    zIndex: 2,
    marginTop: -150,
    width: width,
    height: height / 2.0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: "9%",
    paddingHorizontal: "10%",
  },
  bookingFooter: {
    zIndex: 20,
    marginTop: -20,
    height: height / 4.2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: "5%",
    paddingHorizontal: "10%",
    backgroundColor: "#1a2f3b",
  },

});
