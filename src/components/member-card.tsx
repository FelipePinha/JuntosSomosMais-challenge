import { MemberTypes } from '../types/membersTypes';

interface MemberCardProps {
    member: MemberTypes;
}

export const MemberCard = ({ member }: MemberCardProps) => {
    const firstName = member.name.first.charAt(0).toUpperCase() + member.name.first.slice(1);
    const lastName = member.name.last.charAt(0).toUpperCase() + member.name.last.slice(1);
    const fullName = firstName.concat(' ' + lastName);

    return (
        <article className="rounded-md flex flex-col items-center py-10 px-4 border border-slate-200 space-y-4">
            <img className="rounded-full" src={member.picture.medium} alt={fullName} />

            <h2 className="font-bold text-lg">{fullName}</h2>

            <div className="flex flex-col justify-center items-center">
                <p className="text-sm">{member.location.city}</p>
                <div className="text-xs flex gap-1">
                    <p>{member.location.state} -</p>
                    <p>CEP: {member.location.postcode}</p>
                </div>
            </div>
        </article>
    );
};
