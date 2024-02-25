import { MemberTypes } from '../types/membersTypes';

export const stateSearch = (currentMembers: MemberTypes[], stateFilter: string[]) => {
    const searchByState = currentMembers.filter(member =>
        stateFilter.length > 0 ? stateFilter.includes(member.location.state) : currentMembers
    );

    return searchByState;
};

export const getMembersInAlphabeticalOrder = (
    searchByState: MemberTypes[],
    isFirstNameSelected: boolean
) => {
    const MembersInAlphabeticalOrder = searchByState.sort((x: MemberTypes, y: MemberTypes) => {
        return isFirstNameSelected
            ? x.name.first.localeCompare(y.name.first)
            : x.name.last.localeCompare(y.name.last);
    });

    return MembersInAlphabeticalOrder;
};

export const getSearchResults = (
    membersInAlphabeticalOrder: MemberTypes[],
    urlSearchName: string
) => {
    const searchResults = membersInAlphabeticalOrder.filter(member => {
        const firstName = member.name.first + member.name.first.slice(1);
        const lastName = member.name.last + member.name.last.slice(1);
        const fullName = firstName.concat(' ' + lastName);

        return fullName.includes(urlSearchName!.toLowerCase());
    });

    return searchResults;
};
