import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const css = StyleSheet.create({
  bg: {
    flex: 1,
    width: null,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#126f69',
  },
  loginCotainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#fff',
    padding: 10,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginBottom: 8,
    width: (width - 45),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#8ad57b',
    width: (width - 45),
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#022714',
  },
  signup: {
    fontSize: 14,
    color: '#fff',
    margin: 30,
  },
  logo: {
    marginTop: 70,
    marginBottom: 40,
  },
  logoImage: {
    width: 355,
    height: 75,
  },
  viewOfInformations: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 7,
    marginTop: -30,
  },
  boxInformatio: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'justify'
  }
});

export default css;
