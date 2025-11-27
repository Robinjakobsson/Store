import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation/RootStackParamList'
import { SafeAreaView } from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');
type ProductDetailScreenProp = RouteProp<RootStackParamList, 'ProductDetailScreen'>;

type Props = {
  route: ProductDetailScreenProp
}

const ProductDetailScreen = ({route}: Props) => {
  const item = route.params

  return (
    <View style={styles.container}>

      <View style={styles.productContainer}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.titleRowText}>{item.title}</Text>
        <Text style={styles.stockText}>{item.stock} in stock</Text>
      </View>

      <View style={styles.moneyContainer}>
        <Text style={styles.moneyText}>${item.price}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  productContainer: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: height* 0.5,
    shadowColor: '#000',    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,           
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleRow: {
    marginTop: 10,
    width: '100%',

    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    
  },
  titleRowText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  stockText: {
    fontWeight: '400'
  },
  moneyContainer: {
    width: '100%',
    paddingLeft: 10,
  },
  moneyText: {
    fontSize: 40
  },
  descriptionText: {
    fontWeight: '400'
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})