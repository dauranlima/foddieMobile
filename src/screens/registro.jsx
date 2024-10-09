import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../styles/registro.style'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Button from '../components/button'
import {useState} from 'react'


export default function Registro(props) {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [pass1, setPass1] = useState('')
const [pass2, setPass2] = useState('')

  return (
    <>
    <View style={styles.container}>
      <ScrollView>
      <Header text={'Crie sua conta.'}/>

      <View style={styles.formGroup}>
        <View style={styles.form}>
        <InputBox value={name} onChangeText={(text)=> setName(text)} label={'Nome Completo'} placeholder={'Digite seu Nome Completo'}/>
        <InputBox value={email} onChangeText={(text)=> setEmail(text)}  label={'E-mail'} placeholder={'Digite seu E-mail'}/>
        <InputBox value={pass1} onChangeText={(text)=> setPass1(text)} isPassword={true} label={'Digite a Senha'} placeholder={'Digite sua Senha'}/>
        <InputBox value={pass2} onChangeText={(text)=> setPass2(text)} isPassword={true} label={'Confirme a Senha'} placeholder={'Confirme sua Senha'}/>
        <Button text={'Próximo Passo'} onPress={()=> props.navigation.navigate('Registro2')} />
        </View>
      </View>
      </ScrollView>
    </View>
    </>
  )
}