import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
	const { repos } = React.useContext(GithubContext);
	let languages = repos.reduce((total, item) => {
		const { language } = item;
		// if null then dont store null
		if (language === null) return total;

		// if object is not exist
		if (!total[language]) {
			// Ex : Javascript = 1
			total[language] = { label: language, value: 1 };
		} else {
			total[language].value += 1;
		}
		return total;
	}, {});

	languages = Object.values(languages).sort((a, b) => {
		return b.value - a.value;
	});

	console.log(languages);
	// const chartData = [
	// 	{
	// 		label: "HTML",
	// 		value: "290",
	// 	},
	// 	{
	// 		label: "CSS",
	// 		value: "260",
	// 	},
	// 	{
	// 		label: "JS",
	// 		value: "180",
	// 	},
	// ];
	return (
		<section className="section">
			<Wrapper className="section-center">
				{/* <ExampleChart data={chartData} /> */}
				<Pie3D data={languages} />
			</Wrapper>
		</section>
	);
};

const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	gap: 2rem;
	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 2fr 3fr;
	}

	div {
		width: 100% !important;
	}
	.fusioncharts-container {
		width: 100% !important;
	}
	svg {
		width: 100% !important;
		border-radius: var(--radius) !important;
	}
`;

export default Repos;
