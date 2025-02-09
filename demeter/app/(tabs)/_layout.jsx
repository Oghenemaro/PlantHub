import { View, Text, Image, Pressable } from 'react-native'
import { Tabs, Redirect, router } from 'expo-router'
import { icons } from '../../constants'
import { TabBar } from '../../components/TabBar.jsx'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center w-16 border-2 border-grey-400'>
            <Image source={icon} resizeMode='stretch' tintColor={color} className='w-6 h-6' />
            <Text className={`${focused ? 'font-pblack' : 'font-pregular' } text-xs`}>{name}</Text>
        </View>
    )
}

const _layout = () => {
  return (
    <>
        <Tabs tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name='home' options={{
                    title: 'Home',
                    headerShown: false,
                }}
            />
            <Tabs.Screen name='addPlant' options={{
                    title: 'Plant',
                    headerShown: false,
                }}
            />
            <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                    headerShown: false,
                  
                }}
            />
        </Tabs>
    </>
  )
}

export default _layout