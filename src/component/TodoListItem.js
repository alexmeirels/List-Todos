import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({todo, onPressTodo, onLongPressTodo}) => (

    <TouchableOpacity
        onPress={onPressTodo}
        onLongPress={onLongPressTodo}
        >    
        <View style={style.line}>
            <Text style={[
                style.lineText,
                todo.done ? style.lineThrough : null]}>{todo.text}</Text>
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
  lineThrough: {
    textDecorationLine: 'line-through'
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 30,
    borderRadius: 50,
  },
});

export default TodoListItem;