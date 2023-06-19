import React from 'react';
import {Text, TextInput, View, Image, Button, TouchableOpacity} from "react-native";
import {styles} from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';

const Form = ()=> {
    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>نام کاربری</Text>
                <View style={styles.after}/>
                <Icon style={styles.Icon} name="user" size={20}/>

                <TextInput
                    style={styles.inputName}
                    placeholder="نام کاربری"
                />
            </View>
            <View style={styles.inputPassMain}>
                <Text style={styles.labelPass}>کلمه عبور</Text>
                <View style={styles.after}/>

                <Icon style={styles.Icon} name="key" size={20}/>

                <TextInput

                    style={styles.inputPass}
                    placeholder="کلمه عبور"

                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    underlayColor='#fff'>
                    <Text style={styles.buttonText}>ورود</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Form;