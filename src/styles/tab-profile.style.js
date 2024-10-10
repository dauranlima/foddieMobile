import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:10,
    marginBottom:5,
    backgroundColor: COLORS.white,
  },
  image:{
    height:30,
    width:30,
  },
  containerIcon:{
    justifyContent:'center',
  },
  item:{
    flexDirection:'row',
    padding:12,
    borderBottomWidth:1,
    borderBottomColor:COLORS.gray,
  },
  texts:{
    flex:1,
    marginLeft:10,
  },
  title:{
    fontSize: FONT_SIZE.md,
    color:COLORS.dark_gray,
  },
  subTitle:{
    fontSize: FONT_SIZE.sm,
    color:COLORS.medium_gray,
  },
  imageExpand:{
    height:20,
    width:20,
  },
  borderTop:{
    borderTopWidth:1,
    borderTopColor:COLORS.gray,
  }

});