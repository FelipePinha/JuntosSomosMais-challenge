import Logo from '../assets/juntossomosmais_logo.png';
import { Search } from 'lucide-react';
import { SearchInput } from './ui/search-input';

export const Header = () => {
    return (
        <header className="bg-zinc-100 py-6">
            <div className="max-w-6xl flex flex-col md:flex-row justify-around items-center gap-5 md:gap-0">
                <img src={Logo} alt="Logotipo Juntos somos +" />

                <div className="relative w-full px-2 md:w-[50%]">
                    <SearchInput />
                    <Search className="absolute transform -translate-y-1/2 top-1/2 left-5 size-4" />
                </div>
            </div>
        </header>
    );
};
