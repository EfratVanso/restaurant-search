import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp';

export default function ResultsShowScreen({navigation}) {
    const [results, setResults] = useState(null);
    const id = navigation.getParam('id');
    console.log(results)
    const getResult = async(id)=>{
        const response = await yelp.get(`/${id}`);
        setResults(response.data)
    }
    useEffect(() => {// run when first rendered
        getResult(id)
    }, []);

    return (
        <View>
            <Text>{JSON.stringify(results) }</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    
})


