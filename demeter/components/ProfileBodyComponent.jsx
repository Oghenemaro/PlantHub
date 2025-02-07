import { StyleSheet, Text, View, FlatList, Image, TextInput } from 'react-native'
import React from 'react'
import { images } from '../constants'
const ProfileBodyComponent = ({ data }) => {
    console.log(data);
  return (
    <View className="flex-1 m-2 p-3">
        {/* extrat search into a component */}
        <View className='flex-row w-full border-2 border-gray-400 items-center px-4 mb-7 rounded-xl'>
            <Image source={images.searchIcon} className='w-6 h-6 justify-center items-center' resizeMode='contain' />
            <TextInput className='flex-1' placeholder='Search '/>
        </View>
        {/* extract flatlist into a component */}
        <FlatList
        className="flex-1 "
        data={data}
        keyExtractor={(item) => item._id.toString()}  // Make sure to destructure 'item' correctly
        renderItem={({ item }) => {
            return (
            <View className="flex-1 box-border p-5 mb-3 flex-row border-2 border-gray-400 w-full min-h-[10vh] bg-white rounded-xl">
                <View className='flex-2 mr-3 border-2 border-indigo-200 rounded-md'>
                    <Image source={images.plantAvatar} className='w-20 h-full rounded-md' />
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