import { loadRemote } from "@module-federation/enhanced/runtime";
import React, { Suspense } from "react";
// import Button from "remote2/button";
// import type RemoteButton from "remote2/button";

const Button = React.lazy(async () => {
	const res = await loadRemote("remote2/button");
	return res; // as { default: typeof RemoteButton };
});

// title="Testing" onClick={() => alert("Testing")}

function Remote2() {
	return (
		<Suspense fallback={"loading"}>
			<h2>Remote2 Router</h2>
			<Button />
		</Suspense>
	);
}

export default Remote2;
