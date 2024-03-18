import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, SafeAreaView } from 'react-native';


export default function Info(props: any) {
    const {title, location, price, rating, time, seats, arrival, departure} = props;

    return <SafeAreaView>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.sectionTitle}>{location}</Text>
        <View style={styles.statsContainer}>
            <View style={styles.priceContainer}>
                <Text style={[styles.sectionTitle, {color:"grey", fontSize:15}]}>Price</Text>
                <Text style={styles.priceValue}>{price}</Text>
            </View>
            <View style={styles.ratingsContainer}>

                <Text style={styles.sectionTitle}>{rating} Star Reviews</Text>
            </View>
        </View>
        <View style={styles.readMoreText}>
            <Text>{time}</Text>
            <Text>{arrival}</Text>
            <Text>{departure}</Text>
            <Text>{seats}</Text>
        </View>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    titleWrapper:{
        marginBottom: 5,
    },
    title:{
        fontSize: 33,
        lineHeight: 33,
        fontWeight: 'bold',
    },
    sectionTitle:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    statsContainer:{
        paddingTop: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        marginTop: 5,
    },
    priceContainer: {
        flex: 1,
    },
    priceTitle:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    priceValue:{
        fontSize: 60,
        lineHeight: 70,
        color: '#dcb26a',
        fontWeight: 'bold',
    },
    ratingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingsWrapper: {
        width: 94,
    },
    description:{
        lineHeight: 22,
    },
    readMoreContainer:{
        paddingVertical: 15,
    },
    readMoreText:{
        paddingTop: 8,
        color: '#dcb26a',
        fontSize: 22,
        rowGap: 6,
        fontWeight: 'bold',
    },
});