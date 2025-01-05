import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";

export default () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          padding: 20,
        }}
      >
        {/* stock view */}
        <View
          style={{
            width: "100%",
            height: 300,
            backgroundColor: "plum",
          }}
        ></View>

        {/* Add button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#4CAF50", // Button background color
            paddingVertical: 12, // Vertical padding
            paddingHorizontal: 20, // Horizontal padding
            borderRadius: 25, // Rounded corners
            alignItems: "center", // Center text horizontally
            justifyContent: "center", // Center text vertically
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              color: "#fff", // Text color
              fontSize: 16, // Font size
              fontWeight: "bold", // Bold text
            }}
          >
            Add +
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
