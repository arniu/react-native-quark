import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quark from 'react-native-quark'

export default () => (
  <View style={styles.container}>
    <Quark value='Hello!' />
    <Quark value='Quark!' style={styles.quark} />
    <Quark value='您好!' color='navy' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quark: {
    margin: 40,
    color: 'purple'
  }
})
