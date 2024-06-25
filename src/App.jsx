import Accordion from "./components/Accordion";
// import AccordionItem from "./components/AccordionItem";

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
                  We create travel plans tailored to your interests and preferences,
                  ensuring a unique and memorable experience every time.
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
                  Our dedicated support team is available around the clock to assist
                  you with any inquiries or issues that may arise during your trip.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
