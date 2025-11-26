import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { Product } from '../types/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error(err);
    }
  };

  getProducts();
}, []);


  return (
    <SafeAreaView>
    <View>
      <Text>{products[0]?.title}</Text>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})