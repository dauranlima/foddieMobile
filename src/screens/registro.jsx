import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../styles/registro.style'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Button from '../components/button'


export default function Registro() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header text={'Crie sua conta.'}/>
      <View style={styles.formGroup}>
        <View style={styles.form}>
        <InputBox label={'Nome Completo'} placeholder={'Digite seu E-mail'}/>
        <InputBox  label={'E-mail'} placeholder={'Digite sua Senha'}/>
        <InputBox isPassword={true} label={'Digite a Senha'} placeholder={'Digite sua Senha'}/>
        <InputBox isPassword={true} label={'Confirme a Senha'} placeholder={'Digite sua Senha'}/>
        <Button text={'Próximo Passo'}/>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.footerText}>Acessar minha conta.</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}