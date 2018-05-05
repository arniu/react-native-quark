import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Quark from 'react-native-quark'

export default () => (
  <View style={styles.container}>
    <Quark value='Quark，你好!' />
    <Text style={styles.title}>Quark</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    margin: 5
  }
})
