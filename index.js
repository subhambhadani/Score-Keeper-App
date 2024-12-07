let score = 0;
let wickets = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {
  // if (wickets < 10) {
  //   ballWiseRes.push(num);
  //   score += num;
  hit = num;
  rootElement.render(<App />);
  console.log(hit);
  // }
}
const fallWicket = () => {
  // if (wickets < 10) {
  //   ballWiseRes.push("W");
  //   wickets += 1;
  hit = "W";
  rootElement.render(<App />);
  console.log(hit);
  //   console.log(ballWiseRes);
  // }
};

const ScoreButton = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={fallWicket}>wicket</button>
  </div>
);

const Result = () => (
  <div>
    {ballWiseRes.map((res, index) => (
      <>
        {index % 6 === 0 ? <br /> : null}
        <span key={index}>{res === 0 ? <strong>.</strong> : res}</span>
        &nbsp;&nbsp;&nbsp;
      </>
    ))}
  </div>
);

const handleSubmit = (event) => {
  event.preventDefault();
  if (hit === "W") {
    wickets += 1;
  } else {
    score += hit;
  }
  ballWiseRes.unshift(<span>{`${hit},${inputRef.current.value}`}</span>);
  hit = 0;
  inputRef.current.value = "";
  rootElement.render(<App />);
};

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} />
    <input ref={inputRef} placeholder="add a comment" />
    <button>Submit</button>
  </form>
);

const App = () => (
  <>
    <h1>SCORE KEEPER</h1>
    <h2>
      {score}/{wickets}
    </h2>
    <ScoreButton />
    <br />

    {/* <Result /> */}
    <Form />
    <hr />
    {ballWiseRes.map((res, index) => (
      <p key={index}>{res}</p>
    ))}
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
