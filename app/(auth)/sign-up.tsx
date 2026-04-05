import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function SignUp() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up</Text>
      <Button title="Go to Sign Up" onPress={() => router.push('/sign-in')} />
    </View>
  );
}
