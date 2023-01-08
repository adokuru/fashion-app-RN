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

import { categories, products, user } from "../data/index";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

const IMAGE_WITH = 190;
const IMAGE_HEIGHT = 250;

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const handleProductPress = () => {};

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          paddingHorizontal: Spacing * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={user.image}
              style={{ width: Spacing * 4, height: Spacing * 4 }}
            />
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: Spacing * 2,
                color: Colors.text,
                marginLeft: Spacing,
              }}
            >
              Hi, {user.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing / 2,
              }}
            >
              <Ionicons
                name="search-outline"
                size={Spacing * 3}
                color={Colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing / 2,
              }}
            >
              <Ionicons
                name="cart-outline"
                size={Spacing * 3}
                color={Colors.text}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingVertical: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontSize: Spacing * 3.5,
              fontFamily: Font["poppins-bold"],
              color: Colors.text,
            }}
          >
            Explore the best
            <Text
              style={{
                fontSize: Spacing * 4,
                color: Colors.primary,
              }}
            >
              {" "}
              Collections{" "}
            </Text>
            for you
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: Spacing * 2,
            }}
          >
            Categories
          </Text>
          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingVertical: Spacing,
            }}
          >
            {[{ id: 0, name: "All" }, ...categories].map((category, index) => (
              <TouchableOpacity
                onPress={() => setActiveCategoryIndex(index)}
                style={[
                  {
                    paddingHorizontal: Spacing * 2,
                    paddingVertical: Spacing / 2,
                    borderWidth: 1,
                    borderRadius: Spacing * 2,
                    borderColor: Colors.border,
                    marginRight: Spacing,
                  },
                  activeCategoryIndex === index && {
                    backgroundColor: Colors.primary,
                  },
                ]}
                key={category.id}
              >
                <Text
                  style={{
                    color:
                      activeCategoryIndex === index
                        ? Colors.onPrimary
                        : Colors.text,
                    fontSize: Spacing * 1.4,
                    fontFamily: Font["poppins-regular"],
                  }}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: Spacing * 2,
                }}
              >
                Popular
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: Spacing,
                }}
              >
                <Text
                  style={{
                    fontFamily: Font["poppins-regular"],
                    fontSize: Spacing * 1.6,
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {products.map((product) => (
                <TouchableOpacity
                  onPress={() =>
                    navigate("Product-detail", { product: product })
                  }
                  style={{
                    marginVertical: Spacing,
                  }}
                  key={product.id}
                >
                  <Image
                    style={{
                      width: IMAGE_WITH,
                      height: IMAGE_HEIGHT,
                      borderRadius: Spacing * 2,
                    }}
                    source={product.image}
                  />
                  <Text
                    style={{
                      fontFamily: Font["poppins-semiBold"],
                      fontSize: Spacing * 1.4,
                      color: Colors.text,
                      marginVertical: Spacing,
                    }}
                  >
                    {product.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: Font["poppins-semiBold"],
                        fontSize: Spacing * 1.4,
                        color: Colors.gray,
                      }}
                    >
                      $ {product.price}
                    </Text>
                    <View
                      style={{
                        width: Spacing / 2,
                        height: Spacing / 2,
                        backgroundColor: Colors.gray,
                        borderRadius: Spacing / 4,
                        marginHorizontal: Spacing,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: Font["poppins-semiBold"],
                        fontSize: Spacing * 1.4,
                        color: Colors.gray,
                      }}
                    >
                      {product.brand}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
