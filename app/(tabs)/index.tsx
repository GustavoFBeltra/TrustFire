import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Input, Card, Badge, EmptyState } from '@/components/ui';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '@/constants/theme';

// Mock data for testing
const MOCK_LISTINGS = [
  {
    id: '1',
    make: 'Glock',
    model: '19 Gen 5',
    caliber: '9mm',
    price: 549,
    distance: '2.5 mi',
    image: 'https://via.placeholder.com/300x200',
    verified: true,
  },
  {
    id: '2',
    make: 'Smith & Wesson',
    model: 'M&P Shield',
    caliber: '9mm',
    price: 399,
    distance: '5.1 mi',
    image: 'https://via.placeholder.com/300x200',
    verified: true,
  },
  {
    id: '3',
    make: 'Ruger',
    model: 'AR-556',
    caliber: '5.56 NATO',
    price: 799,
    distance: '8.3 mi',
    image: 'https://via.placeholder.com/300x200',
    verified: false,
  },
];

export default function MarketplaceScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const renderListingCard = ({ item }: { item: typeof MOCK_LISTINGS[0] }) => (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => router.push(`/listing/${item.id}`)}
    >
      <Card>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>
                {item.make} {item.model}
              </Text>
              <Text style={styles.cardSubtitle}>{item.caliber}</Text>
            </View>
            {item.verified && <Badge variant="success">✓ Verified</Badge>}
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.distance}>{item.distance} away</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input
          placeholder="Search firearms..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          containerStyle={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>🔍 Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_LISTINGS}
        renderItem={renderListingCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <EmptyState
            icon="🔍"
            title="No listings found"
            description="Try adjusting your search or filters"
          />
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          /* TODO: Navigate to create listing */
        }}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: Spacing.lg,
    gap: Spacing.md,
    alignItems: 'flex-start',
  },
  searchInput: {
    flex: 1,
    marginBottom: 0,
  },
  filterButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    justifyContent: 'center',
    minHeight: 48,
  },
  filterButtonText: {
    color: Colors.textPrimaryDark,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
  },
  listContent: {
    padding: Spacing.lg,
    paddingTop: 0,
  },
  cardWrapper: {
    marginBottom: Spacing.lg,
  },
  cardImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
    borderTopLeftRadius: BorderRadius.lg,
    borderTopRightRadius: BorderRadius.lg,
  },
  cardContent: {
    padding: Spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  cardTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: Typography.sizes.xxl,
    fontWeight: Typography.weights.bold,
    color: Colors.primary,
  },
  distance: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
  },
  fab: {
    position: 'absolute',
    bottom: Spacing.xl,
    right: Spacing.xl,
    width: 60,
    height: 60,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.lg,
  },
  fabText: {
    color: Colors.textPrimaryDark,
    fontSize: Typography.sizes.xxxl,
    fontWeight: '300',
  },
});
