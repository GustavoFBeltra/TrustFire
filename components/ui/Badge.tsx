import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, BorderRadius, Typography, Spacing } from '@/constants/theme';

type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Badge({ children, variant = 'default', style, textStyle }: BadgeProps) {
  return (
    <View style={[styles.badge, styles[variant], style]}>
      <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.semibold,
  },

  // Variants
  default: {
    backgroundColor: '#333',
  },
  defaultText: {
    color: Colors.textPrimaryDark,
  },

  success: {
    backgroundColor: Colors.successBg,
  },
  successText: {
    color: Colors.success,
  },

  error: {
    backgroundColor: 'rgba(231, 76, 60, 0.2)',
  },
  errorText: {
    color: Colors.error,
  },

  warning: {
    backgroundColor: 'rgba(243, 156, 18, 0.2)',
  },
  warningText: {
    color: Colors.warning,
  },

  info: {
    backgroundColor: 'rgba(52, 152, 219, 0.2)',
  },
  infoText: {
    color: Colors.info,
  },
});
