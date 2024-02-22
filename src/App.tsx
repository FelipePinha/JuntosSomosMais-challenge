import { Header } from './components/header';
import { Breadcrumb } from './components/ui/breadcrumb';
import { MembersHeader } from './components/members-header';
import Members from '../members.json';
import { MemberCard } from './components/member-card';

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
                            <div className="grid grid-cols-3 gap-4 auto-row-[250px]">
                                {members.slice(0, 27).map((member, id) => (
                                    <MemberCard key={id} member={member} />
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};
