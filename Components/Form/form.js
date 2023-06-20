import React, {useState} from 'react';
import {Text, TextInput, View, Image, Button, TouchableOpacity} from "react-native";
import {styles} from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import {CreateCustomer} from "../Services/userService";

const Form = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const submit = async () => {
        const user ={
            name,
            password
        }
        console.log(user)
        try {
            const {data , status} = await CreateCustomer(user)

        }catch (e){
            console.log(e)
        }
    }


    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>نام کاربری</Text>
                <View style={styles.after}/>
                <Icon style={styles.Icon} name="user" size={20}/>

                <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.inputName}
                    placeholder="نام کاربری"
                />
            </View>
            <View style={styles.inputPassMain}>
                <Text style={styles.labelPass}>کلمه عبور</Text>
                <View style={styles.after}/>

                <Icon style={styles.Icon} name="key" size={20}/>

                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.inputPass}
                    placeholder="کلمه عبور"

                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={submit}
                    style={styles.button}
                    underlayColor='#fff'>
                    <Text style={styles.buttonText}>ورود</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Form;