import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginTop:10,
    flexDirection:'row',
    backgroundColor:COLORS.white,
  },
  foto:{
    width:80,
    height:80,
    borderRadius:15,
  },
  delete:{
    width:28,
    height:28,
    borderRadius:15,
  },  
  Btndelete:{
    alignItems:'center',
    marginTop:5,
  },
  texts:{
    flex:1,
    marginLeft:10,
  },
  nome:{
    fontSize:FONT_SIZE.md,
    fontWeight:'bold',
    color:COLORS.dark_gray,
  },
  desc:{
    fontSize:FONT_SIZE.sm,
    color:COLORS.medium_gray,
  },
  valor:{
    fontSize:FONT_SIZE.sm,
    color:COLORS.medium_gray,
    marginTop:8,
  },
});