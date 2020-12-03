import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ResultsDetails({result}) {
    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height:120,
        borderRadius:4
    },
    name:{
        fontWeight: 'bold'
    }
})

