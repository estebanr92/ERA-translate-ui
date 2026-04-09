import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: '#6750A4',
  },
  headerTitle: {
    color: '#FFFFFF',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 24,
  },
  input: {
    width: '100%',
    maxWidth: 320,
    marginBottom: 12,
  },
  submitButton: {
    width: '100%',
    maxWidth: 320,
    marginTop: 4,
  },
});

export default styles;
