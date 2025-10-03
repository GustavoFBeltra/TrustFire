import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Checkbox } from '@/components/ui';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

export default function VerifyIdentityScreen() {
  const router = useRouter();
  const [idUploaded, setIdUploaded] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);
  const [legalAgreement, setLegalAgreement] = useState(false);

  const pickImage = async (type: 'id' | 'selfie') => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: type === 'id' ? [16, 9] : [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      if (type === 'id') {
        setIdUploaded(true);
      } else {
        setSelfieUploaded(true);
      }
    }
  };

  const takePhoto = async (type: 'id' | 'selfie') => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission Required', 'Permission to access camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: type === 'id' ? [16, 9] : [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      if (type === 'id') {
        setIdUploaded(true);
      } else {
        setSelfieUploaded(true);
      }
    }
  };

  const handleContinue = () => {
    if (!idUploaded || !selfieUploaded || !legalAgreement) {
      Alert.alert('Incomplete', 'Please complete all verification steps');
      return;
    }

    // TODO: Submit verification data to backend
    // Navigate to profile setup or home
    router.replace('/(tabs)');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Identity Verification</Text>
        <Text style={styles.subtitle}>We need to verify your identity for legal compliance</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Upload ID Document</Text>
          <Text style={styles.sectionDescription}>
            Driver's license, state ID, or passport
          </Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.uploadButton, idUploaded && styles.uploadedButton]}
              onPress={() => pickImage('id')}
            >
              <Text style={styles.uploadButtonText}>
                {idUploaded ? '✓ ID Uploaded' : '📷 Choose from Library'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.uploadButton, idUploaded && styles.uploadedButton]}
              onPress={() => takePhoto('id')}
            >
              <Text style={styles.uploadButtonText}>
                {idUploaded ? '✓ ID Uploaded' : '📸 Take Photo'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Take a Selfie</Text>
          <Text style={styles.sectionDescription}>
            For biometric verification
          </Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.uploadButton, selfieUploaded && styles.uploadedButton]}
              onPress={() => takePhoto('selfie')}
            >
              <Text style={styles.uploadButtonText}>
                {selfieUploaded ? '✓ Selfie Taken' : '🤳 Take Selfie'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Legal Eligibility</Text>

          <Checkbox
            checked={legalAgreement}
            onCheckedChange={setLegalAgreement}
            label="I affirm I am not prohibited by law from owning or purchasing a firearm"
          />
        </View>

        <Button
          onPress={handleContinue}
          disabled={!idUploaded || !selfieUploaded || !legalAgreement}
          fullWidth
          style={styles.continueButton}
        >
          Continue
        </Button>

        <Text style={styles.privacyNote}>
          Your information is encrypted and stored securely. We comply with all federal and state
          regulations.
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
  header: {
    padding: Spacing.xl,
    paddingTop: 60,
  },
  backButton: {
    color: Colors.primary,
    fontSize: Typography.sizes.base,
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: Typography.sizes.xxxl,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimaryDark,
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondaryDark,
    lineHeight: 22,
  },
  content: {
    padding: Spacing.xl,
  },
  section: {
    marginBottom: Spacing.xxxl,
  },
  sectionTitle: {
    fontSize: Typography.sizes.xl,
    fontWeight: Typography.weights.semibold,
    color: Colors.textPrimaryDark,
    marginBottom: Spacing.sm,
  },
  sectionDescription: {
    fontSize: Typography.sizes.sm,
    color: Colors.textSecondaryDark,
    marginBottom: Spacing.xl,
  },
  buttonGroup: {
    gap: Spacing.md,
  },
  uploadButton: {
    backgroundColor: Colors.backgroundDarkAlt,
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
  },
  uploadedButton: {
    backgroundColor: Colors.successBg,
    borderColor: Colors.success,
  },
  uploadButtonText: {
    color: Colors.textPrimaryDark,
    fontSize: Typography.sizes.base,
    fontWeight: Typography.weights.semibold,
  },
  continueButton: {
    marginTop: Spacing.xl,
  },
  privacyNote: {
    marginTop: Spacing.xl,
    fontSize: Typography.sizes.xs,
    color: Colors.textSecondaryDark,
    textAlign: 'center',
    lineHeight: 18,
  },
});
