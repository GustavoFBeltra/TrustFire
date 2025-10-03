import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Input, Card, Button, Badge } from '@/components/ui';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

// Mock FFL data
const MOCK_FFLS = [
  {
    id: '1',
    name: 'Ace Firearms',
    address: '123 Main St, Springfield, IL 62701',
    distance: '2.3 mi',
    transferFee: '$25',
    rating: 4.8,
    hours: 'Mon-Sat 9AM-6PM',
  },
  {
    id: '2',
    name: 'Springfield Gun Shop',
    address: '456 Oak Ave, Springfield, IL 62702',
    distance: '3.7 mi',
    transferFee: '$30',
    rating: 4.5,
    hours: 'Mon-Fri 10AM-7PM',
  },
  {
    id: '3',
    name: 'Tactical Supply Co',
    address: '789 Elm St, Springfield, IL 62703',
    distance: '5.1 mi',
    transferFee: '$20',
    rating: 4.9,
    hours: 'Tue-Sun 9AM-8PM',
  },
];

export default function FFLFinderScreen() {
  const [searchRadius, setSearchRadius] = useState('10');

  const renderFFLCard = ({ item }: { item: typeof MOCK_FFLS[0] }) => (
    <Card style={styles.cardWrapper}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Badge variant="default">⭐ {item.rating}</Badge>
      </View>

      <Text style={styles.address}>{item.address}</Text>

      <View style={styles.cardDetails}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Distance</Text>
          <Text style={styles.detailValue}>{item.distance}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Transfer Fee</Text>
          <Text style={styles.detailValue}>{item.transferFee}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Hours</Text>
          <Text style={styles.detailValue}>{item.hours}</Text>
        </View>
      </View>

      <View style={styles.cardActions}>
        <Button variant="secondary" style={styles.actionButton}>
          📍 Directions
        </Button>
        <Button style={styles.actionButton}>Select FFL</Button>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Input
          placeholder="Radius (mi)"
          keyboardType="numeric"
          value={searchRadius}
          onChangeText={setSearchRadius}
          containerStyle={styles.radiusInput}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>🔍 Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_FFLS}
        renderItem={renderFFLCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
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
  radiusInput: {
    flex: 1,
    marginBottom: 0,
  },
  searchButton: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    justifyContent: 'center',
    minWidth: 100,
    minHeight: 48,
  },
  searchButtonText: {
    color: Colors.textPrimaryDark,
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
    textAlign: 'center',
  },
  listContent: {
    padding: Spacing.lg,
    paddingTop: 0,
  },
  cardWrapper: {
    marginBottom: Spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  cardTitle: {
    fontSize: Typography.sizes.lg,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
    flex: 1,
  },
  address: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
    marginBottom: Spacing.lg,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
    paddingTop: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  detail: {
    flex: 1,
  },
  detailLabel: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: Typography.sizes.sm,
    color: Colors.textPrimaryDark,
    fontWeight: Typography.weights.semibold,
  },
  cardActions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  actionButton: {
    flex: 1,
  },
});
