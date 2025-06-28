import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { QRCodeOptions, QrcodeService } from '../../services/utils/qrcode.service';

@Component({
	selector: 'app-qrcode',
	standalone: true,
	imports: [QRCodeComponent],
	template: `
		<div>
			<qrcode
				[qrdata]="qrCodeConfig.data"
				[width]="qrCodeConfig.width"
				[errorCorrectionLevel]="qrCodeConfig.errorCorrectionLevel"
				[margin]="qrCodeConfig.margin"
				[scale]="qrCodeConfig.scale"
				[colorDark]="qrCodeConfig.colorDark"
				[colorLight]="qrCodeConfig.colorLight"
				id="qrcode-element">
			</qrcode>
		</div>
	`
})

export class QrcodeComponent {
	qrCodeConfig: any;
	@Input() options: QRCodeOptions = {
		colorDark: '#00b86e',
		colorLight: '#ffffff',
		errorCorrectionLevel: 'H',
		margin: 1.5,
		scale: 5
	};
	@Input() username: string = "";
	@Input() password: string = "";

	constructor(private qrcodeService: QrcodeService) {
		this.generateQRCode();
	}

	ngOnChanges() {
		this.generateQRCode();
	}

	generateQRCode() {
		this.qrCodeConfig = this.qrcodeService.generateQRCodeConfig(`${this.username}|${this.password}`, this.options);
	}
}
