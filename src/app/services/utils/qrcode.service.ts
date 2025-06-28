import { Injectable } from '@angular/core';
import { QRCodeElementType, QRCodeErrorCorrectionLevel } from 'angularx-qrcode';

export interface QRCodeOptions {
	width?: number;
	height?: number;
	type?: QRCodeElementType;
	errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
	margin?: number;
	scale?: number;
	colorDark?: string;
	colorLight?: string;
}

@Injectable({
	providedIn: 'root'
})

export class QrcodeService {
	constructor() { }

	/**
	 * Generate QR code configuration
	 * @param data - The data to encode in the QR code
	 * @param options - Optional QR code styling options
	 * @returns QR code configuration object
	 */
	generateQRCodeConfig(data: string, options?: QRCodeOptions) {
		return {
			data: data,
			width: options?.width || 256,
			height: options?.height || 256,
			type: options?.type || 'canvas' as QRCodeElementType,
			errorCorrectionLevel: options?.errorCorrectionLevel || 'M' as QRCodeErrorCorrectionLevel,
			margin: options?.margin || 4,
			scale: options?.scale || 4,
			colorDark: options?.colorDark || '#000000',
			colorLight: options?.colorLight || '#FFFFFF'
		};
	}

	/**
	 * Download QR code as image
	 * @param elementId - The ID of the QR code element
	 * @param filename - The filename for the downloaded image
	 */
	downloadQRCode(elementId: string, filename: string = 'qrcode') {
		const canvas = document.querySelector(`#${elementId} canvas`) as HTMLCanvasElement;
		if (canvas) {
			const link = document.createElement('a');
			link.download = `${filename}.png`;
			link.href = canvas.toDataURL();
			link.click();
		}
	}
}
