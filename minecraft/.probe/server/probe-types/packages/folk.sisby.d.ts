declare module "packages/folk/sisby/surveyor/packet/$S2CUpdateRegionPacket" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$RegionSummary, $RegionSummary$Type} from "packages/folk/sisby/surveyor/terrain/$RegionSummary"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ChunkSummary, $ChunkSummary$Type} from "packages/folk/sisby/surveyor/terrain/$ChunkSummary"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$S2CPacket, $S2CPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CPacket"

export class $S2CUpdateRegionPacket extends $Record implements $S2CPacket {
static readonly "ID": $ResourceLocation

constructor(shared: boolean, regionPos: $ChunkPos$Type, biomePalette: $List$Type<(integer)>, blockPalette: $List$Type<(integer)>, set: $BitSet$Type, chunks: $List$Type<($ChunkSummary$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(shared: boolean, regionPos: $ChunkPos$Type, summary: $RegionSummary$Type, keys: $BitSet$Type): $S2CUpdateRegionPacket
public static "read"(buf: $FriendlyByteBuf$Type): $S2CUpdateRegionPacket
public "getId"(): $ResourceLocation
public "set"(): $BitSet
public "shared"(): boolean
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
public "biomePalette"(): $List<(integer)>
public "blockPalette"(): $List<(integer)>
public "regionPos"(): $ChunkPos
public "chunks"(): $List<($ChunkSummary)>
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type): void
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, mode: $NetworkMode$Type): void
public "send"(server: $MinecraftServer$Type): void
public "send"(sender: $ServerPlayer$Type, server: $MinecraftServer$Type): void
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(player: $ServerPlayer$Type): void
public "send"(world: $ServerLevel$Type): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CUpdateRegionPacket$Type = ($S2CUpdateRegionPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CUpdateRegionPacket_ = $S2CUpdateRegionPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$LayerSummary$Raw" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"

export class $LayerSummary$Raw extends $Record {

constructor(exists: $BitSet$Type, depths: (integer)[], biomes: (integer)[], blocks: (integer)[], lightLevels: (integer)[], waterDepths: (integer)[], waterLights: (integer)[])

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "exists"(): $BitSet
public "blocks"(): (integer)[]
public "biomes"(): (integer)[]
public "depths"(): (integer)[]
public "lightLevels"(): (integer)[]
public "waterLights"(): (integer)[]
public "waterDepths"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerSummary$Raw$Type = ($LayerSummary$Raw);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerSummary$Raw_ = $LayerSummary$Raw$Type;
}}
declare module "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView" {
import {$RegistryPalette, $RegistryPalette$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $RegistryPalette$ValueView implements $IdMap<(T)> {

constructor(this$0: $RegistryPalette$Type<(any)>)

public "iterator"(): $Iterator<(T)>
public "registry"(): $Registry<(T)>
public "getId"(value: T): integer
public "byId"(index: integer): T
public "size"(): integer
public "byIdOrThrow"(arg0: integer): T
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryPalette$ValueView$Type = ($RegistryPalette$ValueView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryPalette$ValueView_ = $RegistryPalette$ValueView$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$RegionStructureSummary" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$StructureStartSummary, $StructureStartSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructureStartSummary"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$StructureStart, $StructureStart$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import {$StructurePieceSummary, $StructurePieceSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructurePieceSummary"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $RegionStructureSummary {
static readonly "KEY_STRUCTURES": string
static readonly "KEY_STARTS": string
static readonly "KEY_PIECES": string


public "get"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): $StructureStartSummary
public "put"(world: $ServerLevel$Type, start: $StructureStart$Type): void
public "put"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type, summary: $StructureStartSummary$Type): void
public "contains"(world: $Level$Type, start: $StructureStart$Type): boolean
public "contains"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
public "keySet"(): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "isDirty"(): boolean
public static "readStructurePieceNbt"(nbt: $CompoundTag$Type): $StructurePieceSummary
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionStructureSummary$Type = ($RegionStructureSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionStructureSummary_ = $RegionStructureSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SyncLandmarksAddedPacket" {
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SyncPacket, $SyncPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncPacket"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LandmarkType, $LandmarkType$Type} from "packages/folk/sisby/surveyor/landmark/$LandmarkType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SyncLandmarksAddedPacket extends $Record implements $SyncPacket {
static readonly "ID": $ResourceLocation

constructor(landmarks: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(keySet: $Multimap$Type<($LandmarkType$Type<(any)>), ($BlockPos$Type)>, summary: $WorldLandmarks$Type): $SyncLandmarksAddedPacket
public static "read"(buf: $FriendlyByteBuf$Type): $SyncLandmarksAddedPacket
public "getId"(): $ResourceLocation
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
public "landmarks"(): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
public "send"(sender: $ServerPlayer$Type, world: $Level$Type, mode: $NetworkMode$Type): void
public "send"(): void
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type): void
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, mode: $NetworkMode$Type): void
public "send"(server: $MinecraftServer$Type): void
public "send"(sender: $ServerPlayer$Type, server: $MinecraftServer$Type): void
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(player: $ServerPlayer$Type): void
public "send"(world: $ServerLevel$Type): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncLandmarksAddedPacket$Type = ($SyncLandmarksAddedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncLandmarksAddedPacket_ = $SyncLandmarksAddedPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/config/$NetworkMode" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $NetworkMode extends $Enum<($NetworkMode)> implements $Comparable<($NetworkMode)> {
static readonly "NONE": $NetworkMode
static readonly "SOLO": $NetworkMode
static readonly "GROUP": $NetworkMode
static readonly "SERVER": $NetworkMode


public static "values"(): ($NetworkMode)[]
public static "valueOf"(name: string): $NetworkMode
public "atMost"(other: $NetworkMode$Type): boolean
public "atLeast"(other: $NetworkMode$Type): boolean
public "compareTo"(arg0: $NetworkMode$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkMode$Type = (("server") | ("solo") | ("none") | ("group")) | ($NetworkMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkMode_ = $NetworkMode$Type;
}}
declare module "packages/folk/sisby/surveyor/$PlayerSummary" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"

export interface $PlayerSummary {

 "pos"(): $Vec3
 "copyFrom"(oldSummary: $PlayerSummary$Type): void
 "dimension"(): $ResourceKey<($Level)>
 "online"(): boolean
 "username"(): string
 "yaw"(): float
 "exploration"(): $SurveyorExploration
 "viewDistance"(): integer
}

export namespace $PlayerSummary {
const KEY_DATA: string
const KEY_USERNAME: string
function of(player: $ServerPlayer$Type): $PlayerSummary
function of(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSummary$Type = ($PlayerSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSummary_ = $PlayerSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/client/$SurveyorNetworkHandler" {
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$NetworkHandlerSummary, $NetworkHandlerSummary$Type} from "packages/folk/sisby/surveyor/client/$NetworkHandlerSummary"

export interface $SurveyorNetworkHandler {

 "surveyor$getSummary"(): $NetworkHandlerSummary
 "getProfile"(): $GameProfile
}

export namespace $SurveyorNetworkHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorNetworkHandler$Type = ($SurveyorNetworkHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorNetworkHandler_ = $SurveyorNetworkHandler$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$RegionSummary" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$S2CUpdateRegionPacket, $S2CUpdateRegionPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CUpdateRegionPacket"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChunkSummary, $ChunkSummary$Type} from "packages/folk/sisby/surveyor/terrain/$ChunkSummary"
import {$RegistryPalette$ValueView, $RegistryPalette$ValueView$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView"

export class $RegionSummary {
static readonly "REGION_POWER": integer
static readonly "REGION_SIZE": integer
static readonly "BITSET_SIZE": integer
static readonly "KEY_BIOMES": string
static readonly "KEY_BLOCKS": string
static readonly "KEY_BIOME_WATER": string
static readonly "KEY_BIOME_FOLIAGE": string
static readonly "KEY_BIOME_GRASS": string
static readonly "KEY_BLOCK_COLORS": string
static readonly "KEY_CHUNKS": string

constructor(manager: $RegistryAccess$Type)

public "get"(pos: $ChunkPos$Type): $ChunkSummary
public "contains"(pos: $ChunkPos$Type): boolean
public "isDirty"(): boolean
public "readUpdatePacket"(manager: $RegistryAccess$Type, packet: $S2CUpdateRegionPacket$Type): $BitSet
public static "xForBit"(i: integer): integer
public static "zForBit"(i: integer): integer
public "createUpdatePacket"(shared: boolean, rPos: $ChunkPos$Type, set: $BitSet$Type): $S2CUpdateRegionPacket
public static "bitForChunk"(pos: $ChunkPos$Type): integer
public static "chunkForBit"(rPos: $ChunkPos$Type, i: integer): $ChunkPos
public "getBlockPalette"(): $RegistryPalette$ValueView<>
public "getBiomePalette"(): $RegistryPalette$ValueView<>
public "putChunk"(world: $Level$Type, chunk: $LevelChunk$Type): void
public static "chunkToRegion"(xz: integer): integer
public static "readNbt"(nbt: $CompoundTag$Type, manager: $RegistryAccess$Type, pos: $ChunkPos$Type): $RegionSummary
public "bitSet"(): $BitSet
public "writeNbt"(manager: $RegistryAccess$Type, nbt: $CompoundTag$Type, regionPos: $ChunkPos$Type): $CompoundTag
public static "mapIterable"<T, O>(palette: $Iterable$Type<(T)>, mapper: $Function$Type<(T), (O)>): $List<(O)>
public static "regionToChunk"(xz: integer): integer
public static "regionRelative"(xz: integer): integer
public static "bitForXZ"(x: integer, z: integer): integer
get "dirty"(): boolean
get "blockPalette"(): $RegistryPalette$ValueView<>
get "biomePalette"(): $RegistryPalette$ValueView<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionSummary$Type = ($RegionSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionSummary_ = $RegionSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$ServerSummary" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PacketSender, $PacketSender$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$PacketSender"

export class $ServerSummary {
static readonly "KEY_GROUPS": string
static readonly "HOST": $UUID

constructor(offlineSummaries: $Map$Type<($UUID$Type), ($PlayerSummary$Type)>, shareGroups: $Map$Type<($UUID$Type), ($Set$Type<($UUID$Type)>)>)

public static "load"(server: $MinecraftServer$Type): $ServerSummary
public static "of"(server: $MinecraftServer$Type): $ServerSummary
public "save"(server: $MinecraftServer$Type, force: boolean, suppressLogs: boolean): void
public "isDirty"(): boolean
public "groupOtherServerPlayers"(player: $UUID$Type, server: $MinecraftServer$Type): $Set<($ServerPlayer)>
public "getOfflineSummaries"(server: $MinecraftServer$Type): $Map<($UUID), ($PlayerSummary)>
public "getPlayer"(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
public "groupPlayers"(player: $UUID$Type, server: $MinecraftServer$Type): $Set<($PlayerSummary)>
public "groupSize"(player: $UUID$Type): integer
public "joinGroup"(player1: $UUID$Type, player2: $UUID$Type, server: $MinecraftServer$Type): void
public "groupExploration"(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
public "leaveGroup"(player: $UUID$Type, server: $MinecraftServer$Type): void
public static "loadShareGroups"(server: $MinecraftServer$Type): $Map<($UUID), ($Set<($UUID)>)>
public "getGroupSummaries"(player: $UUID$Type, server: $MinecraftServer$Type): $Map<($UUID), ($PlayerSummary)>
public "getExploration"(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
public "groupServerPlayers"(player: $UUID$Type, server: $MinecraftServer$Type): $Set<($ServerPlayer)>
public "getGroup"(player: $UUID$Type): $Set<($UUID)>
public "getGroups"(): $Set<($Set<($UUID)>)>
public "updatePlayer"(uuid: $UUID$Type, nbt: $CompoundTag$Type, online: boolean, server: $MinecraftServer$Type): void
public static "onPlayerJoin"(handler: $ServerGamePacketListenerImpl$Type, sender: $PacketSender$Type, server: $MinecraftServer$Type): void
public static "onTick"(server: $MinecraftServer$Type): void
get "dirty"(): boolean
get "groups"(): $Set<($Set<($UUID)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerSummary$Type = ($ServerSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerSummary_ = $ServerSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$WorldStructureSummary" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$StructureStart, $StructureStart$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureStart"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePieceSummary, $StructurePieceSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructurePieceSummary"
import {$S2CStructuresAddedPacket, $S2CStructuresAddedPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CStructuresAddedPacket"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$StructureStartSummary, $StructureStartSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructureStartSummary"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$File, $File$Type} from "packages/java/io/$File"
import {$RegionStructureSummary, $RegionStructureSummary$Type} from "packages/folk/sisby/surveyor/structure/$RegionStructureSummary"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldStructureSummary {
static readonly "KEY_STRUCTURES": string
static readonly "KEY_TYPE": string
static readonly "KEY_TAGS": string

constructor(worldKey: $ResourceKey$Type<($Level$Type)>, regions: $Map$Type<($ChunkPos$Type), ($RegionStructureSummary$Type)>, structureTypes: $Map$Type<($ResourceKey$Type<($Structure$Type)>), ($ResourceKey$Type<($StructureType$Type<(any)>)>)>, structureTags: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($TagKey$Type<($Structure$Type)>)>)

public "get"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): $StructureStartSummary
public "put"(world: $Level$Type, key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type, summary: $StructureStartSummary$Type, type: $ResourceKey$Type<($StructureType$Type<(any)>)>, tagKeys: $Collection$Type<($TagKey$Type<($Structure$Type)>)>): void
public "put"(world: $ServerLevel$Type, start: $StructureStart$Type): void
public static "load"(world: $Level$Type, folder: $File$Type): $WorldStructureSummary
public "contains"(world: $Level$Type, start: $StructureStart$Type): boolean
public "contains"(key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
public "save"(world: $Level$Type, folder: $File$Type): integer
public "keySet"(exploration: $SurveyorExploration$Type): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "getType"(key: $ResourceKey$Type<($Structure$Type)>): $ResourceKey<($StructureType<(any)>)>
public "isDirty"(): boolean
public "asMap"(exploration: $SurveyorExploration$Type): $Map<($ResourceKey<($Structure)>), ($Map<($ChunkPos), ($StructureStartSummary)>)>
public static "readStructurePieceNbt"(nbt: $CompoundTag$Type): $StructurePieceSummary
public "readUpdatePacket"(world: $Level$Type, packet: $S2CStructuresAddedPacket$Type): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
public "createUpdatePacket"(shared: boolean, keySet: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>): $S2CStructuresAddedPacket
public static "onStructurePlace"(world: $ServerLevel$Type, start: $StructureStart$Type): void
public static "onChunkLoad"(world: $ServerLevel$Type, chunk: $LevelChunk$Type): void
public "getTags"(key: $ResourceKey$Type<($Structure$Type)>): $Collection<($TagKey<($Structure)>)>
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStructureSummary$Type = ($WorldStructureSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldStructureSummary_ = $WorldStructureSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$C2SPacket" {
import {$SurveyorPacket, $SurveyorPacket$Type} from "packages/folk/sisby/surveyor/packet/$SurveyorPacket"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $C2SPacket extends $SurveyorPacket {

 "send"(): void
 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $C2SPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $C2SPacket$Type = ($C2SPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $C2SPacket_ = $C2SPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SyncPacket" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$C2SPacket, $C2SPacket$Type} from "packages/folk/sisby/surveyor/packet/$C2SPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$S2CPacket, $S2CPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CPacket"

export interface $SyncPacket extends $C2SPacket, $S2CPacket {

 "send"(sender: $ServerPlayer$Type, world: $Level$Type, mode: $NetworkMode$Type): void
 "send"(): void
 "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type): void
 "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, mode: $NetworkMode$Type): void
 "send"(server: $MinecraftServer$Type): void
 "send"(sender: $ServerPlayer$Type, server: $MinecraftServer$Type): void
 "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
 "send"(player: $ServerPlayer$Type): void
 "send"(world: $ServerLevel$Type): void
 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $SyncPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncPacket$Type = ($SyncPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncPacket_ = $SyncPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$S2CStructuresAddedPacket" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$StructureType, $StructureType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$WorldStructureSummary, $WorldStructureSummary$Type} from "packages/folk/sisby/surveyor/structure/$WorldStructureSummary"
import {$StructureStartSummary, $StructureStartSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructureStartSummary"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"
import {$S2CPacket, $S2CPacket$Type} from "packages/folk/sisby/surveyor/packet/$S2CPacket"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $S2CStructuresAddedPacket extends $Record implements $S2CPacket {
static readonly "ID": $ResourceLocation

constructor(shared: boolean, structures: $Map$Type<($ResourceKey$Type<($Structure$Type)>), ($Map$Type<($ChunkPos$Type), ($StructureStartSummary$Type)>)>, types: $Map$Type<($ResourceKey$Type<($Structure$Type)>), ($ResourceKey$Type<($StructureType$Type<(any)>)>)>, tags: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($TagKey$Type<($Structure$Type)>)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(shared: boolean, key: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type, summary: $WorldStructureSummary$Type): $S2CStructuresAddedPacket
public static "of"(shared: boolean, keys: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>, summary: $WorldStructureSummary$Type): $S2CStructuresAddedPacket
public static "read"(buf: $FriendlyByteBuf$Type): $S2CStructuresAddedPacket
public "getId"(): $ResourceLocation
public "shared"(): boolean
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
public "types"(): $Map<($ResourceKey<($Structure)>), ($ResourceKey<($StructureType<(any)>)>)>
public "structures"(): $Map<($ResourceKey<($Structure)>), ($Map<($ChunkPos), ($StructureStartSummary)>)>
public "tags"(): $Multimap<($ResourceKey<($Structure)>), ($TagKey<($Structure)>)>
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type): void
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, mode: $NetworkMode$Type): void
public "send"(server: $MinecraftServer$Type): void
public "send"(sender: $ServerPlayer$Type, server: $MinecraftServer$Type): void
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(player: $ServerPlayer$Type): void
public "send"(world: $ServerLevel$Type): void
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CStructuresAddedPacket$Type = ($S2CStructuresAddedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CStructuresAddedPacket_ = $S2CStructuresAddedPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/client/$NetworkHandlerSummary" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetworkHandlerSummary {

constructor(handler: $ClientPacketListener$Type)

public static "of"(handler: $ClientPacketListener$Type): $NetworkHandlerSummary
public "getPlayer"(uuid: $UUID$Type): $PlayerSummary
public "mergeSummaries"(summaries: $Map$Type<($UUID$Type), ($PlayerSummary$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkHandlerSummary$Type = ($NetworkHandlerSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkHandlerSummary_ = $NetworkHandlerSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$WorldTerrainSummary" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$RegionSummary, $RegionSummary$Type} from "packages/folk/sisby/surveyor/terrain/$RegionSummary"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ChunkSummary, $ChunkSummary$Type} from "packages/folk/sisby/surveyor/terrain/$ChunkSummary"
import {$RegistryPalette$ValueView, $RegistryPalette$ValueView$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldTerrainSummary {

constructor(worldKey: $ResourceKey$Type<($Level$Type)>, registryManager: $RegistryAccess$Type, regions: $Map$Type<($ChunkPos$Type), ($RegionSummary$Type)>)

public "get"(pos: $ChunkPos$Type): $ChunkSummary
public "put"(world: $Level$Type, chunk: $LevelChunk$Type): void
public static "load"(world: $Level$Type, folder: $File$Type): $WorldTerrainSummary
public "contains"(pos: $ChunkPos$Type): boolean
public "save"(world: $Level$Type, folder: $File$Type): integer
public "getRegion"(regionPos: $ChunkPos$Type): $RegionSummary
public "isDirty"(): boolean
public static "toKeys"(bitSets: $Map$Type<($ChunkPos$Type), ($BitSet$Type)>): $Set<($ChunkPos)>
public static "toKeys"(bitSets: $Map$Type<($ChunkPos$Type), ($BitSet$Type)>, regionComparator: $Comparator$Type<($ChunkPos$Type)>): $Set<($ChunkPos)>
public static "toKeys"(bitSets: $Map$Type<($ChunkPos$Type), ($BitSet$Type)>, originChunk: $ChunkPos$Type): $Set<($ChunkPos)>
public "getBlockPalette"(pos: $ChunkPos$Type): $RegistryPalette$ValueView<>
public "getBiomePalette"(pos: $ChunkPos$Type): $RegistryPalette$ValueView<>
public "bitSet"(exploration: $SurveyorExploration$Type): $Map<($ChunkPos), ($BitSet)>
public static "onChunkUnload"(world: $Level$Type, chunk: $LevelChunk$Type): void
public static "onChunkLoad"(world: $Level$Type, chunk: $LevelChunk$Type): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldTerrainSummary$Type = ($WorldTerrainSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldTerrainSummary_ = $WorldTerrainSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SurveyorPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $SurveyorPacket {

 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $SurveyorPacket {
const MAX_PAYLOAD_SIZE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorPacket$Type = ($SurveyorPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorPacket_ = $SurveyorPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/structure/$StructurePieceSummary" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$StructurePieceSerializationContext, $StructurePieceSerializationContext$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceSerializationContext"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ChunkGenerator, $ChunkGenerator$Type} from "packages/net/minecraft/world/level/chunk/$ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$Type} from "packages/net/minecraft/world/level/levelgen/structure/pieces/$StructurePieceType"
import {$StructurePiece, $StructurePiece$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructurePiece"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$StructureManager, $StructureManager$Type} from "packages/net/minecraft/world/level/$StructureManager"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StructurePieceSummary extends $StructurePiece {
static readonly "CAVE_AIR": $BlockState
 "boundingBox": $BoundingBox
 "genDepth": integer

constructor(type: $StructurePieceType$Type, chainLength: integer, boundingBox: $BoundingBox$Type, pieceNbt: $CompoundTag$Type)
constructor(nbt: $CompoundTag$Type)

public "getPieceNbt"(): $CompoundTag
public static "fromPiece"(context: $StructurePieceSerializationContext$Type, piece: $StructurePiece$Type, withNbt: boolean): $StructurePieceSummary
public "toNbt"(): $CompoundTag
public "postProcess"(world: $WorldGenLevel$Type, structureAccessor: $StructureManager$Type, chunkGenerator: $ChunkGenerator$Type, random: $RandomSource$Type, chunkBox: $BoundingBox$Type, chunkPos: $ChunkPos$Type, pivot: $BlockPos$Type): void
get "pieceNbt"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePieceSummary$Type = ($StructurePieceSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePieceSummary_ = $StructurePieceSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/$WorldLandmarks" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$SyncLandmarksRemovedPacket, $SyncLandmarksRemovedPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncLandmarksRemovedPacket"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LandmarkType, $LandmarkType$Type} from "packages/folk/sisby/surveyor/landmark/$LandmarkType"
import {$File, $File$Type} from "packages/java/io/$File"
import {$SyncLandmarksAddedPacket, $SyncLandmarksAddedPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncLandmarksAddedPacket"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldLandmarks {

constructor(worldKey: $ResourceKey$Type<($Level$Type)>, landmarks: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>)

public "remove"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, type: $LandmarkType$Type<(any)>, pos: $BlockPos$Type): void
public "remove"(world: $Level$Type, type: $LandmarkType$Type<(any)>, pos: $BlockPos$Type): void
public "get"<T extends $Landmark<(T)>>(type: $LandmarkType$Type<(T)>, pos: $BlockPos$Type): $Landmark<(T)>
public "put"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, landmark: $Landmark$Type<(any)>): void
public "put"(world: $Level$Type, landmark: $Landmark$Type<(any)>): void
public static "load"(world: $Level$Type, folder: $File$Type): $WorldLandmarks
public "contains"(type: $LandmarkType$Type<(any)>, pos: $BlockPos$Type): boolean
public "save"(world: $Level$Type, folder: $File$Type): integer
public "keySet"(exploration: $SurveyorExploration$Type): $Multimap<($LandmarkType<(any)>), ($BlockPos)>
public "removeAll"(world: $Level$Type, clazz: $Class$Type<(any)>, pos: $BlockPos$Type): void
public "isDirty"(): boolean
public "asMap"(exploration: $SurveyorExploration$Type): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
public "asMap"<T extends $Landmark<(T)>>(type: $LandmarkType$Type<(T)>, exploration: $SurveyorExploration$Type): $Map<($BlockPos), (T)>
public "readUpdatePacket"(world: $Level$Type, packet: $SyncLandmarksAddedPacket$Type, sender: $ServerPlayer$Type): void
public "readUpdatePacket"(world: $Level$Type, packet: $SyncLandmarksRemovedPacket$Type, sender: $ServerPlayer$Type): void
public "removeForBatch"(changed: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>, type: $LandmarkType$Type<(any)>, pos: $BlockPos$Type): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
public "handleChanged"(world: $Level$Type, changed: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>, local: boolean, sender: $ServerPlayer$Type): void
public "createUpdatePacket"(keySet: $Multimap$Type<($LandmarkType$Type<(any)>), ($BlockPos$Type)>): $SyncLandmarksAddedPacket
public "putForBatch"(changed: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>, landmark: $Landmark$Type<(any)>): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
public "putLocal"(world: $Level$Type, landmark: $Landmark$Type<(any)>): void
public "removeLocal"(world: $Level$Type, type: $LandmarkType$Type<(any)>, pos: $BlockPos$Type): void
get "dirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldLandmarks$Type = ($WorldLandmarks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldLandmarks_ = $WorldLandmarks$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorServer" {
import {$ServerSummary, $ServerSummary$Type} from "packages/folk/sisby/surveyor/$ServerSummary"

export interface $SurveyorServer {

 "surveyor$getSummary"(): $ServerSummary

(): $ServerSummary
}

export namespace $SurveyorServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorServer$Type = ($SurveyorServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorServer_ = $SurveyorServer$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$S2CPacket" {
import {$SurveyorPacket, $SurveyorPacket$Type} from "packages/folk/sisby/surveyor/packet/$SurveyorPacket"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"

export interface $S2CPacket extends $SurveyorPacket {

 "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type): void
 "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, mode: $NetworkMode$Type): void
 "send"(server: $MinecraftServer$Type): void
 "send"(sender: $ServerPlayer$Type, server: $MinecraftServer$Type): void
 "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
 "send"(player: $ServerPlayer$Type): void
 "send"(world: $ServerLevel$Type): void
 "getId"(): $ResourceLocation
 "writeBuf"(arg0: $FriendlyByteBuf$Type): void
 "toBufs"(): $Collection<($FriendlyByteBuf)>
}

export namespace $S2CPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $S2CPacket$Type = ($S2CPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $S2CPacket_ = $S2CPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/util/$RegistryPalette" {
import {$IntSpliterator, $IntSpliterator$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSpliterator"
import {$IntIterator, $IntIterator$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntIterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntConsumer, $IntConsumer$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntConsumer"
import {$IntIterable, $IntIterable$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntIterable"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$IntConsumer as $IntConsumer$0, $IntConsumer$Type as $IntConsumer$0$Type} from "packages/java/util/function/$IntConsumer"
import {$RegistryPalette$ValueView, $RegistryPalette$ValueView$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette$ValueView"

export class $RegistryPalette<T> implements $IntIterable {

constructor(registry: $Registry$Type<(T)>)

public "get"(index: integer): integer
public "iterator"(): $IntIterator
public "find"(value: integer): integer
public "view"(): $RegistryPalette$ValueView<>
public "findOrAdd"(value: T): integer
public "findOrAdd"(value: integer): integer
public "forEach"(arg0: $IntConsumer$0$Type): void
/**
 * 
 * @deprecated
 */
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "forEach"(arg0: $IntConsumer$Type): void
public "intSpliterator"(): $IntSpliterator
public "intIterator"(): $IntIterator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryPalette$Type<T> = ($RegistryPalette<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryPalette_<T> = $RegistryPalette$Type<(T)>;
}}
declare module "packages/folk/sisby/surveyor/$PlayerSummary$ServerPlayerEntitySummary" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$PlayerSummary$PlayerEntitySummary, $PlayerSummary$PlayerEntitySummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary$PlayerEntitySummary"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"

export class $PlayerSummary$ServerPlayerEntitySummary extends $PlayerSummary$PlayerEntitySummary implements $PlayerSummary {

constructor(player: $ServerPlayer$Type)

public "read"(nbt: $CompoundTag$Type): void
public "copyFrom"(oldSummary: $PlayerSummary$Type): void
public "writeNbt"(nbt: $CompoundTag$Type): void
public "setViewDistance"(viewDistance: integer): void
public "exploration"(): $SurveyorExploration
public "viewDistance"(): integer
public static "of"(player: $ServerPlayer$Type): $PlayerSummary
public static "of"(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
public "pos"(): $Vec3
public "dimension"(): $ResourceKey<($Level)>
public "online"(): boolean
public "username"(): string
public "yaw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSummary$ServerPlayerEntitySummary$Type = ($PlayerSummary$ServerPlayerEntitySummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSummary$ServerPlayerEntitySummary_ = $PlayerSummary$ServerPlayerEntitySummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$WorldSummary" {
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$WorldTerrainSummary, $WorldTerrainSummary$Type} from "packages/folk/sisby/surveyor/terrain/$WorldTerrainSummary"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$WorldStructureSummary, $WorldStructureSummary$Type} from "packages/folk/sisby/surveyor/structure/$WorldStructureSummary"

export class $WorldSummary extends $Record {

constructor(terrain: $WorldTerrainSummary$Type, structures: $WorldStructureSummary$Type, landmarks: $WorldLandmarks$Type, isClient: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "load"(world: $Level$Type, folder: $File$Type, isClient: boolean): $WorldSummary
public static "of"(world: $Level$Type): $WorldSummary
public "save"(world: $Level$Type, folder: $File$Type, suppressLogs: boolean): void
public "isDirty"(): boolean
public "isClient"(): boolean
public static "enableLandmarks"(): void
public static "enableStructures"(): void
public static "enableTerrain"(): void
public "structures"(): $WorldStructureSummary
public "landmarks"(): $WorldLandmarks
public "terrain"(): $WorldTerrainSummary
get "dirty"(): boolean
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSummary$Type = ($WorldSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSummary_ = $WorldSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/terrain/$ChunkSummary" {
import {$LayerSummary$Raw, $LayerSummary$Raw$Type} from "packages/folk/sisby/surveyor/terrain/$LayerSummary$Raw"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$RegistryPalette, $RegistryPalette$Type} from "packages/folk/sisby/surveyor/util/$RegistryPalette"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChunkSummary {
static readonly "MINIMUM_AIR_DEPTH": integer
static readonly "KEY_AIR_COUNT": string
static readonly "KEY_LAYERS": string

constructor(buf: $FriendlyByteBuf$Type)
constructor(nbt: $CompoundTag$Type)
constructor(world: $Level$Type, chunk: $LevelChunk$Type, layerHeights: (integer)[], biomePalette: $RegistryPalette$Type<($Biome$Type)>, blockPalette: $RegistryPalette$Type<($Block$Type)>, countAir: boolean)

public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "getAirCount"(): integer
public "remap"(biomeRemap: $Map$Type<(integer), (integer)>, blockRemap: $Map$Type<(integer), (integer)>): void
public "writeNbt"(nbt: $CompoundTag$Type): $CompoundTag
public "toSingleLayer"(minY: integer, maxY: integer, worldHeight: integer): $LayerSummary$Raw
get "airCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkSummary$Type = ($ChunkSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkSummary_ = $ChunkSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/packet/$SyncLandmarksRemovedPacket" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$SyncPacket, $SyncPacket$Type} from "packages/folk/sisby/surveyor/packet/$SyncPacket"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LandmarkType, $LandmarkType$Type} from "packages/folk/sisby/surveyor/landmark/$LandmarkType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NetworkMode, $NetworkMode$Type} from "packages/folk/sisby/surveyor/config/$NetworkMode"

export class $SyncLandmarksRemovedPacket extends $Record implements $SyncPacket {
static readonly "ID": $ResourceLocation

constructor(landmarks: $Multimap$Type<($LandmarkType$Type<(any)>), ($BlockPos$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(type: $LandmarkType$Type<(any)>, pos: $BlockPos$Type): $SyncLandmarksRemovedPacket
public static "read"(buf: $FriendlyByteBuf$Type): $SyncLandmarksRemovedPacket
public "getId"(): $ResourceLocation
public "writeBuf"(buf: $FriendlyByteBuf$Type): void
public "landmarks"(): $Multimap<($LandmarkType<(any)>), ($BlockPos)>
public "send"(sender: $ServerPlayer$Type, world: $Level$Type, mode: $NetworkMode$Type): void
public "send"(): void
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type): void
public "send"(sender: $ServerPlayer$Type, world: $ServerLevel$Type, mode: $NetworkMode$Type): void
public "send"(server: $MinecraftServer$Type): void
public "send"(sender: $ServerPlayer$Type, server: $MinecraftServer$Type): void
public "send"(players: $Collection$Type<($ServerPlayer$Type)>): void
public "send"(player: $ServerPlayer$Type): void
public "send"(world: $ServerLevel$Type): void
public "toBufs"(): $Collection<($FriendlyByteBuf)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncLandmarksRemovedPacket$Type = ($SyncLandmarksRemovedPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncLandmarksRemovedPacket_ = $SyncLandmarksRemovedPacket$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/$LandmarkType" {
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $LandmarkType<T extends $Landmark<(T)>> {

 "id"(): $ResourceLocation
 "createCodec"(arg0: $BlockPos$Type): $Codec<(T)>
}

export namespace $LandmarkType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LandmarkType$Type<T> = ($LandmarkType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LandmarkType_<T> = $LandmarkType$Type<(T)>;
}}
declare module "packages/folk/sisby/surveyor/structure/$StructureStartSummary" {
import {$BoundingBox, $BoundingBox$Type} from "packages/net/minecraft/world/level/levelgen/structure/$BoundingBox"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructurePieceSummary, $StructurePieceSummary$Type} from "packages/folk/sisby/surveyor/structure/$StructurePieceSummary"

export class $StructureStartSummary {

constructor(children: $Collection$Type<($StructurePieceSummary$Type)>)

public "getChildren"(): $Collection<($StructurePieceSummary)>
public "getBoundingBox"(): $BoundingBox
get "children"(): $Collection<($StructurePieceSummary)>
get "boundingBox"(): $BoundingBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureStartSummary$Type = ($StructureStartSummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureStartSummary_ = $StructureStartSummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorWorld" {
import {$WorldSummary, $WorldSummary$Type} from "packages/folk/sisby/surveyor/$WorldSummary"

export interface $SurveyorWorld {

 "surveyor$getSummary"(): $WorldSummary

(): $WorldSummary
}

export namespace $SurveyorWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorWorld$Type = ($SurveyorWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorWorld_ = $SurveyorWorld$Type;
}}
declare module "packages/folk/sisby/surveyor/$PlayerSummary$PlayerEntitySummary" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SurveyorExploration, $SurveyorExploration$Type} from "packages/folk/sisby/surveyor/$SurveyorExploration"

export class $PlayerSummary$PlayerEntitySummary implements $PlayerSummary {

constructor(player: $Player$Type)

public "pos"(): $Vec3
public "dimension"(): $ResourceKey<($Level)>
public "online"(): boolean
public "username"(): string
public "yaw"(): float
public "exploration"(): $SurveyorExploration
public "viewDistance"(): integer
public static "of"(player: $ServerPlayer$Type): $PlayerSummary
public static "of"(uuid: $UUID$Type, server: $MinecraftServer$Type): $PlayerSummary
public "copyFrom"(oldSummary: $PlayerSummary$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSummary$PlayerEntitySummary$Type = ($PlayerSummary$PlayerEntitySummary);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSummary$PlayerEntitySummary_ = $PlayerSummary$PlayerEntitySummary$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorExploration" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$BitSet, $BitSet$Type} from "packages/java/util/$BitSet"
import {$LandmarkType, $LandmarkType$Type} from "packages/folk/sisby/surveyor/landmark/$LandmarkType"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Landmark, $Landmark$Type} from "packages/folk/sisby/surveyor/landmark/$Landmark"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SurveyorExploration {

 "write"(nbt: $CompoundTag$Type): $CompoundTag
 "read"(nbt: $CompoundTag$Type): void
 "copyFrom"(oldExploration: $SurveyorExploration$Type): void
 "limitStructureKeySet"(worldKey: $ResourceKey$Type<($Level$Type)>, keySet: $Multimap$Type<($ResourceKey$Type<($Structure$Type)>), ($ChunkPos$Type)>): $Multimap<($ResourceKey<($Structure)>), ($ChunkPos)>
 "updateClientForMergeRegion"(world: $Level$Type, regionPos: $ChunkPos$Type, bitSet: $BitSet$Type): void
 "updateClientForAddChunk"(world: $Level$Type, chunkPos: $ChunkPos$Type): void
 "updateClientForAddStructure"(world: $Level$Type, structureKey: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): void
 "limitLandmarkKeySet"(worldKey: $ResourceKey$Type<($Level$Type)>, worldLandmarks: $WorldLandmarks$Type, keySet: $Multimap$Type<($LandmarkType$Type<(any)>), ($BlockPos$Type)>): $Multimap<($LandmarkType<(any)>), ($BlockPos)>
 "updateClientForLandmarks"(world: $Level$Type): void
 "limitTerrainBitset"(worldKey: $ResourceKey$Type<($Level$Type)>, bitSet: $Map$Type<($ChunkPos$Type), ($BitSet$Type)>): $Map<($ChunkPos), ($BitSet)>
 "limitTerrainBitset"(worldKey: $ResourceKey$Type<($Level$Type)>, rPos: $ChunkPos$Type, bitSet: $BitSet$Type): $BitSet
 "structureCount"(): integer
 "chunkCount"(): integer
 "exploredLandmark"(worldKey: $ResourceKey$Type<($Level$Type)>, landmark: $Landmark$Type<(any)>): boolean
 "exploredChunk"(worldKey: $ResourceKey$Type<($Level$Type)>, pos: $ChunkPos$Type): boolean
 "limitLandmarkMap"(worldKey: $ResourceKey$Type<($Level$Type)>, asMap: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
 "sharedPlayers"(): $Set<($UUID)>
 "personal"(): boolean
 "mergeRegion"(worldKey: $ResourceKey$Type<($Level$Type)>, regionPos: $ChunkPos$Type, bitSet: $BitSet$Type): void
 "addChunk"(worldKey: $ResourceKey$Type<($Level$Type)>, pos: $ChunkPos$Type): void
 "replaceTerrain"(worldKey: $ResourceKey$Type<($Level$Type)>, bitSet: $Map$Type<($ChunkPos$Type), ($BitSet$Type)>): void
 "mergeStructures"(worldKey: $ResourceKey$Type<($Level$Type)>, structureKey: $ResourceKey$Type<($Structure$Type)>, starts: $LongSet$Type): void
 "replaceStructures"(worldKey: $ResourceKey$Type<($Level$Type)>, structures: $Map$Type<($ResourceKey$Type<($Structure$Type)>), ($LongSet$Type)>): void
 "structures"(): $Map<($ResourceKey<($Level)>), ($Map<($ResourceKey<($Structure)>), ($LongSet)>)>
 "addStructure"(worldKey: $ResourceKey$Type<($Level$Type)>, structureKey: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): void
 "exploredStructure"(worldKey: $ResourceKey$Type<($Level$Type)>, structure: $ResourceKey$Type<($Structure$Type)>, pos: $ChunkPos$Type): boolean
 "terrain"(): $Map<($ResourceKey<($Level)>), ($Map<($ChunkPos), ($BitSet)>)>
}

export namespace $SurveyorExploration {
const KEY_EXPLORED_TERRAIN: string
const KEY_EXPLORED_STRUCTURES: string
function of(player: $ServerPlayer$Type): $SurveyorExploration
function of(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
function ofShared(player: $UUID$Type, server: $MinecraftServer$Type): $SurveyorExploration
function ofShared(player: $ServerPlayer$Type): $SurveyorExploration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorExploration$Type = ($SurveyorExploration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorExploration_ = $SurveyorExploration$Type;
}}
declare module "packages/folk/sisby/surveyor/$SurveyorPlayer" {
import {$PlayerSummary, $PlayerSummary$Type} from "packages/folk/sisby/surveyor/$PlayerSummary"

export interface $SurveyorPlayer {

 "surveyor$getSummary"(): $PlayerSummary

(): $PlayerSummary
}

export namespace $SurveyorPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurveyorPlayer$Type = ($SurveyorPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurveyorPlayer_ = $SurveyorPlayer$Type;
}}
declare module "packages/folk/sisby/surveyor/landmark/$Landmark" {
import {$WorldLandmarks, $WorldLandmarks$Type} from "packages/folk/sisby/surveyor/landmark/$WorldLandmarks"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LandmarkType, $LandmarkType$Type} from "packages/folk/sisby/surveyor/landmark/$LandmarkType"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Landmark<T extends $Landmark<(T)>> {

 "name"(): $Component
 "remove"(changed: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>, world: $Level$Type, landmarks: $WorldLandmarks$Type): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
 "put"(changed: $Map$Type<($LandmarkType$Type<(any)>), ($Map$Type<($BlockPos$Type), ($Landmark$Type<(any)>)>)>, world: $Level$Type, landmarks: $WorldLandmarks$Type): $Map<($LandmarkType<(any)>), ($Map<($BlockPos), ($Landmark<(any)>)>)>
 "type"(): $LandmarkType<(T)>
 "pos"(): $BlockPos
 "owner"(): $UUID
 "color"(): $DyeColor
 "texture"(): $ResourceLocation
}

export namespace $Landmark {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Landmark$Type<T> = ($Landmark<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Landmark_<T> = $Landmark$Type<(T)>;
}}
