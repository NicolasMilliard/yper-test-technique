import { render, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../../../application/redux/searchSlice";
import SubmitInput from "./SubmitInput";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("SubmitInput", () => {
  const mockedDispatch = jest.fn();
  const mockedUseSelector = useSelector;
  const mockedLocation = { lat: 0, lng: 0 };
  const value = "Submit";

  beforeEach(() => {
    mockedUseSelector.mockReturnValue(mockedLocation);
    useDispatch.mockReturnValue(mockedDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch setSearch(true) when location is not empty", () => {
    mockedUseSelector.mockReturnValue({ lat: 7, lng: 2 });
    const { getByRole } = render(<SubmitInput value={value} />);

    fireEvent.click(getByRole("button"));
    expect(mockedDispatch).toHaveBeenCalledWith(setSearch(true));
  });

  it("should dispatch setSearch(false) when location is empty", () => {
    const { getByRole } = render(<SubmitInput value={value} />);

    fireEvent.click(getByRole("button"));
    expect(mockedDispatch).toHaveBeenCalledWith(setSearch(false));
  });
});
