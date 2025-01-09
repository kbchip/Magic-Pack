declare module "packages/artifacts/registry/$ModGameRules$DoubleValue" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModGameRules$IntegerValue, $ModGameRules$IntegerValue$Type} from "packages/artifacts/registry/$ModGameRules$IntegerValue"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModGameRules$DoubleValue extends $Record implements $Supplier<(double)> {

constructor(integerValue: $ModGameRules$IntegerValue$Type, factor: double)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factor"(): double
public "fuzzyEquals"(a: double): boolean
public "integerValue"(): $ModGameRules$IntegerValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModGameRules$DoubleValue$Type = ($ModGameRules$DoubleValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModGameRules$DoubleValue_ = $ModGameRules$DoubleValue$Type;
}}
declare module "packages/artifacts/registry/$ModGameRules$IntegerValue" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModGameRules$IntegerValue implements $Supplier<(integer)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModGameRules$IntegerValue$Type = ($ModGameRules$IntegerValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModGameRules$IntegerValue_ = $ModGameRules$IntegerValue$Type;
}}
