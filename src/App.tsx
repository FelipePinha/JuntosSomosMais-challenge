import { Header } from './components/header';
import { Breadcrumb } from './components/ui/breadcrumb';
import { MembersHeader } from './components/members-header';
import Members from '../members.json';
import { MemberCard } from './components/member-card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LogoWhite from './assets/logo-white.png';
import Facebook from './assets/Facebook.png';
import Whatsapp from './assets/Whatsapp.png';
import LinkedIn from './assets/LinkedIn.png';

export const App = () => {
    const members = Members.results;

    return (
        <div className="space-y-6">
            <Header />
            <main className="max-w-6xl mx-auto space-y-6 px-5">
                <nav>
                    <Breadcrumb />
                </nav>
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Lista de membros</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <section className="">
                            <h2>Checkbox filter</h2>
                        </section>

                        <section className="md:col-span-3 space-y-6">
                            <MembersHeader />
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-row-[250px]">
                                {members.slice(0, 27).map((member, id) => (
                                    <MemberCard key={id} member={member} />
                                ))}
                            </div>

                            <div className="flex gap-4 items-center justify-center">
                                <button className="bg-slate-400 rounded-full text-slate-300 p-2">
                                    <ChevronLeft />
                                </button>

                                <button className="text-slate-400 font-bold border-b-2 border-slate-400 text-lg">
                                    1
                                </button>
                                <button className="text-slate-400 font-bold border-b-2 border-slate-400 text-lg">
                                    2
                                </button>
                                <button className="text-slate-400 font-bold border-b-2 border-slate-400 text-lg">
                                    3
                                </button>

                                <button className="bg-slate-900 rounded-full text-slate-300 p-2">
                                    <ChevronRight />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="bg-zinc-800 p-8 flex flex-col items-center space-y-6 text-white">
                <img src={LogoWhite} alt="Juntos somos +" />
                <h3 className="font-semibold text-sm md:text-lg">
                    Juntos Somos Mais Fidelização S.A.
                </h3>

                <p className="text-xs md:text-base">Siga-nos nas redes sociais:</p>

                <div className="flex gap-4">
                    <a href="#">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                    <a href="#">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                </div>
            </footer>
        </div>
    );
};
