import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AccountRecoveryConfirmationPage = () => {
    const [showImage, setShowImage] = useState(false);
    useEffect(() => {
        const timeoutID = setTimeout(() =>{
            setShowImage(true); 
        }, 2000);
        return () => clearTimeout(timeoutID);
        }, []);

    const navigation = useNavigation(); 
    const backToLoginText = () => {
        navigation.navigate('Login_Prototype');
    }
    const backToRecoveryText = () => {
        navigation.pop();
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.Header} onPress={backToRecoveryText}>
                    <IconButton icon={"arrow-left"} color="white"/>                 
            </TouchableOpacity>
            <View style={styles.Body}>
                <Image style={styles.checkImage} source={require('../assets/Confirm_Check_Icon.png')} />
                <Text style={styles.confirmMain}>
                EMAIL SENT!
                </Text>
                <Text style={styles.confirmSub}>
                Please check your email for your new account
                </Text>
                {showImage && (
                    <TouchableOpacity style={styles.loginButton} onPress={backToLoginText}>
                        <IconButton icon={"arrow-left"} color={'#FFFFFF'} />   
                        <Text style={styles.loginText}>
                            LOG IN
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    Header:{
        // design for back arrow.
    },

    Body:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '95%',
    }   , 
    confirmMain:{
        width: '95%',
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#940707'

    },
    confirmSub:{
        width: '95%',
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
    },
    loginButton:{
        flexDirection:'row',
        width: '50%',
        marginTop: 25,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#940707',
        borderRadius: 25,
        elevation: 10,
        height: 50,
    },
    loginText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 4,   
        marginRight: 50,
        fontWeight: 'bold',
    },
    checkImage:{
        // position: 'absolute',
        // top:250,
        marginBottom: 20,
        width: 50,
        height: 50,
    },

})
export default AccountRecoveryConfirmationPage;