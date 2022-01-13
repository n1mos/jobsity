import React from 'react'

import { FlatList, Text, View } from 'react-native'

import Styles from './ShowList.style'
import Show from 'App/Components/Show/Show'

const ShowList = ({ title, data, onRefresh, onEndReached, ListFooterComponent, refreshing }) => {

  return (
    <View style={Styles.container}>
      <FlatList
        data={data}
        style={Styles.list}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={({ item }) => <Show page={false} data={item} />}
        keyExtractor={(item) => `show-${item.id}`}
        ListHeaderComponent={() => <Text style={Styles.title}>{title}</Text>}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  )
}

export default ShowList
