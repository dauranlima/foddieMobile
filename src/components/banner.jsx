import { styles } from '../styles/banner.style'
import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
export default function Banner(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {props.dados.map((banner,i)=>{
        return <View key={banner.id} style={styles.categoria}>
        <TouchableOpacity>
          <Image style={styles.icone} source={banner.icone} />
        </TouchableOpacity>
        </View>
      })}
      </ScrollView>
    </View>
  )
}