export default defineEventHandler(async event => {
    const squadId = event.context.params.squadId;

    console.log("zxc squadId: ", squadId);

    const squads = [
        {
            id: 0,
            name: "Supernova ✨",
        },
        {
            id: 1,
            name: "Sentinela",
        },
    ];

    return {
        data: squadId ? squads[squadId] : squads,
    };
});
