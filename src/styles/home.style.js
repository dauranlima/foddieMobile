import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:12,
    backgroundColor: COLORS.white,
  },
  headerBar: {
    height:45,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  logo: {
    width:140,
    height:27,
  },
  cart: {
    width:30,
    height:30,
  },
  search:{
    marginBottom: 20,
  }
});