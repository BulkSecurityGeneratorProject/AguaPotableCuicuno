import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { LecturaMedidor } from './lectura-medidor.model';
import { LecturaMedidorPopupService } from './lectura-medidor-popup.service';
import { LecturaMedidorService } from './lectura-medidor.service';
import { Medidor, MedidorService } from '../medidor';

@Component({
    selector: 'jhi-lectura-medidor-dialog',
    templateUrl: './lectura-medidor-dialog.component.html'
})
export class LecturaMedidorDialogComponent implements OnInit {

    lecturaMedidor: LecturaMedidor;
    isSaving: boolean;

    medidors: Medidor[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private lecturaMedidorService: LecturaMedidorService,
        private medidorService: MedidorService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.medidorService.query()
            .subscribe((res: HttpResponse<Medidor[]>) => { this.medidors = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.lecturaMedidor.id !== undefined) {
            this.subscribeToSaveResponse(
                this.lecturaMedidorService.update(this.lecturaMedidor));
        } else {
            this.subscribeToSaveResponse(
                this.lecturaMedidorService.create(this.lecturaMedidor));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<LecturaMedidor>>) {
        result.subscribe((res: HttpResponse<LecturaMedidor>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: LecturaMedidor) {
        this.eventManager.broadcast({ name: 'lecturaMedidorListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackMedidorById(index: number, item: Medidor) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-lectura-medidor-popup',
    template: ''
})
export class LecturaMedidorPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private lecturaMedidorPopupService: LecturaMedidorPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.lecturaMedidorPopupService
                    .open(LecturaMedidorDialogComponent as Component, params['id']);
            } else {
                this.lecturaMedidorPopupService
                    .open(LecturaMedidorDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
