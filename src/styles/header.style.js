import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 50,
    borderWidth:10
  },
  title:{
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    textAlign:'center',
  },
  header:{
    width:'100%',
    marginTop: 80,
    alignItems: 'center',

  }
});