const WHATSAPP_NUMBER = '62812345678'; // Mock Indonesian number

export function getWhatsAppLink(message: string): string {
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export const whatsappMessages = {
	consultation: 'Halo, saya ingin berkonsultasi untuk kebutuhan sistem di sekolah saya',
	demo: 'Halo, saya ingin meminta demo',
	freeTrial: 'Halo, saya ingin mencoba gratis terlebih dahulu',
	learnMore: 'Halo, saya ingin tahu lebih lanjut tentang layanan Anda',
	general: 'Halo, saya ingin berbicara dengan tim Anda'
};
