import { FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCart } from '../context/CartContext'
import CartCard from '../components/CartCard';

const CartScreen = () => {
  const { cart } = useCart();
  const totalSum = cart.reduce((sum,product) => sum + product.price, 0);
    
  return (
    <View style={{flex: 1,}}>
      
      <FlatList 
        data={cart}
        keyExtractor={(product) => product.id.toString()}
        contentContainerStyle={{paddingBottom: 140}}
        renderItem={({item}) => (
            <CartCard item={item} />
        )}
      />
      <View style={styles.checkOutContainer}>
        <View style={styles.sum}>
            <Text style={styles.sumText}>Total</Text>
            <Text style={styles.sumText}>${totalSum}</Text>
        </View>
        <TouchableOpacity style={styles.cashOutButton}>
          <Text style={styles.cashOutButtonText}>Go to Kassan</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  checkOutContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    elevation: 999,
  },
  sum: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sumText: {
    paddingHorizontal: 10,
    fontWeight: '100',
    fontSize: 40,
  },
  cashOutButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#000',
    alignItems:'center'
  },
  cashOutButtonText: {
    color: '#fff',
    fontWeight: 'bold',

  }
})