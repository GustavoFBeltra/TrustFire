import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Check if user is authenticated
  // If authenticated, redirect to (tabs)
  // Otherwise, redirect to (auth)/welcome

  return <Redirect href="/(auth)/welcome" />;
}
