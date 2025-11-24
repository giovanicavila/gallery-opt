import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { ThemeProvider } from "@/contexts/theme-context";
import { ModeToggle } from "./mode-toggle";

describe("mode-toggle component", () => {
	beforeEach(() => {
		render(
			<ThemeProvider defaultTheme="system" storageKey="test-theme">
				<ModeToggle />
			</ThemeProvider>
		);
	});

	it("should render toggle button", () => {
		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });
		expect(toggleButton).toBeDefined();
	});

	it("should open dropdown menu on button click", async () => {
		const user = userEvent.setup();

		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });

		await user.click(toggleButton);

		await waitFor(() => {
			const themeDropdownContent = screen.getByTestId(
				"theme-toggle-dropdown-content"
			);
			expect(themeDropdownContent.getAttribute("data-state")).toBe("open");
		});
	});

	/* it("should close dropdown menu on outside click", async () => {
		const user = userEvent.setup();

		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });

		await user.click(toggleButton);

		await waitFor(() => {
			const themeDropdownContent = screen.getByTestId(
				"theme-toggle-dropdown-content"
			);
			expect(themeDropdownContent.getAttribute("data-state")).toBe("open");
		})

		const outsideElement = document.body;

		await user.click(outsideElement);

		await waitFor(() => {
			const themeDropdownContent = screen.getByTestId(
				"theme-toggle-dropdown-content"
			);
			expect(themeDropdownContent.getAttribute("data-state")).toBe("closed");
		});
	}) */

	it("should change theme on option click", async () => {
		const user = userEvent.setup();

		/* Abrindo o modal */
		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });

		await user.click(toggleButton);

		await waitFor(() => {
			const themeDropdownContent = screen.getByTestId(
				"theme-toggle-dropdown-content"
			);
			expect(themeDropdownContent.getAttribute("data-state")).toBe("open");
		});

		/* Selecionando o tema claro */
		const lightButton = screen.getByRole("menuitem", { name: "Light" });

		await user.click(lightButton);

		await waitFor(() => {
			expect(document.documentElement.classList.contains("light")).toBe(true);
		});
	});
});

describe("mode-toggle and localStorage theme", () => {
	beforeEach(() => {
		localStorage.clear();

		render(
			<ThemeProvider defaultTheme="system" storageKey="test-theme">
				<ModeToggle />
			</ThemeProvider>
		);
	});

	it("should save theme to localStorage when changed", async () => {
		const user = userEvent.setup();

		const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

		const toggleButton = screen.getByRole("button", { name: "Toggle theme" });

		await user.click(toggleButton);

		await waitFor(() => {
			const themeDropdownContent = screen.getByTestId(
				"theme-toggle-dropdown-content"
			);
			expect(themeDropdownContent.getAttribute("data-state")).toBe("open");
		});

		/* Selecionando o tema escuro */
		const darkButton = screen.getByRole("menuitem", { name: "Dark" });

		await user.click(darkButton);

		await waitFor(() => {
			expect(document.documentElement.classList.contains("dark")).toBe(true);
		});

		expect(setItemSpy).toHaveBeenCalledWith("test-theme", "dark");
		expect(setItemSpy).toHaveBeenCalledTimes(1);

		expect(localStorage.getItem("test-theme")).toBe("dark");

		setItemSpy.mockRestore();
	});
});
