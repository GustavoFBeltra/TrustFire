import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Spacing, Typography } from '@/constants/theme';

interface DividerProps {
  label?: string;
  style?: ViewStyle;
}

export function Divider({ label, style }: DividerProps) {
  if (label) {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.line} />
        <Text style={styles.label}>{label}</Text>
        <View style={styles.line} />
      </View>
    );
  }

  return <View style={[styles.simpleLine, style]} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Spacing.xxxl,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  simpleLine: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: Spacing.md,
  },
  label: {
    color: Colors.textSecondaryDark,
    paddingHorizontal: Spacing.lg,
    fontSize: Typography.sizes.sm,
  },
});
