import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Input, Divider, Card } from '@/components/ui';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '@/constants/theme';

export default function SignupScreen() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSignup = () => {
    // TODO: Implement signup logic
    router.push('/(auth)/verify-identity');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Background Pattern */}
      <View style={styles.backgroundPattern}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require('@/LOGO/JustLogo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.brandName}>TrustFire</Text>
          <Text style={styles.welcomeText}>Join TrustFire</Text>
          <Text style={styles.subtitle}>Create your secure account</Text>
        </View>

        {/* Form Card */}
        <View style={styles.formCard}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Sign Up</Text>
            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>✨ Free</Text>
            </View>
          </View>

          <View style={styles.nameRow}>
            <View style={styles.nameField}>
              <Input
                label="First Name"
                placeholder="John"
                value={formData.firstName}
                onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                containerStyle={styles.halfInput}
              />
            </View>
            <View style={styles.nameField}>
              <Input
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                containerStyle={styles.halfInput}
              />
            </View>
          </View>

          <Input
            label="Email Address"
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />

          <Input
            label="Password"
            placeholder="Minimum 8 characters"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />

          <View style={styles.passwordRequirements}>
            <Text style={styles.requirementItem}>✓ 8+ characters</Text>
            <Text style={styles.requirementItem}>✓ Letters & numbers</Text>
            <Text style={styles.requirementItem}>✓ One symbol</Text>
          </View>

          <Button
            onPress={handleSignup}
            fullWidth
            size="lg"
            style={styles.signupButton}
          >
            Create Account →
          </Button>

          <Divider label="OR SKIP WITH" />

          {/* Quick Verification Options */}
          <View style={styles.quickVerify}>
            <Text style={styles.quickVerifyTitle}>Instant verification:</Text>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.verifyCard}>
                <View style={styles.verifyIconContainer}>
                  <View style={styles.verifyIcon}>
                    <Text style={styles.verifyIconText}>🪪</Text>
                  </View>
                </View>
                <View style={styles.verifyContent}>
                  <Text style={styles.verifyTitle}>Driver's License / State ID</Text>
                  <View style={styles.verifyMeta}>
                    <Text style={styles.verifyBadge}>⚡ Instant</Text>
                    <Text style={styles.verifyTime}>• 2 min</Text>
                  </View>
                </View>
                <Text style={styles.verifyArrow}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.verifyCard}>
                <View style={styles.verifyIconContainer}>
                  <View style={styles.verifyIcon}>
                    <Text style={styles.verifyIconText}>🛂</Text>
                  </View>
                </View>
                <View style={styles.verifyContent}>
                  <Text style={styles.verifyTitle}>Passport</Text>
                  <View style={styles.verifyMeta}>
                    <Text style={styles.verifyBadge}>⚡ Instant</Text>
                    <Text style={styles.verifyTime}>• 2 min</Text>
                  </View>
                </View>
                <Text style={styles.verifyArrow}>→</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.verifyCard}>
                <View style={styles.verifyIconContainer}>
                  <View style={styles.verifyIcon}>
                    <Text style={styles.verifyIconText}>🎖️</Text>
                  </View>
                </View>
                <View style={styles.verifyContent}>
                  <Text style={styles.verifyTitle}>Concealed Carry Permit</Text>
                  <View style={styles.verifyMeta}>
                    <Text style={[styles.verifyBadge, styles.verifyBadgePremium]}>👑 Premium</Text>
                    <Text style={styles.verifyTime}>• 1 min</Text>
                  </View>
                </View>
                <Text style={styles.verifyArrow}>→</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text
              style={styles.footerLink}
              onPress={() => router.push('/(auth)/login')}
            >
              Sign In
            </Text>
          </Text>
        </View>

        {/* Terms */}
        <View style={styles.terms}>
          <Text style={styles.termsText}>
            By continuing, you agree to{' '}
            <Text style={styles.termsLink}>Terms</Text> · <Text style={styles.termsLink}>Privacy</Text> · <Text style={styles.termsLink}>Compliance</Text>
          </Text>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </KeyboardAvoidingView>
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
    width: 300,
    height: 300,
    top: -100,
    right: -100,
  },
  circle2: {
    width: 200,
    height: 200,
    bottom: 100,
    left: -50,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.backgroundDarkAlt,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  backButtonText: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: '300',
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  logoContainer: {
    marginBottom: Spacing.md,
  },
  logo: {
    width: 160,
    height: 160,
  },
  brandName: {
    fontSize: 40,
    fontWeight: '800',
    color: Colors.textPrimaryDark,
    letterSpacing: -1.5,
    marginBottom: Spacing.sm,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimaryDark,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
  },
  formCard: {
    backgroundColor: Colors.backgroundDarkAlt,
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    ...Shadows.lg,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  formTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimaryDark,
  },
  freeBadge: {
    backgroundColor: 'rgba(240, 65, 63, 0.1)',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(240, 65, 63, 0.2)',
  },
  freeBadgeText: {
    fontSize: Typography.sizes.xs,
    color: Colors.primary,
    fontWeight: Typography.weights.semibold,
  },
  nameRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  nameField: {
    flex: 1,
  },
  halfInput: {
    marginBottom: 0,
  },
  passwordRequirements: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: -Spacing.sm,
    marginBottom: Spacing.xl,
    paddingLeft: Spacing.xs,
  },
  requirementItem: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
  },
  signupButton: {
    marginBottom: Spacing.xl,
  },
  quickVerify: {
    marginTop: Spacing.lg,
  },
  quickVerifyTitle: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
    marginBottom: Spacing.md,
  },
  verifyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    borderWidth: 1,
    borderColor: '#444',
  },
  verifyIconContainer: {
    marginRight: Spacing.md,
  },
  verifyIcon: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary + '30',
  },
  verifyIconText: {
    fontSize: 24,
  },
  verifyContent: {
    flex: 1,
  },
  verifyTitle: {
    fontSize: Typography.sizes.sm,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
    marginBottom: 4,
  },
  verifyMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  verifyBadge: {
    fontSize: Typography.sizes.xs,
    color: Colors.success,
    fontWeight: Typography.weights.semibold,
  },
  verifyBadgePremium: {
    color: '#FFD700',
  },
  verifyTime: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
  },
  verifyArrow: {
    fontSize: 20,
    color: Colors.textSecondaryDark,
    marginLeft: Spacing.sm,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  footerText: {
    color: Colors.textSecondaryDark,
    fontSize: Typography.sizes.sm,
  },
  footerLink: {
    color: Colors.primary,
    fontWeight: Typography.weights.bold,
  },
  terms: {
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  termsText: {
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
    textAlign: 'center',
  },
  termsLink: {
    color: Colors.primary,
    fontWeight: Typography.weights.semibold,
  },
  bottomSpace: {
    height: Spacing.xxxl,
  },
});
