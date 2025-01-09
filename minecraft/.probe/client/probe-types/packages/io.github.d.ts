declare module "packages/io/github/mortuusars/chalk/core/$SymbolOrientation" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SymbolOrientation extends $Enum<($SymbolOrientation)> implements $StringRepresentable {
static readonly "CENTER": $SymbolOrientation
static readonly "NORTH": $SymbolOrientation
static readonly "NORTHEAST": $SymbolOrientation
static readonly "EAST": $SymbolOrientation
static readonly "SOUTHEAST": $SymbolOrientation
static readonly "SOUTH": $SymbolOrientation
static readonly "SOUTHWEST": $SymbolOrientation
static readonly "WEST": $SymbolOrientation
static readonly "NORTHWEST": $SymbolOrientation


public static "values"(): ($SymbolOrientation)[]
public static "valueOf"(arg0: string): $SymbolOrientation
public "rotate"(arg0: $Rotation$Type): $SymbolOrientation
public "getRotation"(): integer
public "getSerializedName"(): string
public static "fromRotation"(arg0: integer): $SymbolOrientation
public static "fromClickLocationAll"(arg0: $Vec3$Type, arg1: $Direction$Type): $SymbolOrientation
public static "fromClickLocationCardinal"(arg0: $Vec3$Type, arg1: $Direction$Type): $SymbolOrientation
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "rotation"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolOrientation$Type = (("southwest") | ("east") | ("south") | ("center") | ("north") | ("northwest") | ("west") | ("northeast") | ("southeast")) | ($SymbolOrientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SymbolOrientation_ = $SymbolOrientation$Type;
}}
declare module "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"

export class $MarkDrawingContext {

constructor(arg0: $Player$Type, arg1: $BlockHitResult$Type, arg2: $InteractionHand$Type)

public "getPlayer"(): $Player
public "getInitialOrientation"(): $SymbolOrientation
public "draw"(arg0: $Mark$Type): boolean
public "hasExistingMark"(): boolean
public "createRegularMark"(arg0: integer, arg1: boolean): $Mark
public "canDraw"(): boolean
public "createMark"(arg0: integer, arg1: $MarkSymbol$Type, arg2: boolean): $Mark
public "openSymbolSelectionScreen"(): void
public "shouldMarkReplaceAnother"(arg0: $Mark$Type): boolean
public static "storeContext"(arg0: $MarkDrawingContext$Type): void
public "getMarkFacing"(): $Direction
public "getDrawingHand"(): $InteractionHand
public "getMarkBlockPos"(): $BlockPos
public static "getStoredContext"(): $MarkDrawingContext
public static "clearStoredContext"(): void
get "player"(): $Player
get "initialOrientation"(): $SymbolOrientation
get "markFacing"(): $Direction
get "drawingHand"(): $InteractionHand
get "markBlockPos"(): $BlockPos
get "storedContext"(): $MarkDrawingContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkDrawingContext$Type = ($MarkDrawingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkDrawingContext_ = $MarkDrawingContext$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$MarkSymbol$OrientationBehavior" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MarkSymbol$OrientationBehavior extends $Enum<($MarkSymbol$OrientationBehavior)> {
static readonly "FIXED": $MarkSymbol$OrientationBehavior
static readonly "FULL": $MarkSymbol$OrientationBehavior
static readonly "CARDINAL": $MarkSymbol$OrientationBehavior
static readonly "UP_DOWN_CARDINAL": $MarkSymbol$OrientationBehavior


public static "values"(): ($MarkSymbol$OrientationBehavior)[]
public static "valueOf"(arg0: string): $MarkSymbol$OrientationBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkSymbol$OrientationBehavior$Type = (("up_down_cardinal") | ("fixed") | ("cardinal") | ("full")) | ($MarkSymbol$OrientationBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkSymbol$OrientationBehavior_ = $MarkSymbol$OrientationBehavior$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$IDrawingTool" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MarkDrawingContext, $MarkDrawingContext$Type} from "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IDrawingTool {

 "drawMark"(arg0: $MarkDrawingContext$Type, arg1: $Mark$Type): boolean
 "getGlowing"(arg0: $ItemStack$Type): boolean
 "getMarkColorValue"(arg0: $ItemStack$Type): integer
 "getMarkColor"(arg0: $ItemStack$Type): $Optional<($DyeColor)>
 "onMarkDrawn"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
 "getMark"(arg0: $ItemStack$Type, arg1: $MarkDrawingContext$Type, arg2: $MarkSymbol$Type): $Mark
 "createDrawingContext"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): $MarkDrawingContext
 "createDrawingContext"(arg0: $UseOnContext$Type): $MarkDrawingContext
}

export namespace $IDrawingTool {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawingTool$Type = ($IDrawingTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawingTool_ = $IDrawingTool$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$MarkSymbol" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MarkSymbol$OrientationBehavior, $MarkSymbol$OrientationBehavior$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol$OrientationBehavior"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MarkSymbol extends $Enum<($MarkSymbol)> implements $StringRepresentable {
static readonly "CENTER": $MarkSymbol
static readonly "ARROW": $MarkSymbol
static readonly "CROSS": $MarkSymbol
static readonly "CHECKMARK": $MarkSymbol
static readonly "SKULL": $MarkSymbol
static readonly "HOUSE": $MarkSymbol
static readonly "HEART": $MarkSymbol
static readonly "PICKAXE": $MarkSymbol


public static "values"(): ($MarkSymbol)[]
public static "valueOf"(arg0: string): $MarkSymbol
public static "byNameOrDefault"(arg0: string): $MarkSymbol
public static "getSpecialSymbols"(): $List<($MarkSymbol)>
public "getTranslationKey"(): string
public "getTextureLocation"(): $ResourceLocation
public "getSerializedName"(): string
public "getOrientationBehavior"(): $MarkSymbol$OrientationBehavior
public "getDefaultOrientation"(): $SymbolOrientation
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "specialSymbols"(): $List<($MarkSymbol)>
get "translationKey"(): string
get "textureLocation"(): $ResourceLocation
get "serializedName"(): string
get "orientationBehavior"(): $MarkSymbol$OrientationBehavior
get "defaultOrientation"(): $SymbolOrientation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarkSymbol$Type = (("arrow") | ("pickaxe") | ("center") | ("cross") | ("checkmark") | ("skull") | ("house") | ("heart")) | ($MarkSymbol);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarkSymbol_ = $MarkSymbol$Type;
}}
declare module "packages/io/github/mortuusars/chalk/items/$ChalkBoxItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IDrawingTool, $IDrawingTool$Type} from "packages/io/github/mortuusars/chalk/core/$IDrawingTool"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$MarkDrawingContext, $MarkDrawingContext$Type} from "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChalkBoxItem extends $Item implements $IDrawingTool {
static readonly "SELECTED_PROPERTY": $ResourceLocation
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(arg0: $Item$Properties$Type)

public static "openGUI"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getGlowing"(arg0: $ItemStack$Type): boolean
public "getMarkColorValue"(arg0: $ItemStack$Type): integer
public "getMarkColor"(arg0: $ItemStack$Type): $Optional<($DyeColor)>
public "onMarkDrawn"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getMark"(arg0: $ItemStack$Type, arg1: $MarkDrawingContext$Type, arg2: $MarkSymbol$Type): $Mark
public "getSelectedChalkColor"(arg0: $ItemStack$Type): float
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "drawMark"(arg0: $MarkDrawingContext$Type, arg1: $Mark$Type): boolean
public "createDrawingContext"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): $MarkDrawingContext
public "createDrawingContext"(arg0: $UseOnContext$Type): $MarkDrawingContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkBoxItem$Type = ($ChalkBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkBoxItem_ = $ChalkBoxItem$Type;
}}
declare module "packages/io/github/mortuusars/chalk/core/$Mark" {
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Mark {
readonly "facing": $Direction
readonly "color": integer
readonly "symbol": $MarkSymbol
readonly "orientation": $SymbolOrientation
readonly "glowing": boolean

constructor(arg0: $Direction$Type, arg1: integer, arg2: $MarkSymbol$Type, arg3: $SymbolOrientation$Type, arg4: boolean)

public static "fromBuffer"(arg0: $FriendlyByteBuf$Type): $Mark
public "toBuffer"(arg0: $FriendlyByteBuf$Type): void
public "createBlockState"(arg0: $ItemStack$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mark$Type = ($Mark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mark_ = $Mark$Type;
}}
declare module "packages/io/github/mortuusars/chalk/block/$ChalkMarkBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SymbolOrientation, $SymbolOrientation$Type} from "packages/io/github/mortuusars/chalk/core/$SymbolOrientation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ChalkMarkBlock extends $Block {
static readonly "FACING": $DirectionProperty
static readonly "SYMBOL": $EnumProperty<($MarkSymbol)>
static readonly "ORIENTATION": $EnumProperty<($SymbolOrientation)>
static readonly "GLOWING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $DyeColor$Type, arg1: $BlockBehaviour$Properties$Type)

public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getColor"(): $DyeColor
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkMarkBlock$Type = ($ChalkMarkBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkMarkBlock_ = $ChalkMarkBlock$Type;
}}
declare module "packages/io/github/mortuusars/chalk/items/$ChalkItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IDrawingTool, $IDrawingTool$Type} from "packages/io/github/mortuusars/chalk/core/$IDrawingTool"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MarkDrawingContext, $MarkDrawingContext$Type} from "packages/io/github/mortuusars/chalk/utils/$MarkDrawingContext"
import {$Mark, $Mark$Type} from "packages/io/github/mortuusars/chalk/core/$Mark"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$MarkSymbol, $MarkSymbol$Type} from "packages/io/github/mortuusars/chalk/core/$MarkSymbol"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChalkItem extends $Item implements $IDrawingTool {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "craftingRemainingItem": $Item
 "descriptionId": string
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(arg0: $DyeColor$Type, arg1: $Item$Properties$Type)

public "getGlowing"(arg0: $ItemStack$Type): boolean
public "getMarkColorValue"(arg0: $ItemStack$Type): integer
public "getMarkColor"(arg0: $ItemStack$Type): $Optional<($DyeColor)>
public "onMarkDrawn"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "getMark"(arg0: $ItemStack$Type, arg1: $MarkDrawingContext$Type, arg2: $MarkSymbol$Type): $Mark
public "getColor"(): $DyeColor
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "drawMark"(arg0: $MarkDrawingContext$Type, arg1: $Mark$Type): boolean
public "createDrawingContext"(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type, arg3: $Direction$Type, arg4: $InteractionHand$Type): $MarkDrawingContext
public "createDrawingContext"(arg0: $UseOnContext$Type): $MarkDrawingContext
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChalkItem$Type = ($ChalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChalkItem_ = $ChalkItem$Type;
}}
