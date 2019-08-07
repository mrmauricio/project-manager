export function addProject(project) {
    return {
        type: '@projects/ADD',
        project,
    };
}
