import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoComponent from '../../components/LogoComponent'
import FormComponent from '../../components/FormComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { Link } from "expo-router";

const Sign_up = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const submit = (() => {

  })
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            keyboardType='email-address'
          />
          <FormComponent 
            title='Password' 
            value={form.password} 
            handleChangeText={(e) => setForm({...form, password: e})}
          />
          <FormComponent 
            title='Confirm Password' 
            value={form.confirmPassword} 
            handleChangeText={(e) => setForm({...form, confirmPassword: e})}
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