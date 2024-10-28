import React from "react";
import Button from "remote1/button";

function Remote1() {
	const [count, setCount] = React.useState(0);
	return (
		<div>
			<h2>Remote1 Router</h2>
			<Button
				title={`Title from host ${count}`}
				onClick={() => setCount(count + 1)}
			/>
		</div>
	);
}

export default Remote1;
