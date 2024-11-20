import { TouchableOpacity, Text} from 'react-native'
import React from 'react'

const ButtonComponent = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress} 
      activeOpacity={0.7} 
      className={`justify-center items-center bg-green-950 w-36 h-16 rounded-full ${containerStyles} ${isLoading ? 'opacity-50': ' '} `}
      disabled={isLoading}>
    <Text className={`text-white text-3xl' ${textStyles} `}>{title}</Text>
  </TouchableOpacity>
  )
}

export default ButtonComponent