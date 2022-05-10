import { createRoot } from "react-dom/client";
import "./index.scss";

const App = () => {
	return (
		<div className="container">
			<div className="innerContainer">
				<h1 className="title">React template!</h1>
				<p className="paragraph">
					Welcome to my react template with just enough config up and ready for you.
					Using parcel2 and github pages actions. Bare minimums pretty much.
				</p>
				<p className="paragraph">
					Very nice font pairings and font stylings look at this one below.
				</p>
				<form className="form">
					<label className="form__label">
						Do you like using selectors?
						<select className="form__input">
							<option>Yes</option>
							<option>No</option>
						</select>
					</label>

					<label className="form__label">
						How about text inputs?
						<input className="form__input" type="text" />
					</label>
					<button className="form__submit">Very nice button indeed</button>
				</form>
			</div>
		</div>
	);
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
