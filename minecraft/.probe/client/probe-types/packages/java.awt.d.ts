declare module "packages/java/awt/geom/$Point2D" {
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"

export class $Point2D implements $Cloneable {


public "getY"(): double
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "setLocation"(arg0: double, arg1: double): void
public "setLocation"(arg0: $Point2D$Type): void
public "getX"(): double
public "distanceSq"(arg0: double, arg1: double): double
public static "distanceSq"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distanceSq"(arg0: $Point2D$Type): double
public "distance"(arg0: double, arg1: double): double
public static "distance"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distance"(arg0: $Point2D$Type): double
get "y"(): double
set "location"(value: $Point2D$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point2D$Type = ($Point2D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point2D_ = $Point2D$Type;
}}
declare module "packages/java/awt/$Point" {
import {$Point2D, $Point2D$Type} from "packages/java/awt/geom/$Point2D"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"

export class $Point extends $Point2D implements $Serializable {
 "x": integer
 "y": integer

constructor()
constructor(arg0: integer, arg1: integer)
constructor(arg0: $Point$Type)

public "getY"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "getLocation"(): $Point
public "move"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: $Point$Type): void
public "setLocation"(arg0: integer, arg1: integer): void
public "setLocation"(arg0: double, arg1: double): void
public "translate"(arg0: integer, arg1: integer): void
public "getX"(): double
get "y"(): double
get "location"(): $Point
set "location"(value: $Point$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point$Type = ($Point);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Point_ = $Point$Type;
}}
