type Language = 'id' | 'en';

let _lang = $state<Language>('id');

function updateUrl(lang: Language) {
	if (typeof window !== 'undefined') {
		const url = new URL(window.location.href);
		url.searchParams.set('lang', lang);
		window.history.replaceState({}, '', url.toString());
	}
}

function getLanguageFromUrl(): Language | null {
	if (typeof window !== 'undefined') {
		const params = new URLSearchParams(window.location.search);
		const lang = params.get('lang');
		if (lang === 'en' || lang === 'id') {
			return lang as Language;
		}
	}
	return null;
}

export const langStore = {
	get value() {
		return _lang;
	},
	set value(lang: Language) {
		_lang = lang;
		updateUrl(lang);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('masche-lang', _lang);
		}
	},
	toggle() {
		this.value = _lang === 'id' ? 'en' : 'id';
	},
	init() {
		// Priority: URL > localStorage > default
		const urlLang = getLanguageFromUrl();
		if (urlLang) {
			_lang = urlLang;
		} else if (typeof localStorage !== 'undefined') {
			const saved = localStorage.getItem('masche-lang') as Language | null;
			if (saved === 'en' || saved === 'id') {
				_lang = saved;
			}
		}
		// Update URL to reflect current language
		updateUrl(_lang);
	}
};
