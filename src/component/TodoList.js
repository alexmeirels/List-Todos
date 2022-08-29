import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";

const TodoList = ({todos = []} ) => (
    <View>
        {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </View>
);


const mapStateToProps = state => {
    const {todo} = state;
    return {todos : todo};
}

export default connect(mapStateToProps)(TodoList);