import { useAuth } from '@/src/dataHandling/context/AuthContext';
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function SignIn() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth()!;

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Sign In</Text>

      <Button title="Go to Sign Up" onPress={() => router.push('/sign-up')} />

      <Button title="Log In" onPress={handleSignIn} />
    </View>
  );
}
