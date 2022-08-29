import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoForm from "./component/TodoForm";
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import TodoList from "./component/TodoList";

// const store = createStore(rootReducer)

export default class TodoApp extends React.Component {
    render() {
        return(
            <Provider>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    }
})