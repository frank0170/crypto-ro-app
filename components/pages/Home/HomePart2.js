import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";

const FitnessCard = ({ image, title, category, link, all }) => {
  const cardStyle = homeStyles.home_2.imageCard.cardAll;

  return (
    <ImageBackground source={image}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={homeStyles.home_2.imageCard.title}>{title}</Text>
        </View>
        <Text style={homeStyles.home_2.imageCard.category}>
          Acum {category} ore
        </Text>
      </View>
    </ImageBackground>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const [seeAllTrue, setSeeAllTrue] = useState(true);

  const handleSeeAllClick = () => {
    setSeeAllTrue(!seeAllTrue);
  };

  const workoutsStyle = seeAllTrue
    ? homeStyles.home_2.workoutsStyle.seeAllOn
    : homeStyles.home_2.workoutsStyle.seeAllOff;

  const seeAllTextStyle = seeAllTrue
    ? homeStyles.home_2.seeAllTextOn
    : homeStyles.home_2.seeAllTextOff;
  return (
    <View style={workoutsStyle}>
      <ScrollView
        horizontal={!seeAllTrue}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {sampleData.cards.map((item) => (
          <FitnessCard
            key={item.id} // Don't forget to add a unique key prop for each item
            image={item.image}
            title={item.title}
            category={item.category}
            all={!seeAllTrue}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
