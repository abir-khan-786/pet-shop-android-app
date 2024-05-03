import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import VitorIcon from 'react-native-vector-icons/AntDesign'
const Header = () => {
  return (
    <View style={styles.backgroundView}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/cheerful-young-girl-vector-portrait_1308-163430.jpg?w=740&t=st=1714669738~exp=1714670338~hmac=bb49975ff0104ce869c41457f8e315656c86fa8f99bec33c986eabbd5b64a4da',
          }}
          height={70}
          width={70}
          borderRadius={50}
          style={{ borderWidth: 2, borderColor: 'green', borderRadius: 50 }}
        />

        <View style={{ padding: 5 }}>
          <Text style={styles.nameText}> Hi, Abir Khan</Text>
          <Text style={styles.titleText}> Redy to Shop</Text>
        </View>
      </View>
      <View>
        <VitorIcon name="appstore-o" color={'white'} size={30} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: '#430795',
    height: 150,
    width: '100%',
    paddingTop: 60,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  nameText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'italic',
    paddingBottom: 5,
  },
})

export default Header
