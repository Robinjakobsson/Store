import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

type CartCardProps = {
  item: Product;
};

const CartCard = ({ item }: CartCardProps) => {
  const { addToCart, removeFromCart, updateQuantity, cart } = useCart();

  const Decrease = () => {
    const currentQty = item.quantity ?? 1;

    if (currentQty <= 1) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, currentQty - 1)
    }
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button} onPress={Decrease}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity ?? 1}</Text>

          <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    color: '#888',
    fontSize: 14,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantity: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '500',
  },
});