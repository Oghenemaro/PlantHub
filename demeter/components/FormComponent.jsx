import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormComponent = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setPassword] = useState(false)
    const [inputState, setInputState] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles} `}>
      <Text className='text-base font-pmedium'>{title}</Text>
      <View className={`w-full h-16 flex-row px-4 items-center border-2 bg-black rounded-2xl ${inputState ? 'border-secondary' : 'border-black-500'}`}>
        <TextInput 
            className='flex-1 text-white font-psemibold' 
            value={value} 
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
            onFocus={() => setInputState(true)}
            onBlur={() => setInputState(false)}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyehide}
                       className='w-6 h-6' 
                       resizeMode='contain'
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormComponent