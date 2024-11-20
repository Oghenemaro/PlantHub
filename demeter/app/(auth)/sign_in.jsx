import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoComponent from '../../components/LogoComponent'
import FormComponent from '../../components/FormComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { Link } from "expo-router";

const Sign_in = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const submit = (() => {

  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View className='w-full min-h-[70vh] justify-center px-4 my-3'>
          <LogoComponent/>
          <Text className='text-2xl font-semibold'>Log in to Demeter</Text>
          <FormComponent 
            title='Email' 
            value={form.email} 
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
          <FormComponent 
            title='Password' 
            value={form.password} 
            handleChangeText={(e) => setForm({...form, password: e})}
          />
          <ButtonComponent 
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
        </View>
        <View className='justify-center flex-row pt-5 gap-2'>
          <Text className='text-lg text-black font-pregular'>
            Don't have an account? |
          </Text>
          <Link href='/sign_up' className='text-lg text-secondary font-pregular'>Sign Up</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sign_in