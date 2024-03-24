import { Text, View } from "react-native";
import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";
import HomePart3 from "./HomePart3";
import { ScrollView } from "react-native-gesture-handler";

const HomeView = ({ person, sampleData }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0B0418",
      }}
    >
      <HomePart1 person={person} />
      <HomePart2 sampleData={sampleData} />
      <HomePart3 person={person} sampleData={sampleData} />
    </ScrollView>
  );
};

export default HomeView;
