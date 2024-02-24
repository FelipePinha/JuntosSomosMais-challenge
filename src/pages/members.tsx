import { useState } from 'react';

import MembersList from '../../members.json';

import { Header } from '../components/header';
import { Breadcrumb } from '../components/ui/breadcrumb';
import { MembersHeader } from '../components/members-header';
import { MemberCard } from '../components/member-card';
import { StateFilter } from '../components/state-filter';
import { Pagination } from '../components/pagination';

import LogoWhite from '../assets/logo-white.png';
import Facebook from '../assets/Facebook.png';
import Whatsapp from '../assets/Whatsapp.png';
import LinkedIn from '../assets/LinkedIn.png';
import { useSearchParams } from 'react-router-dom';

export const Members = () => {
    const members = MembersList.results;

    const [searchParams] = useSearchParams({
        name: '',
    });
    const [stateFilter, setStateFilter] = useState<string[]>([]);

    const name = searchParams.get('name');

    const [currPage, setCurrPage] = useState(1);
    const membersPerPage = 30;

    // get current members
    const indexOfLastMember = currPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    // filter current members
    const searchByState = currentMembers.filter(member =>
        stateFilter.length > 0 ? stateFilter.includes(member.location.state) : currentMembers
    );

    const searchResults = searchByState.filter(member => {
        const firstName = member.name.first + member.name.first.slice(1);
        const lastName = member.name.last + member.name.last.slice(1);
        const fullName = firstName.concat(' ' + lastName);

        return fullName.includes(name!.toLowerCase());
    });

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
                        <StateFilter setStateFilter={setStateFilter} members={members} />

                        <section className="md:col-span-3 space-y-6">
                            <MembersHeader />
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-row-[250px]">
                                {searchResults.slice(0, 27).map((member, id) => (
                                    <MemberCard key={id} member={member} />
                                ))}
                            </div>

                            <Pagination
                                membersPerPage={membersPerPage}
                                totalMembers={members.length}
                                setCurrPage={setCurrPage}
                                currPage={currPage}
                            />
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
