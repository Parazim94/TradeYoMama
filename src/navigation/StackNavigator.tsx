import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import SearchScreen from "../screens/Settings/SearchScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type StackParamList = {
  Main: undefined;
  Search: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function StackNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{
          title: "TradeYoMama",
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Search" as never)}
              >
                <Ionicons name="search" size={24} style={{ marginRight: 20 }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Settings" as never)}
              >
                <Ionicons name="settings-outline" size={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Suche" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Einstellungen" }}
      />
    </Stack.Navigator>
  );
}
