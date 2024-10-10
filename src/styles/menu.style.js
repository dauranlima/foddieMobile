import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.white,
  },
  containerFoto:{
    alignItems:'center',
  },
  foto:{
    height:150,
  },
  icon:{
    height:60,
    width:60,
  },
  containerBack:{
    position:'absolute',
    top:40,
    left:20,
  },
  header:{
    padding:5,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:COLORS.white,
  },
  containerFav:{
    alignItems:'center',
    justifyContent:'center',
  },
  texts:{
    flex:1,
  },
  resName:{
    fontSize:FONT_SIZE.md,
    fontWeight:'bold',
    marginBottom:2,
    color: COLORS.dark_gray,
  },
  resTax:{
    fontSize:FONT_SIZE.md,
    color: COLORS.medium_gray,
  },
  iconFav:{
    height:30,
    width:30,
  },
  locationImg:{
    height:25,
    width:25,
    margin:10,
  },
  location:{
    fontSize:FONT_SIZE.md,
    color: COLORS.medium_gray,
    marginRight:50,
  },
  containerCardapio:{
  padding:10,
  },
  categoria:{
    fontSize:FONT_SIZE.md,
    fontWeight:'bold',
    color: COLORS.dark_gray,
    padding:2,
  },

});