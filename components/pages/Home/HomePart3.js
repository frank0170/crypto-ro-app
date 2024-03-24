import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import chestImage from "../../public/eth.png";

const NewsCard = ({ time, title, category }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 360,
        height: 120,
      }}
    >
      <Image
        source={chestImage}
        style={{ width: 100, height: 100, borderRadius: 12 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 280,
          marginLeft: 16,
          height: 100,
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 46,
            height: 24,
            borderRadius: 4,
            backgroundColor: "#8C38F9",
          }}
        >
          <Text style={homeStyles.home_3.workoutCard.category2}>
            {category}
          </Text>
        </View>
        <View style={{ display: "flex", flexWrap: "wrap" }}>
          <Text style={homeStyles.home_3.workoutCard.title}>{title}</Text>
        </View>
        <Text style={homeStyles.home_3.workoutCard.category}>
          Acum {time} ore
        </Text>
      </View>
    </View>
  );
};

const WorkoutCard = ({ image, name, kcal, time }) => {
  const cardStyle = homeStyles.home_3.workoutCard.card;

  return (
    <ImageBackground source={image} style={cardStyle}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <Text style={homeStyles.home_3.workoutCard.title}>{name}</Text>
        </View>
        <View style={homeStyles.home_3.workoutCard.secondaryTextPart}>
          <View style={homeStyles.home_3.workoutCard.secondaryTextPartDiv}>
            <Text style={homeStyles.home_3.workoutCard.secondaryTextPartText}>
              {/* <CaloriesIconSmall /> {kcal} kcal */}
            </Text>
          </View>
          <View style={homeStyles.home_3.workoutCard.secondaryTextPartDiv}>
            <Text style={homeStyles.home_3.workoutCard.secondaryTextPartText}>
              {/* <TimeSmallIcon /> {time} min */}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  const cardStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selected
      : homeStyles.home_3.categoryCard.notSelected;

  const textStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selectedText
      : homeStyles.home_3.categoryCard.notSelectedText;

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={textStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const NextCatgory = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M7.12025 15.1558L12.2762 9.99988L7.12025 4.84388C7.06942 4.79305 7.02492 4.73821 6.98675 4.68046C6.71983 4.27613 6.76433 3.72671 7.12025 3.37071C7.527 2.96396 8.18658 2.96396 8.59342 3.37071L14.4859 9.2633C14.5103 9.28771 14.5334 9.31321 14.5551 9.33971C14.707 9.52505 14.791 9.75813 14.791 9.99988C14.791 10.2761 14.6813 10.541 14.4859 10.7365L8.59342 16.629C8.18658 17.0358 7.527 17.0358 7.12025 16.629C7.06942 16.5781 7.02492 16.5233 6.98675 16.4656C6.71983 16.0613 6.76433 15.5118 7.12025 15.1558Z"
        fill="#8C38F9"
      />
    </svg>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const categories = [
    "Toate",
    "Stiri",
    "Educatie",
    "Analize",
    "Bitcoin",
    "Ethereum",
    "Cardano",
    "Solana",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const workoutsStyle = homeStyles.home_3.workoutsStyle.seeAllOn;

  const seeAllTextStyle = homeStyles.home_2.seeAllTextOff;
  return (
    <View style={workoutsStyle}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={homeStyles.home_3.welcome}>Categorii</Text>
        <TouchableOpacity style={{ marginBottom: 8 }}>
          <NextCatgory />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ borderBottom: "1px solid #312745", marginBottom: 24 }}
      >
        {categories.map((item) => (
          <CategoryCard
            key={item.id} // Don't forget to add a unique key prop for each item
            category={item}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </ScrollView>

      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {sampleData.cards2.map((item) => (
          <NewsCard
            key={item.id} // Don't forget to add a unique key prop for each item
            image={item.image}
            time={item.time}
            title={item.title}
            category={item.category}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
