import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Routes } from '../themes'

const BlogScreen = () => {
    const nav = useNavigation()
  return (
    <View>
         <TouchableOpacity onPress={() => navigation.navigate(Routes.Post as never)}>
                <Text>next page</Text>
            </TouchableOpacity>
        
      <Text>BlogScreen</Text>
    </View>
  )
}

export default BlogScreen

const styles = StyleSheet.create({})