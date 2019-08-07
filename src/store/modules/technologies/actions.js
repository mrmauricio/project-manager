export function addTechnology(technology) {
    return {
        type: '@technologies/ADD',
        technology,
    };
}
