import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function ListItem({item, handleTaskRemove, handleMarkComplete}) {
  return (
    <View style={styles.listItem} key={item?.id}>
      <Text style={{color: '#000000', fontWeight: 'bold'}}>{item.value}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleTaskRemove(item)}>
          <Image
            source={require('../assets/icons/remove.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: 10}}
          activeOpacity={0.5}
          onPress={() => handleMarkComplete(item)}>
          <Image
            source={require('../assets/icons/checkMark.png')}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#eee',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
