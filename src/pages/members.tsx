import { useState } from 'react';

import MembersList from '../../members.json';

import { Header } from '../components/Header';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { MembersHeader } from '../components/members-header';
import { MemberCard } from '../components/member-card';
import { StateFilter } from '../components/state-filter';
import { Pagination } from '../components/Pagination';

import LogoWhite from '../assets/logo-white.png';
import Facebook from '../assets/Facebook.png';
import Whatsapp from '../assets/Whatsapp.png';
import LinkedIn from '../assets/LinkedIn.png';
import { useSearchParams } from 'react-router-dom';
import { getMembersInAlphabeticalOrder, getSearchResults, stateSearch } from '../utils/filter';

export const Members = () => {
    const members = MembersList.results;

    const [stateFilter, setStateFilter] = useState<string[]>([]);
    const [isFirstNameSelected, setIsFirstNameSelected] = useState(true);
    const [currPage, setCurrPage] = useState(1);

    const [searchParams] = useSearchParams({ name: '' });
    const urlSearchName = searchParams.get('name');

    // get current members
    const membersPerPage = 30;
    const indexOfLastMember = currPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    // filter current members
    const searchByState = stateSearch(currentMembers, stateFilter);

    const membersInAlphabeticalOrder = getMembersInAlphabeticalOrder(
        searchByState,
        isFirstNameSelected
    );

    const searchResults = getSearchResults(membersInAlphabeticalOrder, urlSearchName!);

    const searchResultsNumber = searchResults.length;
    const membersTotalResults = members.length;

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
                            <MembersHeader
                                searchResultsNumber={searchResultsNumber}
                                membersTotalResults={membersTotalResults}
                                setIsFirstNameSelected={setIsFirstNameSelected}
                                isFirstNameSelected={isFirstNameSelected}
                            />

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-row-[250px]">
                                {searchResults.length > 0 ? (
                                    searchResults
                                        .slice(0, 27)
                                        .map((member, id) => (
                                            <MemberCard key={id} member={member} />
                                        ))
                                ) : (
                                    <p>Nenhum resultado encontrado.</p>
                                )}
                            </div>

                            {searchResults.length > 0 && (
                                <Pagination
                                    membersPerPage={membersPerPage}
                                    totalMembers={members.length}
                                    setCurrPage={setCurrPage}
                                    currPage={currPage}
                                />
                            )}
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
