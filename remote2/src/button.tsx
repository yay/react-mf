export default function Button(props: {
	title?: string;
	onClick: () => void;
}) {
	return (
		<button onClick={() => props.onClick()}>
			{props.title || "Remote 2 button"}
		</button>
	);
}
