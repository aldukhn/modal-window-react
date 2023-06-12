import _ from "lodash";

const modals = [
  {
    id: 1,
    title: "First Tutorial",
    title1: "React Introduction",
    text: (
      <div>
        <a href="https://www.w3schools.com/react/default.asp">React Tutorial</a>
        <br />
        <a href="https://www.w3schools.com/react/react_intro.asp">
          React Introduction
        </a>
        <br />
        <a href="https://www.w3schools.com/react/react_getstarted.asp">
          React Getting Started
        </a>
      </div>
    ),
  },
  {
    id: 2,
    title: "2nd Tutorial",
    title1: "things should we know about JavaScript before React?",
    text: (
      <div>
        <p>
          Hi friends! Maybe if you have recently stepped into the world of
          frontend, working with the hottest tools in this field such as React,
          Vue, TypeScript, etc. can be very tempting. But we should know that
          working with these tools without basic knowledge is like building a
          building without paying attention to its foundation or starting to
          learn English by reading William Shakespeare's works. If the
          foundation is not strong, not only hundreds of hours and energy will
          be wasted, but also no growth will be achieved! These tools are
          beautiful and attractive from afar. Also up close, as long as we are
          prepared and knowledgeable. React is a JavaScript-based tool, and in
          this post, we want to see what things we should know about JavaScript
          before stepping into the world of React.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "3ed Tutorial",
    title1: "JSX",
    text: (
      <div>
        <a href="https://www.w3schools.com/react/react_jsx.asp">React JSX</a>
        <br />
        <a href="https://legacy.reactjs.org/docs/jsx-in-depth.html">
          JSX In Depth
        </a>
        <br />
        <a href="https://react.dev/learn/writing-markup-with-jsx">
          Writing Markup with JSX
        </a>
        <br />
        <a href="https://react.dev/learn/javascript-in-jsx-with-curly-braces">
          JavaScript in JSX with Curly Braces
        </a>
      </div>
    ),
  },
  {
    id: 4,
    title: "4th Tutorial",
    title1: "Events",
    text: (
      <div>
        <a href="https://www.w3schools.com/react/react_events.asp">
          React Events
        </a>
        <br />
        <a href="https://react.dev/learn/responding-to-events">
          Responding to Events
        </a>
      </div>
    ),
  },
  {
    id: 5,
    title: "Resources",
    title1: "Resources",
    text: (
      <div>
        <a href="https://react.dev/">React </a>
        <br />
        <a href="https://www.w3schools.com/react/default.asp">React Tutorial</a>
        <br />
        <a href="https://www.taniarascia.com/react-architecture-directory-structure/">
          React Architecture: How to Structure and Organize a React Application
        </a>
        <br />
        <a href="https://kentcdodds.com/blog/javascript-to-know-for-react">
          JavaScript to Know for React
        </a>
        <br />
        <a href="https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/">
          The JavaScript Skills You Need For React (+ Practical Examples)
        </a>
        <br />
        <a href="https://www.w3schools.com/react/react_class.asp">
          React Class Components
        </a>
      </div>
    ),
  },
];

const App = ({ store, setStore }) => {
  return (
    <div id="app">
      <h1>Modal</h1>
      <div className="main">
        {modals.map((modal, index) => {
          return (
            <button
              key={`modal-${index}`}
              onClick={() => {
                const newStore = _.cloneDeep(store);
                _.set(newStore, "modalProperty.showModal", true);
                _.set(newStore, "modalProperty.title", modal.title);
                _.set(newStore, "modalProperty.title1", modal.title1);
                _.set(newStore, "modalText", modal.text);
                setStore(newStore);
              }}
            >
              {modal.title}
            </button>
          );
        })}
        {/* <button id="modal-1">Modal 1</button>
        <button id="modal-2">Modal 2</button>
        <button id="modal-3">Modal 3</button>
        <button id="modal-4">Modal 4</button>
        <button id="modal-5">Modal 5</button> */}
      </div>
    </div>
  );
};

export default App;
