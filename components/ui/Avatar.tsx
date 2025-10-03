import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';
import { Colors, BorderRadius, Typography } from '@/constants/theme';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  name?: string;
  imageUri?: string;
  size?: AvatarSize;
  style?: ViewStyle;
}

export function Avatar({ name, imageUri, size = 'md', style }: AvatarProps) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';

  const sizeStyles = {
    sm: { width: 40, height: 40 },
    md: { width: 50, height: 50 },
    lg: { width: 64, height: 64 },
  };

  const textSizes = {
    sm: Typography.sizes.base,
    md: Typography.sizes.xl,
    lg: Typography.sizes.xxl,
  };

  return (
    <View style={[styles.avatar, sizeStyles[size], style]}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={[styles.image, sizeStyles[size]]} />
      ) : (
        <Text style={[styles.text, { fontSize: textSizes[size] }]}>{initial}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: Colors.textPrimaryDark,
    fontWeight: Typography.weights.semibold,
  },
});
