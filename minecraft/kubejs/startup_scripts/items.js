// Item registry event listener
StartupEvents.registry('item', event => {
    // Register bundle in item index
    event.create('minecraft:bundle')
    
    // Create Fire Essence item
    event.create('magicpack:fire_essence')
        .texture("magicpack:item/fire_essence")
        .tag('irons_spellbooks:fire_focus')
})