type Language = 'id' | 'en';

let _lang = $state<Language>('id');

export const langStore = {
	get value() {
		return _lang;
	},
	set value(lang: Language) {
		_lang = lang;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('masche-lang', _lang);
		}
	},
	toggle() {
		this.value = _lang === 'id' ? 'en' : 'id';
	},
	init() {
		if (typeof localStorage !== 'undefined') {
			const saved = localStorage.getItem('masche-lang') as Language | null;
			if (saved === 'en' || saved === 'id') {
				_lang = saved;
			}
		}
	}
};
