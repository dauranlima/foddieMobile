import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  InputBox: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.whitesmoke,
    borderRadius: 10,
    padding: 14,
    marginBottom:15,
  },
  textLabel:{
  color: COLORS.dark_gray,
  fontSize: FONT_SIZE.md,
  marginLeft: 5,
  },
});