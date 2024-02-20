import { ChevronRight } from 'lucide-react';

export const Breadcrumb = () => {
    return (
        <ol className='"inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"'>
            <li className="inline-flex items-center gap-2">
                <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    Home
                </a>
                <ChevronRight className="size-4" />
            </li>
            <li className="inline-flex items-center gap-2">
                <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    Usuários
                </a>
                <ChevronRight className="size-4" />
            </li>
            <li className="inline-flex items-center">
                <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    Detalhes
                </a>
            </li>
        </ol>
    );
};
