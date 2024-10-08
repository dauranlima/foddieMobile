import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },
  form:{
    display:'flex',
    gap:10,
    width: '100%',
  },
  formGroup:{
    marginTop:25,
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