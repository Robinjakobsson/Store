import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../types/Product'

type CartCardProps = {
    item: Product;
}

const CartCard = ({item}: CartCardProps) => {
  return (
    <View style={{padding: 2}}>
    <View style={styles.container}>
      <Image source={{uri: item.thumbnail}} style={styles.image} />
      <Text style={styles.titleText}>{item.title}</Text>
      <Text>${item.price}</Text>
    </View>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,           
    shadowRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  titleText: {
    fontWeight: '500'
  }
})