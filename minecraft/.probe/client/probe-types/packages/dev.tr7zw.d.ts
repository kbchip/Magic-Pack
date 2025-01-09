declare module "packages/dev/tr7zw/entityculling/access/$EntityRendererInter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRendererInter<T extends $Entity> {

 "shadowShouldShowName"(arg0: T): boolean
 "shadowRenderNameTag"(arg0: T, arg1: $Component$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: float): void
 "ignoresCulling"(arg0: T): boolean
 "getCullingBox"(arg0: T): $AABB
}

export namespace $EntityRendererInter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererInter$Type<T> = ($EntityRendererInter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererInter_<T> = $EntityRendererInter$Type<(T)>;
}}
declare module "packages/dev/tr7zw/notenoughanimations/versionless/animations/$DataHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DataHolder<T> {

}

export namespace $DataHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataHolder$Type<T> = ($DataHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataHolder_<T> = $DataHolder$Type<(T)>;
}}
declare module "packages/dev/tr7zw/entityculling/versionless/access/$Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable {

 "setTimeout"(): void
 "isForcedVisible"(): boolean
 "isCulled"(): boolean
 "isOutOfCamera"(): boolean
 "setCulled"(arg0: boolean): void
 "setOutOfCamera"(arg0: boolean): void
}

export namespace $Cullable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cullable$Type = ($Cullable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cullable_ = $Cullable$Type;
}}
declare module "packages/dev/tr7zw/notenoughanimations/access/$PlayerData" {
import {$DataHolder, $DataHolder$Type} from "packages/dev/tr7zw/notenoughanimations/versionless/animations/$DataHolder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $PlayerData {

 "getData"<T>(arg0: $DataHolder$Type<(T)>, arg1: $Supplier$Type<(T)>): T
 "isUpdated"(arg0: integer): integer
 "getPoseOverwrite"(): $Pose
 "setUpdated"(arg0: integer): void
 "getSideSword"(): $ItemStack
 "getLastHeldItems"(): ($ItemStack)[]
 "setSideSword"(arg0: $ItemStack$Type): void
 "isRotateBodyToHead"(): boolean
 "setPoseOverwrite"(arg0: $Pose$Type): void
 "getLastRotations"(): (float)[]
 "setRotateBodyToHead"(arg0: boolean): void
 "getLastAnimationSwapTick"(): integer
 "setLastAnimationSwapTick"(arg0: integer): void
 "setItemSwapAnimationTimer"(arg0: integer): void
 "getItemSwapAnimationTimer"(): integer
 "setDisableBodyRotation"(arg0: boolean): void
 "isDisableBodyRotation"(): boolean
}

export namespace $PlayerData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerData$Type = ($PlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerData_ = $PlayerData$Type;
}}
