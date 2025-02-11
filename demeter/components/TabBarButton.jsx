import { Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { PlatformPressable, Pressable } from '@react-navigation/elements'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import icon from '../constants/icon.jsx'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, color, label }) => {
    const { colors } = useTheme();
    // const { buildHref } = useLinkBuilder();
    const scale = useSharedValue(0)

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0): isFocused, {duration: 350})
    }, [scale, isFocused])

    const animatedText = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])
        return{
            opacity
        } 
    })
    const animatedIcon = useAnimatedStyle(() => {
        const size = interpolate(scale.value, [0, 1], [1, 1.2])
        const top = interpolate(scale.value, [0, 1], [0, 9])
        return {
            transform: [{
                scale: size
            }],
            top
        }
    })
    return (
        <PlatformPressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
        >
            <Animated.View style={animatedIcon}>
                {/* Handle rountName being undefined properly*/}
                {icon[routeName]({
                    color: isFocused ? '#fff' : '#222'
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? colors.primary : colors.text, fontSize: 10 }, animatedText]}>
                {label}
            </Animated.Text>
        </PlatformPressable>
    )
}

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})

export default TabBarButton