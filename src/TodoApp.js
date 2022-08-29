import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TodoForm from "./component/TodoForm";
import { Provider } from 'react-redux'
import Store from "../store";
import TodoList from "./component/TodoList";

export default class TodoApp extends React.Component {
    render() {
        return(
            <Provider store={Store}>
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