import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { images } from "../constants";

const ProfileHeaderComponent = () => {
  return (
    <View className='flex-2 m-2 flex-row  min-h-[10vh] p-3'>
       <Image source={images.femaleAvatar} className='flex-2 w-20 h-20 rounded-full border-2 border-white shadow-xl'/>
       <Text className='flex-3 pt-4 m-2 '>Hi User Name</Text>
       <View className='flex-1 flex-row-reverse pt-6'>
        <Image source={images.messageAvatar} className='w-9 h-9 ml-6'/>
        <Image source={images.notificationAvatar} className='w-9 h-9'/>
       </View>
    </View>
  )
}

export default ProfileHeaderComponent

const styles = StyleSheet.create({
    container: {

    }
})