import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
    membersPerPage: number;
    totalMembers: number;
    currPage: number;
    setCurrPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
    membersPerPage,
    totalMembers,
    setCurrPage,
    currPage,
}: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        const newPage = currPage + 1;
        setCurrPage(newPage);
    };

    const prevPage = () => {
        const newPage = currPage - 1;
        setCurrPage(newPage);
    };

    return (
        <div className="flex gap-4 items-center justify-center">
            <button
                onClick={prevPage}
                disabled={currPage === 1}
                className={`${
                    currPage === 1 ? 'md:bg-gray-400 text-gray-300' : 'md:bg-gray-800'
                } md:rounded-full text-slate-900 md:text-white p-2`}
            >
                <ChevronLeft />
            </button>

            {pageNumbers.map(page => (
                <button
                    key={page}
                    onClick={() => setCurrPage(page)}
                    className={`${
                        currPage === page ? 'border-b-2 border-gray-400' : ''
                    } text-gray-400 font-bold text-lg`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={nextPage}
                disabled={currPage === pageNumbers.length}
                className={`${
                    currPage === pageNumbers.length
                        ? 'md:bg-gray-400 text-gray-300'
                        : 'md:bg-gray-800'
                } md:rounded-full text-slate-900 md:text-white p-2`}
            >
                <ChevronRight />
            </button>
        </div>
    );
};
