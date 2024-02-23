import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchInput = () => {
    const [_, setSearchParams] = useSearchParams();

    const handleChangeSearchParams = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams(
            prev => {
                prev.set('name', e.target.value);

                return prev;
            },
            { replace: true }
        );
    };

    return (
        <input
            onChange={handleChangeSearchParams}
            type="text"
            className="w-full py-1.5 rounded-full px-8 md:px-10 outline-none border border-slate-200"
            placeholder="Buscar aqui"
        />
    );
};
