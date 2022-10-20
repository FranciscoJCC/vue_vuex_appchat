const store = {
    profile: {
        username: '',
    },
    contacts: [
        {
            id: 1,
            username: "Francisco Cervantes",
        },
        {
            id: 2,
            username: "Luis Dieguez",
        },
        {
            id: 3,
            username: "Israel Gildo",
        },
        {
            id: 4,
            username: "Emmanuel Barrosa",
        },
    ],
    messages: [
        {
            id: 1,
            msg: "Hola tú",
            author: 1,
        },
        {
            id: 2,
            msg: "Hola tambien",
            author: 2,
        },
        {
            id: 3,
            msg: "Hola todos",
            author: 3,
        },
        {
            id: 4,
            msg: "Hola tú",
            author: 1,
        },
        {
            id: 5,
            msg: "Hola tambien",
            author: 2,
        },
        {
            id: 6,
            msg: "Hola todos",
            author: 4,
        },
    ],
    channels: [
        {
            id: 1,
            name: "Canal 1",
            messages: [1, 2, 3],
        },

        {
            id: 2,
            name: "Canal 2",
            messages: [4, 5, 6],
        },
    ],
}