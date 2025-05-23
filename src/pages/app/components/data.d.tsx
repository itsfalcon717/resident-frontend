const timezones = [
    { value: "America/Adak", label: "UTC-10:00 America/Adak" },
    { value: "America/Anchorage", label: "UTC-09:00 America/Anchorage" },
    { value: "America/Chicago", label: "UTC-06:00 America/Chicago" },
    { value: "America/Denver", label: "UTC-07:00 America/Denver" },
    { value: "America/Detroit", label: "UTC-05:00 America/Detroit" },
    { value: "America/Edmonton", label: "UTC-07:00 America/Edmonton" },
    { value: "America/Halifax", label: "UTC-04:00 America/Halifax" },
    { value: "America/Indianapolis", label: "UTC-05:00 America/Indianapolis" },
    { value: "America/Los_Angeles", label: "UTC-08:00 America/Los Angeles" },
    { value: "America/New_York", label: "UTC-05:00 America/New York" },
    { value: "America/Phoenix", label: "UTC-07:00 America/Phoenix" },
    { value: "America/St_Johns", label: "UTC-03:30 America/St Johns" },
    { value: "America/Toronto", label: "UTC-05:00 America/Toronto" },
    { value: "America/Vancouver", label: "UTC-08:00 America/Vancouver" },
    { value: "America/Winnipeg", label: "UTC-06:00 America/Winnipeg" },
    { value: "Asia/Jakarta", label: "UTC+07:00 Asia/Jakarta" },
    { value: "Asia/Jayapura", label: "UTC+09:00 Asia/Jayapura" },
    { value: "Asia/Karachi", label: "UTC+05:00 Asia/Karachi" },
    { value: "Asia/Kuala_Lumpur", label: "UTC+08:00 Asia/Kuala Lumpur" },
    { value: "Asia/Kuching", label: "UTC+08:00 Asia/Kuching" },
    { value: "Asia/Makassar", label: "UTC+08:00 Asia/Makassar" },
    { value: "Asia/Manila", label: "UTC+08:00 Asia/Manila" },
    { value: "Asia/Pontianak", label: "UTC+07:00 Asia/Pontianak" },
    { value: "Asia/Shanghai", label: "UTC+08:00 Asia/Shanghai" },
    { value: "Australia/Adelaide", label: "UTC+10:30 Australia/Adelaide" },
    { value: "Australia/Brisbane", label: "UTC+10:00 Australia/Brisbane" },
    { value: "Australia/Broken_Hill", label: "UTC+10:30 Australia/Broken Hill" },
    { value: "Australia/Darwin", label: "UTC+09:30 Australia/Darwin" },
    { value: "Australia/Eucla", label: "UTC+08:45 Australia/Eucla" },
    { value: "Australia/Hobart", label: "UTC+11:00 Australia/Hobart" },
    { value: "Australia/Lindeman", label: "UTC+10:00 Australia/Lindeman" },
    { value: "Australia/Lord_Howe", label: "UTC+11:00 Australia/Lord Howe" },
    { value: "Australia/Melbourne", label: "UTC+11:00 Australia/Melbourne" },
    { value: "Australia/Perth", label: "UTC+08:00 Australia/Perth" },
    { value: "Australia/Sydney", label: "UTC+11:00 Australia/Sydney" },
    { value: "Europe/Berlin", label: "UTC+01:00 Europe/Berlin" },
    { value: "Europe/Busingen", label: "UTC+01:00 Europe/Busingen" },
    { value: "Europe/London", label: "UTC+00:00 Europe/London" },
    { value: "Pacific/Honolulu", label: "UTC-10:00 Pacific/Honolulu" }
];

const languages = [
    { "value": "af-ZA", "label": "Afrikaans (South Africa)" },
    { "value": "am-ET", "label": "Amharic (Ethiopia)" },
    { "value": "ar-AE", "label": "Arabic (United Arab Emirates)" },
    { "value": "ar-BH", "label": "Arabic (Bahrain)" },
    { "value": "ar-DZ", "label": "Arabic (Algeria)" },
    { "value": "ar-EG", "label": "Arabic (Egypt)" },
    { "value": "ar-IL", "label": "Arabic (Israel)" },
    { "value": "ar-IQ", "label": "Arabic (Iraq)" },
    { "value": "ar-JO", "label": "Arabic (Jordan)" },
    { "value": "ar-KW", "label": "Arabic (Kuwait)" },
    { "value": "ar-LB", "label": "Arabic (Lebanon)" },
    { "value": "ar-LY", "label": "Arabic (Libya)" },
    { "value": "ar-MA", "label": "Arabic (Morocco)" },
    { "value": "ar-OM", "label": "Arabic (Oman)" },
    { "value": "ar-PS", "label": "Arabic (Palestinian Authority)" },
    { "value": "ar-QA", "label": "Arabic (Qatar)" },
    { "value": "ar-SA", "label": "Arabic (Saudi Arabia)" },
    { "value": "ar-SY", "label": "Arabic (Syria)" },
    { "value": "ar-TN", "label": "Arabic (Tunisia)" },
    { "value": "ar-YE", "label": "Arabic (Yemen)" },
    { "value": "az-AZ", "label": "Azerbaijani (Latin, Azerbaijan)" },
    { "value": "bg-BG", "label": "Bulgarian (Bulgaria)" },
    { "value": "bn-IN", "label": "Bengali (India)" },
    { "value": "bs-BA", "label": "Bosnian (Bosnia and Herzegovina)" },
    { "value": "ca-ES", "label": "Catalan" },
    { "value": "cs-CZ", "label": "Czech (Czechia)" },
    { "value": "cy-GB", "label": "Welsh (United Kingdom)" },
    { "value": "da-DK", "label": "Danish (Denmark)" },
    { "value": "de-AT", "label": "German (Austria)" },
    { "value": "de-CH", "label": "German (Switzerland)" },
    { "value": "de-DE", "label": "German (Germany)" },
    { "value": "el-GR", "label": "Greek (Greece)" },
    { "value": "en-AU", "label": "English (Australia)" },
    { "value": "en-CA", "label": "English (Canada)" },
    { "value": "en-GB", "label": "English (United Kingdom)" },
    { "value": "en-GH", "label": "English (Ghana)" },
    { "value": "en-HK", "label": "English (Hong Kong SAR)" },
    { "value": "en-IE", "label": "English (Ireland)" },
    { "value": "en-IN", "label": "English (India)" },
    { "value": "en-KE", "label": "English (Kenya)" },
    { "value": "en-NG", "label": "English (Nigeria)" },
    { "value": "en-NZ", "label": "English (New Zealand)" },
    { "value": "en-PH", "label": "English (Philippines)" },
    { "value": "en-SG", "label": "English (Singapore)" },
    { "value": "en-TZ", "label": "English (Tanzania)" },
    { "value": "en-US", "label": "English (United States)" },
    { "value": "en-ZA", "label": "English (South Africa)" },
    { "value": "es-AR", "label": "Spanish (Argentina)" },
    { "value": "es-BO", "label": "Spanish (Bolivia)" },
    { "value": "es-CL", "label": "Spanish (Chile)" },
    { "value": "es-CO", "label": "Spanish (Colombia)" },
    { "value": "es-CR", "label": "Spanish (Costa Rica)" },
    { "value": "es-CU", "label": "Spanish (Cuba)" },
    { "value": "es-DO", "label": "Spanish (Dominican Republic)" },
    { "value": "es-EC", "label": "Spanish (Ecuador)" },
    { "value": "es-ES", "label": "Spanish (Spain)" },
    { "value": "es-GQ", "label": "Spanish (Equatorial Guinea)" },
    { "value": "es-GT", "label": "Spanish (Guatemala)" },
    { "value": "es-HN", "label": "Spanish (Honduras)" },
    { "value": "es-MX", "label": "Spanish (Mexico)" },
    { "value": "es-NI", "label": "Spanish (Nicaragua)" },
    { "value": "es-PA", "label": "Spanish (Panama)" },
    { "value": "es-PE", "label": "Spanish (Peru)" },
    { "value": "es-PR", "label": "Spanish (Puerto Rico)" },
    { "value": "es-PY", "label": "Spanish (Paraguay)" },
    { "value": "es-SV", "label": "Spanish (El Salvador)" },
    { "value": "es-US", "label": "Spanish (United States)" },
    { "value": "es-UY", "label": "Spanish (Uruguay)" },
    { "value": "es-VE", "label": "Spanish (Venezuela)" },
    { "value": "et-EE", "label": "Estonian (Estonia)" },
    { "value": "eu-ES", "label": "Basque" },
    { "value": "fa-IR", "label": "Persian (Iran)" },
    { "value": "fi-FI", "label": "Finnish (Finland)" },
    { "value": "fil-PH", "label": "Filipino (Philippines)" },
    { "value": "fr-BE", "label": "French (Belgium)" },
    { "value": "fr-CA", "label": "French (Canada)" },
    { "value": "fr-CH", "label": "French (Switzerland)" },
    { "value": "fr-FR", "label": "French (France)" },
    { "value": "ga-IE", "label": "Irish (Ireland)" },
    { "value": "gl-ES", "label": "Galician" },
    { "value": "gu-IN", "label": "Gujarati (India)" },
    { "value": "he-IL", "label": "Hebrew (Israel)" },
    { "value": "hi-IN", "label": "Hindi (India)" },
    { "value": "hr-HR", "label": "Croatian (Croatia)" },
    { "value": "hu-HU", "label": "Hungarian (Hungary)" },
    { "value": "hy-AM", "label": "Armenian (Armenia)" },
    { "value": "id-ID", "label": "Indonesian (Indonesia)" },
    { "value": "is-IS", "label": "Icelandic (Iceland)" },
    { "value": "it-CH", "label": "Italian (Switzerland)" },
    { "value": "it-IT", "label": "Italian (Italy)" },
    { "value": "ja-JP", "label": "Japanese (Japan)" },
    { "value": "jv-ID", "label": "Javanese (Latin, Indonesia)" },
    { "value": "ka-GE", "label": "Georgian (Georgia)" },
    { "value": "kk-KZ", "label": "Kazakh (Kazakhstan)" },
    { "value": "km-KH", "label": "Khmer (Cambodia)" },
    { "value": "kn-IN", "label": "Kannada (India)" },
    { "value": "ko-KR", "label": "Korean (Korea)" },
    { "value": "lo-LA", "label": "Lao (Laos)" },
    { "value": "lt-LT", "label": "Lithuanian (Lithuania)" },
    { "value": "lv-LV", "label": "Latvian (Latvia)" },
    { "value": "mk-MK", "label": "Macedonian (North Macedonia)" },
    { "value": "ml-IN", "label": "Malayalam (India)" },
    { "value": "mn-MN", "label": "Mongolian (Mongolia)" },
    { "value": "mr-IN", "label": "Marathi (India)" },
    { "value": "ms-MY", "label": "Malay (Malaysia)" },
    { "value": "mt-MT", "label": "Maltese (Malta)" },
    { "value": "my-MM", "label": "Burmese (Myanmar)" },
    { "value": "nb-NO", "label": "Norwegian Bokmål (Norway)" },
    { "value": "ne-NP", "label": "Nepali (Nepal)" },
    { "value": "nl-BE", "label": "Dutch (Belgium)" },
    { "value": "nl-NL", "label": "Dutch (Netherlands)" },
    { "value": "pa-IN", "label": "Punjabi (India)" },
    { "value": "pl-PL", "label": "Polish (Poland)" },
    { "value": "ps-AF", "label": "Pashto (Afghanistan)" },
    { "value": "pt-BR", "label": "Portuguese (Brazil)" },
    { "value": "pt-PT", "label": "Portuguese (Portugal)" },
    { "value": "ro-RO", "label": "Romanian (Romania)" },
    { "value": "ru-RU", "label": "Russian (Russia)" },
    { "value": "si-LK", "label": "Sinhala (Sri Lanka)" },
    { "value": "sk-SK", "label": "Slovak (Slovakia)" },
    { "value": "sl-SI", "label": "Slovenian (Slovenia)" },
    { "value": "so-SO", "label": "Somali (Somalia)" },
    { "value": "sq-AL", "label": "Albanian (Albania)" },
    { "value": "sr-RS", "label": "Serbian (Cyrillic, Serbia)" },
    { "value": "sv-SE", "label": "Swedish (Sweden)" },
    { "value": "sw-KE", "label": "Kiswahili (Kenya)" },
    { "value": "sw-TZ", "label": "Kiswahili (Tanzania)" },
    { "value": "ta-IN", "label": "Tamil (India)" },
    { "value": "te-IN", "label": "Telugu (India)" },
    { "value": "th-TH", "label": "Thai (Thailand)" },
    { "value": "tr-TR", "label": "Turkish (Türkiye)" },
    { "value": "uk-UA", "label": "Ukrainian (Ukraine)" },
    { "value": "ur-IN", "label": "Urdu (India)" },
    { "value": "uz-UZ", "label": "Uzbek (Latin, Uzbekistan)" },
    { "value": "vi-VN", "label": "Vietnamese (Vietnam)" },
    { "value": "wuu-CN", "label": "Chinese (Wu, Simplified)" },
    { "value": "yue-CN", "label": "Chinese (Cantonese, Simplified)" },
    { "value": "zh-CN", "label": "Chinese (Mandarin, Simplified)" },
    { "value": "zh-CN-shandong", "label": "Chinese (Jilu Mandarin, Simplified)" },
    { "value": "zh-CN-sichuan", "label": "Chinese (Southwestern Mandarin, Simplified)" },
    { "value": "zh-HK", "label": "Chinese (Cantonese, Traditional)" },
    { "value": "zh-TW", "label": "Chinese (Taiwanese Mandarin, Traditional)" },
    { "value": "zu-ZA", "label": "isiZulu (South Africa)" }
]

const companies = [
    {
        "name": "Apple",
        "logo": "https://cdn.brandfetch.io/idnrCPuv87/w/400/h/400/theme/dark/icon.png?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "NVIDIA",
        "logo": "https://cdn.brandfetch.io/idXoj5DuCE/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Oracle",
        "logo": "https://cdn.brandfetch.io/idnq7H7qT0/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Amazon",
        "logo": "https://cdn.brandfetch.io/idawOgYOsG/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Google",
        "logo": "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Tesla",
        "logo": "https://cdn.brandfetch.io/id2S-kXbuK/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "IBM",
        "logo": "https://cdn.brandfetch.io/id4_P9mCgY/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Microsoft",
        "logo": "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Meta",
        "logo": "https://cdn.brandfetch.io/idWvz5T3V7/w/400/h/400/theme/dark/icon.png?k=bfHSJFAPEG&height=24&width=24"
    },
    {
        "name": "Adobe",
        "logo": "https://cdn.brandfetch.io/id_KsyK7J9/theme/dark/symbol.svg?k=bfHSJFAPEG&height=24&width=24"
    }
]

const mockInterviewData = {
    "problems": [
        "Nailing technical questions",
        "Crushing behavioral interviews",
        "Getting comfy with the whole process",
        "Improving my interview chat game",
        "Other (Tell us!)"
    ],
    "feelings": [
        "Too Slow",
        "Too Fast",
        "Just Right",
    ],
    "satisfaction": [
        "Super Helpful!",
        "Meh, could be better",
        "Not helpful at all"
    ],
}

export { timezones, languages, companies, mockInterviewData };
