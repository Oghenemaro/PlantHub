import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import { plants } from '../../routes/plants'

const Home = () => {
  const { data, loading, error } = plants('http://192.168.1.135:3000/api/plants')

  if (loading) {
    return (
      <View className="w-full min-h-[90vh] justify-center items-center px-4">
        <Text>Loading....</Text>
      </View>
    )
  }

  if (error) {
    console.error(error)  // Log the error in the console
    return (
      <View className="w-full min-h-[90vh] justify-center items-center px-4">
        <Text>Error occurred</Text>
      </View>
    )
  }

  if (!data) {
    return (
      <View className="w-full min-h-[90vh] justify-center items-center px-4">
        <Text>No data available</Text>
      </View>
    )
  }

  // Properly return JSX for FlatList
  return (
    <View className="flex-1">
      <FlatList
        className="flex-1"
        data={data}
        keyExtractor={(item) => item._id.toString()}  // Make sure to destructure 'item' correctly
        renderItem={({ item }) => {
          return (
            <View className="w-full min-h-[20vh] justify-center items-center">
              <Text>{item._id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.createdAt}</Text>
              <Text>{item.updatedAt}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Home
