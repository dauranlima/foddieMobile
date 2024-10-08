import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/login.style'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Button from '../components/button'


export default function Login() {
  return (
    <View style={styles.container}>
      <Header text={'Acesse sua conta.'}/>
      <View style={styles.formGroup}>
        <View style={styles.form}>
        <InputBox label={'E-mail'} placeholder={'Digite seu E-mail'}/>
        <InputBox isPassword={true} label={'Senha'} placeholder={'Digite sua Senha'}/>
        <Button text={'Acessar'}/>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.footerText}>Criar uma conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}