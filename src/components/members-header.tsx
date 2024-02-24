import { ChevronDown } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface MembersHeaderProps {
    membersTotalResults: number;
    searchResultsNumber: number;
    setIsFirstNameSelected: Dispatch<SetStateAction<boolean>>;
    isFirstNameSelected: boolean;
}

export const MembersHeader = ({
    membersTotalResults,
    searchResultsNumber,
    setIsFirstNameSelected,
    isFirstNameSelected,
}: MembersHeaderProps) => {
    const toggleOrderBetweenFirstAndLastName = () => {
        setIsFirstNameSelected(prev => !prev);
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border border-slate-200 rounded-md p-3">
            <p>
                Exibindo {searchResultsNumber} de {membersTotalResults} itens
            </p>
            <button
                onClick={toggleOrderBetweenFirstAndLastName}
                className="flex items-center gap-1"
            >
                <span className="font-bold">Ordenar por:</span>
                <span>{isFirstNameSelected ? 'Nome' : 'Sobrenome'}</span>
                <ChevronDown className="size-4" />
            </button>
        </div>
    );
};
