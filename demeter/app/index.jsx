import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Redirect, router } from 'expo-router';
import '../global.css'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { images } from '../constants';
import ButtonComponent from '../components/ButtonComponent';
import LogoComponent from '../components/LogoComponent';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className='w-full min-h-[90vh] justify-center items-center px-4'>
            <LogoComponent/>
            <Text className='text-3xl text-black text-center font-plight border-10 border-gray-200'>Discover New Ways To Keep A Plant Alive</Text>
            <Image source={images.homeScreenImage} resizeMode='contain' className='w-1/2 h-2/3 border-10 border-gray-200'/>
            <ButtonComponent title='GO' handlePress={() => router.push('/sign_in')}/>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor='#ffffff' style='dark' />
    </SafeAreaProvider>
  );
}
