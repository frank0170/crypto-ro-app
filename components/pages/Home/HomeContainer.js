import { Text, View } from "react-native";
import HomeView from "./HomeView";
import chestImage from "../../public/eth.png";
import backImage from "../../public/back.png";
import shouldersImage from "../../public/shoulders.png";

const HomeContainer = () => {
  const person = {
    name: "Lucian",
    daysOfWeek: [
      { name: "Sun", size: 24 },
      { name: "Mon", size: 35 },
      { name: "Tue", size: 47 },
      { name: "Wed", size: 15 },
      { name: "Thu", size: 31 },
      { name: "Fri", size: 35 },
      { name: "Sat", size: 20 },
    ],
  };

  const sampleData = {
    cards: [
      {
        image: chestImage,
        title: `După 365 de zile de la ‘Merge’, Ethereum se luptă cu probleme de centralizare`,
        category: 6,
        link: "blank",
      },
    ],
    cards2: [
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 7,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
      {
        image: chestImage,
        title: `Bitcoin se apropie de $27,000 înainte de întâlnirea FOMC`,
        time: 6,
        link: "blank",
        category: "Stiri",
      },
    ],
    workouts: [
      {
        name: "Strength with Band",
        image: chestImage,
        kcal: 125,
        time: 30,
      },
      {
        name: "Total Body Training",
        image: chestImage,
        kcal: 145,
        time: 25,
      },
      {
        name: "Intense Jumping Jacks",
        image: chestImage,
        kcal: 230,
        time: 45,
      },
      {
        name: "Full Body Cardio Workout",
        image: chestImage,
        kcal: 250,
        time: 50,
      },
    ],
  };

  return <HomeView person={person} sampleData={sampleData} />;
};

export default HomeContainer;
