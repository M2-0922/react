import Counter from "../Counter";
import { render, fireEvent, getByRole } from "@testing-library/react";

describe("Counter", () => {
	it("should display the inital count", () => {
		const { getByTestId } = render(<Counter initialCount={0} />);
		expect(getByTestId("count")).toHaveTextContent(0);
	});

	it("should increment the count when the increment button is clicked", () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		fireEvent.click(getByRole("button", { name: "Increment" }));
		expect(getByTestId("count")).toHaveTextContent(1);
	});

	it("should decrement the count when the decrement button is clicked", () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
		fireEvent.click(getByRole("button", { name: "Decrement" }));
		expect(getByTestId("count")).toHaveTextContent(0);
	});

	it("should change the color of the count when the count is less than 0", () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		fireEvent.click(getByRole("button", { name: "Increment" }));
		fireEvent.click(getByRole("button", { name: "Switch Sign" }));
		expect(getByTestId("count")).toHaveStyle("color: red");
	});

	// should reset the count when the reset button is clicked;
	// -- give initial count
	// -- 2 time fire the increment
	// -- fire the reset button
	// expect to see the initial text content

	it("should reset the count when the reset button is clicked", () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		fireEvent.click(getByRole("button", { name: "Increment" }));
		fireEvent.click(getByRole("button", { name: "Increment" }));
		fireEvent.click(getByRole("button", { name: "Reset" }));
		expect(getByTestId("count")).toHaveTextContent(0);
	});

	// should switch the sign of count when the switch sign button is clicked;
	// -- give initial count
	// -- 2 time fire the increment
	// -- fire the switch sign button
	// expect what you have -2
	it("should switch the sign of count when the switch sign button is clicked", () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		fireEvent.click(getByRole("button", { name: "Increment" }));
		fireEvent.click(getByRole("button", { name: "Increment" }));
		fireEvent.click(getByRole("button", { name: "Switch Sign" }));
		expect(getByTestId("count")).toHaveTextContent(-2);
	});
});
