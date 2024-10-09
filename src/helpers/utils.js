export const deepEqual = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

export const cleanUpEntries = (entries) => Object.fromEntries(Object.entries(entries).filter(([_, v]) => v.length))
