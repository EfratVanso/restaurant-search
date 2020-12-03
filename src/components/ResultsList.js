import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation'
import ResultsDetails from './ResultsDetails'

const ResultsList = ({title, results, navigation}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}// hide scroll bar
            inverted={-1}
            horizontal
            data = {results}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultShow', {id: item.id})}
                    >
                <ResultsDetails result={item}/>
                </TouchableOpacity>
                )
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
export default withNavigation(ResultsList);