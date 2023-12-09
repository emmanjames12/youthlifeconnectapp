import React, {useState,} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as Yup from "yup";
import {Formik} from 'formik';



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your name.'),
  email: Yup.string().email('Invalid email.').required('Please enter your email address.'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters.')
  .required('Please enter your password.'),
});


const LoginPage = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const goBack = () =>{
    navigation.pop();
  };
  const goLogin =() =>{
    navigation.navigate('Login_Prototype')
  };
  const accountConfirmation = () =>{
    navigation.navigate('SignupConfirmation')
  };
  

  const handleSignup = async (values, { setSubmitting, setFieldError }) => {
    try {
      // Your existing logic here

      const payload = {  
        name: values.name,
        email: values.email,
        password: values.password,
        // c_password: values.confirmPassword,
      }
      const response = await axios.post('http://192.168.1.6:3000/api/register',payload);

      console.log(response.data); 
      Navigation.navigate('SignupConfirmation');
    } catch (error) {
      if (error.response && (error.response.status === 404 || error.response.status === 409)) {
        setFieldError('email', 'Email already taken. Please choose another.');
      } else {

      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{
      name: '',
      email: '',
      password: '',
    }}
    validation={SignupSchema}
    >
    {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit,dirty}) => (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={goBack}>
          <IconButton icon={"arrow-left"}/>                 
        </TouchableOpacity>
      </View>

        <View style={styles.Body}>
          <Text style={styles.createAccountText}>
            Create Account
          </Text>
          <TextInput
            style={styles.signupTextInput}
            placeholder='Name'
            value={name}
            autoCapitalize='sentences'
            left={<TextInput.Icon icon="account-outline" />}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />
          <TextInput
            style={styles.signupTextInput}
            placeholder='Email'
            value={email} onChangeText={setEmail}
            autoCapitalize='none'
            left={<TextInput.Icon icon="email-outline" />}
          />
          <TextInput
            style={styles.signupTextInput}
            placeholder='Password'
            value={password} onChangeText={setPassword} secureTextEntry
            autoCapitalize='none'
            left={<TextInput.Icon icon="lock-outline" />}
          />
         
          <TouchableOpacity style={styles.signupButton} onPress= {accountConfirmation}>
            <Text style={styles.signupText}>
              Sign up
            </Text>
          </TouchableOpacity>
          <View style={styles.Bottom}>
            <Text style={styles.loginInfo}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={goLogin}>
              <Text style={styles.loginButton}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
    )}
    </Formik>  
  )
}

const styles = StyleSheet.create({
  Container:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  Header:{
    height: '5%',
  },
  Body:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '95%',
  },
  createAccountText:{
    fontSize: 40,
  },
  signupTextInput:{
    marginTop: 30,
    fontSize: 20,
    width: '80%',
    padding: 5,
    backgroundColor: '#ffffff',
  },
  signupButton:{
    width: '80%',
    padding: 15,
    marginTop: 40,
    backgroundColor: '#940707',
    borderRadius: 25,
    elevation: 10,

  },
  signupText:{ 
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  Bottom:{
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginInfo:{
    marginRight: 3,
    fontSize: 20,
  },
  loginButton:{
    color: '#940707',
    fontSize: 20,
    fontWeight: 'bold',
    elevation: 5,

  },
})

export default LoginPage;