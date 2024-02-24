import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { MemberTypes } from '../types/membersTypes';
import { StateCheckbox } from './ui/state-checkbox';

interface StateFilterProps {
    setStateFilter: Dispatch<SetStateAction<string[]>>;
    members: MemberTypes[];
}

export const StateFilter = ({ setStateFilter, members }: StateFilterProps) => {
    const [showingAllStates, setShowingAllStates] = useState(false);

    const states = members.map(member => member.location.state);
    const uniqueStates = [...new Set(states)];

    const numberOfStatesOnScreen = showingAllStates ? states.length - 1 : 5;

    const handleSelectCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setStateFilter(prev => {
                return [...prev, e.target.value];
            });
        } else {
            setStateFilter(prev => {
                return prev.filter(state => state !== e.target.value);
            });
        }
    };

    return (
        <section>
            <div className="border border-slate-200 space-y-6 p-6">
                <h2 className="font-bold text-lg">Por Estado</h2>

                <div className="space-y-3">
                    {uniqueStates.slice(0, numberOfStatesOnScreen).map(state => (
                        <StateCheckbox handleSelectCheckbox={handleSelectCheckbox} state={state} />
                    ))}
                </div>

                <button
                    onClick={() => setShowingAllStates(prev => !prev)}
                    className="underline text-blue-900"
                >
                    {showingAllStates ? 'Minimizar' : 'Ver todos'}
                </button>
            </div>
        </section>
    );
};
