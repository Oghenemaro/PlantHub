import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoComponent from '../../components/LogoComponent'
import FormComponent from '../../components/FormComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { Link, router } from "expo-router";
import { signIn, deleteSession } from '../../lib/appwrite'

const Sign_in = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const deleteAllSessions = async () => {
    deleteSession()
  }
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('error', 'Fill all information');
    }
    setIsSubmitting(true)
    try {
      await signIn(form.email, form.password)
      router.replace('/home')
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
            <ButtonComponent 
            title='Delete Sessions'
            handlePress={deleteAllSessions}
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