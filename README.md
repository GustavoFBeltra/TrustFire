# TrustFire

**Safe, Legal, Simple Firearm Transfers**

TrustFire is a mobile application facilitating legal firearm transfers through licensed FFLs (Federal Firearms Licensees), ensuring compliance with federal and state regulations.

## ⚠️ Legal Disclaimer

This application facilitates legal firearm transfers through licensed FFLs. All transactions must comply with federal, state, and local laws. Users are responsible for ensuring compliance with all applicable regulations. Consult with legal counsel before deploying to production.

## 🚀 Technology Stack

- **Frontend**: React Native + Expo (EAS Build)
- **Routing**: Expo Router (file-based routing)
- **State Management**: Zustand
- **Backend** (to be implemented): Node.js/Express or Python/Django
- **Database** (to be implemented): PostgreSQL
- **Identity Verification**: Onfido/Jumio/Persona (integration required)
- **Payments**: Stripe Connect (integration required)
- **Maps**: Google Maps API (integration required)

## 📋 Prerequisites

- Node.js 18+ and npm
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (macOS) or Android Emulator
- Expo Go app on physical device (for testing)

## 🛠️ Installation

1. **Clone the repository** (or you're already here)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. **Start the development server**:
   ```bash
   npx expo start
   ```

5. **Run on a platform**:
   - Press `i` for iOS Simulator (macOS only)
   - Press `a` for Android Emulator
   - Scan QR code with Expo Go app on your phone

## 📱 App Structure

```
app/
├── (auth)/              # Authentication flow
│   ├── welcome.tsx      # Landing page
│   ├── signup.tsx       # User registration
│   ├── login.tsx        # User login
│   └── verify-identity.tsx  # ID verification
├── (tabs)/              # Main app navigation
│   ├── index.tsx        # Marketplace (listings)
│   ├── my-listings.tsx  # User's firearm listings
│   ├── messages.tsx     # Secure messaging
│   ├── ffl-finder.tsx   # FFL location finder
│   └── compliance.tsx   # Laws, receipts, education
├── listing/[id].tsx     # Dynamic listing detail
└── transaction/[id].tsx # Transaction flow
```

## 🔑 Key Features

### Phase 1 (Current - MVP)
- ✅ User authentication (signup/login)
- ✅ Identity verification UI
- ✅ Marketplace browsing
- ✅ FFL finder UI
- ✅ Secure messaging UI
- ✅ Compliance center UI

### Phase 2 (Next Steps)
- [ ] Backend API integration
- [ ] Identity verification (Onfido/Jumio)
- [ ] Real-time messaging (Socket.io)
- [ ] Transaction flow with escrow
- [ ] NICS status tracking
- [ ] Receipt generation

### Phase 3 (Future)
- [ ] Serial number lookup
- [ ] State-by-state law database
- [ ] Push notifications
- [ ] FFL web portal
- [ ] Payment processing

## 🔒 Security Considerations

- All personal data must be encrypted at rest and in transit
- Firearm serial numbers should be masked until transaction confirmed
- End-to-end encryption for messaging
- Audit logging for all transactions
- SOC 2 compliance required for production

## 📦 Building for Production

### Create Development Build

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas login
eas build:configure

# Build for iOS
eas build --platform ios --profile development

# Build for Android
eas build --platform android --profile development
```

### Create Production Build

```bash
# iOS
eas build --platform ios --profile production

# Android
eas build --platform android --profile production
```

## 🎨 Design System

- **Primary Color**: #ff6b35 (Orange)
- **Background**: #1a1a1a (Dark)
- **Surface**: #2a2a2a
- **Text Primary**: #ffffff
- **Text Secondary**: #999999
- **Success**: #2ecc71
- **Error**: #e74c3c

## 📝 TODO

- [ ] Integrate identity verification SDK
- [ ] Set up backend API
- [ ] Implement authentication logic
- [ ] Add real-time messaging
- [ ] Integrate Google Maps for FFL finder
- [ ] Set up Stripe payment processing
- [ ] Implement NICS tracking
- [ ] Add state law database
- [ ] Create FFL web portal
- [ ] App Store submission prep

## ⚖️ Legal Requirements

Before launch, ensure:
- [ ] Consultation with firearms attorney
- [ ] ATF compliance review
- [ ] State-by-state regulation audit
- [ ] Terms of Service drafted
- [ ] Privacy Policy drafted
- [ ] GDPR/CCPA compliance
- [ ] Age verification (21+ for handguns, 18+ for long guns)
- [ ] FFL verification system
- [ ] Money transmitter licenses (if handling escrow)

## 🤝 Contributing

This is a regulated industry application. All contributions must be reviewed for legal compliance.

## 📄 License

Copyright © 2025 TrustFire. All rights reserved.

---

**Note**: This application is in active development. Do not deploy to production without proper legal review and compliance certification.
