import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="listing/[id]" options={{ headerShown: true, title: 'Listing Details' }} />
      <Stack.Screen name="transaction/[id]" options={{ headerShown: true, title: 'Transaction' }} />
    </Stack>
  );
}
