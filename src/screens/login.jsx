import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../styles/login.style'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Button from '../components/button'
import { useState } from 'react'


export default function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isvalid,setIsvalid] = useState(false)


function handleLogin() {

}

function handleLogin() {
    if(email === 'Dauran' && password === '123') {
    setIsvalid(true)
    props.navigation.navigate('Home')
  } else {
    alert('E-mail ou senha inválidos!')
    setIsvalid(false)
  }
}

  return (
    <View style={styles.container} >
      <ScrollView>
      <Header text={'Acesse sua conta.'}/>
      <View style={styles.formGroup}>
        <View style={styles.form}>
        <InputBox label={'E-mail'} placeholder={'Digite seu E-mail'} value={email} onChangeText={(text) => setEmail(text)} />
        <InputBox isPassword={true} label={'Senha'} placeholder={'Digite sua Senha'}  value={password} onChangeText={(text) => setPassword(text)}/>
        <Button onPress={handleLogin} text={'Acessar'}/>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Registro')}>
          <Text style={styles.footerText}>Criar uma conta.</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}