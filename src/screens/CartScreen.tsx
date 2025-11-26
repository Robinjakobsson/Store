import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCart } from '../context/CartContext'
import CartCard from '../components/CartCard';

const CartScreen = () => {
    const { cart } = useCart();
  return (
    <View>
      <FlatList 
        data={cart}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({item}) => (
            <CartCard item={item} />
        )}
      
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})