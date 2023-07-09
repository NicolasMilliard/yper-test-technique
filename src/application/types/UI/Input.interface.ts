import { ChangeEvent } from "react";

interface InputInterface {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

export default InputInterface;