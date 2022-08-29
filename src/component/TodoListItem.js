import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({todo}) => (

    <TouchableOpacity
        onPress={() => {}}>
        <View style={style.line}>
            <Text style={style.lineText}>{todo.text}</Text>
        </View>
    </TouchableOpacity>
);
const style = StyleSheet.create({
  line: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 30,
    paddingLeft: 30,
    flex: 7,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 30,
    borderRadius: 50,
  },
});

export default TodoListItem;