import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  form:{
    display:'flex',
    gap:1,
    width: '100%',
  },
  formGroup:{
    marginTop:25,
    width: '98',
  },
flexContainer:{
  flexDirection: 'row',
},
flexItem1:{
  width: '69%',
  marginRight:2,
  
},
flexItem2:{
  width: '30%',
}

})