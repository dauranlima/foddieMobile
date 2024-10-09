import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from '../constants/theme'


export const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    marginBottom:10,
    backgroundColor:'white'    
  },
  texts:{
    flex:1,
    padding:8,
  },
  name:{
    color:COLORS.dark_gray,
    fontSize: FONT_SIZE.md,

  },
  image:{
    width:80,
    height:80,
    borderRadius:15,
  },
  priceAndDate:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5,
    marginTop:5,
  },
  price:{
    color:'black',
    fontWeight:'bold',
    fontSize: FONT_SIZE.md,
  },
  date:{
    color:COLORS.medium_gray,
  },
  entregue:{
    color:COLORS.green,
    fontSize: FONT_SIZE.md,
  }
});