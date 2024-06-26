import Accordion from "./components/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./components/SearchableList/Place";
// import AccordionItem from "./components/AccordionItem";
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
function App() {
  return (
    <main>
      <section>
        <h2>Why choose our services?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              Personalized Travel Plans
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Customized Itineraries Just for You</p>
                <p>
                  We create travel plans tailored to your interests and
                  preferences, ensuring a unique and memorable experience every
                  time.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="2" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              24/7 Customer Support
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>Always Here to Help</p>
                <p>
                  Our dedicated support team is available around the clock to
                  assist you with any inquiries or issues that may arise during
                  your trip.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["Item 1", "Item 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
