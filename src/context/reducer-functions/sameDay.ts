export const sameDay = (a: { getDate: () => any; getMonth: () => any; getFullYear: () => any; }, b: { getDate: () => any; getMonth: () => any; getFullYear: () => any; }) => {
    return a.getDate()     === b.getDate()
        && a.getMonth()    === b.getMonth()
        && a.getFullYear() === b.getFullYear();
}