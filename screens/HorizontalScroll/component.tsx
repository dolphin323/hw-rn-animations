import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { CAT_1, CAT_2, CAT_3 } from "../../assets";
import { Bell } from "../../svgComponents/Bell";
import { BrokenHeart } from "../../svgComponents/BrokenHeart";
import { Heart } from "../../svgComponents/Heart";
import { Page } from "./Page/component";
import { styles } from "./styles";

const items = [
  { id: 1, image: CAT_1, color: "violet" },
  { id: 2, image: CAT_2, color: "orange" },
  { id: 3, image: CAT_3, color: "grey" },
];

const HorizontalScroll = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.ScrollView
        pagingEnabled
        onScroll={scrollHandler}
        style={styles.container}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, index) => {
          return <Page index={index} item={item} key={item.id} />;
        })}
      </Animated.ScrollView>
      <View style={styles.reactionsContainer}>
        <BrokenHeart />
        <Heart />
        <Bell />
      </View>
    </Animated.View>
  );
};

export { HorizontalScroll };
