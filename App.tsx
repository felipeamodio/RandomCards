import { StatusBar } from 'expo-status-bar';
import {Routes} from './src/routes';
import Reactotron from 'reactotron-react-native';

console.tron = Reactotron
.configure()
.useReactNative()
.connect()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Routes initialRoute='Home' />
    </>
  );
}

