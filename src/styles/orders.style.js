import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    marginBottom:10,
    backgroundColor: COLORS.white,
  },
  imgContainer:{
paddingRight:10,
  },
  image:{

  },
  priceAndData:{

  },
  emptyList:{
    flexGrow:1,
    marginTop:50,
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