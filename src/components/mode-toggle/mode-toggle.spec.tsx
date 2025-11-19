import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "@/contexts/theme-context";
import { ModeToggle } from "./mode-toggle";

describe("mode-toggle component", () => {
	it("should render toggle button", () => {
		render(
			<ThemeProvider defaultTheme="system" storageKey="test-theme">
				<ModeToggle />
			</ThemeProvider>
		);

		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });
		expect(toggleButton).toBeDefined();
	});

	it("should open dropdown menu on button click", async () => {
		const user = userEvent.setup();

		render(
			<ThemeProvider defaultTheme="system" storageKey="test-theme">
				<ModeToggle />
			</ThemeProvider>
		);

		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });

		// Clica no botão para abrir o dropdown
		await user.click(toggleButton);

		// Espera o dropdown aparecer e verifica se está aberto
		await waitFor(() => {
			const themeDropdownContent = screen.getByTestId(
				"theme-toggle-dropdown-content"
			);
			expect(themeDropdownContent.getAttribute("data-state")).toBe("open");
		});
	});
});
