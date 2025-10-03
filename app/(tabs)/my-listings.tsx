import { View, StyleSheet } from 'react-native';
import { EmptyState } from '@/components/ui';
import { Colors } from '@/constants/theme';

export default function MyListingsScreen() {
  return (
    <View style={styles.container}>
      <EmptyState
        icon="📋"
        title="No Active Listings"
        description="Create your first listing to start selling"
        actionLabel="+ Create Listing"
        onAction={() => {
          /* TODO: Navigate to create listing */
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
});
