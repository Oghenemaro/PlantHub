import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoComponent from '../../components/LogoComponent'
import FormComponent from '../../components/FormComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { Link, router } from "expo-router";
import { createUser, createUserDemo } from '../../lib/appwrite'

const Sign_up = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submit = async () => {
    // createUserDemo()
    if (!form.email || !form.password || !form.username) {
      Alert.alert('error', 'Fill all information');
    }
    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username );
      console.log(result);
      router.replace('/sign_in')
    } catch (error) {
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false)
    }

  }
  return (
    <SafeAreaView className='h-full'>
      <ScrollView>
        <View className='w-full min-h-[70vh] justify-center px-4 my-3'>
          <LogoComponent/>
          <Text className='text-2xl font-semibold'>Sign up to Demeter</Text>
          <FormComponent 
            title='Username' 
            value={form.username} 
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles='mt-7'
          />
          <FormComponent 
            title='Email' 
            value={form.email} 
            handleChangeText={(e) => setForm({...form, email: e})}
            // otherStyles='mt-7'
            // keyboardType='email-address'
          />
          <FormComponent 
            title='Password' 
            value={form.password} 
            handleChangeText={(e) => setForm({...form, password: e})}
          />
          <ButtonComponent 
            title='Sign Up'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
        </View>
        <View className='justify-center flex-row pt-5 gap-2'>
          <Text className='text-lg text-black font-pregular'>
            Have an account? |
          </Text>
          <Link href='/sign_in' className='text-lg text-secondary font-pregular'>Sign In</Link>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sign_up