import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../styles/registro2.style'
import Header from '../components/Header'
import InputBox from '../components/InputBox'
import Button from '../components/button'
import {useState} from 'react'


export default function Registro2() {

const [address, setaddress] = useState('')
const [compl, setCompl] = useState('')
const [neighborhood, setNeighborhood] = useState('')
const [cep, setCep] = useState('')
const [city, setCity] = useState('')
const [uf, setUf] = useState('')

function handleCadastro() {
  console.log(`Address: ${address}, compl: ${compl}, neighborhood: ${neighborhood}, cep:${cep}, city:${city}, uf:${uf}`)
}
  return (
    <>
    <View style={styles.container}>
      <ScrollView>
      <Header text={'Informe seu endereço'}/>
      <View style={styles.formGroup}>
        <View style={styles.form}>
        <InputBox  label={'Endereço completo'} value={address} onChangeText={(text)=> setaddress(text)}/>
        <View>
            <InputBox value={compl} onChangeText={(text)=> setCompl(text)}  label={'Complemento'}/>
            <InputBox value={neighborhood} onChangeText={(text)=> setNeighborhood(text)}   label={'Bairro'}/>
          </View>
        <InputBox value={cep} onChangeText={(text)=> setCep(text)}  label={'CEP'}/>
          <View style={styles.flexContainer}>
            <View 
              style={styles.flexItem1} 
            >
            <InputBox 
              label={'Cidade'}
              value={city} onChangeText={(text)=> setCity(text)} 
              />
              </View>
              <View
                style={styles.flexItem2} 
              >
            <InputBox 
              label={'UF'}
              value={uf} onChangeText={(text)=> setUf(text)} 
              />
              </View>
          </View>
        <Button text={'Criar minha conta'} onPress={handleCadastro}/>
        </View>
      </View>
      </ScrollView>
    </View>
    </>
  )
}