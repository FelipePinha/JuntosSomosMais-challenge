import { Header } from './components/Header';
import { Breadcrumb } from './components/ui/breadcrumb';

export const App = () => {
    return (
        <>
            <Header />
            <main className="mt-6 max-w-6xl mx-auto">
                <nav>
                    <Breadcrumb />
                </nav>
            </main>
        </>
    );
};
