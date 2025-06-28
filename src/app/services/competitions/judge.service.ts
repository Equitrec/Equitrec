import { Injectable } from '@angular/core';
import { QrcodeService } from '../utils/qrcode.service';

@Injectable({
	providedIn: 'root'
})

export class JudgeService {
	constructor(private QRCode: QrcodeService) { }
}
