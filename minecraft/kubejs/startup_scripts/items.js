// Item registry event listener
StartupEvents.registry('item', event => {
    // Register bundle in item index
    event.create('minecraft:bundle')
})