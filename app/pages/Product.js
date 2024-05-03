import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import VictorIcon from 'react-native-vector-icons/MaterialIcons'
const ProductPages = ({ petData }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: petData.imageUri }} />
      <Text style={styles.price}>$ {petData.price}</Text>
      <Text
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <VictorIcon name="star-rate" color={'orange'} size={20} />
        <View>
          <Text> {petData.rating}</Text>
        </View>
      </Text>
      <Text style={styles.title}>{petData.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    padding: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
})
export default ProductPages
