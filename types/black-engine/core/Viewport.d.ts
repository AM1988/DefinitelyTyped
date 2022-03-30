export class Viewport extends MessageDispatcher {
    constructor(containerElement?: HTMLElement | null);
    private mContainerElement;
    private mViewportElement;
    private mSize;
    private isTransparent;
    private backgroundColor;
    private mChecksLeftSeconds;
    private mOrientation;
    private mOrientationLock;
    private mRotation;
    private mIsPrimary;
    private mReflect;
    private mBoundResize;
    __initialize(): void;
    isPrimary(): boolean;
    set orientation(arg: string);
    get orientation(): string;
    set orientationLock(arg: boolean);
    get orientationLock(): boolean;
    private __update;
    refresh(): void;
    private __onResize;
    dispose(): void;
    get size(): Rectangle;
    get nativeElement(): Element;
    get rotation(): number;
    get isLandscape(): boolean;
    get isPortrait(): boolean;
}
import { MessageDispatcher } from '../messages/MessageDispatcher';
import { Rectangle } from '../geom/Rectangle';