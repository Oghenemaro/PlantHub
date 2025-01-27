import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from "../constants";

const ProfileComponent = () => {
  return (
    <View className='flex-2 m-2 border-2 border-indigo-200 flex-row  min-h-[10vh] p-3'>
       <Image source={images.femaleAvatar} className='flex-2 w-20 h-20 rounded-full border-2 border-white shadow-xl'/>
       <Text className='flex-1'>User Name</Text>
       <Text className='flex-3'>Notification section</Text>
    </View>
  )
}

export default ProfileComponent

const styles = StyleSheet.create({
    container: {
        
    }
})