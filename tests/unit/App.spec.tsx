import AppProvider from "@/Providers/AppProvider";
import { render, screen } from "@testing-library/react";

test("MyComponent displays correctly", () => {
	render(<AppProvider />);

	const heading = screen.getByText(/Rick && Morty/i);

	expect(heading).true;
});
