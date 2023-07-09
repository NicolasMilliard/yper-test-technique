import { render, fireEvent } from "@testing-library/react";
import SubmitInput from "./SubmitInput";

describe("SubmitInput", () => {
  it("renders correctly", () => {
    const value = "Submit";
    const customFunc = jest.fn();

    const { getByText } = render(<SubmitInput value={value} customFunc={customFunc} />);

    const submitInput = getByText(value);

    expect(submitInput).toBeInTheDocument();
    expect(submitInput.type).toBe("submit");
    expect(submitInput.value).toBe(value);
  });

  it("calls customFunc when clicked", () => {
    const value = "Submit";
    const customFunc = jest.fn();

    const { getByText } = render(<SubmitInput value={value} customFunc={customFunc} />);

    const submitInput = getByText(value);
    fireEvent.click(submitInput);

    expect(customFunc).toHaveBeenCalled();
  });
});
