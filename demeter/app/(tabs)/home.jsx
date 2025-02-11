import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import ProfileHeaderComponent from '../../components/ProfileHeaderComponent'
import ProfileBodyComponent from '../../components/ProfileBodyComponent'
import { plants } from '../../routes/plants'

const Home = () => {
  // const { data, loading, error } = plants('http://192.168.1.135:3000/api/plants')
  const { data, loading, error } = ''

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
    <SafeAreaView className="flex-1 pt-10 bg-white">
      <ProfileHeaderComponent/>
      <ProfileBodyComponent data={data}/>
    </SafeAreaView>
  )
}

export default Home
