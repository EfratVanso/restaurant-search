import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetails from './ResultsDetails'

export default function ResultsList({title, results}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            inverted={-1}
            horizontal
            data = {results}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
                return <ResultsDetails result={item}/>
            }}
            />
            
        </View>
    );
       
}
const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    titleStyle:{
        marginBottom:5,
        fontSize:18,
        fontWeight: 'bold',
        marginRight:15
    }
});