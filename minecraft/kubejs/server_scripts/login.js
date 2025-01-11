PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData;
    if (!pData.firstJoin) {
        pData.firstJoin = true
        // Give player Akashic Tome on first join
        event.player.give(Item.of('akashictome:tome', '{"akashictome:data":{alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},irons_spellbooks:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}},simplyswords:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"simplyswords:runic_grimoire"}}}}'))
    }
})