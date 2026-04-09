import { useAuth } from '@/src/dataHandling/context/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import styles from './signIn.styles.js';

export default function SignInContent() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth()!;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Welcome to Pecker
      </Text>

      <Text variant="bodyMedium" style={styles.subtitle}>
        Please sign in
      </Text>

      <View style={styles.buttonsContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Log In
      </Button>

      <Text variant="bodyMedium" style={styles.orLabel}>
        Or
      </Text>

      <Button
        mode="contained-tonal"
        onPress={() => router.push('/sign-up')}
        style={styles.button}
      >
        Go to Sign Up
      </Button>
    </View>
  );
}
