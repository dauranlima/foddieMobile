import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  InputBox: {
    width: '100%',
    height: 50,
    borderWidth:1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.dark_gray,
    borderRadius: 10,
    padding: 14,
  },
  textLabel:{
  color: COLORS.dark_gray,
  fontSize: FONT_SIZE.md,
  marginLeft: 5,
  },
});