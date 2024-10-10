import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../styles/tab-profile.style'
import icons from '../constants/icons'

export default function TabProfile() {
  return (
      <View  style={styles.container}>
    <TouchableOpacity   style={[styles.item,styles.borderTop]}>
      <View style={styles.containerIcon}>
        <Image source={icons.endereco} style={styles.image}/>
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>Endereço</Text>
        <Text style={styles.subTitle}>Meu endereço de entrega</Text>
      </View>
      <View style={styles.containerIcon}>
        <Image source={icons.expandir} style={styles.imageExpand}/>
      </View>
    </TouchableOpacity>

    <TouchableOpacity   style={styles.item}>
      <View style={styles.containerIcon}>
        <Image source={icons.meusDados} style={styles.image}/>
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>Meus Dados</Text>
        <Text style={styles.subTitle}>Informações da minha conta</Text>
      </View>
      <View style={styles.containerIcon}>
        <Image source={icons.expandir} style={styles.imageExpand}/>
      </View>
    </TouchableOpacity>

    <TouchableOpacity   style={styles.item}>
      <View style={styles.containerIcon}>
        <Image source={icons.logout} style={styles.image}/>
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>Desconectar</Text>
        <Text style={styles.subTitle}>Desconectar seu usuário deste aparelho</Text>
      </View>
      <View style={styles.containerIcon}>
        <Image source={icons.expandir} style={styles.imageExpand}/>
      </View>
    </TouchableOpacity>
      </View>
  )
}