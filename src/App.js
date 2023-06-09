import React from "react";
import Card from "./components/Card";
// import robotsData from "./robotsData";
import Searchbox from "./components/Searchbox";
import Scroll from "./components/Scroll";
import Footer from "./components/Footer";

function App() {
  const [state, setState] = React.useState({
    robots: [],
    searchField: "",
  });

  React.useEffect(() => {
    console.log('checking')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setState((prevData) => {
          return {
            ...prevData,
            robots: data,
          };
        })
      );
  }, [0]);

  const filteredRobots = state.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(state.searchField.toLowerCase());
  });

  let roboData = filteredRobots.map((robo) => {
    return <Card key={robo.id} robots={robo} />;
  });

  function onSearchChange(event) {
    setState((prevState) => {
      return {
        ...prevState,
        searchField: event.target.value,
      };
    });
  }

  return (
    <div className="app">
      <h1>ROBOFRIENDS</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <div className="robots--container">{roboData}</div>
      </Scroll>
      <Footer />
    </div>
  );
}

export default App;