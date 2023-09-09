import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
// when app is initially load, native splash screen remain visible until hideAsync is called.

const Layout = () => {
  const [fontLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  if (!fontLoaded) return null;

  return <Stack />;
};

// const Layout = () => {
//   console.log('Layout');
//   const [fontLoaded] = useFonts({
//     DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
//     DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
//     DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
//   });
//   console.log('fontLoaded', fontLoaded);

//   // useCallBack hook it prevent to recreate function on every render
//   const onLayoutRootView = useCallback(async () => {
//     console.log('splash');
//     if (fontLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontLoaded]);

//   if (!fontLoaded) return null;

//   return <Stack onLayout={() => console.log('test')} />;
// };

export default Layout;

// When you navigate from one page to the next page, the component code for the next page's screen will be executed.
// If the code for the next screen includes the useFonts hook, it will load the fonts.
// If the fonts are loaded successfully, they can be used for rendering text components on the screen.
// The next screen's content will be rendered, including any components that rely on the loaded fonts.
// Regarding the onLayout event and the onLayoutRootView function:
// The onLayoutRootView function is designed to be executed when the layout of the component (in this case, <Stack>) is calculated and ready.
// By using the onLayout prop and passing onLayoutRootView to it (<Stack onLayout={onLayoutRootView} />), you are ensuring that the onLayoutRootView function is triggered when the layout is calculated.
