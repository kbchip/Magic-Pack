declare module "packages/com/jamieswhiteshirt/reachentityattributes/mixin/$EntityAttributeInstanceAccessor" {
import {$AttributeInstance, $AttributeInstance$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeInstance"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export interface $EntityAttributeInstanceAccessor {

 "getUpdateCallback"(): $Consumer<($AttributeInstance)>
 "setUpdateCallback"(updateCallback: $Consumer$Type<($AttributeInstance$Type)>): void
 "callOnUpdate"(): void
}

export namespace $EntityAttributeInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAttributeInstanceAccessor$Type = ($EntityAttributeInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAttributeInstanceAccessor_ = $EntityAttributeInstanceAccessor$Type;
}}
