interface Contact {
    id: number;
    name: string;
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date(2022, 12, 31),
    id: 1,
    name: "Test",
}
