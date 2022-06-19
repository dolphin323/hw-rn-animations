import React, { FC } from "react";
import { View, Image } from "react-native";
import Animated from "react-native-reanimated";

import { styles } from "./styles";

type IProps = { item: { image: any }; index: number };

const Page: FC<IProps> = ({ item, index }) => {
  return (
    <View key={index} style={styles.page}>
      <Animated.View style={styles.square}></Animated.View>
      <Animated.View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </Animated.View>
    </View>
  );
};

export { Page };
