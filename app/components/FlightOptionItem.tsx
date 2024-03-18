import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import formatDateTime from "../helpers/dateTime"
import { ListItem } from 'app';

type FlightOptionItemProps = {
    flight: ListItem
};

const FlightOptionItem:React.FC<FlightOptionItemProps> = ({ flight }) => {
  return (
    <View style={styles.container}>
      <View style={styles.routes}>
        <View style={styles.route}>
          <Text style={styles.time2}>
            {formatDateTime(flight.departureTime)}{' '}
          </Text>
            {/* <Ionicons name="airplane" size={16} color="gray" />{' '} */}
          <Text style={{paddingRight:10}}>

            {'-->'}
          </Text>
          <Text style={styles.time2}>

            {formatDateTime(flight.arrivalTime)}
          </Text>
          {/* </Text> */}
          <Text style={styles.airline}>{flight.airline}</Text>
        </View>

        <View style={styles.route}>
          <Text style={styles.time}>
            {' '}
            <Ionicons name="airplane" size={16} color="gray" />{' '}
            {flight.duration}
          </Text>
          <Text style={styles.airline}>{flight.airline}</Text>
        </View>
      </View>

      <Text style={styles.price}>{flight.price}</Text>
    </View>
  );
};

export default FlightOptionItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
  },
  routes: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'gainsboro',
    gap: 10,
    paddingRight: 10,
  },
  route: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time2: {
    fontWeight: 'bold',
    fontSize: 11,
    flex: 1,
    flexDirection: "column",
    color: 'dimgray',
    // fontFamily: 'Courier New',
  },
  time: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'dimgray',
    fontFamily: 'Courier New',
  },
  airline: {
    color: 'gray',
  },
  price: {
    width: 75,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});