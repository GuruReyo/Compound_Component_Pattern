// src/components/Render.js
import React from 'react';
// import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "../../assets/african-savanna.jpg";
import amazonImg from "../../assets/amazon-river.jpg";
import caribbeanImg from "../../assets/caribbean-beach.jpg";
import desertImg from "../../assets/desert-dunes.jpg";
import forestImg from "../../assets/forest-waterfall.jpg";
import Place from "./SearchableList/Place";
import SearchableList from './SearchableList/SearchableList';
const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];
const Render = () => {
  return (
    <section>
    <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
      {(item) => <Place item={item} />}
    </SearchableList>
    {/* <SearchableList items={["Item 1", "Item 2"]} itemKeyFn={(item) => item}>
      {(item) => item}
    </SearchableList> */}
  </section>
  );
};

export default Render;
