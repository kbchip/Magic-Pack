// priority: 10

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    event.shaped(
        "minecraft:bundle",
        [
            "A",
            "B"
        ],
        {
            A: "#forge:string",
            B: "#forge:leather"
        }
    )
})