import { BaseEntity } from './../../shared';

export class CostoMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public codigo?: string,
        public servicio?: string,
        public cuota?: number,
        public costos?: BaseEntity[],
        public servicioId?: number,
        public sectorId?: number,
        public clasificacionId?: number,
    ) {
    }
}
