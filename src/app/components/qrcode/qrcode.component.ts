import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { QRCodeOptions, QrcodeService } from '../../services/utils/qrcode.service';

@Component({
	selector: 'app-qrcode',
	standalone: true,
	imports: [QRCodeComponent],
	styles: `
		.qrcode_container {
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				background-color: white;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				padding: 5px;
				border: solid 3px #000032;
				position: absolute;
			}
		}
	`,
	template: `
		<div class="qrcode_container">
			<img src="equitrec.png" class="logo" />
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
		colorDark: '#000032',
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
		this.qrCodeConfig = this.qrcodeService.generateQRCodeConfig(`{"username": "${this.username}", "password": "${this.password}"}`, this.options);
	}
}
