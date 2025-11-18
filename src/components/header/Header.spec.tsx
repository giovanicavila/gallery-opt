import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "./Header";

describe("Header component", () => {
	it("should render header on the top", () => {
		render(
			<ThemeProvider defaultTheme="system" storageKey="test-theme">
				<Header />
			</ThemeProvider>
		);

		const header = screen.getByRole("banner");
		expect(header).toBeDefined();
		expect(header.textContent).toContain("The Library");
	});
});
