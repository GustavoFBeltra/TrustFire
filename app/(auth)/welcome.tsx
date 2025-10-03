import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '@/components/ui';
import { Colors, Spacing, Typography, Shadows } from '@/constants/theme';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Animated Background Pattern */}
      <View style={styles.backgroundPattern}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>

      <View style={styles.content}>
        {/* Hero Logo Section */}
        <View style={styles.heroSection}>
          <View style={styles.logoGlow}>
            <Image
              source={require('@/LOGO/JustLogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.brandName}>TrustFire</Text>
          <View style={styles.taglineContainer}>
            <View style={styles.dividerDot} />
            <Text style={styles.tagline}>Safe, Legal, Simple</Text>
            <View style={styles.dividerDot} />
          </View>
        </View>

        {/* Value Props */}
        <View style={styles.valueProps}>
          <View style={styles.valueProp}>
            <View style={styles.valueIcon}>
              <Text style={styles.valueIconText}>🛡️</Text>
            </View>
            <Text style={styles.valueTitle}>Verified FFLs</Text>
            <Text style={styles.valueDescription}>Licensed dealers only</Text>
          </View>

          <View style={styles.valueProp}>
            <View style={styles.valueIcon}>
              <Text style={styles.valueIconText}>✅</Text>
            </View>
            <Text style={styles.valueTitle}>Legal & Secure</Text>
            <Text style={styles.valueDescription}>Full compliance</Text>
          </View>

          <View style={styles.valueProp}>
            <View style={styles.valueIcon}>
              <Text style={styles.valueIconText}>📱</Text>
            </View>
            <Text style={styles.valueTitle}>Digital Trail</Text>
            <Text style={styles.valueDescription}>Complete records</Text>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Button
          onPress={() => router.push('/(auth)/signup')}
          fullWidth
          size="lg"
          style={styles.primaryButton}
        >
          Get Started Free
        </Button>

        <Button
          variant="ghost"
          onPress={() => router.push('/(auth)/login')}
          fullWidth
          size="lg"
          style={styles.secondaryButton}
        >
          I Have an Account
        </Button>

        <Text style={styles.legalText}>
          By continuing, you agree to our{'\n'}
          <Text style={styles.legalLink}>Terms</Text> · <Text style={styles.legalLink}>Privacy</Text> · <Text style={styles.legalLink}>Compliance</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  backgroundPattern: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: 9999,
    backgroundColor: Colors.primary,
    opacity: 0.03,
  },
  circle1: {
    width: 400,
    height: 400,
    top: -100,
    right: -100,
  },
  circle2: {
    width: 300,
    height: 300,
    top: 200,
    left: -150,
  },
  circle3: {
    width: 250,
    height: 250,
    bottom: -50,
    right: -50,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: Spacing.xxxl * 2,
  },
  logoGlow: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 240,
    height: 240,
    marginBottom: Spacing.xl,
  },
  brandName: {
    fontSize: 56,
    fontWeight: '800',
    color: Colors.textPrimaryDark,
    letterSpacing: -2,
    textAlign: 'center',
  },
  taglineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },
  dividerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  tagline: {
    fontSize: Typography.sizes.lg,
    color: Colors.textSecondaryDark,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
  valueProps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  valueProp: {
    flex: 1,
    alignItems: 'center',
  },
  valueIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.backgroundDarkAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(240, 65, 63, 0.1)',
  },
  valueIconText: {
    fontSize: 28,
  },
  valueTitle: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimaryDark,
    marginBottom: 4,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
    textAlign: 'center',
  },
  ctaSection: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxxl,
  },
  primaryButton: {
    marginBottom: Spacing.lg,
    ...Shadows.lg,
  },
  secondaryButton: {
    marginBottom: Spacing.xl,
  },
  legalText: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: Spacing.md,
  },
  legalLink: {
    color: Colors.primary,
    fontWeight: Typography.weights.semibold,
  },
});
