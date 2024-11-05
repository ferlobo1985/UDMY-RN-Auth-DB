import { View, Button, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";

import CustomInput from "./utils/input.custom";

export default function FormComp(){

    const schema = yup.object({
        email:yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
        password:yup.
        string()
        .min(8,({min})=> `Password must be at least ${min} characters`)
        .required("Password is required"),
    })


    return(
        <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios'?'padding':'position'}
            style={{flex:1}}
        >
        <ScrollView>
        <Formik
            initialValues={{email:'',password:''}}
            onSubmit={(values,{ resetForm })=>{
                console.log(values)
                // navigation.navigate('Home')
            }}
            validationSchema={schema}
        >
        { ({ handleSubmit })=> (
        <View>

            <Field
                component={CustomInput}
                name="email"
                placeholder="Enter your email"
                keyboardType="email-address"
            />

            <Field
                component={CustomInput}
                name="password"
                placeholder="Enter your password"
                secureTextEntry={true}
            />

            <Button
                title="Submit"
                onPress={handleSubmit}
            />
        </View>
        )}
        </Formik>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

