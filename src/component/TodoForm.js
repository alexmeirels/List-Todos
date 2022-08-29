import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Input from "./Input";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    onChangeText(){
        this.setState({
            text: 'ok'
        })
    }
    onPress(){
        this.props.dispatchAddTodo(this.state.text)
        this.setState({text: ''})
    }
    
    render(){
        const { text } = this.state;
        return(
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text> ENTRE</Text>
                    <Input 
                        onChangeText={text => this.onChangeText()}
                        value={text}
                    />
                    <Text> ENTRE</Text>
                </View>
                <View>
                    <Button 
                        onPress={() => console.log()}
                        title="add"
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
    dispatchAddTodo: addTodo
}


export default connect(null , mapDispatchToProps)(TodoForm)