# invisible-modal

This is a Expo project to reproduce the transparent modal invisible problem.

Issue still persist after update react-native-screens to 4.7.0

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. build and start the app with development build

   ```bash
   yarn android 
   ```

   or

   ```bash
   npx expo run:android
   ```

## How to reproduce

Only happened on Android

Reproduce steps:

1. Go to ScreenB and back to ScreenA
2. Go to ScreenC and back to ScreenA
3. Go to ScreenTM

You can see the modal screen mounted toast but won't see the modal screen, also you can still interact with the modal Press To Back.

### Screens version

4.7.0

### React Native version

0.76.7

### Platforms

Android

### JavaScript runtime

JSC

### Workflow

Expo Development Build

### Architecture

Fabric (New Architecture)

### Build type

Debug mode

### Device

Both Android emulator and Physical device

### Device model

Pixel 7a
