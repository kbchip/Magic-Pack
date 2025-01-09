declare module "packages/artifacts/mixin/gamerule/$BooleanValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanValueInvoker {

}

export namespace $BooleanValueInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanValueInvoker$Type = ($BooleanValueInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanValueInvoker_ = $BooleanValueInvoker$Type;
}}
declare module "packages/artifacts/mixin/accessors/client/$LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$RenderLayerParent, $RenderLayerParent$Type} from "packages/net/minecraft/client/renderer/entity/$RenderLayerParent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(T)>> extends $RenderLayerParent<(T), (M)> {

 "getLayers"(): $List<($RenderLayer<(T), (M)>)>
 "getModel"(): M
 "getTextureLocation"(arg0: T): $ResourceLocation
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$Type<T, M> = ($LivingEntityRendererAccessor<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityRendererAccessor_<T, M> = $LivingEntityRendererAccessor$Type<(T), (M)>;
}}
declare module "packages/artifacts/mixin/accessors/$LivingEntityAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $LivingEntityAccessor {

 "getLastHurtByPlayerTime"(): integer
 "getLastHurtByPlayer"(): $Player
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/artifacts/mixin/gamerule/$IntegerValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntegerValueInvoker {

}

export namespace $IntegerValueInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerValueInvoker$Type = ($IntegerValueInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerValueInvoker_ = $IntegerValueInvoker$Type;
}}
declare module "packages/artifacts/mixin/accessors/$MobAccessor" {
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"

export interface $MobAccessor {

 "getGoalSelector"(): $GoalSelector

(): $GoalSelector
}

export namespace $MobAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$Type = ($MobAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccessor_ = $MobAccessor$Type;
}}
