import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop:110,
    backgroundColor: COLORS.white
  },
  form:{
    display:'flex',
    gap:15,
    width: '100%',
    marginBottom: 15,
  },
  formGroup:{
    marginTop:50,
    width: '100%',
  },
  footerText:{
    color: '#2B79BB',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  }
});