declare module "packages/de/ambertation/wunderlib/math/$Quaternion" {
import {$Float3, $Float3$Type} from "packages/de/ambertation/wunderlib/math/$Float3"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Matrix4, $Matrix4$Type} from "packages/de/ambertation/wunderlib/math/$Matrix4"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Quaternion {
static readonly "IDENTITY": $Quaternion
static readonly "ZERO": $Quaternion
static readonly "CODEC": $Codec<($Quaternion)>
readonly "w": double
readonly "v": $Float3

constructor(real: double, imaginary: $Float3$Type)

public "mul"(v: $Float3$Type): $Quaternion
public "mul"(q: $Quaternion$Type): $Quaternion
public "mul"(d: double): $Quaternion
public "add"(q: $Quaternion$Type): $Quaternion
public "equals"(o: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public static "of"(w: double, i: double, j: double, k: double): $Quaternion
public static "of"(real: double, imaginary: $Float3$Type): $Quaternion
public static "of"(imaginary: $Float3$Type): $Quaternion
public "rotate"(p: $Float3$Type): $Float3
public "sub"(q: $Quaternion$Type): $Quaternion
public "normalized"(): $Quaternion
public static "between"(start: $Float3$Type, target: $Float3$Type): $Quaternion
public static "deserializeFromNetwork"(buf: $FriendlyByteBuf$Type): $Quaternion
public "conjugate"(): $Quaternion
public "div"(d: double): $Quaternion
public "dot"(q: $Quaternion$Type): double
public "lengthSquare"(): double
public "unRotate"(p: $Float3$Type): $Float3
public "isReal"(): boolean
public "inverted"(): $Quaternion
public "isUnit"(): boolean
public "serializeToNetwork"(buf: $FriendlyByteBuf$Type): void
public static "ofAxisAngle"(normalizedAxis: $Float3$Type, angle: double): $Quaternion
public "isImaginary"(): boolean
public "asMatrix"(): $Matrix4
public "toEuler"(): $Float3
get "real"(): boolean
get "unit"(): boolean
get "imaginary"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quaternion$Type = ($Quaternion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quaternion_ = $Quaternion$Type;
}}
declare module "packages/de/ambertation/wunderlib/math/$Float3" {
import {$Float2, $Float2$Type} from "packages/de/ambertation/wunderlib/math/$Float2"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Quaternion, $Quaternion$Type} from "packages/de/ambertation/wunderlib/math/$Quaternion"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Float4, $Float4$Type} from "packages/de/ambertation/wunderlib/math/$Float4"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Float3 {
static readonly "EPSILON": double
static readonly "ZERO": $Float3
static readonly "IDENTITY": $Float3
static readonly "X_AXIS": $Float3
static readonly "Y_AXIS": $Float3
static readonly "Z_AXIS": $Float3
static readonly "mX_AXIS": $Float3
static readonly "mY_AXIS": $Float3
static readonly "mZ_AXIS": $Float3
static readonly "SOUTH": $Float3
static readonly "NORTH": $Float3
static readonly "EAST": $Float3
static readonly "WEST": $Float3
static readonly "UP": $Float3
static readonly "DOWN": $Float3
static readonly "XZ_PLANE": $Float3
static readonly "mXZ_PLANE": $Float3
static readonly "XmZ_PLANE": $Float3
static readonly "mXmZ_PLANE": $Float3
static readonly "XY_PLANE": $Float3
static readonly "mXY_PLANE": $Float3
static readonly "XmY_PLANE": $Float3
static readonly "mXmY_PLANE": $Float3
static readonly "YZ_PLANE": $Float3
static readonly "mYZ_PLANE": $Float3
static readonly "YmZ_PLANE": $Float3
static readonly "mYmZ_PLANE": $Float3
static readonly "CODEC": $Codec<($Float3)>
readonly "x": double
readonly "y": double
readonly "z": double

constructor(x: double, y: double, z: double)

public "mul"(p: $Float3$Type): $Float3
public "mul"(d: double): $Float3
public "y"(): double
public "add"(dx: double, dy: double, dz: double): $Float3
public "add"(p: $Float3$Type): $Float3
public "add"(p: $Vec3$Type): $Float3
public "add"(d: double): $Float3
public "equals"(o: any): boolean
public "length"(): double
public static "toString"(d: double): string
public "toString"(): string
public "hashCode"(): integer
public "abs"(): $Float3
public "min"(): double
public "min"(d: double): $Float3
public "max"(d: double): $Float3
public "floor"(): $Float3
public "ceil"(): $Float3
public static "of"(xyz: double): $Float3
public static "of"(xy: $Float2$Type, z: double): $Float3
public static "of"(x: double, y: double, z: double): $Float3
public static "of"(x: double, xy: $Float2$Type): $Float3
public static "of"(pos: $Vec3$Type): $Float3
public static "of"(pos: $BlockPos$Type): $Float3
public static "of"(pos: $Vector3f$Type): $Float3
public "round"(): $Float3
public "rotate"(rot: $Quaternion$Type): $Float3
public "sub"(p: $Float3$Type): $Float3
public "sub"(d: double): $Float3
public "sub"(dx: double, dy: double, dz: double): $Float3
public "sub"(p: $Vec3$Type): $Float3
public "x"(): double
public "normalized"(): $Float3
public "square"(): $Float3
public static "deserializeFromNetwork"(buf: $FriendlyByteBuf$Type): $Float3
public "project"(unitDirection: $Float3$Type): $Float3
public "z"(): double
public "div"(p: $Float3$Type): $Float3
public "div"(d: double): $Float3
public "align"(toBlock: boolean): $Float3
public "dot"(p: $Float3$Type): double
public "zx"(): $Float2
public "zy"(): $Float2
public "xz"(): $Float2
public "toVector3"(): $Vector3f
public "reciprocal"(): $Float3
public static "conservative"(x: double): double
public "conservative"(): $Float3
public "asDirection"(): $Float4
public "lengthSquare"(): double
public static "toAlignedPos"(d: double): double
public "maxAbsComponent"(): double
public "blockAligned"(): $Float3
public static "blockAligned"(x: double, y: double, z: double): $Float3
public "angleTo"(target: $Float3$Type): double
public static "maxAbs"(a: double, b: double): double
public "asPoint"(): $Float4
public "toAABB"(offset: $Vec3$Type): $AABB
public "toAABB"(): $AABB
public static "toBlockPos"(d: double): integer
public static "toBlockPos"(vec: $Vec3$Type): $BlockPos
public static "toBlockPos"(x: double, y: double, z: double): $BlockPos
public "toBlockPos"(): $BlockPos
public "yzx"(): $Float3
public "yzz"(): $Float3
public "zyz"(): $Float3
public "zzx"(): $Float3
public "unRotate"(rot: $Quaternion$Type): $Float3
public "zyx"(): $Float3
public "yyz"(): $Float3
public "yzy"(): $Float3
public "yyx"(): $Float3
public "zxx"(): $Float3
public "zxz"(): $Float3
public "zxy"(): $Float3
public "xzx"(): $Float3
public "xxz"(): $Float3
public "xzy"(): $Float3
public "zzy"(): $Float3
public "zzz"(): $Float3
public "zyy"(): $Float3
public "yxz"(): $Float3
public "distSquare"(b: $Float3$Type): double
public "distSquare"(b: $BlockPos$Type): double
public "xyy"(): $Float3
public "xzz"(): $Float3
public "yxx"(): $Float3
public "toVec3"(): $Vec3
public "xxy"(): $Float3
public "xyx"(): $Float3
public "xxx"(): $Float3
public "yyy"(): $Float3
public "yxy"(): $Float3
public "zz"(): $Float2
public "xx"(): $Float2
public "yy"(): $Float2
public "yx"(): $Float2
public "yz"(): $Float2
public "xy"(): $Float2
public "rotateX"(a: double): $Float3
public "rotateY"(a: double): $Float3
public "rotateZ"(a: double): $Float3
public "cross"(p: $Float3$Type): $Float3
public "xyz"(): $Float3
public "serializeToNetwork"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float3$Type = ($Float3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Float3_ = $Float3$Type;
}}
declare module "packages/de/ambertation/wunderlib/math/$Float2" {
import {$Float3, $Float3$Type} from "packages/de/ambertation/wunderlib/math/$Float3"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Float2 {
static readonly "ZERO": $Float2
static readonly "X_AXIS": $Float2
static readonly "Y_AXIS": $Float2
static readonly "mX_AXIS": $Float2
static readonly "mY_AXIS": $Float2
static readonly "IDENTITY": $Float2
static readonly "CODEC": $Codec<($Float2)>
readonly "x": double
readonly "y": double

constructor(x: double, y: double)

public "mul"(p: $Float2$Type): $Float2
public "mul"(d: double): $Float2
public "y"(): double
public "add"(d: double): $Float2
public "add"(p: $Float2$Type): $Float2
public "equals"(o: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "abs"(): $Float2
public "min"(d: double): $Float2
public "max"(d: double): $Float2
public "floor"(): $Float2
public "ceil"(): $Float2
public static "of"(xy: double): $Float2
public static "of"(x: double, y: double): $Float2
public "round"(): $Float2
public "rotate"(a: double): $Float2
public "sub"(p: $Float2$Type): $Float2
public "sub"(d: double): $Float2
public "x"(): double
public "normalized"(): $Float2
public "square"(): $Float2
public static "deserializeFromNetwork"(buf: $FriendlyByteBuf$Type): $Float2
public "div"(p: $Float2$Type): $Float2
public "div"(d: double): $Float2
public "dot"(p: $Float2$Type): double
public "conservative"(): $Float2
public "lengthSquare"(): double
public "blockAligned"(): $Float2
public static "blockAligned"(x: double, y: double): $Float2
public "angleTo"(target: $Float2$Type): double
public "yyx"(): $Float3
public "distSquare"(b: $BlockPos$Type): double
public "distSquare"(b: $Float2$Type): double
public "xyy"(): $Float3
public "yxx"(): $Float3
public "xxy"(): $Float3
public "xyx"(): $Float3
public "xxx"(): $Float3
public "yyy"(): $Float3
public "yxy"(): $Float3
public "maxComp"(): double
public "minComp"(): double
public "xx"(): $Float2
public "yy"(): $Float2
public "yx"(): $Float2
public "xy"(): $Float2
public "serializeToNetwork"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float2$Type = ($Float2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Float2_ = $Float2$Type;
}}
declare module "packages/de/ambertation/wunderlib/math/$Float4" {
import {$Float3, $Float3$Type} from "packages/de/ambertation/wunderlib/math/$Float3"
import {$Float2, $Float2$Type} from "packages/de/ambertation/wunderlib/math/$Float2"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $Float4 {
static readonly "EPSILON": double
static readonly "ZERO": $Float4
static readonly "IDENTITY": $Float4
static readonly "X_AXIS": $Float4
static readonly "Y_AXIS": $Float4
static readonly "Z_AXIS": $Float4
static readonly "CODEC": $Codec<($Float4)>
readonly "x": double
readonly "y": double
readonly "z": double
readonly "w": double

constructor(x: double, y: double, z: double, w: double)

public "mul"(p: $Float4$Type): $Float4
public "mul"(d: double): $Float4
public "y"(): double
public "add"(p: $Float4$Type): $Float4
public "add"(dx: double, dy: double, dz: double, dw: double): $Float4
public "add"(d: double): $Float4
public "equals"(o: any): boolean
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public static "of"(xyzw: double): $Float4
public static "of"(x: double, y: double, z: double, w: double): $Float4
public "sub"(d: double): $Float4
public "sub"(dx: double, dy: double, dz: double, dw: double): $Float4
public "sub"(p: $Float4$Type): $Float4
public "x"(): double
public "w"(): double
public "normalized"(): $Float4
public "square"(): $Float4
public static "deserializeFromNetwork"(buf: $FriendlyByteBuf$Type): $Float4
public "z"(): double
public "div"(p: $Float4$Type): $Float4
public "div"(d: double): $Float4
public "dot"(p: $Float4$Type): double
public "wx"(): $Float2
public "wy"(): $Float2
public "wz"(): $Float2
public "zx"(): $Float2
public "zy"(): $Float2
public "xz"(): $Float2
public "lengthSquare"(): double
public static "ofDirection"(xyz: double): $Float4
public static "ofDirection"(x: double, y: double, z: double): $Float4
public static "ofDirection"(dir: $Float3$Type): $Float4
public static "ofPoint"(dir: $Float3$Type): $Float4
public static "ofPoint"(xyz: double): $Float4
public static "ofPoint"(x: double, y: double, z: double): $Float4
public "yzx"(): $Float3
public "yzz"(): $Float3
public "zyz"(): $Float3
public "zzx"(): $Float3
public "zyx"(): $Float3
public "yyz"(): $Float3
public "yzy"(): $Float3
public "yyx"(): $Float3
public "zxx"(): $Float3
public "zxz"(): $Float3
public "zxy"(): $Float3
public "xzx"(): $Float3
public "xxz"(): $Float3
public "xzy"(): $Float3
public "zzy"(): $Float3
public "zzz"(): $Float3
public "zyy"(): $Float3
public "yxz"(): $Float3
public "xyy"(): $Float3
public "xzz"(): $Float3
public "yxx"(): $Float3
public "xxy"(): $Float3
public "xyx"(): $Float3
public "xxx"(): $Float3
public "yyy"(): $Float3
public "yxy"(): $Float3
public "wyzw"(): $Float4
public "wxzw"(): $Float4
public "wzyx"(): $Float4
public "wzxw"(): $Float4
public "wywz"(): $Float4
public "wyzx"(): $Float4
public "wyxx"(): $Float4
public "wyxy"(): $Float4
public "wywy"(): $Float4
public "wyww"(): $Float4
public "wxwz"(): $Float4
public "wxzy"(): $Float4
public "wxwx"(): $Float4
public "wyyx"(): $Float4
public "wywx"(): $Float4
public "wxzx"(): $Float4
public "wzyy"(): $Float4
public "wzyz"(): $Float4
public "wxww"(): $Float4
public "wyxz"(): $Float4
public "wyyz"(): $Float4
public "wzxx"(): $Float4
public "wzxy"(): $Float4
public "wyyy"(): $Float4
public "wyxw"(): $Float4
public "wyyw"(): $Float4
public "wyzy"(): $Float4
public "wyzz"(): $Float4
public "wzxz"(): $Float4
public "wxwy"(): $Float4
public "wxzz"(): $Float4
public "wzyw"(): $Float4
public "yxw"(): $Float3
public "xwz"(): $Float3
public "xyw"(): $Float3
public "yzw"(): $Float3
public "ywy"(): $Float3
public "xwx"(): $Float3
public "yyw"(): $Float3
public "ywx"(): $Float3
public "yww"(): $Float3
public "ywz"(): $Float3
public "zxw"(): $Float3
public "xzw"(): $Float3
public "xxw"(): $Float3
public "xwy"(): $Float3
public "xww"(): $Float3
public "xxxz"(): $Float4
public "wxy"(): $Float3
public "xxxx"(): $Float4
public "xxyx"(): $Float4
public "wwz"(): $Float3
public "zwx"(): $Float3
public "wyx"(): $Float3
public "wzx"(): $Float3
public "xxyy"(): $Float4
public "xxyz"(): $Float4
public "wxx"(): $Float3
public "xxyw"(): $Float4
public "wyy"(): $Float3
public "xxzx"(): $Float4
public "wxz"(): $Float3
public "wwx"(): $Float3
public "wwy"(): $Float3
public "zwy"(): $Float3
public "wxw"(): $Float3
public "wyw"(): $Float3
public "wzy"(): $Float3
public "wzz"(): $Float3
public "wzw"(): $Float3
public "xxxy"(): $Float4
public "xxxw"(): $Float4
public "zww"(): $Float3
public "xxzy"(): $Float4
public "wyz"(): $Float3
public "zyw"(): $Float3
public "zzw"(): $Float3
public "zwz"(): $Float3
public "www"(): $Float3
public "xzxz"(): $Float4
public "xyzx"(): $Float4
public "xyyz"(): $Float4
public "xzyw"(): $Float4
public "xywz"(): $Float4
public "xzxy"(): $Float4
public "xzzx"(): $Float4
public "xxww"(): $Float4
public "xzzy"(): $Float4
public "xzzz"(): $Float4
public "xyyx"(): $Float4
public "xyzz"(): $Float4
public "xyww"(): $Float4
public "xywy"(): $Float4
public "xzyx"(): $Float4
public "xyxz"(): $Float4
public "xyzy"(): $Float4
public "xxwy"(): $Float4
public "xzyy"(): $Float4
public "xywx"(): $Float4
public "xxzz"(): $Float4
public "xxwx"(): $Float4
public "xyyy"(): $Float4
public "xzxw"(): $Float4
public "xzyz"(): $Float4
public "xxwz"(): $Float4
public "xyxw"(): $Float4
public "xyxy"(): $Float4
public "xyyw"(): $Float4
public "xzxx"(): $Float4
public "xyxx"(): $Float4
public "xxzw"(): $Float4
public "xzzw"(): $Float4
public "xwwz"(): $Float4
public "yxyy"(): $Float4
public "xwxx"(): $Float4
public "yxyz"(): $Float4
public "yxyw"(): $Float4
public "yxzy"(): $Float4
public "yxzz"(): $Float4
public "xwwy"(): $Float4
public "xwxz"(): $Float4
public "xzww"(): $Float4
public "xwxw"(): $Float4
public "xwzx"(): $Float4
public "yxzx"(): $Float4
public "yxxy"(): $Float4
public "xwwx"(): $Float4
public "xzwx"(): $Float4
public "xwzw"(): $Float4
public "xwyz"(): $Float4
public "xwzy"(): $Float4
public "xwxy"(): $Float4
public "xwyy"(): $Float4
public "xwzz"(): $Float4
public "yxxz"(): $Float4
public "xwyx"(): $Float4
public "xzwz"(): $Float4
public "xwyw"(): $Float4
public "xzwy"(): $Float4
public "xwww"(): $Float4
public "yxxx"(): $Float4
public "yxxw"(): $Float4
public "yxyx"(): $Float4
public "yyyx"(): $Float4
public "yyww"(): $Float4
public "yzxy"(): $Float4
public "yywx"(): $Float4
public "yyyw"(): $Float4
public "yyxy"(): $Float4
public "yyyz"(): $Float4
public "yyzx"(): $Float4
public "yzyy"(): $Float4
public "yywz"(): $Float4
public "yxwy"(): $Float4
public "yyyy"(): $Float4
public "yzxx"(): $Float4
public "yzxw"(): $Float4
public "yzzz"(): $Float4
public "yzyx"(): $Float4
public "yxzw"(): $Float4
public "yxww"(): $Float4
public "yyzy"(): $Float4
public "yyzz"(): $Float4
public "yxwz"(): $Float4
public "yzyz"(): $Float4
public "yxwx"(): $Float4
public "yyxx"(): $Float4
public "yyxz"(): $Float4
public "yyxw"(): $Float4
public "yyzw"(): $Float4
public "yzyw"(): $Float4
public "yzzx"(): $Float4
public "yzzy"(): $Float4
public "yzxz"(): $Float4
public "yywy"(): $Float4
public "ywzx"(): $Float4
public "ywwy"(): $Float4
public "zxxw"(): $Float4
public "zxyw"(): $Float4
public "ywxw"(): $Float4
public "ywxy"(): $Float4
public "ywxz"(): $Float4
public "zxzx"(): $Float4
public "ywyy"(): $Float4
public "zxzy"(): $Float4
public "zxzz"(): $Float4
public "yzww"(): $Float4
public "ywzy"(): $Float4
public "zxxx"(): $Float4
public "ywzz"(): $Float4
public "ywww"(): $Float4
public "zxxz"(): $Float4
public "ywyw"(): $Float4
public "ywwx"(): $Float4
public "ywxx"(): $Float4
public "zxxy"(): $Float4
public "yzzw"(): $Float4
public "yzwy"(): $Float4
public "zxyx"(): $Float4
public "ywyx"(): $Float4
public "yzwx"(): $Float4
public "zxyy"(): $Float4
public "zxyz"(): $Float4
public "yzwz"(): $Float4
public "ywyz"(): $Float4
public "ywzw"(): $Float4
public "ywwz"(): $Float4
public "zyzx"(): $Float4
public "zzxy"(): $Float4
public "zzyz"(): $Float4
public "zzyy"(): $Float4
public "zzzx"(): $Float4
public "zyzy"(): $Float4
public "zxwy"(): $Float4
public "zyyz"(): $Float4
public "zzyw"(): $Float4
public "zzzy"(): $Float4
public "zxww"(): $Float4
public "zyzz"(): $Float4
public "zzzz"(): $Float4
public "zyxy"(): $Float4
public "zyxz"(): $Float4
public "zywy"(): $Float4
public "zywz"(): $Float4
public "zxwx"(): $Float4
public "zxzw"(): $Float4
public "zxwz"(): $Float4
public "zzxz"(): $Float4
public "zzyx"(): $Float4
public "zyxw"(): $Float4
public "zyxx"(): $Float4
public "zyyw"(): $Float4
public "zyzw"(): $Float4
public "zywx"(): $Float4
public "zyyy"(): $Float4
public "zzxw"(): $Float4
public "zyyx"(): $Float4
public "zzxx"(): $Float4
public "zyww"(): $Float4
public "wxxx"(): $Float4
public "zzwz"(): $Float4
public "zwwx"(): $Float4
public "zwwz"(): $Float4
public "wxxw"(): $Float4
public "zwxx"(): $Float4
public "zwzy"(): $Float4
public "wxyx"(): $Float4
public "wxyz"(): $Float4
public "zwxw"(): $Float4
public "wxxz"(): $Float4
public "wxyw"(): $Float4
public "zzwy"(): $Float4
public "wxyy"(): $Float4
public "wxxy"(): $Float4
public "zwwy"(): $Float4
public "zwxy"(): $Float4
public "zwxz"(): $Float4
public "zwyx"(): $Float4
public "zwyy"(): $Float4
public "zzwx"(): $Float4
public "zwzz"(): $Float4
public "zwyw"(): $Float4
public "zzww"(): $Float4
public "zzzw"(): $Float4
public "zwyz"(): $Float4
public "zwzw"(): $Float4
public "zwww"(): $Float4
public "zwzx"(): $Float4
public "xw"(): $Float2
public "zz"(): $Float2
public "ww"(): $Float2
public "xx"(): $Float2
public "yy"(): $Float2
public "yx"(): $Float2
public "yz"(): $Float2
public "xyzw"(): $Float4
public "yw"(): $Float2
public "zw"(): $Float2
public "xy"(): $Float2
public "xyz"(): $Float3
public "serializeToNetwork"(buf: $FriendlyByteBuf$Type): void
public "wzzx"(): $Float4
public "wwxz"(): $Float4
public "wwzz"(): $Float4
public "wzwx"(): $Float4
public "wwzx"(): $Float4
public "wwww"(): $Float4
public "wwxy"(): $Float4
public "wzzy"(): $Float4
public "wzzw"(): $Float4
public "wwyz"(): $Float4
public "wwwx"(): $Float4
public "wwwz"(): $Float4
public "wwyx"(): $Float4
public "wwzw"(): $Float4
public "wzww"(): $Float4
public "wwwy"(): $Float4
public "wzwz"(): $Float4
public "wwyw"(): $Float4
public "wwxx"(): $Float4
public "wwyy"(): $Float4
public "wwxw"(): $Float4
public "wwzy"(): $Float4
public "wzzz"(): $Float4
public "wzwy"(): $Float4
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Float4$Type = ($Float4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Float4_ = $Float4$Type;
}}
declare module "packages/de/ambertation/wunderlib/math/$Matrix4" {
import {$Float3, $Float3$Type} from "packages/de/ambertation/wunderlib/math/$Float3"
import {$Quaternion, $Quaternion$Type} from "packages/de/ambertation/wunderlib/math/$Quaternion"
import {$Float4, $Float4$Type} from "packages/de/ambertation/wunderlib/math/$Float4"
import {$Bounds$Interpolate, $Bounds$Interpolate$Type} from "packages/de/ambertation/wunderlib/math/$Bounds$Interpolate"

export class $Matrix4 {
static readonly "IDENTITY": $Matrix4
static readonly "M00": integer
static readonly "M01": integer
static readonly "M02": integer
static readonly "M03": integer
static readonly "M10": integer
static readonly "M11": integer
static readonly "M12": integer
static readonly "M13": integer
static readonly "M20": integer
static readonly "M21": integer
static readonly "M22": integer
static readonly "M23": integer
static readonly "M30": integer
static readonly "M31": integer
static readonly "M32": integer
static readonly "M33": integer
static readonly "R0C0": integer
static readonly "R0C1": integer
static readonly "R0C2": integer
static readonly "R0C3": integer
static readonly "R1C0": integer
static readonly "R1C1": integer
static readonly "R1C2": integer
static readonly "R1C3": integer
static readonly "R2C0": integer
static readonly "R2C1": integer
static readonly "R2C2": integer
static readonly "R2C3": integer
static readonly "R3C0": integer
static readonly "R3C1": integer
static readonly "R3C2": integer
static readonly "R3C3": integer


public "mul"(B: $Matrix4$Type): $Matrix4
public "toString"(): string
public static "copyOf"(newM: (double)[]): $Matrix4
public "transform"(point: $Float3$Type): $Float3
public "transform"(v: $Float4$Type): $Float4
public static "of"(newM: (double)[]): $Matrix4
public "det"(): double
public "transformDirection"(dir: $Float3$Type): $Float3
public "translation"(): $Float3
public "inverted"(): $Matrix4
public "isOrthogonal"(): boolean
public static "ofRotation"(unitLength: $Quaternion$Type): $Matrix4
public static "ofBasis"(xAxis: $Float3$Type, yAxis: $Float3$Type, zAxis: $Float3$Type): $Matrix4
public "transposed"(): $Matrix4
public "getUnitCubeCorner"(corner: $Bounds$Interpolate$Type, blockAligned: boolean): $Float3
public "getBasisX"(): $Float3
public "det3x3"(): double
public static "ofTranslation"(t: $Float3$Type): $Matrix4
public "getBasisY"(): $Float3
public "getBasisZ"(): $Float3
public static "ofScale"(s: $Float3$Type): $Matrix4
public "getUnitCubeCorners"(blockAligned: boolean): ($Float3)[]
public "getUnitCubeCornersAndCenter"(blockAligned: boolean): ($Float3)[]
get "orthogonal"(): boolean
get "basisX"(): $Float3
get "basisY"(): $Float3
get "basisZ"(): $Float3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix4$Type = ($Matrix4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix4_ = $Matrix4$Type;
}}
declare module "packages/de/ambertation/wunderlib/math/$Bounds$Interpolate" {
import {$Float3, $Float3$Type} from "packages/de/ambertation/wunderlib/math/$Float3"

export class $Bounds$Interpolate {
static readonly "MIN_MIN_MIN": $Bounds$Interpolate
static readonly "MIN_MIN_MAX": $Bounds$Interpolate
static readonly "MIN_MAX_MIN": $Bounds$Interpolate
static readonly "MIN_MAX_MAX": $Bounds$Interpolate
static readonly "MAX_MAX_MAX": $Bounds$Interpolate
static readonly "MAX_MAX_MIN": $Bounds$Interpolate
static readonly "MAX_MIN_MAX": $Bounds$Interpolate
static readonly "MAX_MIN_MIN": $Bounds$Interpolate
static readonly "CORNERS": ($Bounds$Interpolate)[]
static readonly "CENTER": $Bounds$Interpolate
static readonly "CORNERS_AND_CENTER": ($Bounds$Interpolate)[]
readonly "t": $Float3
readonly "idx": byte

constructor(tx: float, ty: float, tz: float)

public "opposite"(): $Bounds$Interpolate
public "blockAlignedLerp"(min: $Float3$Type, max: $Float3$Type): $Float3
public static "blockAlignedLerp"(t: $Float3$Type, min: $Float3$Type, max: $Float3$Type): $Float3
public "lerp"(min: $Float3$Type, max: $Float3$Type): $Float3
public static "lerp"(t: double, min: double, max: double): double
public static "lerp"(t: double, min: $Float3$Type, max: $Float3$Type): $Float3
public static "lerp"(t: $Float3$Type, min: $Float3$Type, max: $Float3$Type): $Float3
public "oppositeX"(): $Bounds$Interpolate
public "oppositeZ"(): $Bounds$Interpolate
public "oppositeY"(): $Bounds$Interpolate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Bounds$Interpolate$Type = ($Bounds$Interpolate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Bounds$Interpolate_ = $Bounds$Interpolate$Type;
}}
