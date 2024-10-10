import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
    padding:20,
  },
  resume:{
    padding:10,
    fontSize:FONT_SIZE.md,
    fontWeight:'bold',
    color:COLORS.dark_gray,
  },
  valores:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,

  },
  textos:{
    color:COLORS.medium_gray,
    fontSize:FONT_SIZE.md,
  },
  textosTotal:{
    fontWeight:'bold',
    color:COLORS.dark_gray,
    fontSize:FONT_SIZE.md,
  },
});