import { ChangeEvent } from 'react';

interface StateCheckboxProps {
    handleSelectCheckbox: (e: ChangeEvent<HTMLInputElement>) => void;
    state: string;
}

export const StateCheckbox = ({ handleSelectCheckbox, state }: StateCheckboxProps) => {
    return (
        <div>
            <label className="flex gap-2">
                <input onChange={handleSelectCheckbox} value={state} type="checkbox" />
                {state}
            </label>
        </div>
    );
};
