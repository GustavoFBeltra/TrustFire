import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Card, Badge } from '@/components/ui';
import { Colors, Spacing, Typography } from '@/constants/theme';

// Mock data
const MOCK_CONVERSATIONS = [
  {
    id: '1',
    name: 'John Smith',
    lastMessage: 'Is the Glock still available?',
    timestamp: '2m ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    lastMessage: 'Thanks for the info!',
    timestamp: '1h ago',
    unread: false,
  },
];

export default function MessagesScreen() {
  const renderConversation = ({ item }: { item: typeof MOCK_CONVERSATIONS[0] }) => (
    <TouchableOpacity style={styles.conversationWrapper}>
      <Card style={styles.conversationCard}>
        <Avatar name={item.name} size="md" />
        <View style={styles.conversationContent}>
          <View style={styles.conversationHeader}>
            <Text style={styles.conversationName}>{item.name}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <Text style={[styles.lastMessage, item.unread && styles.unreadMessage]}>
            {item.lastMessage}
          </Text>
        </View>
        {item.unread && <Badge variant="error">•</Badge>}
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_CONVERSATIONS}
        renderItem={renderConversation}
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
  listContent: {
    padding: Spacing.lg,
  },
  conversationWrapper: {
    marginBottom: Spacing.md,
  },
  conversationCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conversationContent: {
    flex: 1,
    marginLeft: Spacing.lg,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  conversationName: {
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
  },
  timestamp: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
  },
  lastMessage: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
  },
  unreadMessage: {
    color: Colors.textPrimaryDark,
    fontWeight: Typography.weights.medium,
  },
});
