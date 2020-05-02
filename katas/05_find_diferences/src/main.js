export const differenceInAges = (ages) => {
    let minaAge = Math.min(...age)
    let maxAge = Math.max(...ages)
    let diffAge = maxAge - minAge
    return [minAge, maxAge,diffAge]
}