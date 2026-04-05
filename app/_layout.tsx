import { AuthProvider, useAuth } from '@/src/dataHandling/context/AuthContext';
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';

function RootLayoutNav() {
  const { isLoggedIn } = useAuth()!;

  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!segments.length) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!isLoggedIn && !inAuthGroup) {
      router.replace('/sign-in');
    }

    if (isLoggedIn && inAuthGroup) {
      router.replace('/');
    }
  }, [isLoggedIn, segments, router]);

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
