import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  Restaurante: {
    flexDirection:'row',
    marginTop: 20,
    marginBottom:10,
  },
  logotipo:{
    width:80,
    height:80,
    borderRadius:15,
  },
  texts:{
    flex:1,
    padding:10,
  },
  icon:{
    width:30,
    height:30,
  },
  name:{
    color: COLORS.dark_gray,
    marginBottom:5,
    fontSize: FONT_SIZE.sm,
  },
  address:{
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  }
});