declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedPreCastConditionsCallback" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellModificationBuilder$ModifiedPreCastConditionsCallback extends $Record {

constructor(getLevel: $Level$Type, getSpellLevel: integer, getEntity: $LivingEntity$Type, getPlayerMagicData: $MagicData$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$ModifiedPreCastConditionsCallback$Type = ($SpellModificationBuilder$ModifiedPreCastConditionsCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder$ModifiedPreCastConditionsCallback_ = $SpellModificationBuilder$ModifiedPreCastConditionsCallback$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$DamageTypeHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$DamageTypeHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$DamageTypeHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$DamageTypeHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$DamageTypeHolder$Type)>): $ISSKJSUtils$DamageTypeHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$DamageTypeHolder$Type = ($ISSKJSUtils$DamageTypeHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$DamageTypeHolder_ = $ISSKJSUtils$DamageTypeHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastClientContext" {
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$CastClientContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastData"(): $ICastData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castData"(): $ICastData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastClientContext$Type = ($CustomSpell$CastClientContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$CastClientContext_ = $CustomSpell$CastClientContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$SpellHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$SpellHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$SpellHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$SpellHolder$Type)>): $ISSKJSUtils$SpellHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$SpellHolder$Type = ($ISSKJSUtils$SpellHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$SpellHolder_ = $ISSKJSUtils$SpellHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastConditionsContext" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$PreCastConditionsContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpell"(): $AbstractSpell
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spell"(): $AbstractSpell
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastConditionsContext$Type = ($CustomSpell$PreCastConditionsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastConditionsContext_ = $CustomSpell$PreCastConditionsContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/item/$StaffItemBuilderJS" {
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffItemBuilderJS extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

/**
 *         Adds an additional attribute to the item. It takes an attribute ID (or just an attribute object), the modifier name, the modifier amount, and the modifier operation.
 *         The modifier operation can be either `ADDITION`, `MULTIPLY_TOTAL` or `MULTIPLY_BASE`.
 */
public "addAdditionalAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $StaffItemBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffItemBuilderJS$Type = ($StaffItemBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffItemBuilderJS_ = $StaffItemBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$AttributeHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$AttributeHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$AttributeHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$AttributeHolder$Type)>): $ISSKJSUtils$AttributeHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$AttributeHolder$Type = ($ISSKJSUtils$AttributeHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$AttributeHolder_ = $ISSKJSUtils$AttributeHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ISSKJSUtils$ResourceHolder<T extends $ISSKJSUtils$ResourceHolder<(T)>> {

}

export namespace $ISSKJSUtils$ResourceHolder {
function of<T>(o: any, arg1: $Function$Type<($ResourceLocation$Type), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$ResourceHolder$Type<T> = ($ISSKJSUtils$ResourceHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$ResourceHolder_<T> = $ISSKJSUtils$ResourceHolder$Type<(T)>;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$AbstractSpellWrapper$SpellStatus" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractSpellWrapper$SpellStatus extends $Enum<($AbstractSpellWrapper$SpellStatus)> {
static readonly "REGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "UNREGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "ENABLED": $AbstractSpellWrapper$SpellStatus
static readonly "DISABLED": $AbstractSpellWrapper$SpellStatus


public static "values"(): ($AbstractSpellWrapper$SpellStatus)[]
public static "valueOf"(name: string): $AbstractSpellWrapper$SpellStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$SpellStatus$Type = (("registered") | ("disabled") | ("unregistered") | ("enabled")) | ($AbstractSpellWrapper$SpellStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellWrapper$SpellStatus_ = $AbstractSpellWrapper$SpellStatus$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$AbstractSpellWrapper" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder"
import {$AbstractSpellWrapper$SpellStatus, $AbstractSpellWrapper$SpellStatus$Type} from "packages/com/squoshi/irons_spells_js/spell/$AbstractSpellWrapper$SpellStatus"

export interface $AbstractSpellWrapper {

}

export namespace $AbstractSpellWrapper {
function of(spellHolder: $ISSKJSUtils$SpellHolder$Type): $AbstractSpell
function exists(spellHolder: $ISSKJSUtils$SpellHolder$Type): boolean
function isEnabled(spellHolder: $ISSKJSUtils$SpellHolder$Type): boolean
function isSpell(o: any): boolean
function checkStatus(spellHolder: $ISSKJSUtils$SpellHolder$Type): $AbstractSpellWrapper$SpellStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$Type = ($AbstractSpellWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellWrapper_ = $AbstractSpellWrapper$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CustomSpell$Builder, $CustomSpell$Builder$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$Builder"
import {$AnimationHolder, $AnimationHolder$Type} from "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DefaultConfig, $DefaultConfig$Type} from "packages/io/redspace/ironsspellbooks/api/config/$DefaultConfig"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $CustomSpell extends $AbstractSpell {

constructor(b: $CustomSpell$Builder$Type)

public "getSpellResource"(): $ResourceLocation
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "onClientCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, castData: $ICastData$Type): void
public "getUniqueInfo"(spellLevel: integer, caster: $LivingEntity$Type): $List<($MutableComponent)>
public "allowLooting"(): boolean
public "needsLearning"(): boolean
public "canBeCraftedBy"(player: $Player$Type): boolean
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartAnimation"(): $AnimationHolder
public "getCastFinishAnimation"(): $AnimationHolder
public "onClientPreCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, hand: $InteractionHand$Type, playerMagicData: $MagicData$Type): void
public "onCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, castSource: $CastSource$Type, playerMagicData: $MagicData$Type): void
public "getCastType"(): $CastType
public "onServerPreCast"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, playerMagicData: $MagicData$Type): void
public "checkPreCastConditions"(level: $Level$Type, spellLevel: integer, entity: $LivingEntity$Type, playerMagicData: $MagicData$Type): boolean
get "spellResource"(): $ResourceLocation
get "castFinishSound"(): $Optional<($SoundEvent)>
get "castStartSound"(): $Optional<($SoundEvent)>
get "defaultConfig"(): $DefaultConfig
get "castStartAnimation"(): $AnimationHolder
get "castFinishAnimation"(): $AnimationHolder
get "castType"(): $CastType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$Type = ($CustomSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell_ = $CustomSpell$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedServerCastCallback" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellModificationBuilder$ModifiedServerCastCallback extends $Record {

constructor(getLevel: $Level$Type, getSpellLevel: integer, getEntity: $LivingEntity$Type, getCastSource: $CastSource$Type, getPlayerMagicData: $MagicData$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastSource"(): $CastSource
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$ModifiedServerCastCallback$Type = ($SpellModificationBuilder$ModifiedServerCastCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder$ModifiedServerCastCallback_ = $SpellModificationBuilder$ModifiedServerCastCallback$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedClientPreCastCallback" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellModificationBuilder$ModifiedClientPreCastCallback extends $Record {

constructor(getLevel: $Level$Type, getSpellLevel: integer, getEntity: $LivingEntity$Type, getHand: $InteractionHand$Type, getPlayerMagicData: $MagicData$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getHand"(): $InteractionHand
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "hand"(): $InteractionHand
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$ModifiedClientPreCastCallback$Type = ($SpellModificationBuilder$ModifiedClientPreCastCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder$ModifiedClientPreCastCallback_ = $SpellModificationBuilder$ModifiedClientPreCastCallback$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$Builder" {
import {$CustomSpell$PreCastClientContext, $CustomSpell$PreCastClientContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastClientContext"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$CustomSpell, $CustomSpell$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CustomSpell$PreCastConditionsContext, $CustomSpell$PreCastConditionsContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastConditionsContext"
import {$SpellRarity, $SpellRarity$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellRarity"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$SoundEventHolder, $ISSKJSUtils$SoundEventHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder"
import {$CastType, $CastType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastType"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$CustomSpell$CastClientContext, $CustomSpell$CastClientContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastClientContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ISSKJSUtils$SchoolHolder, $ISSKJSUtils$SchoolHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SchoolHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomSpell$CastContext, $CustomSpell$CastContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastContext"
import {$CustomSpell$PreCastContext, $CustomSpell$PreCastContext$Type} from "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastContext"

export class $CustomSpell$Builder extends $BuilderBase<($CustomSpell)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $CustomSpell
/**
 *     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
 */
public "onClientCast"(consumer: $Consumer$Type<($CustomSpell$CastClientContext$Type)>): $CustomSpell$Builder
/**
 *     Sets whether or not the spell needs to be learned before it can be casted.
 */
public "needsLearning"(needs: boolean): $CustomSpell$Builder
/**
 *     Sets the predicate for whether or not the spell can be crafted by a player.
 */
public "canBeCraftedBy"(predicate: $Predicate$Type<($Player$Type)>): $CustomSpell$Builder
public "getRegistryType"(): $RegistryInfo<($AbstractSpell)>
/**
 *     Sets the cast start animation for the spell.
 */
public "setCastStartAnimation"(path: string, playOnce: boolean, animatesLegs: boolean): $CustomSpell$Builder
/**
 *     Sets the cast finish animation for the spell.
 */
public "setCastFinishAnimation"(path: string, playOnce: boolean, animatesLegs: boolean): $CustomSpell$Builder
/**
 *     Sets the spell power per level.
 */
public "setSpellPowerPerLevel"(power: integer): $CustomSpell$Builder
/**
 *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
 */
public "setManaCostPerLevel"(cost: integer): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast. This is what the spell does when it is casted.
 */
public "onCast"(consumer: $Consumer$Type<($CustomSpell$CastContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the max level of the spell. Goes up to `10` from `1`.
 */
public "setMaxLevel"(level: integer): $CustomSpell$Builder
/**
 *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
 */
public "setMinRarity"(rarity: $SpellRarity$Type): $CustomSpell$Builder
/**
 *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
 */
public "setCooldownSeconds"(seconds: integer): $CustomSpell$Builder
/**
 *     Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
 * 
 *     Example: ```js
 *     .checkPreCastConditions(ctx => {
 *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
 *     })
 *     ```
 */
public "checkPreCastConditions"(predicate: $Predicate$Type<($CustomSpell$PreCastConditionsContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
 */
public "onPreCast"(consumer: $Consumer$Type<($CustomSpell$PreCastContext$Type)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
 */
public "onPreClientCast"(consumer: $Consumer$Type<($CustomSpell$PreCastClientContext$Type)>): $CustomSpell$Builder
/**
 *     Sets whether or not the spell can be looted from a loot table.
 */
public "setAllowLooting"(allow: boolean): $CustomSpell$Builder
/**
 *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
 */
public "setCastTime"(time: integer): $CustomSpell$Builder
/**
 *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
 */
public "setCastType"(type: $CastType$Type): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play when it starts casting.
 */
public "setStartSound"(soundEvent: $ISSKJSUtils$SoundEventHolder$Type): $CustomSpell$Builder
/**
 *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
 */
public "setBaseSpellPower"(power: integer): $CustomSpell$Builder
/**
 *     Sets the base mana cost. The mana cost per level adds on to this.
 */
public "setBaseManaCost"(cost: integer): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play after it is done casting.
 */
public "setFinishSound"(soundEvent: $ISSKJSUtils$SoundEventHolder$Type): $CustomSpell$Builder
/**
 *     Sets the school of the spell. The different schools each are a resource location.
 * 
 *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
 *     Another example: `setSchool('irons_spellbooks:blood')`
 */
public "setSchool"(schoolHolder: $ISSKJSUtils$SchoolHolder$Type): $CustomSpell$Builder
/**
 *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
 */
public "setUniqueInfo"(info: $BiFunction$Type<(integer), ($LivingEntity$Type), ($List$Type<($MutableComponent$Type)>)>): $CustomSpell$Builder
get "registryType"(): $RegistryInfo<($AbstractSpell)>
set "spellPowerPerLevel"(value: integer)
set "manaCostPerLevel"(value: integer)
set "maxLevel"(value: integer)
set "minRarity"(value: $SpellRarity$Type)
set "cooldownSeconds"(value: integer)
set "allowLooting"(value: boolean)
set "castTime"(value: integer)
set "castType"(value: $CastType$Type)
set "startSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "baseSpellPower"(value: integer)
set "baseManaCost"(value: integer)
set "finishSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "school"(value: $ISSKJSUtils$SchoolHolder$Type)
set "uniqueInfo"(value: $BiFunction$Type<(integer), ($LivingEntity$Type), ($List$Type<($MutableComponent$Type)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$Builder$Type = ($CustomSpell$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$Builder_ = $CustomSpell$Builder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ClientInitISSKJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $ClientInitISSKJS {

/**
 *     When added, holding the item will show your mana bar.
 */
 "addManaBarShowingItem"(item: $Item$Type): void
}

export namespace $ClientInitISSKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientInitISSKJS$Type = ($ClientInitISSKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientInitISSKJS_ = $ClientInitISSKJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedClientCastCallback" {
import {$ICastData, $ICastData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$ICastData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellModificationBuilder$ModifiedClientCastCallback extends $Record {

constructor(getLevel: $Level$Type, getSpellLevel: integer, getEntity: $LivingEntity$Type, getCastData: $ICastData$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastData"(): $ICastData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castData"(): $ICastData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$ModifiedClientCastCallback$Type = ($SpellModificationBuilder$ModifiedClientCastCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder$ModifiedClientCastCallback_ = $SpellModificationBuilder$ModifiedClientCastCallback$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastClientContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$PreCastClientContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getHand"(): $InteractionHand
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "hand"(): $InteractionHand
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastClientContext$Type = ($CustomSpell$PreCastClientContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastClientContext_ = $CustomSpell$PreCastClientContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$SoundEventHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$SoundEventHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$SoundEventHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$SoundEventHolder$Type)>): $ISSKJSUtils$SoundEventHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$SoundEventHolder$Type = ($ISSKJSUtils$SoundEventHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$SoundEventHolder_ = $ISSKJSUtils$SoundEventHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/item/$MagicSwordItemBuilderJS" {
import {$HandheldItemBuilder, $HandheldItemBuilder$Type} from "packages/dev/latvian/mods/kubejs/item/custom/$HandheldItemBuilder"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$MagicSwordItem, $MagicSwordItem$Type} from "packages/io/redspace/ironsspellbooks/api/item/weapons/$MagicSwordItem"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MagicSwordItemBuilderJS extends $HandheldItemBuilder {
static readonly "TOOL_TIERS": $Map<(string), ($Tier)>
static readonly "ARMOR_TIERS": $Map<(string), ($ArmorMaterial)>
 "texture": string
 "parentModel": string
 "textureJson": $JsonObject
 "modelJson": $JsonObject
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $MagicSwordItem
/**
 *         Adds an additional attribute to the item. It takes an attribute ID (or just an attribute object), the modifier name, the modifier amount, and the modifier operation.
 *         The modifier operation can be either `ADDITION`, `MULTIPLY_TOTAL` or `MULTIPLY_BASE`.
 */
public "addAdditionalAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $MagicSwordItemBuilderJS
/**
 *         Adds a spell to the default spell list of the item. It takes a spell ID (or just a spell object), and the spell level as an integer.
 */
public "addDefaultSpell"(spell: $ISSKJSUtils$SpellHolder$Type, spellLevel: integer): $MagicSwordItemBuilderJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItemBuilderJS$Type = ($MagicSwordItemBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicSwordItemBuilderJS_ = $MagicSwordItemBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$EntitySpellCastEventJS" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntitySpellCastEventJS extends $EntityEventJS {

constructor(entity: $LivingEntity$Type, spell: $AbstractSpell$Type, spellLevel: integer, playerMagicData: $MagicData$Type)

public "getLevel"(): $Level
public "getEntity"(): $Entity
public "getSpell"(): $AbstractSpell
public "getMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "level"(): $Level
get "entity"(): $Entity
get "spell"(): $AbstractSpell
get "magicData"(): $MagicData
get "spellLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpellCastEventJS$Type = ($EntitySpellCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySpellCastEventJS_ = $EntitySpellCastEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedServerPreCastCallback" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellModificationBuilder$ModifiedServerPreCastCallback extends $Record {

constructor(getLevel: $Level$Type, getSpellLevel: integer, getEntity: $LivingEntity$Type, getPlayerMagicData: $MagicData$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$ModifiedServerPreCastCallback$Type = ($SpellModificationBuilder$ModifiedServerPreCastCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder$ModifiedServerPreCastCallback_ = $SpellModificationBuilder$ModifiedServerPreCastCallback$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellPreCastEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$SpellPreCastEvent, $SpellPreCastEvent$Type} from "packages/io/redspace/ironsspellbooks/api/events/$SpellPreCastEvent"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellPreCastEventJS extends $PlayerEventJS {

constructor(event: $SpellPreCastEvent$Type)

/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): string
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
get "cancelable"(): boolean
get "spellId"(): string
get "schoolType"(): $SchoolType
get "spellLevel"(): integer
get "castSource"(): $CastSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEventJS$Type = ($SpellPreCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPreCastEventJS_ = $SpellPreCastEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellModificationEventJS" {
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpellModificationBuilder, $SpellModificationBuilder$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpellModificationEventJS extends $EventJS {
static readonly "eventMap": $Map<($ResourceLocation), ($SpellModificationEventJS)>

constructor(spellResource: $ResourceLocation$Type)

public static "getOrCreate"(spellResource: $ResourceLocation$Type): $SpellModificationEventJS
public "modify"(spell: $AbstractSpell$Type, modifyBuilder: $Consumer$Type<($SpellModificationBuilder$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationEventJS$Type = ($SpellModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationEventJS_ = $SpellModificationEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder" {
import {$AlchemistCauldronRecipe, $AlchemistCauldronRecipe$Type} from "packages/io/redspace/ironsspellbooks/block/alchemist_cauldron/$AlchemistCauldronRecipe"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Potion, $Potion$Type} from "packages/net/minecraft/world/item/alchemy/$Potion"

/**
 *     Creates a new Alchemist Cauldron recipe. Used in StartupEvents.postInit
 */
export class $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder {

constructor()

public "register"(): $AlchemistCauldronRecipe
public static "create"(): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setResult"(result: $ItemStack$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setInput"(input: $ItemStack$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setPotionInput"(potionInput: $Potion$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setResultLimit"(i: integer): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setBaseRequirement"(i: integer): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
public "setIngredient"(ingredient: $ItemStack$Type): $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder
set "result"(value: $ItemStack$Type)
set "input"(value: $ItemStack$Type)
set "potionInput"(value: $Potion$Type)
set "resultLimit"(value: integer)
set "baseRequirement"(value: integer)
set "ingredient"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder$Type = ($AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder_ = $AlchemistCauldronKubeJSRecipes$AlchemistCauldronRecipeBuilder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISpellModify" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpellModificationBuilder, $SpellModificationBuilder$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder"

export interface $ISpellModify {

 "irons_spells_js$setBuilder"(resourceLocation: $ResourceLocation$Type): void
 "irons_spells_js$getBuilder"(): $SpellModificationBuilder
}

export namespace $ISpellModify {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpellModify$Type = ($ISpellModify);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpellModify_ = $ISpellModify$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedServerCastCompleteCallback" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SpellModificationBuilder$ModifiedServerCastCompleteCallback extends $Record {

constructor(getLevel: $Level$Type, getSpellLevel: integer, getEntity: $LivingEntity$Type, getPlayerMagicData: $MagicData$Type, getCancelled: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
public "getCancelled"(): boolean
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
get "cancelled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$ModifiedServerCastCompleteCallback$Type = ($SpellModificationBuilder$ModifiedServerCastCompleteCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder$ModifiedServerCastCompleteCallback_ = $SpellModificationBuilder$ModifiedServerCastCompleteCallback$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SchoolHolder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$ResourceHolder"

export class $ISSKJSUtils$SchoolHolder extends $Record implements $ISSKJSUtils$ResourceHolder<($ISSKJSUtils$SchoolHolder)> {

constructor(getLocation: $ResourceLocation$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(o: any): $ISSKJSUtils$SchoolHolder
public "getLocation"(): $ResourceLocation
public static "of"<T extends $ISSKJSUtils$ResourceHolder<(T)>>(o: any, arg1: $Function$Type<($ResourceLocation$Type), ($ISSKJSUtils$SchoolHolder$Type)>): $ISSKJSUtils$SchoolHolder
get "location"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISSKJSUtils$SchoolHolder$Type = ($ISSKJSUtils$SchoolHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISSKJSUtils$SchoolHolder_ = $ISSKJSUtils$SchoolHolder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/util/$ServerPlayerISSKJS" {
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"

export interface $ServerPlayerISSKJS {

/**
 *     Returns the player's magic data. Useful for changing the player's mana, or checking if the player is casting a spell.
 *     Changing the player's mana directly will not sync with the client. Use `syncMana()` on the player to sync the mana with the client.
 */
 "getMagicData"(): $MagicData
/**
 *     Synchronizes the player's mana with the client. Call this whenever you change a player's mana in a non-traditional way.
 */
 "syncMana"(): void
}

export namespace $ServerPlayerISSKJS {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerISSKJS$Type = ($ServerPlayerISSKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerISSKJS_ = $ServerPlayerISSKJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellSelectionEventJS" {
import {$SpellSelectionManager$SpellSelectionEvent, $SpellSelectionManager$SpellSelectionEvent$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager$SpellSelectionEvent"
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$SpellSelectionManager, $SpellSelectionManager$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$SpellSelectionManager"
import {$SpellData, $SpellData$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SpellData"

export class $SpellSelectionEventJS extends $PlayerEventJS {

constructor(event: $SpellSelectionManager$SpellSelectionEvent$Type)

public "getManager"(): $SpellSelectionManager
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(spellData: $SpellData$Type, slotId: string, localSlotIndex: integer): void
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(spellData: $SpellData$Type, slotId: string, localSlotIndex: integer, globalIndex: integer): void
get "manager"(): $SpellSelectionManager
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionEventJS$Type = ($SpellSelectionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelectionEventJS_ = $SpellSelectionEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$EntitySpellPreCastEventJS" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityEventJS, $EntityEventJS$Type} from "packages/dev/latvian/mods/kubejs/entity/$EntityEventJS"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntitySpellPreCastEventJS extends $EntityEventJS {

constructor(entity: $LivingEntity$Type, spell: $AbstractSpell$Type, spellLevel: integer, playerMagicData: $MagicData$Type)

public "getLevel"(): $Level
public "getEntity"(): $Entity
public "getSpell"(): $AbstractSpell
public "getMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "level"(): $Level
get "entity"(): $Entity
get "spell"(): $AbstractSpell
get "magicData"(): $MagicData
get "spellLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpellPreCastEventJS$Type = ($EntitySpellPreCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySpellPreCastEventJS_ = $EntitySpellPreCastEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/entity/attribute/$SpellAttributeBuilderJS" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellAttributeBuilderJS extends $BuilderBase<($Attribute)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $Attribute
public "getRegistryType"(): $RegistryInfo<($Attribute)>
/**
 *         Sets the default value for the attribute.
 */
public "setDefaultValue"(defaultValue: double): $SpellAttributeBuilderJS
/**
 *         Sets the maximum value for the attribute.
 */
public "setMaximumValue"(maximumValue: double): $SpellAttributeBuilderJS
/**
 *         Sets the minimum value for the attribute.
 */
public "setMinimumValue"(minimumValue: double): $SpellAttributeBuilderJS
get "registryType"(): $RegistryInfo<($Attribute)>
set "defaultValue"(value: double)
set "maximumValue"(value: double)
set "minimumValue"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellAttributeBuilderJS$Type = ($SpellAttributeBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellAttributeBuilderJS_ = $SpellAttributeBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$PreCastContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $CustomSpell$PreCastContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastContext$Type = ($CustomSpell$PreCastContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastContext_ = $CustomSpell$PreCastContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$ChangeManaEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$ChangeManaEvent, $ChangeManaEvent$Type} from "packages/io/redspace/ironsspellbooks/api/events/$ChangeManaEvent"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"

export class $ChangeManaEventJS extends $PlayerEventJS {

constructor(event: $ChangeManaEvent$Type)

/**
 *     Returns the player's current MagicData.
 */
public "getMagicData"(): $MagicData
/**
 *     Returns the float mana value that the value changed to after it was changed.
 */
public "getNewMana"(): float
/**
 *     Changes the value that the mana will change to during the event.
 */
public "setNewMana"(newMana: float): void
/**
 *     Returns the float mana value that the value was before it was changed.
 */
public "getOldMana"(): float
get "magicData"(): $MagicData
get "newMana"(): float
set "newMana"(value: float)
get "oldMana"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEventJS$Type = ($ChangeManaEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeManaEventJS_ = $ChangeManaEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/school/$SchoolTypeJSBuilder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$SoundEventHolder, $ISSKJSUtils$SoundEventHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder"
import {$ISSKJSUtils$DamageTypeHolder, $ISSKJSUtils$DamageTypeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$DamageTypeHolder"

export class $SchoolTypeJSBuilder extends $BuilderBase<($SchoolType)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

/**
 *         Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`.
 */
public "setName"(name: $Component$Type): $SchoolTypeJSBuilder
public "createObject"(): $SchoolType
public "getRegistryType"(): $RegistryInfo<($SchoolType)>
/**
 *         Sets the ID of the item tag used for the focus item.
 *         Focus items need the `"irons_spellbooks:school_focus"` tag, as well as the tag specified here.
 */
public "setFocus"(focus: $ResourceLocation$Type): $SchoolTypeJSBuilder
/**
 *         Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent.
 */
public "setDefaultCastSound"(defaultCastSound: $ISSKJSUtils$SoundEventHolder$Type): $SchoolTypeJSBuilder
/**
 *         Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
 */
public "setResistanceAttribute"(resistanceAttribute: $ISSKJSUtils$AttributeHolder$Type): $SchoolTypeJSBuilder
/**
 *         Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
 *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
 */
public "setDamageType"(damageType: $ISSKJSUtils$DamageTypeHolder$Type): $SchoolTypeJSBuilder
/**
 *         Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
 */
public "setPowerAttribute"(powerAttribute: $ISSKJSUtils$AttributeHolder$Type): $SchoolTypeJSBuilder
set "name"(value: $Component$Type)
get "registryType"(): $RegistryInfo<($SchoolType)>
set "focus"(value: $ResourceLocation$Type)
set "defaultCastSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "resistanceAttribute"(value: $ISSKJSUtils$AttributeHolder$Type)
set "damageType"(value: $ISSKJSUtils$DamageTypeHolder$Type)
set "powerAttribute"(value: $ISSKJSUtils$AttributeHolder$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolTypeJSBuilder$Type = ($SchoolTypeJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolTypeJSBuilder_ = $SchoolTypeJSBuilder$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$CustomSpell$CastContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MagicData, $MagicData$Type} from "packages/io/redspace/ironsspellbooks/api/magic/$MagicData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $CustomSpell$CastContext extends $Record {


public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastSource"(): $CastSource
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastContext$Type = ($CustomSpell$CastContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$CastContext_ = $CustomSpell$CastContext$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/events/$SpellOnCastEventJS" {
import {$PlayerEventJS, $PlayerEventJS$Type} from "packages/dev/latvian/mods/kubejs/player/$PlayerEventJS"
import {$SchoolType, $SchoolType$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$SchoolType"
import {$SpellOnCastEvent, $SpellOnCastEvent$Type} from "packages/io/redspace/ironsspellbooks/api/events/$SpellOnCastEvent"
import {$CastSource, $CastSource$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$CastSource"

export class $SpellOnCastEventJS extends $PlayerEventJS {

constructor(event: $SpellOnCastEvent$Type)

/**
 *     Returns the original mana cost.
 */
public "getOriginalManaCost"(): integer
/**
 *     Returns the original spell level of the spell that was cast.
 */
public "getOriginalSpellLevel"(): integer
/**
 *     Returns if the event is cancelable.
 */
public "isCancelable"(): boolean
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): string
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the new mana cost.
 */
public "getManaCost"(): integer
/**
 *     Sets the new spell level of the spell that was cast.
 */
public "setSpellLevel"(spellLevel: integer): void
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Sets the new mana cost.
 */
public "setManaCost"(manaCost: integer): void
get "originalManaCost"(): integer
get "originalSpellLevel"(): integer
get "cancelable"(): boolean
get "spellId"(): string
get "schoolType"(): $SchoolType
get "manaCost"(): integer
set "spellLevel"(value: integer)
get "spellLevel"(): integer
get "castSource"(): $CastSource
set "manaCost"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEventJS$Type = ($SpellOnCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellOnCastEventJS_ = $SpellOnCastEventJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/item/$SpellBookBuilderJS" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SpellBook, $SpellBook$Type} from "packages/io/redspace/ironsspellbooks/item/$SpellBook"
import {$ISSKJSUtils$AttributeHolder, $ISSKJSUtils$AttributeHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$AttributeHolder"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier$Operation"
import {$ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SpellHolder"
import {$RegistryInfo, $RegistryInfo$Type} from "packages/dev/latvian/mods/kubejs/registry/$RegistryInfo"
import {$BuilderBase, $BuilderBase$Type} from "packages/dev/latvian/mods/kubejs/registry/$BuilderBase"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SpellBookBuilderJS extends $BuilderBase<($SpellBook)> {
readonly "id": $ResourceLocation
 "translationKey": string
 "displayName": $Component
 "formattedDisplayName": boolean

constructor(i: $ResourceLocation$Type)

public "createObject"(): $SpellBook
public "getRegistryType"(): $RegistryInfo<($Item)>
/**
 *         Adds a default attribute to the item. Can be used multiple times. It takes an attribute ID (or just an attribute object), the modifier name, the modifier amount, and the modifier operation.
 *         The modifier operation can be either `ADDITION`, `MULTIPLY_TOTAL` or `MULTIPLY_BASE`.
 */
public "addDefaultAttribute"(attribute: $ISSKJSUtils$AttributeHolder$Type, modifierName: string, modifierAmount: double, modifierOperation: $AttributeModifier$Operation$Type): $SpellBookBuilderJS
/**
 *         Adds a default spell to the item. Can be used multiple times. It takes a spell ID (or a spell object) and the spell level.
 */
public "addDefaultSpell"(spell: $ISSKJSUtils$SpellHolder$Type, spellLevel: integer): $SpellBookBuilderJS
/**
 *         Sets the maximum amount of spell slots the spell book can have.
 */
public "setMaxSpellSlots"(maxSpellSlots: integer): $SpellBookBuilderJS
get "registryType"(): $RegistryInfo<($Item)>
set "maxSpellSlots"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellBookBuilderJS$Type = ($SpellBookBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellBookBuilderJS_ = $SpellBookBuilderJS$Type;
}}
declare module "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder" {
import {$AbstractSpell, $AbstractSpell$Type} from "packages/io/redspace/ironsspellbooks/api/spells/$AbstractSpell"
import {$SpellModificationBuilder$ModifiedServerCastCallback, $SpellModificationBuilder$ModifiedServerCastCallback$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedServerCastCallback"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$SpellModificationBuilder$ModifiedClientPreCastCallback, $SpellModificationBuilder$ModifiedClientPreCastCallback$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedClientPreCastCallback"
import {$SpellModificationBuilder$ModifiedServerPreCastCallback, $SpellModificationBuilder$ModifiedServerPreCastCallback$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedServerPreCastCallback"
import {$AnimationHolder, $AnimationHolder$Type} from "packages/io/redspace/ironsspellbooks/api/util/$AnimationHolder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ISSKJSUtils$SoundEventHolder, $ISSKJSUtils$SoundEventHolder$Type} from "packages/com/squoshi/irons_spells_js/util/$ISSKJSUtils$SoundEventHolder"
import {$EventJS, $EventJS$Type} from "packages/dev/latvian/mods/kubejs/event/$EventJS"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SpellModificationBuilder$ModifiedClientCastCallback, $SpellModificationBuilder$ModifiedClientCastCallback$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedClientCastCallback"
import {$SpellModificationBuilder$ModifiedServerCastCompleteCallback, $SpellModificationBuilder$ModifiedServerCastCompleteCallback$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedServerCastCompleteCallback"
import {$SpellModificationBuilder$ModifiedPreCastConditionsCallback, $SpellModificationBuilder$ModifiedPreCastConditionsCallback$Type} from "packages/com/squoshi/irons_spells_js/spell/$SpellModificationBuilder$ModifiedPreCastConditionsCallback"

export class $SpellModificationBuilder extends $EventJS {

constructor(spellResource: $ResourceLocation$Type)

public "setRecastCount"(recastCount: integer): $SpellModificationBuilder
public "setClientPreCastCallback"(cancelOriginal: boolean, setClientPreCastCallback: $Consumer$Type<($SpellModificationBuilder$ModifiedClientPreCastCallback$Type)>): $SpellModificationBuilder
public "setServerPreCastCallback"(cancelOriginal: boolean, setServerPreCastCallback: $Consumer$Type<($SpellModificationBuilder$ModifiedServerPreCastCallback$Type)>): $SpellModificationBuilder
public "setClientCastCallback"(cancelOriginal: boolean, setClientCastCallback: $Consumer$Type<($SpellModificationBuilder$ModifiedClientCastCallback$Type)>): $SpellModificationBuilder
public "setServerCastCallback"(cancelOriginal: boolean, setServerCastCallback: $Consumer$Type<($SpellModificationBuilder$ModifiedServerCastCallback$Type)>): $SpellModificationBuilder
public "setPreCastConditionsCallback"(setPreCastConditionsCallback: $Predicate$Type<($SpellModificationBuilder$ModifiedPreCastConditionsCallback$Type)>): $SpellModificationBuilder
public "setServerCastCompleteCallback"(cancelOriginal: boolean, setServerCastCompleteCallback: $Consumer$Type<($SpellModificationBuilder$ModifiedServerCastCompleteCallback$Type)>): $SpellModificationBuilder
public "setCastStartAnimation"(animationHolder: $AnimationHolder$Type): $SpellModificationBuilder
public "setCastFinishAnimation"(animationHolder: $AnimationHolder$Type): $SpellModificationBuilder
public "getSpell"(): $AbstractSpell
public "setStartSound"(startSound: $ISSKJSUtils$SoundEventHolder$Type): $SpellModificationBuilder
public "setFinishSound"(finishSound: $ISSKJSUtils$SoundEventHolder$Type): $SpellModificationBuilder
public "setCastTimeCallback"(callback: $Function$Type<(integer), (any)>): $SpellModificationBuilder
set "recastCount"(value: integer)
set "preCastConditionsCallback"(value: $Predicate$Type<($SpellModificationBuilder$ModifiedPreCastConditionsCallback$Type)>)
set "castStartAnimation"(value: $AnimationHolder$Type)
set "castFinishAnimation"(value: $AnimationHolder$Type)
get "spell"(): $AbstractSpell
set "startSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "finishSound"(value: $ISSKJSUtils$SoundEventHolder$Type)
set "castTimeCallback"(value: $Function$Type<(integer), (any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellModificationBuilder$Type = ($SpellModificationBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellModificationBuilder_ = $SpellModificationBuilder$Type;
}}
