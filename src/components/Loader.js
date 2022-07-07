import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    main:{
flex:1,
backgroundColor:"red",
    },
})