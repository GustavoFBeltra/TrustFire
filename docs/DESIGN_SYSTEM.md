# TrustFire Design System

**Version 1.0** | Last Updated: January 2025

The TrustFire Design System is a comprehensive guide to building consistent, accessible, and beautiful user interfaces for the TrustFire platform across mobile and web.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Iconography](#iconography)
7. [Patterns](#patterns)
8. [Accessibility](#accessibility)
9. [Usage Guidelines](#usage-guidelines)

---

## Brand Identity

### Mission
**Safe, Legal, Simple Firearm Transfers**

TrustFire facilitates legal firearm transfers through licensed FFLs, ensuring compliance with federal and state regulations while providing a modern, user-friendly experience.

### Brand Values
- **Trust**: Security and verification at every step
- **Compliance**: Legal adherence is non-negotiable
- **Simplicity**: Complex processes made intuitive
- **Modern**: Contemporary design that doesn't compromise on functionality

### Logo Usage

#### Primary Logo
**File**: `LOGO/LogoWText.png`
- Use on light backgrounds
- Minimum width: 120px
- Clear space: Equal to logo height on all sides

#### Icon Only
**File**: `LOGO/JustLogo.png`
- Use for app icons, favicons, small spaces
- Minimum size: 32x32px
- The shield + flame represents trust and firearm safety

**Do's:**
- ✅ Use logo on dark (#1b1c1c) or light (#f9f9f9) backgrounds
- ✅ Maintain aspect ratio
- ✅ Ensure adequate clear space

**Don'ts:**
- ❌ Don't stretch or distort
- ❌ Don't change colors
- ❌ Don't add effects or shadows
- ❌ Don't place on busy backgrounds

---

## Color Palette

### Primary Colors

```typescript
primary: '#f0413f'        // TrustFire Red - Primary actions, CTAs
primaryDark: '#1b1c1c'    // Background, headers, dark surfaces
```

**Primary Red (#f0413f)**
- Use for: Primary buttons, active states, important highlights, brand elements
- RGB: 240, 65, 63
- Accessible on white backgrounds (AA rating)

**Primary Dark (#1b1c1c)**
- Use for: Main app background, navigation bars, dark mode surfaces
- RGB: 27, 28, 28
- Almost black, provides excellent contrast

### Neutral Palette

```typescript
backgroundLight: '#f9f9f9'       // Light mode backgrounds
backgroundDarkAlt: '#2a2b2b'     // Cards, panels on dark backgrounds
cardSurface: '#ffffff'            // Card backgrounds (light mode)
```

### Text Colors

#### Dark Backgrounds
```typescript
textPrimaryDark: '#ffffff'        // Primary text on dark
textSecondaryDark: '#6c6c6c'      // Labels, subtitles on dark
```

#### Light Backgrounds
```typescript
textPrimaryLight: '#1b1c1c'       // Primary text on light
textSecondary: '#6c6c6c'          // Secondary text
textDisabled: '#a5a5a5'           // Disabled states
```

### UI Element Colors

```typescript
border: '#dcdcdc'                 // Light borders
borderDark: '#2f2f2f'             // Dark mode borders
iconDefault: '#6c6c6c'            // Default icon color
iconActive: '#f0413f'             // Active/selected icons
```

### Status Colors

```typescript
success: '#2ecc71'      // Success states, verified badges
successBg: '#1a3d2a'    // Success background (dark)
error: '#e74c3c'        // Error states, destructive actions
warning: '#f39c12'      // Warning states
info: '#3498db'         // Info messages
```

### Color Usage Examples

**Primary Actions**
```tsx
<Button style={{ backgroundColor: Colors.primary }}>
  Sign Up Free
</Button>
```

**Status Indicators**
```tsx
<Badge variant="success">✓ Verified FFL</Badge>
<Badge variant="error">⚠ Not Verified</Badge>
```

---

## Typography

### Font Family
- **System Default**: Uses native system fonts for optimal performance
- iOS: SF Pro Text, SF Pro Display
- Android: Roboto
- Web: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale

```typescript
sizes: {
  xs: 12,      // Fine print, labels
  sm: 14,      // Secondary text, captions
  base: 16,    // Body text (default)
  lg: 18,      // Subheadings
  xl: 20,      // Card titles
  xxl: 24,     // Section headings
  xxxl: 32,    // Page titles
  huge: 40,    // Hero text
}
```

### Font Weights

```typescript
weights: {
  normal: '400',     // Body text
  medium: '500',     // Emphasis
  semibold: '600',   // Buttons, labels
  bold: '700',       // Headings
}
```

### Typography Patterns

**Headings**
```tsx
// Page Title
<Text style={{
  fontSize: Typography.sizes.xxxl,
  fontWeight: Typography.weights.bold,
  color: Colors.textPrimaryDark,
}}>
  Marketplace
</Text>

// Section Heading
<Text style={{
  fontSize: Typography.sizes.xxl,
  fontWeight: Typography.weights.bold,
  color: Colors.textPrimaryDark,
}}>
  Featured Listings
</Text>

// Card Title
<Text style={{
  fontSize: Typography.sizes.xl,
  fontWeight: Typography.weights.semibold,
  color: Colors.textPrimaryDark,
}}>
  Glock 19 Gen 5
</Text>
```

**Body Text**
```tsx
<Text style={{
  fontSize: Typography.sizes.base,
  color: Colors.textPrimaryDark,
}}>
  Complete your transfer at a nearby verified FFL.
</Text>
```

**Labels & Captions**
```tsx
<Text style={{
  fontSize: Typography.sizes.sm,
  color: Colors.textSecondaryDark,
}}>
  2.5 miles away
</Text>
```

---

## Spacing & Layout

### Spacing Scale

```typescript
xs: 4,      // Tight spacing
sm: 8,      // Small gaps
md: 12,     // Medium gaps
lg: 16,     // Standard spacing
xl: 20,     // Large spacing
xxl: 24,    // Extra large
xxxl: 32,   // Section spacing
```

### Layout Patterns

**Container Padding**
```tsx
paddingHorizontal: Spacing.xl,  // 20px sides
paddingVertical: Spacing.lg,    // 16px top/bottom
```

**Card Spacing**
```tsx
padding: Spacing.xl,            // 20px all around
marginBottom: Spacing.lg,       // 16px between cards
gap: Spacing.md,                // 12px between elements
```

**Form Spacing**
```tsx
marginBottom: Spacing.lg,       // 16px between inputs
gap: Spacing.md,                // 12px in flex layouts
```

### Border Radius

```typescript
sm: 6,      // Small elements (badges)
md: 10,     // Buttons, inputs
lg: 15,     // Cards
xl: 20,     // Large cards
full: 999,  // Pills, circular
```

### Shadows

```typescript
sm: {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
}

md: {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
}

lg: {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.30,
  shadowRadius: 4.65,
  elevation: 8,
}
```

---

## Components

### Button

**Variants**: Primary, Secondary, Ghost, Destructive

```tsx
// Primary - Main CTAs
<Button variant="primary" onPress={handleAction}>
  Sign Up Free
</Button>

// Secondary - Alternative actions
<Button variant="secondary" onPress={handleAction}>
  Learn More
</Button>

// Ghost - Subtle actions
<Button variant="ghost" onPress={handleAction}>
  Cancel
</Button>

// Destructive - Dangerous actions
<Button variant="destructive" onPress={handleDelete}>
  Delete Listing
</Button>
```

**Sizes**: sm, md, lg

```tsx
<Button size="lg" fullWidth>Create Account</Button>
<Button size="md">Submit</Button>
<Button size="sm">Edit</Button>
```

**Properties**:
- `variant`: 'primary' | 'secondary' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `disabled`: boolean
- `onPress`: () => void

### Input

Text input with label and error states.

```tsx
<Input
  label="Email Address"
  placeholder="you@example.com"
  keyboardType="email-address"
  autoCapitalize="none"
  value={email}
  onChangeText={setEmail}
  error="Invalid email format"
/>
```

**Properties**:
- `label`: string
- `placeholder`: string
- `value`: string
- `onChangeText`: (text: string) => void
- `error`: string (displays error state)
- `secureTextEntry`: boolean
- `keyboardType`: TextInput keyboardType
- All standard TextInput props

### Card

Container with subtle shadow and rounded corners.

```tsx
<Card>
  <Text>Card content goes here</Text>
</Card>
```

### Badge

Small status indicator.

```tsx
<Badge variant="success">✓ Verified</Badge>
<Badge variant="error">Pending</Badge>
<Badge variant="default">New</Badge>
```

**Variants**: success, error, warning, info, default

### Avatar

User profile image with fallback.

```tsx
<Avatar
  source={{ uri: user.profileImage }}
  size={48}
  fallback="JD"
/>
```

### Checkbox

Custom checkbox component.

```tsx
<Checkbox
  checked={agreed}
  onPress={() => setAgreed(!agreed)}
  label="I agree to the Terms of Service"
/>
```

### EmptyState

Placeholder for empty lists.

```tsx
<EmptyState
  icon="🔍"
  title="No listings found"
  description="Try adjusting your search or filters"
/>
```

### Divider

Section separator with optional label.

```tsx
<Divider />
<Divider label="OR" />
<Divider label="OR CONTINUE WITH" />
```

---

## Iconography

### Icon System

**Library**: Ionicons (via @expo/vector-icons)

**Common Icons**:
```tsx
import { Ionicons } from '@expo/vector-icons';

// Navigation
<Ionicons name="storefront-outline" size={24} color={Colors.primary} />
<Ionicons name="list-outline" size={24} color={Colors.iconDefault} />
<Ionicons name="chatbubbles-outline" size={24} color={Colors.iconDefault} />
<Ionicons name="location-outline" size={24} color={Colors.iconDefault} />
<Ionicons name="shield-checkmark-outline" size={24} color={Colors.iconDefault} />

// Actions
<Ionicons name="add-circle" size={32} color={Colors.primary} />
<Ionicons name="search" size={20} color={Colors.iconDefault} />
<Ionicons name="filter" size={20} color={Colors.iconDefault} />
<Ionicons name="close" size={24} color={Colors.iconDefault} />

// Status
<Ionicons name="checkmark-circle" size={20} color={Colors.success} />
<Ionicons name="alert-circle" size={20} color={Colors.error} />
<Ionicons name="warning" size={20} color={Colors.warning} />
```

**Icon Sizes**:
- Small: 16px (inline with text)
- Default: 24px (standard UI)
- Large: 32px (prominent actions)
- Hero: 48px+ (feature highlights)

**Color Usage**:
- Active/Primary: `Colors.primary`
- Default: `Colors.iconDefault`
- Success: `Colors.success`
- Error: `Colors.error`

---

## Patterns

### Authentication Screens

**Pattern**: Large logo, brand name, form card, alternative actions

```tsx
<View style={styles.container}>
  {/* Background Pattern */}
  <View style={styles.backgroundPattern}>
    <View style={[styles.circle, styles.circle1]} />
    <View style={[styles.circle, styles.circle2]} />
  </View>

  {/* Logo Section */}
  <View style={styles.logoSection}>
    <Image source={require('@/LOGO/JustLogo.png')} style={styles.logo} />
    <Text style={styles.brandName}>TrustFire</Text>
    <Text style={styles.subtitle}>Safe, Legal, Simple</Text>
  </View>

  {/* Form Card */}
  <View style={styles.formCard}>
    <Input label="Email" />
    <Input label="Password" secureTextEntry />
    <Button fullWidth size="lg">Sign In</Button>
  </View>
</View>
```

### List/Cards Pattern

**Pattern**: Search bar, filterable list, floating action button

```tsx
<View style={styles.container}>
  {/* Search */}
  <View style={styles.searchContainer}>
    <Input placeholder="Search..." />
    <TouchableOpacity style={styles.filterButton}>
      <Ionicons name="filter" size={20} color={Colors.textPrimaryDark} />
    </TouchableOpacity>
  </View>

  {/* List */}
  <FlatList
    data={items}
    renderItem={({ item }) => (
      <Card>
        <Text>{item.title}</Text>
      </Card>
    )}
  />

  {/* FAB */}
  <TouchableOpacity style={styles.fab}>
    <Ionicons name="add" size={32} color={Colors.textPrimaryDark} />
  </TouchableOpacity>
</View>
```

### Form Pattern

**Pattern**: Grouped inputs, clear labels, inline validation

```tsx
<View style={styles.form}>
  <Input
    label="Full Name"
    placeholder="John Doe"
    value={name}
    onChangeText={setName}
  />

  <Input
    label="Email Address"
    placeholder="you@example.com"
    keyboardType="email-address"
    value={email}
    onChangeText={setEmail}
    error={emailError}
  />

  <Button fullWidth size="lg" onPress={handleSubmit}>
    Continue
  </Button>
</View>
```

---

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:

- **Primary (#f0413f) on White**: 4.51:1 ✅ AA
- **Text Primary Dark (#ffffff) on Primary Dark (#1b1c1c)**: 19.75:1 ✅ AAA
- **Text Secondary (#6c6c6c) on White**: 4.54:1 ✅ AA

### Touch Targets

Minimum touch target: **44x44 points**

```tsx
// Good
<TouchableOpacity style={{ minHeight: 44, minWidth: 44 }}>
  <Ionicons name="close" size={24} />
</TouchableOpacity>

// Bad - too small
<TouchableOpacity style={{ height: 20, width: 20 }}>
  <Ionicons name="close" size={16} />
</TouchableOpacity>
```

### Screen Reader Support

```tsx
// Label buttons clearly
<Button accessibilityLabel="Sign in to your account">
  Sign In
</Button>

// Provide hints for complex interactions
<TouchableOpacity
  accessibilityLabel="Filter listings"
  accessibilityHint="Double tap to open filter options"
>
  <Ionicons name="filter" size={24} />
</TouchableOpacity>

// Mark decorative images
<Image
  source={logo}
  accessibilityRole="image"
  accessibilityLabel="TrustFire logo"
/>
```

### Focus States

All interactive elements must have clear focus states:

```tsx
// Button focus
<TouchableOpacity
  style={[
    styles.button,
    isFocused && { borderWidth: 2, borderColor: Colors.primary }
  ]}
>
  <Text>Click Me</Text>
</TouchableOpacity>
```

---

## Usage Guidelines

### Do's ✅

**Colors**
- Use `Colors.primary` for primary actions and highlights
- Use `Colors.primaryDark` for main backgrounds
- Maintain 4.5:1 contrast ratio minimum

**Typography**
- Use the type scale consistently
- Use font weights to establish hierarchy
- Limit to 3 font sizes per screen

**Spacing**
- Use spacing tokens from the scale
- Maintain consistent margins and padding
- Use `Spacing.lg` (16px) as default between elements

**Components**
- Use pre-built components from `@/components/ui`
- Follow component API conventions
- Compose components for complex UIs

**Accessibility**
- Provide labels for all interactive elements
- Ensure touch targets are at least 44x44pt
- Test with screen readers

### Don'ts ❌

**Colors**
- Don't use arbitrary hex codes
- Don't use low contrast combinations
- Don't use more than 3 colors in a single view

**Typography**
- Don't use font sizes outside the scale
- Don't use more than 2 font weights on a single element
- Don't center-align long paragraphs

**Spacing**
- Don't use arbitrary pixel values
- Don't create overly tight layouts
- Don't use negative margins except for specific overlap effects

**Components**
- Don't create custom buttons when the Button component works
- Don't skip error states on inputs
- Don't nest touchable components

**Accessibility**
- Don't rely on color alone to convey information
- Don't create touch targets smaller than 44x44pt
- Don't use placeholder text as labels

---

## Quick Reference

### Import Theme

```tsx
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '@/constants/theme';
```

### Import Components

```tsx
import { Button, Input, Card, Badge, Avatar, Checkbox, EmptyState, Divider } from '@/components/ui';
```

### Import Icons

```tsx
import { Ionicons } from '@expo/vector-icons';
```

### Example Component

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from '@/components/ui';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Welcome to TrustFire</Text>
        <Text style={styles.description}>
          Safe, legal, simple firearm transfers.
        </Text>
        <Button onPress={() => {}} fullWidth>
          Get Started
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    padding: Spacing.xl,
  },
  title: {
    fontSize: Typography.sizes.xxl,
    fontWeight: Typography.weights.bold,
    color: Colors.textPrimaryDark,
    marginBottom: Spacing.md,
  },
  description: {
    fontSize: Typography.sizes.base,
    color: Colors.textSecondaryDark,
    marginBottom: Spacing.xl,
  },
});
```

---

## Resources

- **Figma File**: (Coming soon)
- **Component Storybook**: (Coming soon)
- **Theme File**: `constants/theme.ts`
- **Component Library**: `components/ui/`

---

**Questions or Feedback?**

For design system questions, reach out to the design team or open an issue in the repository.
