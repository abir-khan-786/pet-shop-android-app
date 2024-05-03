import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import Header from '../components/HomePages/Header'
import VictorIcon from 'react-native-vector-icons/Feather'
import ProductPages from './Product'
import { petData } from '../utils/fakeData/fakeData'
import { useState } from 'react'

const HomePages = () => {
  const [seleted, setSeleted] = useState('all')

  const categorySeleted = (title) => {
    if (title) {
      setSeleted(title)
    }
  }

  const data = [
    {
      id: 1,
      slug: 'all',
      name: 'All',
      icon: '🌏',
    },
    {
      id: 2,
      slug: 'slug-dogs',
      name: 'Dog',
      icon: '🐶',
    },
    {
      id: 3,
      slug: 'slug-cat',
      name: 'Cat',
      icon: '🐱',
    },
    {
      id: 4,
      slug: 'slug-patot',
      name: 'Parot',
      icon: '🦜',
    },
  ]

  return (
    <ScrollView>
      <Header />

      <View style={styels.bodyStyels}>
        <Text style={styels.searchBarText}>What Pet Are you loking for?</Text>
        <TextInput style={styels.inputText} placeholder="Enter Search pet" />
        <View style={styels.searchIcon}>
          <VictorIcon name="search" size={30} />
          <VictorIcon name="filter" size={30} />
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            paddingBottom: 4,
            marginLeft: 5,
          }}
        >
          Category
        </Text>

        <FlatList
          data={data}
          renderItem={(data) => (
            <Item
              categorySeleted={categorySeleted}
              seleted={seleted}
              data={data.item}
            />
          )}
          keyExtractor={(data) => data.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={petData}
        renderItem={(data) => <ProductPages petData={data.item} />}
        keyExtractor={(data) => data.id.toString()}
        numColumns={2}
      />
    </ScrollView>
  )
}
const Item = ({ data, categorySeleted, seleted }) => {
  return (
    <Pressable
      onPress={() => categorySeleted(data.slug)}
      style={{
        marginLeft: 10,
        padding: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        backgroundColor: data.slug == seleted ? 'green' : 'white',
      }}
    >
      <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{data.name}</Text>
        <Text style={{ marginLeft: 10, fontSize: 25 }}>{data.icon}</Text>
      </TouchableOpacity>
    </Pressable>
  )
}

const styels = StyleSheet.create({
  bodyStyels: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  searchBarText: {
    fontSize: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  inputText: {
    width: 350,
    height: 70,
    borderBlockColor: 'red',
    borderWidth: 1,
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 25,
  },
  searchIcon: {
    display: 'flex',
    flexDirection: 'row',
    width: 280,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 25,
  },
})

export default HomePages
