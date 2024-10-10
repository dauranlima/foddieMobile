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
    height:175,
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
  texts:{
    flex:1,
  },
  name:{
    padding:10,
    fontSize:FONT_SIZE.md,
    fontWeight:'bold',
    marginBottom:2,
    color: COLORS.dark_gray,
  },
  valor:{
    marginTop:15,
    paddingLeft:10,
    fontSize:FONT_SIZE.lg,
    fontWeight:'bold',
    marginBottom:2,
    color: COLORS.dark_gray,
  },
  descricao:{
    marginTop:10,
    padding:10,
    fontSize:FONT_SIZE.md,
    color: COLORS.medium_gray,
  },
  textArea:{
    borderWidth:1,
    borderColor: COLORS.medium_gray,
    paddingTop:15,
    paddingLeft:10,
    borderRadius:10,
    backgroundColor: COLORS.light_gray,
    minHeight:190,
    textAlignVertical:'top',
  },
  footer:{
    flexDirection:'row',
    position:'absolute',
    bottom:20,
    left:0,
    padding:10,
    alignItems:'center',
  },
  imgQtde:{
    width:40,
    height:40,
  },
  footerBtn:{
    flex:1,
    alignItems:'center',
    marginRight:5,
    marginLeft:25,
  },
  qtde:{
    width:40,
    textAlign:'center',
    fontSize:FONT_SIZE.lg,
    fontWeight:'bold',
    marginBottom:2,
    color: COLORS.dark_gray,
  },
});