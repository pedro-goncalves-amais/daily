export default defineEventHandler(async event => {
    const squadId = event.context.params.squadId;

    console.log("squadId: ", squadId);

    const members = [
        {
            squadId: 0,
            members: [
                {
                    name: "Anderson Alfarth",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/61714e83892c420072113a16",
                },
                {
                    name: "Bruno Rovela",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/5c06d6f510c30e4ac8c8d0fe",
                },
                {
                    name: "Eder Soares",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/628f7ddc1a437e00704370f1",
                },
                {
                    name: "Nicolas Gross",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/620a81c9eb29780068909ded",
                },
                {
                    name: "Pedro Gonçalves",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/614224581238e8007133d470",
                },
                {
                    name: "Thiago Tinoco",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/5fe0dad844065f013f160051",
                },
                {
                    name: "Vitor Duggen",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/61eafe2438041c0068809493",
                },
            ],
        },

        {
            squadId: 1,
            members: [
                {
                    name: "André Silva",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/617c5720860f78006b65335f",
                },
                {
                    name: "Eliseu Bueno",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/61efdbe057b25b00687a4b02",
                },
                {
                    name: "Flavio da Silva",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/612d18d51dbcd900691d63a1",
                },
                {
                    name: "João Fagundes",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/60747577d0b83f00680f2930",
                },
                {
                    name: "João Monteiro",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/60880959c210c1006ca51a10",
                },
                {
                    name: "Matheus Felipe",
                    image: "https://plataformaamais.atlassian.net/wiki/aa-avatar/617fceeca989710070b88048",
                },
            ],
        },
    ];

    return {
        data: members[squadId],
    };
});
