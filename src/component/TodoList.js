import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { setEditingTodo } from "../actions";
const TodoList = ({todos, dispatchToggleTodo, dispatchSetEditingTodo} ) => (
    <View>
        {todos.map(todo => 
            <TodoListItem 
                key={todo.id} 
                todo={todo} 
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
                />)}
    </View>
);
const mapDispatchToProps = {

}

const mapStateToProps = state => {
    const {todo} = state;
    return {todos : todo};
}

export default connect(mapStateToProps, {dispatchToggleTodo: toggleTodo, dispatchSetEditingTodo: setEditingTodo})(TodoList);