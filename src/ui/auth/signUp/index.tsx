import { useState } from 'react';
import { Alert, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Appbar, Button, Text, TextInput } from 'react-native-paper';

import styles from './signUp.styles.js';

export default function SignUpContent() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const hasRequiredValues =
    name.trim() !== '' && email.trim() !== '' && password.trim() !== '';

  const handleSubmit = () => {
    setSubmitted(true);

    if (!hasRequiredValues) {
      return;
    }

    Alert.alert('Success', 'Sign up form submitted.');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction iconColor="#FFFFFF" onPress={() => router.back()} />
        <Appbar.Content title="Sign Up" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <View style={styles.formContainer}>
        <Text variant="headlineSmall" style={styles.title}>
          Sign Up
        </Text>

        <TextInput
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={setName}
          style={styles.input}
          error={submitted && name.trim() === ''}
        />

        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          error={submitted && email.trim() === ''}
        />

        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          error={submitted && password.trim() === ''}
        />

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.submitButton}
        >
          Submit
        </Button>
      </View>
    </View>
  );
}
