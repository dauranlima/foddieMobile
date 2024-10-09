import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  icone: {
    width: 65,
    height: 65,
  },
  categoria:{
paddingRight:10,
  },
  descricao: {
    fontSize: FONT_SIZE.small,
    color: COLORS.dark_gray,
    marginTop: 5,
  }
});