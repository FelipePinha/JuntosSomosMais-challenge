import { ChevronDown } from 'lucide-react';

export const MembersHeader = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border border-slate-200 rounded-md p-3">
            <p>Exibindo 9 de 25 itens</p>
            <button className="flex items-center gap-1">
                <span className="font-bold">Ordenar por:</span>
                <span>Nome</span>
                <ChevronDown className="size-4" />
            </button>
        </div>
    );
};
