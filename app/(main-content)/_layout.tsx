import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen
        name="translation-list"
        options={{ title: 'Translations' }}
      />
    </Tabs>
  );
}
