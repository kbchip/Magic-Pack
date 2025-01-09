declare module "packages/com/teamabnormals/blueprint/core/endimator/effects/$ConfiguredEndimationEffect" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$EndimationEffect, $EndimationEffect$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffect"
import {$EndimationEffectSource, $EndimationEffectSource$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectSource"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ConfiguredEndimationEffect<C, E extends $EndimationEffect<(C)>> implements $Comparable<($ConfiguredEndimationEffect<(any), (any)>)> {
static readonly "CODEC": $Codec<($ConfiguredEndimationEffect<(any), (any)>)>

constructor(arg0: E, arg1: C, arg2: float)

public "compareTo"(arg0: $ConfiguredEndimationEffect$Type<(any), (any)>): integer
public "getTime"(): float
public "process"(arg0: $EndimationEffectSource$Type, arg1: float): void
public "getConfig"(): C
public "getEffect"(): E
get "time"(): float
get "config"(): C
get "effect"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredEndimationEffect$Type<C, E> = ($ConfiguredEndimationEffect<(C), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredEndimationEffect_<C, E> = $ConfiguredEndimationEffect$Type<(C), (E)>;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectSource" {
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"

export interface $EndimationEffectSource {

 "isActive"(): boolean
 "getPos"(): $Position
}

export namespace $EndimationEffectSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationEffectSource$Type = ($EndimationEffectSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationEffectSource_ = $EndimationEffectSource$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes" {
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$EndimationKeyframe, $EndimationKeyframe$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe"

export class $Endimation$PartKeyframes {
static readonly "CODEC": $Codec<($Endimation$PartKeyframes)>

constructor(arg0: ($EndimationKeyframe$Type)[], arg1: ($EndimationKeyframe$Type)[], arg2: ($EndimationKeyframe$Type)[], arg3: ($EndimationKeyframe$Type)[])

public "getScaleFrames"(): ($EndimationKeyframe)[]
public "getPosFrames"(): ($EndimationKeyframe)[]
public "getRotationFrames"(): ($EndimationKeyframe)[]
public "getOffsetFrames"(): ($EndimationKeyframe)[]
get "scaleFrames"(): ($EndimationKeyframe)[]
get "posFrames"(): ($EndimationKeyframe)[]
get "rotationFrames"(): ($EndimationKeyframe)[]
get "offsetFrames"(): ($EndimationKeyframe)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$PartKeyframes$Type = ($Endimation$PartKeyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$PartKeyframes_ = $Endimation$PartKeyframes$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$Builder$Keyframes" {
import {$Object2ObjectArrayMap, $Object2ObjectArrayMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectArrayMap"
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes"
import {$Endimation$PartKeyframes$Builder, $Endimation$PartKeyframes$Builder$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes$Builder"

export class $Endimation$Builder$Keyframes {


public "build"(): $Object2ObjectArrayMap<(string), ($Endimation$PartKeyframes)>
public "part"(arg0: string, arg1: $Endimation$PartKeyframes$Builder$Type): $Endimation$Builder$Keyframes
public "part"(arg0: string, arg1: $Endimation$PartKeyframes$Type): $Endimation$Builder$Keyframes
public static "keyframes"(): $Endimation$Builder$Keyframes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$Builder$Keyframes$Type = ($Endimation$Builder$Keyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$Builder$Keyframes_ = $Endimation$Builder$Keyframes$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$EndimationInterpolator, $EndimationInterpolator$Type} from "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$EndimationInterpolator"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EndimationKeyframe$Transform, $EndimationKeyframe$Transform$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe$Transform"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $EndimationKeyframe implements $Comparable<($EndimationKeyframe)> {
static readonly "LINEAR": $EndimationInterpolator
static readonly "CATMULL_ROM": $EndimationInterpolator
static readonly "PRE_POST_CODEC": $Codec<($EndimationKeyframe$Transform)>
static readonly "PRE_AND_POST_CODEC": $Codec<($Pair<($EndimationKeyframe$Transform), ($EndimationKeyframe$Transform)>)>
static readonly "CODEC": $Codec<($EndimationKeyframe)>
readonly "time": float
readonly "preX": $Supplier<(float)>
readonly "preY": $Supplier<(float)>
readonly "preZ": $Supplier<(float)>
readonly "postX": $Supplier<(float)>
readonly "postY": $Supplier<(float)>
readonly "postZ": $Supplier<(float)>
readonly "interpolator": $EndimationInterpolator

constructor(arg0: float, arg1: $Supplier$Type<(float)>, arg2: $Supplier$Type<(float)>, arg3: $Supplier$Type<(float)>, arg4: $Supplier$Type<(float)>, arg5: $Supplier$Type<(float)>, arg6: $Supplier$Type<(float)>, arg7: $EndimationInterpolator$Type)
constructor(arg0: float, arg1: $EndimationKeyframe$Transform$Type, arg2: $EndimationInterpolator$Type)

public "compareTo"(arg0: $EndimationKeyframe$Type): integer
public "apply"(arg0: $Vector3f$Type, arg1: ($EndimationKeyframe$Type)[], arg2: $EndimationKeyframe$Type, arg3: $EndimationKeyframe$Type, arg4: integer, arg5: integer, arg6: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationKeyframe$Type = ($EndimationKeyframe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationKeyframe_ = $EndimationKeyframe$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/effect/$WeightMobEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $WeightMobEffect extends $MobEffect {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightMobEffect$Type = ($WeightMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightMobEffect_ = $WeightMobEffect$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$PlayableEndimation$LoopType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayableEndimation$LoopType extends $Enum<($PlayableEndimation$LoopType)> {
static readonly "NONE": $PlayableEndimation$LoopType
static readonly "LOOP": $PlayableEndimation$LoopType
static readonly "HOLD": $PlayableEndimation$LoopType


public static "values"(): ($PlayableEndimation$LoopType)[]
public static "valueOf"(arg0: string): $PlayableEndimation$LoopType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableEndimation$LoopType$Type = (("loop") | ("none") | ("hold")) | ($PlayableEndimation$LoopType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableEndimation$LoopType_ = $PlayableEndimation$LoopType$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes$Builder" {
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes"
import {$EndimationKeyframe, $EndimationKeyframe$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe"

export class $Endimation$PartKeyframes$Builder {


public "scale"(...arg0: ($EndimationKeyframe$Type)[]): $Endimation$PartKeyframes$Builder
public "pos"(...arg0: ($EndimationKeyframe$Type)[]): $Endimation$PartKeyframes$Builder
public "offset"(...arg0: ($EndimationKeyframe$Type)[]): $Endimation$PartKeyframes$Builder
public "build"(): $Endimation$PartKeyframes
public "rotate"(...arg0: ($EndimationKeyframe$Type)[]): $Endimation$PartKeyframes$Builder
public static "partKeyframes"(): $Endimation$PartKeyframes$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$PartKeyframes$Builder$Type = ($Endimation$PartKeyframes$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$PartKeyframes$Builder_ = $Endimation$PartKeyframes$Builder$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/block/$ChiseledGloomyTilesBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ChiseledGloomyTilesBlock extends $Block {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledGloomyTilesBlock$Type = ($ChiseledGloomyTilesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledGloomyTilesBlock_ = $ChiseledGloomyTilesBlock$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/mixin/client/$CameraInvokerMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraInvokerMixin {

 "callMove"(arg0: double, arg1: double, arg2: double): void

(arg0: double, arg1: double, arg2: double): void
}

export namespace $CameraInvokerMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraInvokerMixin$Type = ($CameraInvokerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraInvokerMixin_ = $CameraInvokerMixin$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$InterpolationType$Registry" {
import {$InterpolationType, $InterpolationType$Type} from "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$InterpolationType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $InterpolationType$Registry {

constructor()

public "register"(arg0: $ResourceLocation$Type, arg1: $InterpolationType$Type): $InterpolationType
public "asCodec"(): $Codec<($InterpolationType)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterpolationType$Registry$Type = ($InterpolationType$Registry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterpolationType$Registry_ = $InterpolationType$Registry$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimation" {
import {$Object2ObjectArrayMap, $Object2ObjectArrayMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectArrayMap"
import {$Endimation$Builder, $Endimation$Builder$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$Builder"
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ConfiguredEndimationEffect, $ConfiguredEndimationEffect$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$ConfiguredEndimationEffect"

export class $Endimation {
static readonly "BLANK": $Endimation
static readonly "CODEC": $Codec<($Endimation)>

constructor(arg0: float, arg1: float, arg2: $Object2ObjectArrayMap$Type<(string), ($Endimation$PartKeyframes$Type)>, arg3: ($ConfiguredEndimationEffect$Type<(any), (any)>)[])

public "getLength"(): float
public static "builder"(): $Endimation$Builder
public "getEffects"(): ($ConfiguredEndimationEffect<(any), (any)>)[]
public "getBlendWeight"(): float
public "getPartKeyframes"(): $Object2ObjectArrayMap<(string), ($Endimation$PartKeyframes)>
get "length"(): float
get "effects"(): ($ConfiguredEndimationEffect<(any), (any)>)[]
get "blendWeight"(): float
get "partKeyframes"(): $Object2ObjectArrayMap<(string), ($Endimation$PartKeyframes)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$Type = ($Endimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation_ = $Endimation$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$CreeperSporesItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PottableItem, $PottableItem$Type} from "packages/com/teamabnormals/savage_and_ravage/common/item/$PottableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CreeperSporesItem extends $Item implements $PottableItem {
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

public "getPottedState"(arg0: $Direction$Type): $BlockState
public static "getThrownSporeCloudSize"(arg0: $RandomSource$Type): integer
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreeperSporesItem$Type = ($CreeperSporesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreeperSporesItem_ = $CreeperSporesItem$Type;
}}
declare module "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$IDataManager" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IDataManager$DataEntry, $IDataManager$DataEntry$Type} from "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$IDataManager$DataEntry"
import {$TrackedData, $TrackedData$Type} from "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$TrackedData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IDataManager {

 "getValue"<T>(arg0: $TrackedData$Type<(T)>): T
 "clean"(): void
 "setValue"<T>(arg0: $TrackedData$Type<(T)>, arg1: T): void
 "getEntries"(arg0: boolean): $Set<($IDataManager$DataEntry<(any)>)>
 "isDirty"(): boolean
 "getDataMap"(): $Map<($TrackedData<(any)>), ($IDataManager$DataEntry<(any)>)>
 "setDataMap"(arg0: $Map$Type<($TrackedData$Type<(any)>), ($IDataManager$DataEntry$Type<(any)>)>): void
 "getDirtyEntries"(): $Set<($IDataManager$DataEntry<(any)>)>
}

export namespace $IDataManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataManager$Type = ($IDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataManager_ = $IDataManager$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$WandOfFreezingItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WandOfFreezingItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandOfFreezingItem$Type = ($WandOfFreezingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandOfFreezingItem_ = $WandOfFreezingItem$Type;
}}
declare module "packages/com/teamabnormals/blueprint/client/screen/splash/$SplashManagerAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SplashManagerAccessor {

 "getSplashes"(): $List<(string)>

(): $List<(string)>
}

export namespace $SplashManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashManagerAccessor$Type = ($SplashManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SplashManagerAccessor_ = $SplashManagerAccessor$Type;
}}
declare module "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$IDataProcessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IDataProcessor<T> {

 "write"(arg0: T): $CompoundTag
 "read"(arg0: $CompoundTag$Type): T
}

export namespace $IDataProcessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataProcessor$Type<T> = ($IDataProcessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataProcessor_<T> = $IDataProcessor$Type<(T)>;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectHandler" {
import {$EndimationEffectSource, $EndimationEffectSource$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectSource"
import {$Endimation, $Endimation$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation"

export class $EndimationEffectHandler {

constructor(arg0: $EndimationEffectSource$Type)

public "update"(arg0: $Endimation$Type, arg1: float): void
public "reset"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationEffectHandler$Type = ($EndimationEffectHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationEffectHandler_ = $EndimationEffectHandler$Type;
}}
declare module "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$TrackedData" {
import {$IDataProcessor, $IDataProcessor$Type} from "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$IDataProcessor"
import {$SyncType, $SyncType$Type} from "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$SyncType"

export class $TrackedData<T> {


public "getDefaultValue"(): T
public "isPersistent"(): boolean
public "getSyncType"(): $SyncType
public "shouldSave"(): boolean
public "getProcessor"(): $IDataProcessor<(T)>
get "defaultValue"(): T
get "persistent"(): boolean
get "syncType"(): $SyncType
get "processor"(): $IDataProcessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedData$Type<T> = ($TrackedData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedData_<T> = $TrackedData$Type<(T)>;
}}
declare module "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$SyncType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SyncType extends $Enum<($SyncType)> {
static readonly "NOPE": $SyncType
static readonly "TO_CLIENT": $SyncType
static readonly "TO_CLIENTS": $SyncType


public static "values"(): ($SyncType)[]
public static "valueOf"(arg0: string): $SyncType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncType$Type = (("nope") | ("to_client") | ("to_clients")) | ($SyncType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncType_ = $SyncType$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$ConchOfConjuringItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConchOfConjuringItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConchOfConjuringItem$Type = ($ConchOfConjuringItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConchOfConjuringItem_ = $ConchOfConjuringItem$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$GrieferArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GrieferArmorItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrieferArmorItem$Type = ($GrieferArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrieferArmorItem_ = $GrieferArmorItem$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffect" {
import {$EndimationEffectSource, $EndimationEffectSource$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectSource"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ConfiguredEndimationEffect, $ConfiguredEndimationEffect$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$ConfiguredEndimationEffect"

export class $EndimationEffect<C> {


public "process"(arg0: $EndimationEffectSource$Type, arg1: float, arg2: C): void
public "getCodec"(): $Codec<($ConfiguredEndimationEffect<(C), ($EndimationEffect<(C)>)>)>
get "codec"(): $Codec<($ConfiguredEndimationEffect<(C), ($EndimationEffect<(C)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationEffect$Type<C> = ($EndimationEffect<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationEffect_<C> = $EndimationEffect$Type<(C)>;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$InterpolationType" {
import {$InterpolationType$Registry, $InterpolationType$Registry$Type} from "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$InterpolationType$Registry"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$EndimationKeyframe, $EndimationKeyframe$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe"

export interface $InterpolationType {

 "apply"(arg0: $Vector3f$Type, arg1: ($EndimationKeyframe$Type)[], arg2: $EndimationKeyframe$Type, arg3: $EndimationKeyframe$Type, arg4: integer, arg5: integer, arg6: float): void

(arg0: $Vector3f$Type, arg1: ($EndimationKeyframe$Type)[], arg2: $EndimationKeyframe$Type, arg3: $EndimationKeyframe$Type, arg4: integer, arg5: integer, arg6: float): void
}

export namespace $InterpolationType {
const REGISTRY: $InterpolationType$Registry
const LINEAR: $InterpolationType
const CATMULL_ROM: $InterpolationType
function catmullRom(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterpolationType$Type = ($InterpolationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterpolationType_ = $InterpolationType$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe$Transform" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EndimationKeyframe$Transform extends $Record {

constructor(x: $Supplier$Type<(float)>, y: $Supplier$Type<(float)>, z: $Supplier$Type<(float)>)

public "y"(): $Supplier<(float)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): $Supplier<(float)>
public "z"(): $Supplier<(float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationKeyframe$Transform$Type = ($EndimationKeyframe$Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationKeyframe$Transform_ = $EndimationKeyframe$Transform$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$Builder" {
import {$Object2ObjectArrayMap, $Object2ObjectArrayMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectArrayMap"
import {$Endimation$Builder$Keyframes, $Endimation$Builder$Keyframes$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$Builder$Keyframes"
import {$Endimation, $Endimation$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation"
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation$PartKeyframes"
import {$ConfiguredEndimationEffect, $ConfiguredEndimationEffect$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$ConfiguredEndimationEffect"

export class $Endimation$Builder {

constructor()

public "length"(arg0: float): $Endimation$Builder
public "build"(): $Endimation
public "addEffects"(...arg0: ($ConfiguredEndimationEffect$Type<(any), (any)>)[]): $Endimation$Builder
public "effects"(arg0: ($ConfiguredEndimationEffect$Type<(any), (any)>)[]): $Endimation$Builder
public "keyframes"(arg0: $Endimation$Builder$Keyframes$Type): $Endimation$Builder
public "keyframes"(arg0: $Object2ObjectArrayMap$Type<(string), ($Endimation$PartKeyframes$Type)>): $Endimation$Builder
public "blendWeight"(arg0: float): $Endimation$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$Builder$Type = ($Endimation$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$Builder_ = $Endimation$Builder$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$EndimationInterpolator" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$InterpolationType, $InterpolationType$Type} from "packages/com/teamabnormals/blueprint/core/endimator/interpolation/$InterpolationType"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$EndimationKeyframe, $EndimationKeyframe$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$EndimationKeyframe"

export class $EndimationInterpolator extends $Record {
static readonly "CODEC": $Codec<($EndimationInterpolator)>

constructor(type: $InterpolationType$Type, easer: $Function$Type<(float), (float)>)

public "type"(): $InterpolationType
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: $Vector3f$Type, arg1: ($EndimationKeyframe$Type)[], arg2: $EndimationKeyframe$Type, arg3: $EndimationKeyframe$Type, arg4: integer, arg5: integer, arg6: float): void
public "easer"(): $Function<(float), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationInterpolator$Type = ($EndimationInterpolator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationInterpolator_ = $EndimationInterpolator$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$MaskOfDishonestyItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RenderLivingEvent$Pre, $RenderLivingEvent$Pre$Type} from "packages/net/minecraftforge/client/event/$RenderLivingEvent$Pre"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MaskOfDishonestyItem extends $ArmorItem {
static readonly "ARMOR_MODIFIER_UUID_PER_TYPE": $EnumMap<($ArmorItem$Type), ($UUID)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public static "livingRender"(arg0: $RenderLivingEvent$Pre$Type<(any), (any)>): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaskOfDishonestyItem$Type = ($MaskOfDishonestyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaskOfDishonestyItem_ = $MaskOfDishonestyItem$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/mixin/$FluidInvokerMixin" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export interface $FluidInvokerMixin {

 "callAnimateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $RandomSource$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $RandomSource$Type): void
}

export namespace $FluidInvokerMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInvokerMixin$Type = ($FluidInvokerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInvokerMixin_ = $FluidInvokerMixin$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/api/$EggLayer" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export interface $EggLayer {

 "getNextEggTime"(arg0: $RandomSource$Type): integer
 "getEggItem"(): $Item
 "getEggTimer"(): integer
 "setEggTimer"(arg0: integer): void
 "getEggLayingSound"(): $SoundEvent
 "isBirdJockey"(): boolean
}

export namespace $EggLayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EggLayer$Type = ($EggLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EggLayer_ = $EggLayer$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/core/mixin/$RaiderAccessor" {
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export interface $RaiderAccessor {

 "getIsCelebrating"(): $EntityDataAccessor<(boolean)>

(): $EntityDataAccessor<(boolean)>
}

export namespace $RaiderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaiderAccessor$Type = ($RaiderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RaiderAccessor_ = $RaiderAccessor$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$CleaverOfBeheadingItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$TieredItem, $TieredItem$Type} from "packages/net/minecraft/world/item/$TieredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CleaverOfBeheadingItem extends $TieredItem {
 "tier": $Tier
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

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getDamage"(): float
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CleaverOfBeheadingItem$Type = ($CleaverOfBeheadingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CleaverOfBeheadingItem_ = $CleaverOfBeheadingItem$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimatable$EndimatedState" {
import {$PlayableEndimation, $PlayableEndimation$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$PlayableEndimation"
import {$Endimatable, $Endimatable$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimatable"
import {$EndimationEffectHandler, $EndimationEffectHandler$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectHandler"

export class $Endimatable$EndimatedState {
readonly "effectHandler": $EndimationEffectHandler
 "animationTick": integer
 "endimation": $PlayableEndimation

constructor(arg0: $Endimatable$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimatable$EndimatedState$Type = ($Endimatable$EndimatedState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimatable$EndimatedState_ = $Endimatable$EndimatedState$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$Endimatable" {
import {$PlayableEndimation, $PlayableEndimation$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$PlayableEndimation"
import {$EndimationEffectHandler, $EndimationEffectHandler$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectHandler"
import {$EndimationEffectSource, $EndimationEffectSource$Type} from "packages/com/teamabnormals/blueprint/core/endimator/effects/$EndimationEffectSource"
import {$Endimatable$EndimatedState, $Endimatable$EndimatedState$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimatable$EndimatedState"
import {$Position, $Position$Type} from "packages/net/minecraft/core/$Position"

export interface $Endimatable extends $EndimationEffectSource {

 "getEndimatedState"(): $Endimatable$EndimatedState
 "endimateTick"(): void
 "setPlayingEndimation"(arg0: $PlayableEndimation$Type): void
 "isNoEndimationPlaying"(): boolean
 "isEndimationPlaying"(arg0: $PlayableEndimation$Type): boolean
 "getPlayingEndimation"(): $PlayableEndimation
 "setAnimationTick"(arg0: integer): void
 "onEndimationStart"(arg0: $PlayableEndimation$Type, arg1: $PlayableEndimation$Type): void
 "getEffectHandler"(): $EndimationEffectHandler
 "onEndimationEnd"(arg0: $PlayableEndimation$Type, arg1: $PlayableEndimation$Type): void
 "resetEndimation"(): void
 "getAnimationTick"(): integer
 "isActive"(): boolean
 "getPos"(): $Position
}

export namespace $Endimatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimatable$Type = ($Endimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimatable_ = $Endimatable$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/block/$RunedGloomyTilesBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChiseledGloomyTilesBlock, $ChiseledGloomyTilesBlock$Type} from "packages/com/teamabnormals/savage_and_ravage/common/block/$ChiseledGloomyTilesBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RunedGloomyTilesBlock extends $ChiseledGloomyTilesBlock {
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public static "shouldTrigger"(arg0: $Entity$Type, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunedGloomyTilesBlock$Type = ($RunedGloomyTilesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunedGloomyTilesBlock_ = $RunedGloomyTilesBlock$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$EndimatablePart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EndimatablePart {

 "reset"(): void
 "addRotation"(arg0: float, arg1: float, arg2: float): void
 "addPos"(arg0: float, arg1: float, arg2: float): void
 "addScale"(arg0: float, arg1: float, arg2: float): void
 "addOffset"(arg0: float, arg1: float, arg2: float): void
}

export namespace $EndimatablePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimatablePart$Type = ($EndimatablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimatablePart_ = $EndimatablePart$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/block/$SporeBombBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$TntBlock, $TntBlock$Type} from "packages/net/minecraft/world/level/block/$TntBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SporeBombBlock extends $TntBlock {
static readonly "UNSTABLE": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeBombBlock$Type = ($SporeBombBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporeBombBlock_ = $SporeBombBlock$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/block/$PottedCreeperSporesBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $PottedCreeperSporesBlock extends $Block {
static readonly "FACING": $DirectionProperty
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

constructor(arg0: $Supplier$Type<($Item$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getDirectionalState"(arg0: $Direction$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PottedCreeperSporesBlock$Type = ($PottedCreeperSporesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PottedCreeperSporesBlock_ = $PottedCreeperSporesBlock$Type;
}}
declare module "packages/com/teamabnormals/blueprint/core/endimator/$PlayableEndimation" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PlayableEndimation$LoopType, $PlayableEndimation$LoopType$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$PlayableEndimation$LoopType"
import {$Endimation, $Endimation$Type} from "packages/com/teamabnormals/blueprint/core/endimator/$Endimation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PlayableEndimation extends $Record {
static readonly "BLANK": $PlayableEndimation

constructor(location: $ResourceLocation$Type, duration: integer, loopType: $PlayableEndimation$LoopType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public "duration"(): integer
public "loopType"(): $PlayableEndimation$LoopType
public "asEndimation"(): $Endimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableEndimation$Type = ($PlayableEndimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableEndimation_ = $PlayableEndimation$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$MischiefArrowItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ArrowItem, $ArrowItem$Type} from "packages/net/minecraft/world/item/$ArrowItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MischiefArrowItem extends $ArrowItem {
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

public "isInfinite"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Player$Type): boolean
public "createArrow"(arg0: $Level$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type): $AbstractArrow
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MischiefArrowItem$Type = ($MischiefArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MischiefArrowItem_ = $MischiefArrowItem$Type;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/levelgen/feature/$EnclosureFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $EnclosureFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($NoneFeatureConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnclosureFeature$Type = ($EnclosureFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnclosureFeature_ = $EnclosureFeature$Type;
}}
declare module "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$IDataManager$DataEntry" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TrackedData, $TrackedData$Type} from "packages/com/teamabnormals/blueprint/common/world/storage/tracking/$TrackedData"

export class $IDataManager$DataEntry<T> {

constructor(arg0: $TrackedData$Type<(T)>)

public "readValue"(arg0: $CompoundTag$Type, arg1: boolean): void
public "getValue"(): T
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "read"(arg0: $FriendlyByteBuf$Type): $IDataManager$DataEntry<(any)>
public "clean"(): void
public "setValue"(arg0: T, arg1: boolean): void
public "isDirty"(): boolean
public "writeValue"(): $CompoundTag
public "getTrackedData"(): $TrackedData<(T)>
public "markDirty"(): void
get "value"(): T
get "dirty"(): boolean
get "trackedData"(): $TrackedData<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataManager$DataEntry$Type<T> = ($IDataManager$DataEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataManager$DataEntry_<T> = $IDataManager$DataEntry$Type<(T)>;
}}
declare module "packages/com/teamabnormals/savage_and_ravage/common/item/$PottableItem" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $PottableItem {

 "getPottedState"(arg0: $Direction$Type): $BlockState

(arg0: $Direction$Type): $BlockState
}

export namespace $PottableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PottableItem$Type = ($PottableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PottableItem_ = $PottableItem$Type;
}}
