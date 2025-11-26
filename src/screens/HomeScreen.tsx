import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'


const HomeScreen = () => {
  const { products, loading} = useProducts();
 

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
    <View style={styles.container}>
      <View style={styles.sectionTextContainer}>
        <Text style={styles.sectionText}>Recommendation</Text>
      </View>
        <FlatList 
          data={products}
          keyExtractor={(product) => product.id.toString()}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{padding: 10}}
          renderItem={({item}) => <ProductCard  item={item}/> }
        />


        
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  sectionText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  sectionTextContainer: {
    justifyContent:'center',
  }

  

})