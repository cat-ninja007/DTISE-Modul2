export function initialName(fullName: string):string{
    const splittedName:string [] = fullName.split(' ');

    const initials = splittedName.map(getInitial => getInitial.charAt(0).toUpperCase()).join('')

    return initials
}

const result = initialName("John Michael Doe");
console.log(`Your initial name is ${result}`)