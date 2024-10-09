import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  fav: {
    flex:1,
    backgroundColor:COLORS.white,
    padding:12,
  },
  emptyList:{
    flexGrow:1,
  },
  empty:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:180,
  },
  emptyText:{
    fontSize: FONT_SIZE.sm,
    color:COLORS.dark_gray,
  }
});