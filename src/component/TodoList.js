import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
const TodoList = ({todos, dispatchToggleTodo} ) => (
    <View>
        {todos.map(todo => 
            <TodoListItem 
                key={todo.id} 
                todo={todo} 
                onPressTodo={() => dispatchToggleTodo(todo.id)}
                />)}
    </View>
);
const mapDispatchToProps = {

}

const mapStateToProps = state => {
    const {todo} = state;
    return {todos : todo};
}

export default connect(mapStateToProps, {dispatchToggleTodo: toggleTodo})(TodoList);