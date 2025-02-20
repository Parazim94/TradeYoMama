import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import AuthScreen from "../screens/Auth/AuthScreen";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStyles } from "../styles/style";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";  
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import AnimatedLogo from "../components/AnimatedLogo";

type StackParamList = {
  Main: undefined;
  Search: undefined;
  Settings: undefined;
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  Portfolio: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function StackNavigator() {
  const navigation = useNavigation();
  const styles = createStyles();
  const { colorTheme, setColorTheme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);  // isLoggedIn aus AuthContext

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: styles.container.backgroundColor,
          shadowColor: "transparent",
        },
        headerTintColor: styles.accent.color,
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{
          headerTintColor: styles.accent.color,
          headerTitle: () => null,
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <Image source={require("../../assets/images/Brokechain3.png")} style={{ width: 100, height: 40 }} />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 15 }}>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() =>
                  setColorTheme(colorTheme === "light" ? "dark" : "light")
                }
              >
                {colorTheme === "dark" ? (
                  <Ionicons
                    name="sunny"
                    size={24}
                    color={styles.defaultText.color}
                  />
                ) : (
                  <Ionicons
                    name="moon"
                    size={24}
                    color={styles.defaultText.color}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                // Profil-Icon: wenn isLoggedIn true, navigieren Sie zum Portfolio, sonst zum Auth-Screen
                onPress={() =>
                  navigation.navigate(
                    isLoggedIn ? "Portfolio" as never : "Auth" as never
                  )
                }
              >
                <Ionicons
                  name="person-circle"
                  size={28}
                  color={styles.accent.color}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate("Settings" as never)}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={styles.defaultText.color}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Einstellungen" }}
      />
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: "Profil" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Registrieren" }}
      />
    </Stack.Navigator>
  );
}
