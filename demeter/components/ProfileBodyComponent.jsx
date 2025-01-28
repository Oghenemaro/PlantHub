import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
const ProfileBodyComponent = ({ data }) => {
    console.log(data);
  return (
    <View className="flex-1 m-2">
        <Text>Your Plants</Text>
        <FlatList
        className="flex-1"
        data={data}
        keyExtractor={(item) => item._id.toString()}  // Make sure to destructure 'item' correctly
        renderItem={({ item }) => {
            return (
            <View className="flex-1 p-5 flex-row m-3 border-2 border-gray-400 w-vw min-h-[10vh] rounded-xl">
                <View className='flex-2 mr-3 border-2 border-indigo-200'>
                    <Image source={images.plantAvatar} className='w-20 h-full' />
                </View>
                <View className='flex-1'>
                    {/* <Text>{item._id}</Text> */}
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.createdAt}</Text>
                    <Text>{item.updatedAt}</Text>
                </View>
            </View>
            )
        }}
        />
    </View>
  )
}

export default ProfileBodyComponent

const styles = StyleSheet.create({})