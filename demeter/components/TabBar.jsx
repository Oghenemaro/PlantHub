import { View, Platform, StyleSheet, LayoutChangeEvent } from 'react-native';
import TabBarButton from './TabBarButton';
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';



export function TabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const [dimensions, setDimension] = useState({width: 1000, height: 200})

  const determineWidth = dimensions.width / state.routes.length
  // set layout dimension depending on viewport 
  const onTabBarLayout = (e) => {
    setDimension({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height
    })
  }
  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return{
      transform: [{
        translateX: tabPositionX.value
      }]
    }
  })
  return (
    <View onLayout={onTabBarLayout} style={style.tabBar}>
      <Animated.View style={[animatedStyle,{
        position: 'absolute',
        backgroundColor: '#723FEB',
        borderRadius: 100,
        marginHorizontal: 12,
        height: dimensions.height - 10,
        width: determineWidth - 25
      }]}/>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          // set the x-axis value 
          
          tabPositionX.value = withSpring(determineWidth * index, {duration:1500})
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (

          <TabBarButton key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#673ab7' : '#222'}
            label={label} />
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1

  }



})