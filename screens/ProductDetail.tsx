import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

type Props = NativeStackScreenProps<RootStackParamList, "Product-detail">;

const IMAGE_HEIGHT = 440;

const ProductDetail: React.FC<Props> = ({ route, navigation }) => {
  const product = route.params.product;
  return (
    <SafeAreaView>
      <View>
        <Text>{product.name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
