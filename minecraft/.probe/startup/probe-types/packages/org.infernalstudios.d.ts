declare module "packages/org/infernalstudios/shieldexp/access/$LivingEntityAccess" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $LivingEntityAccess {

 "getBlockedCooldown"(): integer
 "getLastShield"(): $ItemStack
 "setLastShield"(arg0: $ItemStack$Type): void
 "setBlockedCooldown"(arg0: integer): void
 "setParryWindow"(arg0: integer): void
 "getUsedStamina"(): integer
 "setBlocking"(arg0: boolean): void
 "getBlocking"(): boolean
 "setUsedStamina"(arg0: integer): void
 "getParryWindow"(): integer
}

export namespace $LivingEntityAccess {
function get(arg0: any): $LivingEntityAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccess$Type = ($LivingEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccess_ = $LivingEntityAccess$Type;
}}
