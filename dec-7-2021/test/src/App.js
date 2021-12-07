import { useState } from "react";
import "./App.css";

function MyComp({ name, updateName }) {
	// name = name + " 007";
	return (
		<h1 onClick={() => updateName(name + " 007")}>
			{"child "}
			{name}
		</h1>
	);
}

function App() {
	// hooks
	const [n, sN, random, myFunc] = useMyHook(0);
	const [nn, sNN] = useState("no time to die");

	return (
		<div className="App">
			<MyComp name={nn} updateName={sNN} />
			<h1>{nn}</h1>
			<h1>
				{random}
				{n}
			</h1>
			<button onClick={() => sN(n + 1)}>Click me</button>
			<button onClick={() => myFunc()}>Click me</button>
		</div>
	);
}

const useMyHook = (initaValue) => {
	const [n, sN] = useState(initaValue);

	const myFunc = () => {
		console.log(2 + 2);
	};
	return [n, sN, "ddddd", myFunc];
};

export default App;
