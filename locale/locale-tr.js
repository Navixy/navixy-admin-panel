/**
* @class Locale.locale-tr
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-tr',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-tr",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© Aksu. Tüm hakları saklıdır.",
    "panel_title": "GP-S Yönetici Kontrol Paneli",
    "error": "Hata",
    "loading": "Yükleniyor...",
    "conneting_loader": "Sunucuya bağlanılıyor",
    "access_denied": "Erişim engellendi",
    "access_denied_tip": "istenen sayfaya erişmek için izniniz yok",
    "index_title": "Yönetici kontrol paneline hoşgeldiniz",
    "old_version": "Eski sürüm",
    "auth": {
        "login": "Oturum Aç",
        "password": "Şifre",
        "login_btn": "Oturum aç",
        "locale_title": "Select your language",
        "locale_title_short": "dil",
        "auth_error": "Kimlik doğrulama hatası",
        "reloading_soon": "Yeniden yükleniyor",
        "logout": "Oturumu kapat",
        "title": "Yönetici Paneli"
    },
    "no_path_found": "Sayfa yok - Hatalı URL",
    "phone_invalid_msg": "Lütfen doğru bir telefon numarası girin",
    "invalid_numeric_msg": "Numara geçerli değil",
    "invalid_amount_msg": "Numara geçerli değil<br>(ondalık noktasından sonra 2 hane)",
    "searcher_empty_text": "Arama sorgusu girin",
    "search_empty_text": "Arama sorgusu girin",
    "searchTitle": "Kategoriye göre ara",
    "clear_form_btn": "Temizle",
    "save_form_btn": "Kaydet",
    "back_form_btn": "Geri",
    "select_form_btn": "Seç",
    "close_form_btn": "Kapat",
    "yes": "evet",
    "no": "hayır",
    "show_btn": "Göster",
    "wrong_period": "Hatalı peryod",
    "required_fields": "* - gerekli alanlar yada bölümler",
    "invalid_tab": "Hatalı doldurulmuş alanlar",
    "page_size": "Sayfa boyutu",
    "errors": {
        "1": "Veritabanı bağlantı hatası (001). Lütfen bize ulaşın veya daha sonra yeniden deneyin.",
        "2": "Yetkilendirme sistem hatası (002).  Lütfen bize ulaşın veya daha sonra yeniden deneyin.",
        "3": "Yanlış oturum anahtarı (003).  Lütfen tekrar giriş yapın. Sorun devam ederse, destek departmanı ile irtibata geçin.",
        "4": "Kullanıcı bulunamıyor veya oturum  sona erdi (004).  Lütfen tekrar giriş yapın.",
        "5": "Hatalı istek (005). Lütfen bize ulaşın veya daha sonra yeniden deneyin.",
        "6": "Beklenmeyen hata (006). Lütfen bize ulaşın veya daha sonra yeniden deneyin.",
        "7": {
            "default_msg": "Yanlış istek parametreleri. Verileri kontrol edin.",
            "title": "Hatalı parametreler:",
            "errors": {
                "login": "Geçerli e-posta adresi olması gerekir",
                "domain": "Yanlış domain adı"
            }
        },
        "11": "Erişim engellendi",
        "12": "Hizmet platformu bulunamadı",
        "101": "This feature is not available in the Demo mode",
        "102": "Hatalı kullanıcı adı yada şifre",
        "103": "Kullanıcı etkinleştirilmedi",
        "111": "Yanlış işleyici",
        "112": "Hatalı yöntem",
        "201": "Veri bulunamadı",
        "202": "Too many points in the area",
        "203": "İlgili öğe silindi",
        "204": "Öğe bulunamadı",
        "205": "Hatalı parametre",
        "206": "Bu kullanıcı adı zaten kullanılıyor",
        "207": "Geçersiz captcha",
        "208": "Cihaz kilitli",
        "209": "Mesaj gönderilemedi",
        "210": "Geocoding başarısız",
        "211": "Talep edilen zaman aralığı çok geniş",
        "212": "İstenen limit çok geniş",
        "213": "Cihaz çevrimdışı",
        "214": "İstenen işlem cihaz tarafından desteklenmiyor",
        "215": "Dış servis hatası",
        "216": "Grup boş değil",
        "217": "Liste varolmayan girdileri içeriyor",
        "218": "Hatalı biçimlendirilmiş dış hizmet parametreleri",
        "219": "Bu eyleme klonlanmış nesneler için izin verilmez",
        "220": "Bilinmeyen cihaz modeli",
        "221": "Tarife kısıtlaması:</br> Cihaz limiti aşıldı",
        "222": "Eklenti bulunamadı",
        "223": "Bu telefon numarası zaten kullanımda",
        "224": "Device with this ID already exists",
        "225": "Bu tüzel kişilik tipi için izin verilmez",
        "226": "Yanlış ICCID",
        "227": "Yanlış aktivasyon kodu",
        "228": "Sensör tarafından desteklenmiyor",
        "229": "İstenen veri henüz hazır değil",
        "230": "Bu tüzel kişilik türü için desteklenmiyor",
        "231": "Varlık türü uyuşmazlığı",
        "232": "Giriş zaten kullanılıyor",
        "233": "Veri dosyası yok",
        "234": "Hatalı veri biçimi",
        "235": "Eksik kalibrasyon verileri",
        "236": "Bu özellik tarifenizde bulunmamaktadır",
        "238": "Tarife değişikliğine izin verilmiyor",
        "240": "Sık aralıklar ile tarife değişikliğine izin verilmemektedir.",
        "242": "Doğrulama hatası",
        "251": "Yetersiz bakiye",
        "254": "Dosya kaydedilemedi",
        "upload_exeption": "Dosya yükleme hatası",
        "no_hash": "Oturum anahtarı bulunamadı",
        "service_not_respond": "Hizmet geçici olarak kullanılamıyor",
        "tracker": {
            "203": "Cihaz kurallara bağlanmış",
            "237": "Geçersiz plan",
            "238": "Tarife planı değişikliğine izin verilmemektedir",
            "239": "Yeni plan bulunamadı",
            "246": "Hatalı kullanıcı",
            "247": "Klon zaten mevcut",
            "249": "Bu işlem sadece klonlar için kullanılabilir",
            "250": "Silinen cihazlar için izin verilmez",
            "253": "Bu işlem gerçekleştirilemez, cihaz aşağıdaki klonlara sahiptir. <br>Clones ID: {0}"
        },
        "tariff": {
            "244": "Aynı isimde tarife planı zaten mevcut"
        },
        "settings": {
            "225": "Yeni şifreniz diğerinden farklı olmalıdır",
            "248": "Şifre hatalı"
        },
        "payment": {
            "201": "Veritabanında bulunamadı",
            "242": "İçerik doğrulaması yapılırken hatalar oluştu",
            "246": "User ID hatalı",
            "247": "Girdi zaten mevcut",
            "259": "Ödeme tutarı toplam tutarı karşılamamaktadır",
            "260": "Ödeme tutarı toplam tutarı karşılamamaktadır"
        }
    },
    "units_combination": {
        "days": [
            "gün",
            "gün",
            "gün"
        ],
        "hours": [
            "saat",
            "saat",
            "saat"
        ],
        "minutes": [
            "dakika",
            "dakika",
            "dakika"
        ],
        "seconds": [
            "saniye",
            "saniye",
            "saniye"
        ],
        "everyminutes": [
            "dakika",
            "dakika",
            "dakika"
        ],
        "everyseconds": [
            "saniye",
            "saniye",
            "saniye"
        ],
        "meters": [
            "metre",
            "metre",
            "metre"
        ],
        "degrees": [
            "derece",
            "derece",
            "derece"
        ],
        "objects": [
            "cihazlar",
            "cihaz",
            "cihazlar"
        ],
        "years": [
            "yıl",
            "yıl",
            "yıl"
        ],
        "months": [
            "ay",
            "ay",
            "ay"
        ],
        "codes": [
            "kodlar",
            "kod",
            "kodlar"
        ],
        "trackers": [
            "cihazlar",
            "cihaz",
            "cihazlar"
        ],
        "devices": [
            "cihazlar",
            "cihaz",
            "cihazlar"
        ],
        "entries": [
            "eşleşti",
            "eşleşme",
            "eşleşti"
        ]
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "km2",
        "square_meter": "m2",
        "ar": "ar",
        "hectare": "ha",
        "kmh": "km/h",
        "hour": "s",
        "minute": "d",
        "second": "s",
        "litres": "l",
        "day": "g"
    },
    "search": {
        "empty": "Kategoriye göre ara",
        "btn": "Bul"
    },
    "list": {
        "edit_tool": "düzenle",
        "create_btn_text": "Oluştur",
        "empty_text": "Veri yok",
        "search_title_tpl": "{0}: bulundu {1}",
        "search_empty_title_tpl": "{0}: eşleşme bulunamadı",
        "search_title": "Ara",
        "search_empty_title": "Eşleşme bulunamadı"
    },
    "card": {
        "links": {
            "collapser_tip": "Bağlantıları gizle",
            "collapser_exptip": "Bağlantıları göster"
        },
        "body": {
            "title": "Plan options and details:",
            "exptitle": "Plan options and details <a>(expand)</a>",
            "collapser_tip": "Hide plan options and details",
            "collapser_exptip": "Daha fazla göster"
        }
    },
    "devices": {
        "tracker": "Cihaz",
        "camera": "Kamera",
        "socket": "Soket"
    },
    "currency": {
        "gbp": "Pound sterling",
        "brl": "Brazilian real",
        "huf": "Hungarian forint",
        "hkd": "Hong Kong dollar",
        "dkk": "Danish krone",
        "eur": "Euro",
        "ils": "Israeli new shekel",
        "inr": "Indian rupee",
        "idr": "Indonesian rupiah",
        "cad": "Canadian dollar",
        "cny": "Renminbi",
        "krw": "South Korean won",
        "myr": "Malaysian ringgit",
        "mxn": "Mexican peso",
        "nzd": "New Zealand Dollar",
        "nok": "Norwegian krone",
        "pkr": "Pakistani rupee",
        "pln": "Polish złoty",
        "rub": "Russian rouble",
        "sgd": "Singapore dollar",
        "usd": "U.S. Dollar",
        "twd": "New Taiwan dollar",
        "thb": "Thai baht",
        "try": "Türk lirası",
        "php": "Philippine Peso",
        "czk": "Czech koruna",
        "clp": "Chilean peso",
        "sek": "Swedish krona",
        "chf": "Swiss Franc",
        "zar": "South African rand",
        "jpy": "Japanese Yen",
        "kzt": "Kazakhstan Tenge",
        "byr": "Belarusian Ruble",
        "aud": "Australian Dollar",
        "tjs": "Tajik Somoni",
        "uah": "Ukrainian hryvnia",
        "ltl": "Lithuanian litas",
        "lvl": "Latvian lats",
        "kgs": "Kyrgyzstani som",
        "tmt": "Turkmenistan manat",
        "uzs": "Uzbekistani som",
        "mdl": "Moldovan leu",
        "gel": "Georgian lari",
        "amd": "Armenian dram",
        "azn": "Azerbaijani manat"
    },
    "currencies_tpls": {
        "GBP": "£{0}",
        "BRL": "R${0}",
        "HUF": "{0} Ft",
        "HKD": "HK${0}",
        "DKK": "kr {0}",
        "EUR": "€{0}",
        "ILS": "₪{0}",
        "INR": "₹{0}",
        "IDR": "Rp {0}",
        "CAD": "С${0}",
        "CNY": "¥{0}",
        "KRW": "₩{0}",
        "MYR": "RM{0}",
        "MXN": "Mex${0}",
        "NZD": "NZ${0}",
        "NOK": "kr {0}",
        "PKR": "Rs. {0}",
        "PLN": "{0} zł",
        "RUB": "{0} rub.",
        "SGD": "S${0}",
        "USD": "${0}",
        "TWD": "NT${0}",
        "THB": "฿{0}",
        "TRY": "₺{0}",
        "PHP": "{0} ₱",
        "CZK": "{0} Kč",
        "CLP": "${0}",
        "SEK": "{0} kr",
        "CHF": "{0} franc",
        "ZAR": "R {0}",
        "JPY": "¥{0}",
        "KZT": "{0} tenge",
        "BYR": "{0} rub.",
        "AUD": "A${0}",
        "TJS": "{0} som.",
        "UAH": "{0} ₴",
        "LTL": "{0} Lt",
        "LVL": "Ls {0}",
        "KGS": "{0} som",
        "TMT": "{0} man.",
        "UZS": "{0} som",
        "MDL": "{0} lei",
        "GEL": "{0} lari",
        "AMD": "{0} dram",
        "AZN": "{0} man."
    },
    "maps": {
        "roadmap": "Google yol haritası",
        "satellite": "Google uydu",
        "hybrid": "Google hibrid",
        "yandex": "Yandex Maps",
        "yandexpublic": "Yandex Crowdsourcing",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGIS Maps",
        "ovi": "OVI Maps",
        "mailru": "Mail.ru Maps",
        "here": "HERE Maps",
        "bing": "Bing Maps"
    },
    "dealer_info": {
        "first": "toplam",
        "last": "-"
    },
    "index": {
        "menu_text": "Anasayfa"
    },
    "users": {
        "menu_text": "Kullanıcılar",
        "create_btn": "Yeni kullanıcı",
        "create_form": {
            "title": "Yeni kullanıcı",
            "main_fields": "Genel bilgi",
            "contact_fields": "İrtibat bilgileri",
            "address_fields": "Adres",
            "legal_fields": "Şirket bilgileri",
            "password": "Şifre",
            "password_repeat": "Şifreyi tekrarla",
            "password_mismatched": "Şifreler eşleşmedi",
            "language": "Varsayılan dil",
            "time_zone": "Saat dilimi",
            "save_btn": "Kullanıcı oluştur",
            "clear_btn": "Formu sıfırla",
            "copy_address": "Adresten kopyala"
        },
        "edit_form": {
            "title": "Kullanıcıyı düzenle",
            "save_btn": "Değişiklikleri kaydet",
            "return_btn": "Geri"
        },
        "fields": {
            "creation_date": "Kayıt tarihi",
            "login": "E-posta adresi",
            "balance": "Bakiye",
            "bonus": "Bonus",
            "first_name": "Ad",
            "middle_name": "İkinci isim",
            "last_name": "Soyad",
            "activated": "Etkinleştirildi",
            "activated_t": "Kullanıcı etkin",
            "legal_type": "Müşteri tipi",
            "tin": "Vergi numarası",
            "legal_name": "Şirket Ünvanı",
            "iec": "Vergi Dairesi",
            "phone": "Telefon numarası",
            "post_country": "Ülke",
            "post_index": "Posta kodu",
            "post_region": "İlçe",
            "post_city": "Şehir",
            "post_street_address": "Adres",
            "registered_country": "Ülke",
            "registered_index": "Posta Kodu",
            "registered_region": "İlçe",
            "registered_city": "Şehir",
            "registered_street_address": "Adres",
            "sole_trader": "Şahıs işletmesi",
            "legal_entity": "Kurumsal",
            "individual": "Bireysel",
            "full_name": "Tam adı",
            "login_short": "Kullanıcı",
            "user_id": "ID",
            "user_id_exp": "Kullanıcı numarası",
            "activated_short": {
                "title": "Durum",
                "status_true": "Aktif",
                "status_false": "Aktif değil"
            },
            "registered_short": "kurumsal",
            "password": "Yeni şifre",
            "password_repeat": "Yeni şifreyi tekrar edin",
            "password_mismatched": "Şifreler birbiriyle uyuşmuyor"
        },
        "password_form": {
            "title": "Kullanıcı parolasını değiştirme",
            "save_btn": "Parola oluştur",
            "return_btn": "İptal",
            "success_msg": "Şifre başarıyla değiştirildi"
        },
        "list": {
            "create_btn_text": "Yeni kullanıcı oluştur",
            "empty_text": "Kullanıcı bulunamadı"
        },
        "session_alert": {
            "error": "Kullanıcı oturumu oluşturulamadı",
            "title": "Oturum kodunuz"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Kullanıcı cihazları"
                },
                "transactions": {
                    "title": "Hesap hareketleri"
                }
            },
            "links": {
                "session_text": "Kullanıcı olarak oturum aç",
                "user_edit": "Kullanıcıyı düzenle",
                "user_change_password": "Şifreyi değiştir",
                "transactions": "Cari işlem hareketleri",
                "create_transaction": "Cari işlem"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "Hesap hareketi bulunamadı",
                "title": "Kullanıcı hesap hareketleri"
            },
            "fields": {
                "description": "Açıklama",
                "type": "İşlem türü",
                "subtype": "Alt tip",
                "date": "Tarih",
                "amount": "Tutar",
                "old_balance": "Esk",
                "new_balance": "Yeni",
                "type_set": {
                    "main_charge": "abonelik",
                    "payment": "ödeme",
                    "tariff_charge": "Telekom hizmeti",
                    "bonus_charge": "bonus doldurma"
                },
                "subtype_set": {
                    "monthly": "aylık",
                    "partner": "İş ortağından",
                    "activeday": "aktif gün",
                    "everyday": "Güne göre Aylık"
                }
            }
        },
        "transaction_add": {
            "title": "Kullanıcı bakiye güncelleme (Masraf/Ödeme ekleme)",
            "description": "İşlem açıklaması",
            "balance": "Bakiye değişikliği",
            "bonus": "Bonus değişikliği",
            "value_sup": "* Hesaba bakiye ekleyebilir (ödeme girişi) yada eksi bakiye girebilirsiniz (manuel masraf kaydı)"
        },
        "combo_empty": "Kullanıcı seç",
        "select_error": "Cihaz yada klonu zaten seçili kullanıcıya bağlıdır",
        "select": {
            "title": "Kullanıcı seçimi"
        }
    },
    "trackers": {
        "menu_text": "Cihazlar",
        "fields": {
            "tracker_id": "ID",
            "label": "Başlık",
            "model": "Model",
            "phone": "Telefon",
            "device_id": "Device ID",
            "creation_date": "Cihaz aktivasyon tarihi",
            "creation_date_short": "Etkinleştirildi",
            "connection_status": "Durum",
            "tracker_id_exp": "Cihaz numarası",
            "phone_exp": "Telefon numarası",
            "owner": "Cihaz sahibi",
            "tariff": "Cihaz planı",
            "deleted": "Tracker deleted",
            "blocked": "Service suspended",
            "user_id": "Kullanıcı ID",
            "clone": "Klon",
            "clone_owner": "Sahibi klonla",
            "options": {
                "clone": "klon",
                "deleted": "silindi",
                "blocked": "bloke"
            },
            "statuses": {
                "active": "Çevrimiçi",
                "signal_lost": "Bağlantı kesildi",
                "offline": "Çevrimdışı",
                "just_registered": "Yeni kaydoldu",
                "idle": "GPS güncellenmedi"
            }
        },
        "edit_form": {
            "main_fields": "Genel bilgi",
            "title": "Cihaz düzenle",
            "save_btn": "Değişiklikleri kaydet",
            "return_btn": "Geri"
        },
        "clone_form": {
            "title": "Crate a clone for the tracker",
            "remove_failure_msg": "Klon kaldırma başarısız oldu",
            "failure_msg": "Klon oluşturma başarısız",
            "remove_confirm": "Klon'u kaldır"
        },
        "group_clone_form": {
            "title": "Cihaz grubu klonlama",
            "save_btn": "Klonla",
            "grid_clone_label": "Klonlar eklenecek",
            "grid_clone_tip": "Klon etiketini değiştirmek için çift tıklayınız"
        },
        "group_owner_form": {
            "title": "Cihaz sahibi değişikliği",
            "save_btn": "Sahip değiştirme",
            "grid_clone_label": "Cihazlar değiştirilecek"
        },
        "tariff_form": {
            "title": "Cihaz tarife planı değiştir",
            "save_btn": "Değişiklikleri kaydet",
            "repay": "Mevcut tarife için ödeme hatırlatıcı",
            "charge": "Şimdi faturalandır (yeni tarifeye göre)",
            "charge_sup": "sadece aylık tarife planları",
            "tariff_invalid": "şimdikinden farklı olmalıdır"
        },
        "list": {
            "create_btn_text": "Yeni cihaz oluştur",
            "owner_btn": "Sahip değiştir",
            "clone_btn": "Klonla",
            "edit_btn": "Seçileni düzenle",
            "empty_text": "Cihaz bulunamadı",
            "after_clone_success": "Klonlanmış: {0}",
            "after_clone_failure": "Klonlandı {0} başarılı, {1} başarısız oldu",
            "after_owner_success": "Değiştirildi: {0}",
            "after_owner_failure": "Değiştirilen: {0}, {1} değişiklik başarısız oldu",
            "select_req": "Listeden cihazları seçin",
            "select_clone_req": "Klonlar seçildi, grup operasyonları gerçekleştirilemez"
        },
        "card": {
            "links": {
                "change_tracker_user": "Sahip değiştir",
                "tracker_edit": "Cihaz düzenle",
                "tracker_tariff_edit": "Plan değiştir",
                "tracker_clone_create": "Klon oluştur",
                "tracker_clone_remove": "Klon sil",
                "tracker_tariff": "Cihaz planı",
                "tracker_owner": "Cihaz sahibi",
                "tracker_console": "Airconsole Terminali",
                "tracker_corrupt": "Cihazı sil"
            }
        },
        "console": {
            "title": "Airconsole Cihaz Terminal Bağlantı Ekranı",
            "connect_btn": "Bağlantıyı başlat",
            "disconnect_btn": "Oturumu sonlandır",
            "auto_scroll": "Otomatik kaydırma",
            "clear": "Konsulu temizle",
            "send_btn": "Gönder",
            "send_empty": "Komut tipi",
            "loading": "Cihaza bağlanıyor",
            "connect_init": "Bağlantı kuruldu",
            "show_time": "Mesaj zamanını göster",
            "show_status": "Durumu göster",
            "disconnect_msg": "Bağlantı sonlandırıldı",
            "connect_msg": "Bağlantı kuruldu",
            "error_msg": "Cihaz bağlantı hatası",
            "connection_failure": "Cihaza bağlanılamıyor",
            "close_question": "Bağlantı kapatılsınmı? ",
            "status_title": "Cihaz durumu",
            "status_property_title": "Durum",
            "status_value_title": "Değer"
        },
        "corrupt": {
            "alert": {
                "title": "Cihaz kaldırılsın mı?",
                "text": "Cihaz veritabanı üzerinden  kalıcı olarak kaldırılacak ve ilgili tüm veriler kaybolacaktır. <br><br> Kaldırmak istediğinize eminmisiniz?"
            },
            "success_msg": "{0} cihazı başarıyla kaldırıldı"
        }
    },
    "tariffs": {
        "menu_text": "Planlar",
        "create_form": {
            "title": "Create a new plan",
            "main_fields": "Genel bilgi",
            "save_btn": "Create a plan",
            "clear_btn": "Formu temizle",
            "options_fields": "Tarife planı seçenekleri",
            "prices_fields": "Ücretler"
        },
        "edit_form": {
            "title": "Planı düzenle",
            "save_btn": "Değişiklikleri kaydet"
        },
        "default_form": {
            "title": "Varsayılan plan ayarları"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Etiket",
            "group_id": "Grup",
            "price": "Aylık ödeme",
            "device_limit": "Cihaz limitleri",
            "device_type": "Cihaz tipi",
            "store_period": "Kayıt saklama peryodu",
            "active": "Kullanıcı için kullanılabilirlik",
            "has_reports": "Table reports available",
            "proportional_charge": "Gün sayısına orantılı kısmi ay abonelik bedeli",
            "incoming_sms": "Gelen SMS",
            "outgoing_sms": "Giden SMS",
            "service_sms": "Servis SMS",
            "phone_call": "Telefon aramaları",
            "traffic": "GPRS ücreti (1 Mb)",
            "default_tariff": " «{0}» tip cihazlar için varsayılan tarife",
            "default_short": "varsayılan",
            "service_price": "servis kullanımı için fatura edilen tutar",
            "group_id_exp": "Tarife planı grubu",
            "active_exp": "Kullanıcıların bu planı seçmelerine izin verildi",
            "device_limit_exp": "Maksimum cihaz",
            "activation_bonus": "Aktivasyon bonusu",
            "free_days": "Ücretsiz gün sayısı",
            "tariff_type": "Faturalandırma peryodu",
            "tariff_type_short": "Ödeme"
        },
        "list": {
            "create_btn_text": "Yeni tarife planı ekle",
            "empty_text": "Tarife planı bulunamadı"
        },
        "card": {
            "links": {
                "make_default": "Varsayılan olarak işaretle",
                "tariff_edit": "Planı düzenle"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Bu plandaki cihazlar"
                }
            }
        },
        "combo_empty": "Plan seç",
        "select_error": "Bu tarife planı kullanılamıyor",
        "select": {
            "title": "Plan seçimi"
        },
        "types": {
            "activeday": "Günlük",
            "monthly": "Aylık",
            "everyday": "Aylık (günlük borçlandırma)"
        },
        "price_type": {
            "monthly": "Aylık ücret",
            "activeday": "Günlük ücret",
            "everyday": "Aylık ücret"
        }
    },
    "codes": {
        "menu_text": "Aktivasyon kodları",
        "fields": {
            "activated": "durum",
            "activation_date": "Aktivasyon tarihi",
            "bonus_amount": "Bonus",
            "code": "kod",
            "device_id": "Cihaz ID",
            "device_type": "Cihaz tipi",
            "free_days": "Ücretsiz günler",
            "money_amount": "Tutar",
            "tariff_id": "Plan ID",
            "tariff_name": "Plan",
            "status": {
                "activated": "aktif",
                "no_activated": "aktif değil"
            }
        },
        "edit_form": {
            "title": "Aktivasyon kodlarını düzenle",
            "save_btn": "Değişiklikleri kaydet",
            "selected_count": "Kodlar seçildi",
            "device_type": "Seçili kodlar için cihaz tipleri"
        },
        "create_form": {
            "title": "Aktivasyon kodu oluştur",
            "save_btn": "Kodları oluştur",
            "new_codes_count": "Yeni kod adedi"
        },
        "list": {
            "empty_text": "Aktivasyon kodları bulunamadı",
            "create_btn": "Yeni oluştur",
            "edit_btn": "Seçileni düzenle",
            "reload_btn": "Yeniden yükle",
            "after_create_success": "Oluşturulan: {0}",
            "after_edit_success": "Değişiklikler: {0}",
            "after_edit_failure": "Değiştirildi: {0} başarılı, {1} başarısız oldu",
            "select_req": "Listeden kodları seçin",
            "same_type_req": "Bir cihaz tipi kodu belirlemelisniz",
            "edited_tip": "değiştirildi",
            "faq_link": "http://www.navixy.com/docs/user/admin-panel-docs/activation-codes/",
            "faq_text": "Activation codes FAQ",
            "filters": {
                "activated": "Aktif",
                "no_activated": "Aktif değil",
                "trackers": "Cihazlar",
                "cameras": "Kameralar",
                "sockets": "Soketler",
                "toggle_all": "Tümünü göster"
            }
        }
    },
    "settings": {
        "menu_text": "Hesap yönetimi",
        "subscription": {
            "activation_btn_text": "Pay activation fee now (500 USD) online",
            "monthly_fee_btn_text": "Pay online",
            "activation_hint": "You are evaluating Navixy ServerMate trial version (till {0}). To continue with the commercial version please choose your subscription options and proceed with the activation payment:",
            "monthly_fee_hint": "Review your subscription’s balance and add funds here. We thank you for your timely payments. To avoid the automatic disruption of your subscription please always close your bills within 10 days after you received the invoice for the previous month.",
            "license_balance": "Pending amount {0}",
            "subscription_hint": "To complete the online payment you will be redirected to our payment gateway’s secure web page. You can use various payment options there. Once the payment is confirmed, your funds will be automatically added to your ServerMate account. For any questions please contact us by email accounting@navixy.com"
        },
        "fields": {
            "service_title": "Servis başlığı",
            "page_title": "Sayfa başlığı",
            "locale": "Kullanıcı arayüz dili",
            "demo_login": "Demo kullanıcı",
            "demo_password": "Demo şifresi",
            "maps_title": "Kullanılabilir haritalar",
            "maps_default": {
                "type": "Varsayılan harita",
                "location_lat": "Varsayılan enlem",
                "location_lng": "Varsayılan boylam",
                "zoom": "Varsayılan zoom"
            },
            "google_client_id": "Google maps Client ID",
            "currency": "Faturalandırma para birimi",
            "payment_link": "Ödeme sistemi URL",
            "promo_url": "Tanıtım web sitesi URL",
            "domain": "Domain",
            "email_from": "Gönderici Eposta",
            "email_special": "Uyarılar için e-posta",
            "email_footer": "Eposta footer",
            "sms_originator": "SMS gönderen",
            "caller_id": "Ses bildirimi gönderen Callerid",
            "password": "Yeni şifre",
            "password_repeat": "Yeni şifreyi tekrarlayın",
            "password_old": "Geçerli şifre",
            "password_mismatched": "Şifreler birbiriyle eşlemiyor",
            "footer_email": "Şirket E-posta",
            "footer_site": "«Hakkımızda» Linki",
            "footer_text": "Sayfanın altındaki metin",
            "geocoder": "Geocoding",
            "route_provider": "Varsayılan rota sağlayıcı",
            "translit": "SMS harf çevirisi",
            "measurement_system": "Ölçüm sistemi",
            "payment_description": "Ödeme seçenekleri ve şartları",
            "support_email": "Müşteri destek epostası",
            "alerts_email": "Önemli uyarı ve faturalar için e-posta",
            "time_zone": "Saat dilimi",
            "service_title_ph": "Pazar adı",
            "service_title_hint": "Giriş sayfası, tarayıcı sekmesinde ve diğer yerlerde kullanılır",
            "footer_text_ph": "Giriş sayfası footer bölümüne metin ekleyebilirsiniz",
            "footer_text_hint": "Giriş sayfası footer bölümü için özel metin yada link ekleyebilirsiniz. Link'ler http: ile başlar mail linkleri ise mailto: ile başlamalıdır. lütfen sadece düz metin kullanınız, HTML tag'lar desteklenmemektedir.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Web sitenizin linki http:// ile başlamalıdır. eğer bu alanı doldurursanız giriş sayfasındaki \"Hakkımızda\" kısmında linklenecektir.",
            "favicon_hint": "Belirlediğiniz icon browser sekmesinde görüntülenir (bu özellik internet explorer tarafından desteklenmemektedir)",
            "logo_hint": "Belirlediğiniz logo,  giriş sayfası, pdf formatındaki raporlar ve kullanıcılara yapılan eposta bildirimlerinde kullanılmaktadır",
            "login_wallpaper_hint": "Giriş sayfası arkaplan resmi yükleme",
            "domain_ph": ".gp-s.net",
            "domain_hint": "Sistemi kendi domain adınız ile kullanın (takip.firma.com) bu alt domaini buraya tanımlamadan önce dns sunucunuzun C-NAME kayıtlarınız düzenleyin ve gp-s.net adresine yönlendirin",
            "domain_help": "CNAME kayıtlarını nasıl düzenlerim",
            "domain_help_link": "http://www.gp-s.net/docs/user/admin-panel-docs/settings/domain-name/",
            "locale_hint": "Dil tüm yeni kullanıcı hesapları için varsayılan olarak ayarlanacaktır. Kullanıcı bu tercihi hesap ayarları üzerinden değiştirebilir.",
            "currency_hint": "Ülkenizde ortak olarak kullanılan para birimini seçiniz, Sistem kullanıcıları tarifelerine bağlı olarak bu para birimi üzerinden faturalandıracaktır.",
            "allow_registration": "Kullanıcıların hesap oluşturmasına izin ver",
            "allow_registration_hint": "Bu kutucuğu işaretleyerek kullanıcıların giriş sayfası ve mobil uygulama kullanarak yeni hesap oluşturmasına izin verirsiniz. Eğer kutucuk işaretli değilse yeni hesapları yönetici kontrol paneli üzerinden (veya yönetiici apisi ile) yanlızca siz oluşturabileceksiniz.",
            "show_mobile_apps_hint": "Bu kutucuk işaretli ise mobil uygulama bağlantıları giriş sayfasında gösterilir.",
            "measurement_system_hint": "Tüm fiziksel miktarlar (uzunluk, ağırlık, hacim, vb) seçilen ölçüm sistemi içinde temsil edilir.",
            "time_zone_hint": "Kullanıcılarınızın en çok kullandığı saat dilimi",
            "translit_hint": "Harf çevrimi SMS mesajındaki ulusal alfabedeki karakterleri en yakın latin karakter ile değiştirerek karakter sayısının düşürür bu sayede tasarruf edilmesini sağlar.",
            "geocoder_hint": "Bu hizmet adresleri koordinatlara çevirmek için kullanılır.",
            "route_provider_hint": "Bu hizmet başlangıç ve bitiş noktası arasındaki optimum rotayı bulmayı sağlar",
            "geolocation": "Cell ID coğrafi konumlandırma",
            "geolocation_hint": "GPS sinyalinin olmadığı alanlarda (bina içi, kapalı garaj vb.) baz istasyonları üzerinden yaklaşık konumlandırma yapılabilmektedir.",
            "speed_restriction": "Hız limitleri",
            "speed_restriction_hint": "Servis trafik düzenlemeleri ve yol işaretlerine göre hız limitleri ve ihlalleri tespit edilmesine olanak tanır. Ancak bu serviste hız sınırı veri doğruluğu garanti edilmez.",
            "roads_snap": "Yola yapış",
            "roads_snap_hint": "Servis cihazdan alınan koordinatların seyahat edilen yola entegre edilerek çizimin daha net ve yol geometrisine uygun olmasını sağlayarak görselliği arttırır",
            "daily_reports_ph": "email1@company.com,email2@company.com,...",
            "newsletters": "Haber bültenleri",
            "newsletters_hint": "Haber bültenleri ve önemli güncellemeler için e posta adresleri, birden fazla eposta eklemek için lütfen adresleri virgül ile ayırın",
            "daily_reports": "Günlük raporlar",
            "daily_reports_hint": "Günlük gelir raporlarını almak için lütfen eposta adreslerini belirleyin, birden fazla eposta adresi girmek için adresleri virgül ile ayırabilirsiniz",
            "invoices": "Faturalar",
            "invoices_hint": "Fatura ve muhasebe dökümanları için eposta adresleri, birden fazla eposta adresi girmek için lütfen adreslerin arasını virgül ile ayırınız",
            "demo_login_ph": "demo kullanıcı",
            "demo_password_ph": "şifre",
            "sms_gateway": "SMS Gateway",
            "sms_gateway_ph": "SMS Gateway seçilmedi",
            "sms_gateway_hint": "Kullandığınız SMS gateway' i seçin. Uygun bir hesaba ihtiyacınız olacak ve gateway ile güvenli bağlantı için kimlik bilgilerini sağlamanız gerekecektir.",
            "sms_sender_id": "Gönderen ID",
            "sms_sender_id_ph": "Örnek: Aksu",
            "sms_sender_id_hint": "Gönderen ID olarak kiraladığınız numarayı belirtmeniz şiddetle tavsiye edilir. Bu durumda hizmet platformunun komut onayları ve diğer verileri cihazlardan SMS yoluyla alması mümkün olacaktır.",
            "user_sms_gateway": "SMS Gateway",
            "user_sms_gateway_ph": "SMS Gateway seçilmemiş",
            "user_sms_gateway_hint": "Kullandığınız SMS gateway' i seçin. Uygun bir hesaba ihtiyacınız olacak ve gateway ile güvenli bağlantı için kimlik bilgilerini sağlamanız gerekecektir. ",
            "user_sms_sender_id": "Gönderen ID",
            "user_sms_sender_id_ph": "Örnek: Aksu",
            "user_sms_sender_id_hint": "SMS gönderildiğinde kullanıcının alacağı mesajda gönderen hanesinde yazan nümerik yada alfanümerik gönderen kimliğidir. (Lütfen yerel yasalara uygun bir gönderici kimliği seçiniz)",
            "user_sms_inbound": "Gelen mesaj numarası",
            "user_sms_inbound_ph": "Örnek: 12162780905",
            "user_sms_inbound_hint": "SMS gönderildiğinde kullanıcının alacağı mesajda gönderen hanesinde yazan nümerik yada alfanümerik gönderen kimliğidir. (Lütfen yerel yasalara uygun bir gönderici kimliği seçiniz)",
            "not_editable": "not editable",
            "sms_inbound": "Gelen mesaj numarası",
            "sms_inbound_ph": "Örnek: 12162780905",
            "sms_inbound_hint": "Önermiyoruz fakat dilerseniz nümerik yada alfanümerik bir Gönderen ID belirtebilirsiniz, bu durumda sistem cihazlardan SMS mesajlarını alamayacaktır. Bu durum sms servisinin düzgün çalışmamasına sebebiyet verebilir."
        },
        "sms_gateway": {
            "navixy": {
                "name": "Aksu",
                "desc": "SMS-servisi, deneme hesabında satlink tarafından ücretsiz sağlanacaktır"
            },
            "nexmo": {
                "name": "Nexmo",
                "desc": "Dünyadaki en ünlü servislerden birisi (<a href=\"http://www.nexmo.com\" target=\"blank\">www.nexmo.com</a>)",
                "credentials": {
                    "key": "Anahtar",
                    "secret": "Gizli"
                }
            },
            "twilio": {
                "name": "Twilio",
                "desc": "Dünyadaki en popüler servislerden birisi (<a href=\"http://www.twilio.com\" target=\"blank\">www.twilio.com</a>)",
                "credentials": {
                    "sid": "Hesap SID",
                    "token": "Auth token"
                }
            },
            "smstraffic": {
                "name": "SMSTraffic",
                "desc": "SMSTraffic firması tarafından sağlanan servis(<a href=\"http://www.smstraffic.ru\" target=\"blank\">www.smstraffic.ru</a>)",
                "credentials": {
                    "login": "Login",
                    "password": "Şifre"
                }
            },
            "yaestar": {
                "name": "Yaestar NeoGate",
                "desc": "Satın alıp lokal olarak kurabileceğiniz sms gateway donanımı(<a href=\"http://www.yeastar.com\" target=\"blank\">www.yeastar.com</a>)",
                "credentials": {
                    "ip": "Sunucu IP",
                    "port": "Port",
                    "login": "Login",
                    "password": "Şifre"
                }
            },
            "smpp": {
                "name": "SMPP v.3.4",
                "desc": "SMS gateway'ler ile haberleşme için ortak endüstriyel standart (<a href=\"https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer\" target=\"blank\">Wikipedia</a>)",
                "credentials": {
                    "ip": "Sunucu IP",
                    "port": "Port",
                    "login": "Login (System ID)",
                    "password": "Şifre",
                    "source": "Source TON/NPI",
                    "source_select": {
                        "0": "Bilinmeyen",
                        "1": "Uluslararası",
                        "2": "Ulusal",
                        "3": "Network Specific",
                        "4": "Subscriber Number",
                        "5": "Abbreviated",
                        "6": "Alphanumeric",
                        "7": "Reserverd",
                        "-1": "Otomatik"
                    },
                    "destination": "Destination TON/NPI",
                    "destination_select": {
                        "0": "Bilinmeyen",
                        "1": "ISDN/telephone numbering plan (E163/E164)",
                        "3": "Data numbering plan (X.121)",
                        "4": "Telex numbering plan (F.69)",
                        "6": "Land Mobile (E.212)",
                        "8": "National numbering plan",
                        "9": "Private numbering plan",
                        "10": "ERMES numbering plan (ETSI DE/PS 3 01-3)",
                        "13": "Internet (IP)",
                        "18": "WAP Client Id (to be defined by WAP Forum)"
                    },
                    "charset": "Varsayılan karakter seti",
                    "charset_select": {
                        "GSM8": "GSM8",
                        "GSM7": "GSM7",
                        "ISO-8859-1": "ISO-8859-1",
                        "ISO-8859-15": "ISO-8859-15",
                        "UTF-8": "UTF-8",
                        "UCS-2": "UCS-2"
                    },
                    "long": "Uzun mesajlar",
                    "long_select": {
                        "UDH": "UDH",
                        "Payload": "Yük"
                    }
                }
            }
        },
        "edit_form": {
            "title": "Hizmet ayarları",
            "save_btn": "Kaydet",
            "save_msg": "Ayarlar başarıyla kaydedildi",
            "main_fields": "Basit ayarlar",
            "map_fields": "Harita ayarları",
            "permission_fields": "Bildirim ayarları",
            "domain_sup": "* Harita seçimi *{0} subdomainleri ile sınırlıdır",
            "custom_fields": "Özelleştirme",
            "main_buttons_title": "Butonları gösterme",
            "show_mobile_apps": "Mobil uygulamaları indirmek için butonları göster",
            "main_texts_title": "Ana metin",
            "footer_texts_title": "Giriş sayfası footer metni",
            "logo_title": "Logo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Giriş sayfası arka planı",
            "desktop_wallpaper_title": "Hizmet sayfası arkaplanı",
            "upload_btn": "Karşıya yükle",
            "update_btn": "Değiştir",
            "remove_btn": "Kaldır",
            "upload_loading": "Resim yükle",
            "domain_fields": "Domain",
            "regional_fields": "Bölgesel ayarlar",
            "maps_fields": "Haritalar",
            "demo_fields": "Demo kullanıcı",
            "notifications_fields": "Bildirimler",
            "password_fields": "Şifreyi değiştir",
            "pass_hint": "Diğer sekmelerdeki değişiklikler kaydedilmeyecek",
            "pass_save_msg": "Şifre başarıyla değiştirildi",
            "pass_save_btn": "Şifreyi değiştir",
            "demo_hint": "Demo amaçlı kullanım için bir kullanıcı hesabını seçin ve giriş sayfasına ekleyin (opsiyonel)",
            "user_notifications_title": "Kullanıcı bildirimleri",
            "user_notifications_hint": "Sanal çit uyarıları, düşük bakiye, şifre kurtarma vb. bildirimler için kullanıcı bildirim ayarları",
            "special_notifications_title": "Yönetici bildirimleri",
            "special_notifications_hint": "Hizmet durumu, istatistikler ve diğer konularda yönetici sistem bildirimleri",
            "branding_fields": "Branding",
            "branding_main_title": "Branding ayarları",
            "branding_img_title": "Resimler ve logo",
            "branding_contacts_title": "İletişim bilgileri",
            "service_fields": "Hizmet tercihleri",
            "service_links_title": "Domain ve URL Ayarları",
            "service_regional_title": "Bölgesel ayarlar",
            "service_login_title": "Giriş sayfası",
            "service_maps_title": "Haritalar",
            "service_maps_defaults_title": "Varsayılan harita ayarları",
            "service_additional_title": "Eposta bildirimleri",
            "accounts_fields": "Kullanıcı varsayılanları",
            "accounts_regional_title": "Bölgesel ayarlar",
            "accounts_geocoding_title": "Haritacılık ve veritabanları",
            "account_info": "Bu kullanıcı profili ayarları her yeni kullanıcı için varsayılan olarak ayarlanır. Kullanıcı isterse kendi tercihlerini daha sonra hesap ayarları kısmından değiştirebilir",
            "account_roads_title": "Yollar",
            "emails_fields": "Eposta mesajları",
            "emails_main_title": "Ana ayarlar",
            "emails_main_info": "Kullanıcıya gönderilecek coğrafi bazlı olaylar, düşük bakiye vb.  uyarılar  için eposta mesaj ayarları",
            "sms_fields": "SMS mesajları",
            "sms_main_title": "Ana ayarlar",
            "sms_main_info": "Hizmet platformu ve kullanıcı servis platformu ve cihazlar arasında iki yönlü iletişim için kullanılan SMS mesajları ve SMS ağ geçitlerini yapılandırın. <br>Kullanıcılara ve aygıtlara mesajları iletmek için aynı veya farklı ağ geçitleri kullanabilirsiniz .",
            "sms_m2m_title": "M2M mesajları",
            "sms_m2m_info": "Cihaz ve servis platformu arasındaki M2M sms alışverişi cihaz aktivasyonu ve uzaktan yönetim konusunda büyük bir role sahiptir. .<br /><br /> Sms kanalı şu maksatlarla kullanılır.<br /><ul><li>Birçok cihaz için otomatik cihaz aktivasyonu (APN, sunucu adresi vb.)</li><li>komutların başarıyla uyguladığına dair teyid alınması</li><li>gprs bağlantısının mümkün olmadığı noktalarda (roaming problemi vb.) konum alma</li><li>bazı model cihazlar GPRS kanalı üzerinden çıkış kontrolü vb. fonksiyonların kullanımına izin vermemektedir bu tip cihazlarda sms kanalı kullanılır",
            "sms_user_title": "Kullanıcı bildirimleri",
            "sms_user_info": "Hizmet platformu kullanıcılara sanal çit vb. olayları bildirim yapmak için sms kanalı kullanabilir. sistem kullanıcılar tarafından güvenilir numaralar listesindeki numaralardan gönderilen sms komutlarınıda işletebilir (örnek: '?' konum alma, 'ON 1' cihaz çıkışını etkinleştir vb.).",
            "branding_main_info": "Firma markanız, logonuz vb. seçenekler ile sistem görünümünü değiştirebilirsiniz.",
            "service_info": "Servis tercihlerinizi tanımlayın",
            "maps_hint": "Servis platformunuz için kullanmak istediğiniz haritaları işaretleyin. Tarife planları içerisinde özelleştirerek bazı kullanıcıların bazı haritalara erişmesinide engelleyebilirsiniz.",
            "maps_defaults_hint": "Kullanıcıların web arayüzüne ilk defa girdiklerinde hangi harita açılmasını istiyorsanız lütfen o haritayı ve ilgili seçeneklerini seçiniz."
        },
        "upload_form": {
            "save_btn": "Karşıya yükle",
            "cancel_btn": "İptal",
            "upload_btn": "Görünüm",
            "title": "Resim yükleme. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Giriş sayfası duvar kağıdı",
                "desktop_wallpaper": "Hizmet sayfası arkaplan resmi"
            },
            "tips": {
                "logo": "Transparan arka plana sahip (PNG biçimi) ve minimum genişlik 200px olan bir logo yüklemenizi tavsiye ederiz.",
                "favicon": "Transparan arkaplanlı 32x32 px bir logo kullanmanız tavsiye edilir",
                "login_wallpaper": "En az 1920 x 1080 piksel (FullHD) çözünürlükte ve JPEG formatında yatay olarak yönlendirilmiş bir arka plan resmi kullanmanız tavsiye edilir."
            },
            "img_title": "Görüntü biçimi {0} (maksimum boyut {1} MB)",
            "error_text": "Resim yüklenemedi"
        }
    },
    "accounting": {
        "menu_text": "Muhasebe",
        "report_msg": {
            "title": "Bülten e-posta onayı",
            "text": "Alert customers about exporting data to 1C for <b>{0}</b>.<br>You sure you want make <b>email-newsletter</b>?"
        },
        "form": {
            "title": "«1C:Enterprise» Dışarı veri aktarma",
            "export1c": {
                "tab_title": "Muhasebe",
                "save_btn": "1C veri dosyası al",
                "report_btn": "İşleri eposta ile gönder",
                "fields": {
                    "month": "Ay seç",
                    "last_act": "Son iş numarası"
                }
            },
            "payments": {
                "tab_title": "Ödemeler",
                "save_btn": "1C veri dosyası al",
                "fields": {
                    "date": "Zaman intervali",
                    "type": "Ödeme sistemi"
                },
                "ps": {
                    "default": "Yukarıdakilerin tümü",
                    "cyberplat": "CyberPlat",
                    "deltapay": "DeltaPay",
                    "mobile": "Mobil",
                    "mobimoney": "Mobi.Money",
                    "rbkmoney": "RBK Money",
                    "webmoney": "WebMoney",
                    "sberbank": "Sberbank"
                }
            }
        }
    },
    "payments": {
        "menu_text": "Ödemeler",
        "import_sberbank": {
            "title": "Sberbank ödemeleri içeri aktarma",
            "save_btn": "Ödemeleri içe aktar",
            "upload_btn": "View",
            "upload_loading": "Dosya karşıya yükleniyor",
            "error_text": "Ödemeler içeri aktarılamadı",
            "fields": {
                "file_title": "Import {0} file (max size {1} Mb)"
            },
            "errors": {
                "242": "Line {0}, column {1}, description:<br><i>{2}</i>"
            },
            "success_msg": "Sberbank ödemeleri başarıyla alındı",
            "success_dsc": "Date of registry: <b>{0}</b><br>Count of loaded payments: <b>{1}</b><br>Sum of loaded payments: <b>{2}</b>"
        }
    },
    "bundles": {
        "menu_text": "Paket içeriği",
        "title": "Ekipman setleriyle çalışmak",
        "menu": {
            "list": "Set listesi",
            "scan": "Sim kart cihaza bağlanıyor",
            "shipping": "Kargo",
            "import": "İçe aktar"
        },
        "fields": {
            "id": "ID",
            "model_code": "Model",
            "imei": "IMEI",
            "iccid": "ICCID",
            "sim_card": "Sim kart",
            "assign_time": "Tarih",
            "phone": "Telefon",
            "apn": "APN",
            "order_id": "Sipariş numarası"
        },
        "list": {
            "scan_btn_text": "Snap beacons",
            "empty_text": "Kit bulunamadı",
            "unassign": "siparişten çıkar",
            "unassign_q": "Do you want to remove the complete<br>c IMEI-code \"{0}\" out of order?"
        },
        "shipping": {
            "search_btn": "Ara",
            "steps": {
                "first": {
                    "title": "Sipariş arama"
                },
                "second": {
                    "title": "The addition of retro fit kits to order"
                }
            },
            "hints": {
                "ready_for_search": "Lütfen sipariş numarası giriniz.",
                "order_search_failure": "Error. Order number \"{0}\" not found.",
                "order_found": "Order number \"{0}\" was found.",
                "imei_same_order": "Error. Set your phone's IMEI code \"{0}\" is already attached to the current order.",
                "imei_order_set": "Attention! Set your phone's IMEI code \"{0}\" is already assigned to the order number \"{1}\".",
                "imei_reset_q": "Do you want perinatality set on the current order?",
                "imei_reset_btn": "Reassign",
                "bundle_asssigned": "Set your phone's IMEI code \"{0}\" was successfully added to the order of \"{1}\".",
                "bundle_asssign_failure": "Error. Set your phone's IMEI code \"{0}\" could not be added to the order \"{1}\"."
            },
            "fields": {
                "id": "Sipariş numarası",
                "user_id": "The user number",
                "sum": "Sipariş tutarı",
                "payer": "Payer",
                "recipient": "The recipient",
                "contacts": "Contacts",
                "place": "Adres",
                "comment": "Yorum",
                "creation_time": "Oluşturma zamanı",
                "status": "Durum"
            }
        },
        "scan": {
            "clear_form": "To start over",
            "to_list": "A list of sets",
            "steps": {
                "first": {
                    "title": "Scan the IMEI code of the device"
                },
                "second": {
                    "title": "Installation ICCID code device"
                }
            },
            "fields": {
                "title": "Information about the kit",
                "title_add": "The SIM card is already linked!",
                "title_add_changed": "The SIM card is changed",
                "equip_add_changed": "The kit changed",
                "id": "Room set",
                "imei": "IMEI",
                "iccid": "ICCID",
                "model_code": "The model",
                "equip_id": "Code kit",
                "order_id": "The order number",
                "assign_time": "The binding sim card"
            },
            "buttons": {
                "enter": "Enter",
                "assign_iccid": "Snap the SIM card",
                "reassign_iccid": "To reassign the SIM card",
                "remove_iccid": "Detach the SIM card",
                "print": "To print the label",
                "reset": "To start over",
                "change_equip": "Change the composition"
            },
            "imie_hints": {
                "imei_ready": "Attach the scanner to the bar code IMEI",
                "imei_invalid": "You entered an incorrect value<br>scan Again",
                "imei_focus_lose": "Scanning is not ready<br>Set the focus on the field",
                "imei_not_found": "Sets your phone's IMEI code<br><b>{0}</b> not found",
                "auto_print": "Automatically print and start again"
            },
            "iccid_hints": {
                "iccid_ready": "Attach the scanner to the barcode ICCID",
                "iccid_invalid": "You entered an incorrect value<br>scan Again",
                "iccid_focus_lose": "Scanning is not ready<br>Set the focus on the field",
                "iccid_not_found": "Failed to bind the SIM card c code<br><b>{0}</b>",
                "iccid_cant_unassign": "Failed to detach the SIM card"
            },
            "print_hints": {
                "print_error": "Error. Not found the label template for the kit.<br>Printing is not possible."
            },
            "hints": {
                "imei_ready": "Ready to scan. Attach the scanner to the barcode device IMEI.",
                "imei_focus_lose": "Error. Scanning is not ready. Click the button below.",
                "imei_focus_lose_btn": "To start the scan",
                "imei_invalid": "Error. Entered IMEI invalid value \"{0}\".<br>Please re-scan.",
                "imei_not_found": "Error. The ICCID value \"{0}\" not found.<br>Please re-scan.",
                "iccid_ready": "IMEI found. Ready to scan.<br>Attach the scanner to the barcode ICCID.",
                "iccid_focus_lose": "Error. Scanning is not ready. Click the button below.",
                "iccid_focus_lose_btn": "To start the scan",
                "iccid_invalid": "Error. You entered an incorrect value ICCID \"{0}\".<br>Please re-scan.",
                "iccid_found": "IMEI found. With him is associated ICCID code \"{0}\".<br>You can scan the new ICCID code to change it manually or detach the SIM card",
                "iccid_succcess": "ICCID \"{0}\" successfully assigned.",
                "iccid_print_ready": "If automatic printing of stickers has not occurred, click the button below.",
                "iccid_no_model": "Error. Not found the label template for the model. Cannot print",
                "iccid_send_btn": "Send ICCID",
                "iccid_unassign_btn": "Detach the SIM card",
                "iccid_print_btn": "Print sticker",
                "last_scan_text": "The results of the previous scan:",
                "unassign_q": "Detach the SIM card from the device?",
                "unassign_success": "SIM card untethered from the device",
                "unassign_failure": "Error. Failed to detach the SIM card from ustroystva"
            }
        },
        "import": {
            "import_hints": {
                "enter_list": "Enter or scan the list of IMEI-codes",
                "enter_list_no_focus": "Enter or scan the list of IMEI-codes<br>scanning not ready<br>Set the focus on the field",
                "list_count": "Resposne codes: <b>{0}</b>",
                "list_miss": "incorrect: <b>{0}</b>",
                "list_rep": "introduced repetitions: <b>{0}</b>",
                "import_success": "Successfully imported {0}",
                "import_failure": "The list of devices to import failed",
                "factory_preset": "The device is already configured by the manufacturer",
                "no_model": "Model seçilmedi"
            },
            "titles": {
                "first": "The input set of IMEI-codes",
                "second": "Cihaz model seçimi"
            },
            "buttons": {
                "import": "To import codes",
                "reset": "Formu temizle"
            }
        }
    },
    "equipment": {
        "fields": {
            "equip_id": "ID",
            "name": "Ad",
            "model_name": "Model",
            "model_code": "Model kodu",
            "vendor": "Üretici"
        },
        "select": {
            "title": "Kit seçimi"
        },
        "list": {
            "empty_text": "Paket bulunamadı"
        }
    },
    "measurement_systems": {
        "metric": "Metrik",
        "imperial": "Imperial",
        "us": "US"
    },
    "route_providers": {
        "progorod": "Progorod",
        "google": "Google",
        "osrm": "OSRM"
    },
    "geocoders": {
        "google": "Google",
        "yandex": "Yandex",
        "progorod": "Progorod",
        "osm": "OpenStreetMap"
    },
    "geolocation": {
        "disabled": "Devre dışı",
        "navixy": "Mozilla konum servisleri / @Navixy Telehouse",
        "mozilla": "Mozilla konum servisleri",
        "combain": "Combain"
    },
    "speed_restriction": {
        "disabled": "Devre dışı",
        "google": "Google Maps Roads",
        "quazar": "Quazar"
    }
});