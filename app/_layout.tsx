import { Navigator } from "expo-router";


export default function Layout() {
  return (
    <Navigator>
      <Navigator.Screen name="index" options={{ title: "Title" }} />
      <Navigator.Slot />
    </Navigator>
  )
}
