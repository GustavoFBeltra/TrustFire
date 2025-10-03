import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, EmptyState } from '@/components/ui';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

export default function ComplianceScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Recent Transactions</Text>
        <EmptyState
          title="No transactions yet"
          style={styles.emptyState}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛡️ Safety Tools</Text>

        <TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>🔍</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Serial Number Lookup</Text>
              <Text style={styles.cardDescription}>
                Check if a firearm has been reported stolen
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>📄</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Digital Receipts</Text>
              <Text style={styles.cardDescription}>
                View all transaction receipts and audit trail
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📚 Laws & Education</Text>

        <TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>📍</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>State Laws</Text>
              <Text style={styles.cardDescription}>
                Firearm regulations for your state
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>❓</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>How-To Guides</Text>
              <Text style={styles.cardDescription}>
                Learn about safe firearm transfers
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.card}>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>✅</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Understanding NICS</Text>
              <Text style={styles.cardDescription}>
                Background check process explained
              </Text>
            </View>
            <Text style={styles.cardArrow}>›</Text>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          TrustFire facilitates legal firearm transfers through licensed FFLs. All transactions
          must comply with federal, state, and local laws. Users are responsible for ensuring
          compliance with all applicable regulations.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  section: {
    padding: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimaryDark,
    marginBottom: Spacing.lg,
  },
  emptyState: {
    padding: Spacing.xxxl,
    backgroundColor: Colors.backgroundDarkAlt,
    borderRadius: BorderRadius.lg,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.full,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  cardIconText: {
    fontSize: Typography.sizes.xxl,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
  },
  cardArrow: {
    fontSize: Typography.sizes.xxl,
    color: Colors.textSecondaryDark,
    marginLeft: Spacing.md,
  },
  disclaimer: {
    padding: Spacing.xl,
    paddingTop: Spacing.md,
  },
  disclaimerText: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
    lineHeight: 18,
    textAlign: 'center',
  },
});
