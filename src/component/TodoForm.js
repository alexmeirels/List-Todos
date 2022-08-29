import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Input from "./Input";
import { connect } from "react-redux";
import { addTodo, setTodoText, updateTodo } from "../actions";

class TodoForm extends React.Component {

    onChangeText(text){
        this.props.dispatchSetTodoText(text)
    }
    onPress(){
        const { todo } = this.props;
        if(todo.id){
            return this.props.dispatchUpdateTodo(todo)
        }
        const {text} = this.props.todo;
        this.props.dispatchAddTodo(text);
        
    }
    
    render(){
        const { text, id } = this.props.todo;
        return(
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text> ------------------------------</Text>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                    <Text> ------------------------------</Text>
                </View>
                <View>
                    <Button 
                        onPress={() => this.onPress()}
                        title={id ? "update" : "add"}
                        style={styles.buttonContainer}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    formContainer: {

    },
    inputContainer: {

    },
    buttonContainer: {

    },

})

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodo(text))
//     }
// }

const mapDispatchToProps = {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
}

const mapStateToProps = state => {
    return{
        todo: state.editingTodo
    }
    
}

export default connect(mapStateToProps , mapDispatchToProps)(TodoForm)