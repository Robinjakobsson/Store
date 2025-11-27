import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation/RootStackParamList';
const {width, height} = Dimensions.get("window");

type ProductCardProps = {
    item: Product
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

const ProductCard = ({item}: ProductCardProps) => {
    const { addToCart } = useCart();
    const navigation = useNavigation<NavigationProp>();

    
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', item)}>
     <View style={styles.itemContainer}>
        <Image source={{uri: item.thumbnail}} style={styles.image} />
     </View>
     </TouchableOpacity>
      <View style={styles.textContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.priceText}>${item.price}</Text>

        <TouchableOpacity onPress={() => addToCart(item)} style={styles.buyButton} >
            <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
        
      </View>
     </View>
     
     
  )
}


export default ProductCard

const styles = StyleSheet.create({
    itemContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: width / 2 - 40,
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    shadowColor: '#000',    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,           
    shadowRadius: 5,
    
  },
  image: {
    width: '100%',
    height: '100%',

  },
  textContainer: {
    marginTop: 10,
    width: width / 2 - 40,
  },
  productTitle: {
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buyButton: {
    borderRadius: 25,
    backgroundColor: '#1e1e1e',
    width: width * 0.15,
    alignItems: 'center'
  },
  buyButtonText: {
    color: '#ffff',
    padding: 5,
    fontWeight: 'bold'
  },
  priceText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold'
  }
})