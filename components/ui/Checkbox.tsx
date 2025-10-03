import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors, BorderRadius, Spacing, Typography } from '@/constants/theme';

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Checkbox({ checked, onCheckedChange, label, disabled = false }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => !disabled && onCheckedChange(!checked)}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[styles.box, checked && styles.boxChecked, disabled && styles.boxDisabled]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label && <Text style={[styles.label, disabled && styles.labelDisabled]}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: BorderRadius.sm,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  boxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  boxDisabled: {
    opacity: 0.5,
  },
  checkmark: {
    color: Colors.textPrimaryDark,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.bold,
  },
  label: {
    flex: 1,
    color: Colors.textPrimaryDark,
    fontSize: Typography.sizes.sm,
    lineHeight: 20,
  },
  labelDisabled: {
    color: Colors.textDisabled,
  },
});
