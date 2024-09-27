import { StatusBar } from 'expo-status-bar';
import Index from './Index';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [loaded, error] = useFonts({
    'LatoBlack': require('./assets/Font/Lato-Black.ttf'),
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts", error);
    }
  }, [error]);

  if (!loaded) {
    return <AppLoading />;
  }

 
  return (
    <>
      <StatusBar style="auto" />
      <Index />
    </>
  );
}

