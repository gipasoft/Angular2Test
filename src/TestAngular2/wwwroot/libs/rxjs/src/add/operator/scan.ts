
import {Observable} from '../../Observable';
import {scan, ScanSignature} from '../../operator/scan';

Observable.prototype.scan = scan;

declare module '../../Observable' {
  interface Observable<T> {
    scan: ScanSignature<T>;
  }
}