// priority: 10

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    // Backport 1.21 bundle recipe
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

    // Remove Farmer's Delight rope
    event.remove({ output: 'farmersdelight:rope' })

    // Allow Safety Nets to be crafted with Supplementaries' rope
    event.replaceInput(
        { input: 'farmersdelight:rope' },
        'farmersdelight:rope',
        'supplementaries:rope'
    )

    // Remove blaze powder from Fire Charge recipe
    event.remove({ output: 'minecraft:fire_charge' })
    event.shapeless(
        Item.of('minecraft:fire_charge', 2),
        [
            'minecraft:gunpowder',
            '#forge:coal'
        ]
    )
})