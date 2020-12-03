import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetails from './ResultsDetails'

export default function ResultsList({title, results}) {
    return (
        <View>
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
    titleStyle:{
        fontSize:18,
        fontWeight: 'bold'
    }
});