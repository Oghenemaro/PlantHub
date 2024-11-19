import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoComponent from '../../components/LogoComponent'

const Sign_in = () => {
  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View className='w-full h-h-full justify-center px-4 my-6'>
          <LogoComponent/>
          <Text className='text-2xl font-semibold'>Log in to Demeter</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sign_in