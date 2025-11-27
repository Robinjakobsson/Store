import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation/RootStackParamList'

type ProductDetailScreenProp = RouteProp<RootStackParamList, 'ProductDetailScreen'>;

type Props = {
  route: ProductDetailScreenProp
}

const ProductDetailScreen = ({route}: Props) => {
  const item = route.params
  return (
    <View>
      <Text>{item.id}</Text>
    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({})