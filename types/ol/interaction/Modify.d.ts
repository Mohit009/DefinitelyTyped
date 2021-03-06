import Collection from '../Collection';
import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import { Condition } from '../events/condition';
import Event from '../events/Event';
import { Extent } from '../extent';
import Feature from '../Feature';
import SimpleGeometry from '../geom/SimpleGeometry';
import VectorLayer from '../layer/Vector';
import MapBrowserEvent from '../MapBrowserEvent';
import { ObjectEvent } from '../Object';
import VectorSource from '../source/Vector';
import { StyleFunction, StyleLike } from '../style/Style';
import PointerInteraction from './Pointer';

export class ModifyEvent extends Event {
    constructor();
    features: Collection<Feature>;
    mapBrowserEvent: MapBrowserEvent;
}
export default class Modify extends PointerInteraction {
    constructor(options: Options);
    getOverlay(): VectorLayer;
    removePoint(): boolean;
    on(type: string | string[], listener: ((p0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((p0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((p0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:active', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:active', listener: (evt: ObjectEvent) => void): void;
    on(type: 'modifyend', listener: (evt: ModifyEvent) => void): EventsKey;
    once(type: 'modifyend', listener: (evt: ModifyEvent) => void): EventsKey;
    un(type: 'modifyend', listener: (evt: ModifyEvent) => void): void;
    on(type: 'modifystart', listener: (evt: ModifyEvent) => void): EventsKey;
    once(type: 'modifystart', listener: (evt: ModifyEvent) => void): EventsKey;
    un(type: 'modifystart', listener: (evt: ModifyEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export interface Options {
    condition?: Condition;
    deleteCondition?: Condition;
    insertVertexCondition?: Condition;
    pixelTolerance?: number;
    style?: StyleLike;
    source?: VectorSource;
    features?: Collection<Feature>;
    wrapX?: boolean;
}
export interface SegmentData {
    depth?: number[];
    feature: Feature;
    geometry: SimpleGeometry;
    index?: number;
    segment: Extent[];
    featureSegments?: SegmentData[];
}
