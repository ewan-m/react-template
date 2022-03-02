import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import "./index.scss";

import countries from "./data/countries.json";
import currencies from "./data/currencies.json";

const countriesList = Object.entries(countries).map((e) => ({
	code: e[0],
	display: e[1],
}));
const rates = Object.entries(currencies.rates).map((e) => ({
	code: e[0],
	rate: e[1],
}));

const App = () => {
	const [currency, setCurrency] = useState(countriesList[0].code);
	const [money, setMoney] = useState("0");
	const [showAnswers, setShowAnswers] = useState(false);

	useEffect(() => {
		setShowAnswers(false);
	}, [setShowAnswers, money, currency]);

	return (
		<div className="container">
			<div style={{ maxWidth: "900px" }}>
				<h1 className="title">where are you a millionaire?</h1>

				<form
					className="form"
					onSubmit={(e) => {
						e.preventDefault();
						setShowAnswers(true);
					}}
				>
					<label className="form__label">
						which currency do you use?
						<select
							value={currency}
							className="form__input"
							onChange={(e) => {
								setCurrency(e.target.value);
							}}
						>
							{countriesList.map((country) => (
								<option key={country.code} value={country.code}>
									{country.display}
								</option>
							))}
						</select>
					</label>

					<label className="form__label">
						how much money do you have?
						<input
							value={money}
							onChange={(e) => {
								setMoney(e.target.value);
							}}
							className="form__input"
							type="text"
						/>
					</label>
					<button className="form__submit" type="submit">
						Where it be, dawg?
					</button>
				</form>

				{showAnswers && (
					<>
						{rates
							.map((rate) => {
								const muchMoney =
									(rate.rate * Number(money)) /
									(rates.find((rate) => rate.code === currency)?.rate ?? 1);

								return {
									code: rate.code,
									money: muchMoney,
								};
							})
							.filter((amount) => amount.money >= 1_000_000)
							.sort((a, b) => a.money - b.money)
							.map((currency) => (
								<p>
									{(countries as any)[currency.code]} -{" "}
									{currency.money.toLocaleString(undefined, {
										maximumFractionDigits: 2,
									})}
								</p>
							))}
					</>
				)}
			</div>
		</div>
	);
};

render(<App />, document.getElementById("root"));
