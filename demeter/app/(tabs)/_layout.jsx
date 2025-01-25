import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center w-16'>
            <Image source={icon} resizeMode='stretch' tintColor={color} className='w-6 h-6' />
            <Text className={`${focused ? 'font-pblack' : 'font-pregular' } text-xs`}>{name}</Text>
        </View>
    )
}

const _layout = () => {
  return (
    <>
        <Tabs screenOptions={{ tabBarShowLabel: false }}>
            <Tabs.Screen name='home' options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.home} color={color} name='Home' focused={focused} />
                    )
                }}
            />
            <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.profile} color={color} name='profile' focused={focused} />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default _layout