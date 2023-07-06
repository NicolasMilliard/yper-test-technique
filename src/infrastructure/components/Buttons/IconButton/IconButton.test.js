import { render, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";

describe("IconButton", () => {
  const buttonText = "Click me";
  const buttonIcon = "../../../../application/constants/icons/nav/arrow.svg";
  const buttonIconText = "Icon";
  const buttonFunc = jest.fn();

  beforeEach(() => {
    buttonFunc.mockClear();
  });

  it("renders the button with image and text", () => {
    const { getByRole, getByAltText, getByText } = render(
      <IconButton imageSource={buttonIcon} imageAlt={buttonIconText} text={buttonText} customFunc={buttonFunc} />
    );

    const button = getByRole("button");
    const image = getByAltText(buttonIconText);
    const text = getByText(buttonText);

    expect(button).toBeInTheDocument();
    expect(image).toHaveAttribute("src", buttonIcon);
    expect(text).toHaveTextContent(buttonText);
  });

  it("calls the customFunc when the button is clicked", () => {
    const { getByRole } = render(
      <IconButton imageSource={buttonIcon} imageAlt={buttonIconText} text={buttonText} customFunc={buttonFunc} />
    );

    const button = getByRole("button");
    fireEvent.click(button);

    expect(buttonFunc).toHaveBeenCalledTimes(1);
  });
});
