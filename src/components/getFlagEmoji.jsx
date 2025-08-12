const langToCountry = {
  af: "ZA", // Afrikaans - Sudafrica
  am: "ET", // Amarico - Etiopia
  ar: "SA", // Arabo - Arabia Saudita
  az: "AZ", // Azero - Azerbaigian
  be: "BY", // Bielorusso - Bielorussia
  bg: "BG", // Bulgaro - Bulgaria
  bn: "BD", // Bengalese - Bangladesh
  bs: "BA", // Bosniaco - Bosnia
  ca: "ES", // Catalano - Spagna
  cn: "CN", // Cinese - Cina
  cs: "CZ", // Ceco - Repubblica Ceca
  cy: "GB", // Gallese - Galles / Regno Unito
  da: "DK", // Danese - Danimarca
  de: "DE", // Tedesco - Germania
  el: "GR", // Greco - Grecia
  en: "US", // Inglese - USA
  eo: "PL", // Esperanto - nessun paese, associato alla Polonia
  es: "ES", // Spagnolo - Spagna
  et: "EE", // Estone - Estonia
  eu: "ES", // Basco - Spagna
  fa: "IR", // Persiano - Iran
  fi: "FI", // Finlandese - Finlandia
  fj: "FJ", // Figiano - Figi
  fr: "FR", // Francese - Francia
  ga: "IE", // Irlandese - Irlanda
  gl: "ES", // Galiziano - Spagna
  gu: "IN", // Gujarati - India
  he: "IL", // Ebraico - Israele
  hi: "IN", // Hindi - India
  hr: "HR", // Croato - Croazia
  ht: "HT", // Creolo haitiano - Haiti
  hu: "HU", // Ungherese - Ungheria
  hy: "AM", // Armeno - Armenia
  id: "ID", // Indonesiano - Indonesia
  is: "IS", // Islandese - Islanda
  it: "IT", // Italiano - Italia
  ja: "JP", // Giapponese - Giappone
  jv: "ID", // Giavanese - Indonesia
  ka: "GE", // Georgiano - Georgia
  kk: "KZ", // Kazako - Kazakistan
  km: "KH", // Khmer - Cambogia
  kn: "IN", // Kannada - India
  ko: "KR", // Coreano - Corea del Sud
  ku: "IQ", // Curdo - Iraq
  ky: "KG", // Kirghiso - Kirghizistan
  la: "VA", // Latino - Vaticano
  lb: "LU", // Lussemburghese - Lussemburgo
  lo: "LA", // Lao - Laos
  lt: "LT", // Lituano - Lituania
  lv: "LV", // Lettone - Lettonia
  mk: "MK", // Macedone - Macedonia
  ml: "IN", // Malayalam - India
  mn: "MN", // Mongolo - Mongolia
  mr: "IN", // Marathi - India
  ms: "MY", // Malese - Malesia
  mt: "MT", // Maltese - Malta
  nb: "NO", // Norvegese Bokmål - Norvegia
  ne: "NP", // Nepalese - Nepal
  nl: "NL", // Olandese - Paesi Bassi
  nn: "NO", // Norvegese Nynorsk - Norvegia
  pa: "IN", // Punjabi - India
  pl: "PL", // Polacco - Polonia
  ps: "AF", // Pashto - Afghanistan
  pt: "PT", // Portoghese - Portogallo
  ro: "RO", // Rumeno - Romania
  ru: "RU", // Russo - Russia
  sd: "PK", // Sindhi - Pakistan
  si: "LK", // Singalese - Sri Lanka
  sk: "SK", // Slovacco - Slovacchia
  sl: "SI", // Sloveno - Slovenia
  so: "SO", // Somalo - Somalia
  sq: "AL", // Albanese - Albania
  sr: "RS", // Serbo - Serbia
  sv: "SE", // Svedese - Svezia
  sw: "KE", // Swahili - Kenya
  ta: "IN", // Tamil - India
  te: "IN", // Telugu - India
  th: "TH", // Thai - Thailandia
  tl: "PH", // Tagalog - Filippine
  tr: "TR", // Turco - Turchia
  uk: "UA", // Ucraino - Ucraina
  ur: "PK", // Urdu - Pakistan
  uz: "UZ", // Uzbeko - Uzbekistan
  vi: "VN", // Vietnamita - Vietnam
  zh: "CN", // Cinese - Cina
  zu: "ZA", // Zulu - Sudafrica
};

function getFlagEmoji(lang) {
  const countryCode = langToCountry[lang.toLowerCase()];
  if (!countryCode) return ""; // Niente bandiera se non trovata
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default getFlagEmoji;
