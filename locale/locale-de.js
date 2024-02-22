/**
* @class Locale.locale-de
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-de',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-de",
            "history": false
        }
    ],
    "main_copyright": "© SquareGPS Inc. Alle Rechte vorbehalten.",
    "panel_title": "NavixyPanel",
    "error": "Fehler",
    "loading": "Laden...",
    "conneting_loader": "Verbindung mit dem Server",
    "access_denied": "Zugriff abgelehnt",
    "access_denied_tip": "Sie haben keine Berechtigung, um angeforderte Zugriffsseite",
    "index_title": "Willkommen im Bedienfeld",
    "old_version": "Alte version",
    "auth": {
        "login": "Login oder E-Mail-Adresse",
        "password": "Passwort",
        "login_btn": "Login",
        "locale_title": "Sprache der Schnittstelle",
        "locale_title_short": "Sprache",
        "auth_error": "Authentifizierungsfehler",
        "reloading_soon": "Nachladen",
        "logout": "Logout",
        "title": "Admin-panel"
    },
    "no_path_found": "Keine Seite auf diesem Weg",
    "phone_invalid_msg": "Bitte geben Sie eine gültige Telefonnummer",
    "invalid_numeric_msg": "Nicht gültige Nummer",
    "invalid_amount_msg": "Not a valid number <br>(2 Ziffern nach dem Dezimalzeichen)",
    "searcher_empty_text": "Suchbegriff eingeben",
    "search_empty_text": "Suchbegriff eingeben",
    "searchTitle": "Suche nach Kategorie",
    "clear_form_btn": "Klar",
    "save_form_btn": "Speichern",
    "back_form_btn": "Zurück",
    "select_form_btn": "Wählen",
    "close_form_btn": "Schließen",
    "edit_form_btn": "Edit",
    "cancel_form_btn": "Abbrechen",
    "yes": "Ja",
    "no": "Nein",
    "na": "N/A",
    "enable": "enable",
    "disable": "disable",
    "disabled": "deaktiviert",
    "forbid": "forbid",
    "allow": "allow",
    "forbidden": "Forbidden",
    "show_btn": "Zeigen",
    "wrong_period": "Ein ungültiger Zeitraum",
    "required_fields": "* - erforderliche Felder oder Abschnitte",
    "invalid_tab": "Ungültige ausgefüllten Felder",
    "page_size": "Seitengröße",
    "errors": {
        "1": "Datenbank-Verbindungsfehler (001). Bitte kontaktieren Sie den Support oder versuchen Sie es später noch einmal.",
        "2": "Autorisierung-Systemfehler (002).  Bitte kontaktieren Sie den Support oder versuchen Sie es später noch einmal.",
        "3": "Falsche Sitzungs-Schlüssel (003).  Bitte neu einloggen. Wenn das Problem weiterhin besteht, wenden Sie sich an den Support.",
        "4": "Benutzer kann nicht gefunden werden oder die Sitzung beendet (004).  Bitte neu einloggen.",
        "5": "Falsche Anfrage (005). Bitte kontaktieren Sie den Support oder versuchen Sie es später noch einmal.",
        "6": "Unerwarteter Fehler (006). Bitte kontaktieren Sie den Support oder versuchen Sie es später noch einmal.",
        "7": {
            "default_msg": "Falsche Anforderungsparameter. Überprüfen Sie die Daten.",
            "title": "Falsche Parameter:",
            "errors": {
                "login": "Muss eine gültige e-Mail-Adresse sein",
                "domain": "Falsche Domain-Namen"
            }
        },
        "11": "Zugriff verweigert",
        "12": "Die Service-Plattform wurde nicht gefunden.",
        "101": "Im Demo-Modus ist diese Funktion deaktiviert.",
        "102": "Falscher Benutzername oder Passwort",
        "103": "Der Benutzer wurde nicht aktiviert.",
        "111": "Falsche handler",
        "112": "Falsche Methode",
        "201": "Keine Daten gefunden",
        "202": "Es gibt zu viele Punkte im Bereich",
        "203": "Verknüpftes Element wurde gelöscht",
        "204": "Element nicht gefunden",
        "205": "Ungültige Parameter",
        "206": "Dieser Benutzername ist bereits im Gebrauch",
        "207": "Ungültige captcha",
        "208": "Das Gerät ist gesperrt",
        "209": "Fehler beim Senden der Nachricht",
        "210": "Geokodierung ist fehlgeschlagen",
        "211": "Angeforderte Zeitspanne ist zu groß",
        "212": "Angeforderte Grenzwert ist zu groß",
        "213": "Das Gerät ist offline",
        "214": "Der angeforderte Vorgang werden vom Gerät nicht unterstützt",
        "215": "Externe Dienstleister Fehler",
        "216": "Gruppe ist nicht leer",
        "217": "Liste enthält nicht vorhandene Entitäten",
        "218": "Falsch formatierte externe Service-Parameter",
        "219": "Die Aktion ist für die Klon-Objekte nicht zulässig.",
        "220": "Unbekanntes Gerät-Modell",
        "221": "Tarif Einschränkung:</br> Gerät überschritten.",
        "222": "Plugin nicht gefunden",
        "223": "Diese Telefonnummer ist bereits im Gebrauch",
        "224": "Gerät mit diesem Gerät-Id wird bereits verwendet",
        "225": "Nicht erlaubt für diesen gesetzlichen Typ",
        "226": "Falsche ICCID",
        "227": "Ungültige Aktivierungs-code",
        "228": "Vom Sensor unterstützt nicht",
        "229": "Angeforderte Daten ist noch nicht fertig",
        "230": "Nicht unterstützt für diesen Entitätstyp",
        "231": "Entitätsunverträglichkeit der Typen",
        "232": "Eingabe bereits im Einsatz",
        "233": "Keine Datendatei",
        "234": "Ungültiges Datenformat",
        "235": "Fehlende Kalibrierdaten",
        "236": "Feature ist nicht verfügbar wegen Tarif Beschränkungen",
        "238": "Tarif Änderung ist nicht erlaubt",
        "240": "Nicht erlaubt, Tarif zu oft zu ändern",
        "242": "Fehler bei der Validierung",
        "251": "Unzureichende Geldmittel",
        "254": "Datei kann nicht gespeichert werden.",
        "upload_exeption": "Datei-Hochladen-Fehler",
        "no_hash": "Der Sitzungsschlüssel wird nicht gefunden",
        "service_not_respond": "Der Dienst ist vorübergehend nicht verfügbar",
        "tracker": {
            "203": "Tracker hat Regeln verbunden.",
            "237": "Ungültige Tarif",
            "238": "Tarif Ändern ist nicht erlaubt",
            "239": "Neuer Tarif existiert nicht",
            "246": "Benutzer ist falsch",
            "247": "Klon ist bereits vorhanden.",
            "249": "Der Vorgang ist nur für die Klone verfügbar",
            "250": "Nicht zulässig für gelöschte Geräte",
            "253": "Die Operation kann nicht durchgeführt werden, der Tracker hat Klone<br>Klon-ID: {0}"
        },
        "tariff": {
            "244": "Tarif mit dem gleichen Namen ist bereits vorhanden."
        },
        "settings": {
            "225": "Neues Passwort muss unterschiedlich sein.",
            "248": "Falsches Passwort"
        },
        "payment": {
            "201": "In der Datenbank nicht gefunden",
            "242": "Während Inhaltsüberprüfung gab es Störungen",
            "246": "Ungültige Benutzer-ID",
            "247": "Einheit ist bereits vorhanden.",
            "259": "Anzahl der Zahlungen nicht nachkommt, Zusammenfassung",
            "260": "Summe der Zahlungen nicht nachkommt, Zusammenfassung"
        }
    },
    "units_combination_list": {
        "days": "Tage|Tag|Tage",
        "hours": "Stunden|Stunde|Stunden",
        "minutes": "Minuten|Minute|Minuten",
        "seconds": "Sekunden|Sekunde|Sekunden",
        "everyminutes": "Minuten|Minute|Minuten",
        "everyseconds": "Sekunden|Sekunde|Sekunden",
        "meters": "Meter|Meter|Meter",
        "degrees": "Grad|Grad|Grad",
        "objects": "Objekte|Objekt|Objekte",
        "years": "Jahre|Jahr|Jahre",
        "months": "Monate|Monat|Monate",
        "codes": "Codes|Code|Codes",
        "trackers": "Tracker|Tracker|Tracker",
        "devices": "Geräte|Gerät|Geräte",
        "entries": "Treffern|Übereinstimmung|Treffern",
        "assets": "assets|asset|assets"
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "qkm",
        "square_meter": "qm",
        "ar": "ar",
        "hectare": "ha",
        "kmh": "km / h",
        "hour": "h",
        "minute": "m",
        "second": "s",
        "litres": "l",
        "day": "d",
        "mile": "mi"
    },
    "search": {
        "empty": "Suche nach Kategorie",
        "btn": "Finden"
    },
    "list": {
        "edit_tool": "Bearbeiten",
        "create_btn_text": "Erstellen",
        "empty_text": "Keine Daten",
        "search_title_tpl": "{0}: gefunden {1}",
        "search_empty_title_tpl": "{0}: keine Treffer gefunden",
        "search_title": "Suche",
        "search_empty_title": "Keine Treffer gefunden"
    },
    "card": {
        "links": {
            "collapser_tip": "links ausblenden",
            "collapser_exptip": "Links anzeigen"
        },
        "body": {
            "title": "Weitere Informationen:",
            "exptitle": "Weitere Informationen <a>(zeigen)</a>",
            "exptitle_show": "<a>(show)</a>",
            "collapser_tip": "Zusätzliche Informationen ausblenden",
            "collapser_exptip": "Weitere Informationen anzeigen"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Kamera",
        "socket": "Socket"
    },
    "currency": {
        "gbp": "Pfund sterling",
        "brl": "Brasilianischer Real",
        "huf": "Forint",
        "hkd": "Hongkong-Dollar",
        "dkk": "Dänische Krone",
        "eur": "Euro",
        "ils": "Schekel",
        "inr": "Indische Rupie",
        "idr": "Indonesische Rupiah",
        "cad": "Kanadischer dollar",
        "cny": "Renminbi",
        "krw": "Südkoreanischer Won",
        "myr": "Ringgit",
        "mxn": "Mexikanischer Peso",
        "nzd": "Neuseeland-Dollar",
        "nok": "Norwegische Krone",
        "pkr": "Pakistanische Rupie",
        "pln": "Złoty",
        "rub": "Russischer Rubel",
        "sgd": "Singapur-Dollar",
        "usd": "US-Dollar",
        "twd": "Neuer Taiwan-Dollar",
        "thb": "Baht",
        "try": "Türkische Lira",
        "php": "Philippinischer Peso",
        "czk": "Tschechische Krone",
        "clp": "Chilenischer Peso",
        "sek": "Schwedische Krone",
        "chf": "Schweizer Franken",
        "zar": "Südafrikanischer Rand",
        "jpy": "Japanischer Yen",
        "kzt": "Kasachstan Tenge",
        "byr": "Weißrussischer Rubel",
        "aud": "Australischer Dollar",
        "tjs": "Tajik Somoni",
        "uah": "Hrywnja",
        "kgs": "Som",
        "tmt": "Turkmenistan-Manat",
        "uzs": "Soʻm",
        "mdl": "Moldauischer Leu",
        "gel": "Georgischer Lari",
        "amd": "Armenischer Dram",
        "azn": "Aserbaidschan-Manat",
        "all": "Albania Lek",
        "afn": "Afghanistan Afghani",
        "ars": "Argentina Peso",
        "awg": "Aruba Guilder",
        "bsd": "Bahamas Dollar",
        "bbd": "Barbados Dollar",
        "bzd": "Belize Dollar",
        "bmd": "Bermuda Dollar",
        "bob": "Bolivia Boliviano",
        "bam": "Bosnia and Herzegovina Convertible Marka",
        "bwp": "Botswana Pula",
        "bgn": "Bulgaria Lev",
        "bnd": "Brunei Darussalam Dollar",
        "khr": "Cambodia Riel",
        "kyd": "Cayman Islands Dollar",
        "cop": "Colombia Peso",
        "crc": "Costa Rica Colon",
        "hrk": "Croatia Kuna",
        "cup": "Cuba Peso",
        "dop": "Dominican Republic Peso",
        "xcd": "East Caribbean Dollar",
        "egp": "Egypt Pound",
        "svc": "El Salvador Colon",
        "fkp": "Falkland Islands (Malvinas) Pound",
        "fjd": "Fiji Dollar",
        "ghc": "Ghana Cedi",
        "gip": "Gibraltar Pound",
        "gtq": "Guatemala Quetzal",
        "ggp": "Guernsey Pound",
        "gyd": "Guyana Dollar",
        "hnl": "Honduras Lempira",
        "isk": "Iceland Krona",
        "irr": "Iran Rial",
        "imp": "Isle of Man Pound",
        "jmd": "Jamaica Dollar",
        "jep": "Jersey Pound",
        "kpw": "Korea (North) Won",
        "lak": "Laos Kip",
        "lbp": "Lebanon Pound",
        "lrd": "Liberia Dollar",
        "mkd": "Macedonia Denar",
        "mur": "Mauritius Rupee",
        "mnt": "Mongolia Tughrik",
        "mzn": "Mozambique Metical",
        "nad": "Namibia Dollar",
        "npr": "Nepal Rupee",
        "ang": "Netherlands Antilles Guilder",
        "nio": "Nicaragua Cordoba",
        "ngn": "Nigeria Naira",
        "omr": "Oman Rial",
        "pab": "Panama Balboa",
        "pyg": "Paraguay Guarani",
        "pen": "Peru Nuevo Sol",
        "qar": "Qatar Riyal",
        "ron": "Romania New Leu",
        "shp": "Saint Helena Pound",
        "sar": "Saudi Arabia Riyal",
        "rsd": "Serbia Dinar",
        "scr": "Seychelles Rupee",
        "sbd": "Solomon Islands Dollar",
        "sos": "Somalia Shilling",
        "lkr": "Sri Lanka Rupee",
        "srd": "Suriname Dollar",
        "syp": "Syria Pound",
        "ttd": "Trinidad and Tobago Dollar",
        "tvd": "Tuvalu Dollar",
        "uyu": "Uruguay Peso",
        "vef": "Venezuela Bolivar",
        "vnd": "Viet Nam Dong",
        "yer": "Yemen Rial",
        "zwd": "Zimbabwe Dollar",
        "mad": "Moroccan dirham",
        "kwd": "Kuwaiti dinar",
        "bdt": "Bangladeshi taka"
    },
    "maps": {
        "roadmap": "Google-Fahrplan",
        "satellite": "Google Satellit",
        "hybrid": "Google hybrid",
        "yandex": "Yandex Maps",
        "yandexpublic": "Yandex Narod Map",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGis Maps",
        "mailru": "Mail.ru Maps",
        "here": "HERE Maps",
        "bing": "Bing Maps"
    },
    "dealer_info": {
        "first": "Gesamt",
        "last": "von"
    },
    "index": {
        "menu_text": "Startseite"
    },
    "users": {
        "menu_text": "Benutzer",
        "create_btn": "Neuer Benutzer",
        "create_form": {
            "title": "Neuer Benutzer",
            "main_fields": "Allgemeine Informationen",
            "contact_fields": "Kontaktdaten",
            "address_fields": "Adresse",
            "legal_fields": "Juristische Person Informationen",
            "password": "Passwort",
            "password_repeat": "Passwort wiederholen",
            "password_mismatched": "Passwörter stimmen nicht überein",
            "language": "Standardsprache",
            "time_zone": "Zeitzone",
            "save_btn": "Benutzer erstellen",
            "clear_btn": "Klare form",
            "copy_address": "Kopieren von Adresse"
        },
        "edit_form": {
            "title": "Benutzer bearbeiten",
            "save_btn": "Änderungen speichern",
            "return_btn": "Zurück"
        },
        "fields": {
            "creation_date": "Datum der Registrierung",
            "login": "E-Mail-Adresse",
            "balance": "Balance",
            "bonus": "Bonus",
            "first_name": "Name",
            "middle_name": "Zweiter Vorname",
            "last_name": "Nachname",
            "activated": "Aktiviert",
            "activated_t": "Benutzer aktiv",
            "legal_type": "Rechtlicher Status",
            "tin": "TIN",
            "legal_name": "Offizieller Name",
            "iec": "IEC",
            "phone": "Telefonnummer",
            "post_country": "Land",
            "post_index": "PLZ",
            "post_region": "Region",
            "post_city": "Stadt",
            "post_street_address": "Straße, Adresse",
            "registered_country": "Registrierung-Land",
            "registered_index": "Registrierung-Postleitzahl",
            "registered_region": "Registrierung-region",
            "registered_city": "Registrierung-Stadt",
            "registered_street_address": "Registrierung Adresse",
            "sole_trader": "Einzelunternehmer",
            "legal_entity": "Juristische Person",
            "individual": "Individuelle",
            "full_name": "Vollständiger Name",
            "login_short": "Login",
            "user_id": "ID",
            "user_id_exp": "Benutzernummer",
            "activated_short": {
                "title": "Status",
                "status_true": "Aktive",
                "status_false": "Nicht aktiv",
                "status_no": "Active, email not confirmed"
            },
            "registered_short": "rechtliche",
            "password": "Neues Passwort",
            "password_repeat": "Neues Passwort wiederholen",
            "password_mismatched": "Passwörter stimmen nicht überein"
        },
        "password_form": {
            "title": "Passwort eines Benutzers ändern",
            "save_btn": "Passwort festlegen",
            "return_btn": "Abbrechen",
            "success_msg": "Passwort erfolgreich geändert"
        },
        "list": {
            "create_btn_text": "Neuen Benutzer erstellen",
            "empty_text": "Keine Benutzer gefunden"
        },
        "session_alert": {
            "error": "Benutzersitzung kann nicht erstellt werden.",
            "title": "Ihre Sitzung Code"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Benutzer-Tracker"
                },
                "transactions": {
                    "title": "Transaktionen"
                }
            },
            "links": {
                "session_text": "Zum Monitoring",
                "user_edit": "Benutzer bearbeiten",
                "user_change_password": "Passwort ändern",
                "transactions": "Transaktionen",
                "create_transaction": "Balance ändern",
                "hash_text": "Get session key"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "Keine Transaktionen gefunden",
                "title": "Transaktionen für Benutzer"
            },
            "fields": {
                "description": "Operation",
                "type": "Operationstyp",
                "subtype": "Subtyp",
                "date": "Datum",
                "amount": "Summe",
                "old_balance": "Alte",
                "new_balance": "Neu",
                "type_set": {
                    "main_charge": "Abonnement",
                    "payment": "Zahlung",
                    "tariff_charge": "Telekom-Dienste",
                    "bonus_charge": "Bonus nachfüllen"
                },
                "subtype_set": {
                    "monthly": "monatliche",
                    "partner": "von einem Partner",
                    "activeday": "aktiven Tag",
                    "everyday": "monatlich bei Tag",
                    "sms": "SMS message"
                }
            }
        },
        "transaction_add": {
            "title": "Ändern Balance (Hinzufügen Transaktion) von Benutzern",
            "description": "Transaktionsbeschreibung",
            "balance": "Balance-Änderungen",
            "bonus": "Bonus-Änderungen",
            "value_sup": "* - dessen Betrag den aktuellen Wert ändern wird, kann negativ sein"
        },
        "combo_empty": "Einen Benutzer wählen",
        "select_error": "Tracker oder sein Klon ist bereits an ausgewählte Benutzer gebunden.",
        "select": {
            "title": "Wählen Sie einen Benutzer"
        },
        "session_hash": {
            "title": "User session key"
        }
    },
    "trackers": {
        "menu_text": "Tracker",
        "fields": {
            "tracker_id": "ID",
            "label": "Titel",
            "model": "Modell",
            "phone": "Telefon",
            "device_id": "Geräte-id",
            "creation_date": "Datum der Registrierung",
            "creation_date_short": "Registriert",
            "connection_status": "Status",
            "tracker_id_exp": "Tracker-Nummer",
            "phone_exp": "Telefonnummer",
            "owner": "Tracker-Besitzer",
            "tariff": "Tracker-Tarif",
            "deleted": "Als gelöscht markiert",
            "blocked": "Dienst angehalten",
            "user_id": "Benutzer-ID",
            "clone": "Klon",
            "clone_owner": "Klon-Besitzer",
            "options": {
                "clone": "Klon",
                "deleted": "gelöscht",
                "blocked": "blockiert"
            },
            "statuses": {
                "active": "Online",
                "signal_lost": "Verbindung verloren",
                "offline": "Offline",
                "just_registered": "Gerade registriert",
                "idle": "GPS nicht aktualisiert"
            }
        },
        "edit_form": {
            "main_fields": "Hauptinformationen",
            "title": "Tracker bearbeiten",
            "save_btn": "Änderungen speichern",
            "return_btn": "Zurück"
        },
        "clone_form": {
            "title": "Klon des Trackers erstellen",
            "remove_failure_msg": "Fehler beim Entfernen von Klon",
            "failure_msg": "Fehler beim Erstellen des Klon",
            "remove_confirm": "Klon zu entfernen"
        },
        "group_clone_form": {
            "title": "Klonen Gruppe von Tracker",
            "save_btn": "Klon",
            "grid_clone_label": "Klone werden hinzugefügt",
            "grid_clone_tip": "Sie können das Label des Klons ändern mit einem Doppelklick darauf in der Liste"
        },
        "group_owner_form": {
            "title": "Besitzer Ändern für Gruppe von Trackern",
            "save_btn": "Besitzer ändern",
            "grid_clone_label": "Tracker werden geändert"
        },
        "tariff_form": {
            "title": "Tarif für tracker ändern",
            "save_btn": "Änderungen speichern",
            "repay": "Rest des aktuellen Tarif Zahlung zurückzahlen",
            "charge": "Zahlung berechnen für neuen Tarif",
            "charge_sup": "nur für die Tarif-Pläne mit monatlichen Zahlungen",
            "tariff_invalid": "muss von aktuell verschieden sein"
        },
        "list": {
            "create_btn_text": "Neuen tracker erstellen",
            "owner_btn": "Besitzerwechsel",
            "clone_btn": "Klon",
            "edit_btn": "Ausgewählt bearbeiten",
            "empty_text": "Keine Tracer gefunden",
            "after_clone_success": "Geklont: {0}",
            "after_clone_failure": "Geklonte: {0}, {1} Klon ist fehlgeschlagen",
            "after_owner_success": "Geändert: {0}",
            "after_owner_failure": "Geändert: {0}, {1} Änderung fehlgeschlagen",
            "select_req": "Wählen Sie im Listenfeld die Option Tracker",
            "select_clone_req": "Klone ausgewählt, Gruppenoperationen können nicht ausgeführt werden"
        },
        "card": {
            "links": {
                "change_tracker_user": "Besitzerwechsel",
                "tracker_edit": "Tracker bearbeiten",
                "tracker_tariff_edit": "Tarif ändern",
                "tracker_clone_create": "Erstellen Sie Klon von diesen tracker",
                "tracker_clone_remove": "Dieser Klon zu löschen",
                "tracker_tariff": "Tracker-Tarif",
                "tracker_owner": "Tracker-Besitzer",
                "tracker_console": "GPRS-terminal",
                "tracker_corrupt": "Abmelden"
            }
        },
        "console": {
            "title": "GPRS-Terminal für tracker",
            "connect_btn": "Verbindung starten",
            "disconnect_btn": "Enge Verbindung",
            "auto_scroll": "Automatisches Scrollen",
            "clear": "Klar-Konsole",
            "send_btn": "Senden",
            "send_empty": "Geben Sie den Befehl",
            "loading": "Verbinden mit einem Gerät",
            "connect_init": "Verbindung wird hergestellt",
            "show_time": "Nachricht-Zeit anzeigen",
            "show_status": "Status anzeigen",
            "disconnect_msg": "Verbindung beendet",
            "connect_msg": "Verbindung wird hergestellt",
            "error_msg": "Fehler bei der Verbindung zum Gerät",
            "connection_failure": "Keine Verbindung zum Gerät",
            "close_question": "Enge Verbindung?",
            "status_title": "Gerätestatus",
            "status_property_title": "Status",
            "status_value_title": "Wert"
        },
        "corrupt": {
            "alert": {
                "title": "Tracker-Registrierung entfernen ?",
                "text": "Das Gerät wird von der Datenbank dauerhaft gelöscht, alle Daten - nicht verfügbar!<br><br>Sind Sie sicher, dass Sie möchten Registrierung zu entfernen ?"
            },
            "success_msg": "Gerät {0} erfolgreich entfernt"
        }
    },
    "tariffs": {
        "menu_text": "Tarife",
        "create_form": {
            "title": "Erstellen neuen Tarif",
            "main_fields": "Hauptinformationen",
            "save_btn": "Tarif erstellen",
            "clear_btn": "Klare form",
            "options_fields": "Tarifoptionen",
            "prices_fields": "Tarif-Preise"
        },
        "edit_form": {
            "title": "Tarif bearbeiten",
            "save_btn": "Änderungen speichern"
        },
        "default_form": {
            "title": "Standard-Tarif-Einstellungen"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Label",
            "group_id": "Gruppe",
            "price": "Monatliche Zahlung",
            "device_limit": "Begrenzung von Geräten",
            "device_type": "Gerätetyp",
            "store_period": "Geschichte-Lagerzeit",
            "active": "Verfügbar für Benutzer",
            "has_reports": "Tabellenberichte sind verfügbar",
            "proportional_charge": "Abonnementgebühren für den teilweisen Monat Verhältnis zur Anzahl der Tage, abzuschreiben",
            "incoming_sms": "Eingehende SMS",
            "outgoing_sms": "Ausgehende SMS",
            "service_sms": "Service SMS",
            "phone_call": "Telefonanrufe",
            "traffic": "GPRS (für Mb)",
            "default_tariff": "der Standard-Tarif für Geräte des Typs «{0}»",
            "default_short": "Standard",
            "service_price": "der Betrag für die Nutzung der Dienste",
            "group_id_exp": "Tarif-Gruppe",
            "active_exp": "Benutzer können auf diesen Zolltarif selbstständig umschalten",
            "device_limit_exp": "Maximale Geräte",
            "activation_bonus": "Aktivierung-bonus",
            "free_days": "Anzahl der freien Tage",
            "tariff_type": "Abrechnungszeitraum",
            "tariff_type_short": "Zahlung",
            "rate": "Rate",
            "users_price": "Price for users",
            "client_costs": "Your costs",
            "plan_options": "Plan options",
            "plan_availability": "Plan availability",
            "available_maps": "Available maps",
            "available_features": "Available features",
            "default_name": "My plan",
            "tariff_is_default": "Use this plan as default"
        },
        "list": {
            "create_btn_text": "Neuen Tarif hinzufügen",
            "empty_text": "Tarife nicht gefunden"
        },
        "card": {
            "edit_form_btn": "Edit plan",
            "create_form_btn": "Create plan",
            "add_form_btn": "Add new plan",
            "save_form_btn": "Save plan",
            "currency_in": "(in {0})",
            "links": {
                "make_default": "Mark als Standard",
                "tariff_edit": "Tarif bearbeiten"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Tracker bei diesem Tarif"
                }
            },
            "features": {
                "groups": {
                    "apps": "Apps",
                    "features": "Features",
                    "misc": "Miscellaneous"
                }
            },
            "hints": {
                "2": "Messages which are sent with user’s consent or by his request. These SMS are sent from the service platform to users and devices through the SMS gateway you defined.<br /><br />Particular use cases:<br />User notifications about geo-based events they want to stay aware of<br /> – M2M commands to those device models which can be configured over SMS channel only (device configuration, output change), as well as manual acquiring location by SMS (for models which support that feature).",
                "3": "Service and maintenance SMS commands which are sent from the platform to devices, normally without a special approvement from user. For example, they are used for automatic device activation – to deliver initialization SMS commands (APN, server address, etc.), or when your support team performs remote device diagnostic.",
                "4": "If you use Navixy SIM cards in devices, you can additionally charge users for incoming SMS messages from these SIM cards (e.g. confirmations from devices about accomplishing the commands).",
                "5": "If you use Navixy SIM-cards in devices, you can set up a fee for the its usage based on traffic volume (traffic in both directions is billed).",
                "6": "User notifications by automatic phone calls are currently supported in some regions and in limited languages only.",
                "7": "If user reaches the limitation, he will not be available to add or track more assets in his account. In the case user has assets on different plans, the minimum value will be applied.",
                "8": "The system logs and stores data (about trips, events, etc.) within set time span relative to the current date only. If you extend the time span, the older logs might not be available.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan.",
                "11": "Select options which are available for users who have assets on this plan.",
                "12": "The price user pays to you as a service provider. The billing system uses the currency you defined in Account settings.<br /><br />If you see “N/A” instead of value, it means that service is not offered or cannot be billed by the billing system.",
                "13": "The price you pay for services provided to you by Navixy. If you see “N/A” instead of value, it means that service is not offered (not ordered or unavailable).",
                "14": "This plan will be used by default when user activates a new device. Note: this setting will be overridden by the plan defined in the activation code parameters.",
                "15": "Integer number (0, 1, 2, …) of the group to which this plan belongs to.",
                "16": "Mark the checkbox if you allow users to switch their devices to this plan (from other plans within the same group) by their own.",
                "17": "The plan will be set by default for all devices added by user, if with no activation code is used.<br /><br />When user enters an activation code, its parameters are used prioritily.",
                "18": "Amount of complimentary days user gets after adding a device (including the day when device was added).",
                "19": "Amount of money complimentary charged to user’s balance when he adds a new device.<br /><br />It won’’t be used for general service fee payment, but only for additional services, e.g. SMS notifications.",
                "20": "If the checkbox is marked, user will be always charged a fee for the full month when service for the device is being renewed. For example, if user failed to pay on time and filled up his balance on the 10th day, he will be charged for the full month anyway.<br /><br />If the checkbox is cleared, user will be charged proportionally to the amount of days left from the date of payment to the end of the month.",
                "plan_options": "<b>Notice about plans compatibility.</b> If there are assets on different plans within same user account, some maps and options (which are not included into all plans) might become unavailable for that user. You can avoid such a collision by nesting similar plans into groups, thus making impossible for users to have devices on incompatible plans. We consider that is the only possible way to offer your flexible configuration of your plans and, at the same time, not giving your users the opportunity to cheat with your pricing.",
                "plan_availability": "By combining plans into groups you can organize your plans better and allow your users to switch between plans on their own. While you can assign any plan for any asset in the Admin panel, your users are able to switch only to the plans that are marked with appropriate checkbox."
            }
        },
        "combo_empty": "Tarif wählen",
        "select_error": "Dieser Tarif ist nicht verfügbar",
        "select": {
            "title": "Tarif wählen"
        },
        "types": {
            "activeday": "Tägliche",
            "monthly": "Monatliche",
            "everyday": "Monatlich (tägliche Abbuchung)"
        },
        "price_type": {
            "monthly": "Monatliche Gebühr",
            "activeday": "Tagesgebühr",
            "everyday": "Monatliche Gebühr"
        }
    },
    "codes": {
        "menu_text": "Aktivierungscodes",
        "fields": {
            "activated": "Status",
            "activation_date": "Aktivierungsdatum",
            "bonus_amount": "Bonus",
            "code": "Code",
            "device_id": "Geräte-ID",
            "device_type": "Gerätetyp",
            "free_days": "Freie Tage",
            "money_amount": "Betrag",
            "tariff_id": "Tarif-ID",
            "tariff_name": "Tarif",
            "status": {
                "activated": "aktiviert",
                "no_activated": "nicht aktiviert"
            }
        },
        "edit_form": {
            "title": "Aktivierungscodes Bearbeiten",
            "save_btn": "Änderungen speichern",
            "selected_count": "Ausgewählten Codes",
            "device_type": "Ausgewählte Codes für die Geräte"
        },
        "create_form": {
            "title": "Aktivierungs-Codes erstellen",
            "save_btn": "Codes erstellen",
            "new_codes_count": "Betrag von neuen Codes"
        },
        "list": {
            "empty_text": "Keine Aktivierungscodes gefunden",
            "create_btn": "Neu erstellen",
            "edit_btn": "Bearbeiten ausgewählt",
            "reload_btn": "Nachladen",
            "after_create_success": "Erstellt: {0}",
            "after_edit_success": "Änderungen: {0}",
            "after_edit_failure": "Geändert: {0}, {1} Änderung fehlgeschlagen",
            "select_req": "Wählen Sie im Listenfeld die Option codes",
            "same_type_req": "Sie müssen eine Geräte-Typ-Codes angeben.",
            "edited_tip": "geändert",
            "faq_link": "https://www.navixy.com/docs/admin-panel-docs/activation-codes/ ",
            "faq_text": "Activation codes FAQ",
            "filters": {
                "activated": "Aktiviert",
                "no_activated": "Nicht aktiviert",
                "trackers": "Tracker",
                "cameras": "Kameras",
                "sockets": "Sockets",
                "toggle_all": "Alle anzeigen"
            }
        }
    },
    "settings": {
        "menu_text": "Einstellungen",
        "fields": {
            "service_title": "Service-Titel",
            "page_title": "Seitentitel",
            "locale": "Überwachung Sprache",
            "demo_login": "Demo-Benutzer",
            "demo_password": "Demo Passwort",
            "maps_title": "Verfügbare Karten",
            "maps_default": {
                "type": "Standard- Karte",
                "location_lat": "Breitengrad Standard",
                "location_lng": "Längengrad Standard",
                "zoom": "Standardzoom"
            },
            "google_client_id": "Client-ID für GoogleMaps",
            "currency": "Währung für Benutzer",
            "payment_link": "Zahlung System URL",
            "promo_url": "Promo-Website-URL",
            "domain": "Domäne",
            "email_from": "Absender E-Mail",
            "email_special": "E-Mail für Benachrichtigungen",
            "email_footer": "E-Mail-Fußzeile",
            "sms_originator": "SMS-Absender",
            "caller_id": "Voice- Mitteilung Absender",
            "password": "Neues Passwort",
            "password_repeat": "Neues Passwort wiederholen",
            "password_old": "Aktuelle Passwort",
            "password_mismatched": "Passwörter stimmen nicht überein",
            "footer_email": "Firma E-mail",
            "footer_site": "«Über uns» Link",
            "footer_text": "Der Text am Ende der Seite",
            "geocoder": "Standard Geocoder",
            "route_provider": "Standard-Route-Anbieter",
            "translit": "SMS-Transkription",
            "measurement_system": "Messsystem",
            "payment_description": "Payment options and terms",
            "support_email": "Email for customers support",
            "alerts_email": "Email for important alerts and invoices",
            "time_zone": "Time zone",
            "service_title_ph": "marketing name",
            "service_title_hint": "Used at the login page, in browser tab and in other places",
            "footer_text_ph": "Some text you want to add into the footer of the login page",
            "footer_text_hint": "Custom text for the footer of the login page, links to privacy policy, etc. Links starting with http: and mailto: will be active. Use plain text only, HTML tags are not supported.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Your company’s website, starting with http://. If set, this link is used for \"About\" at the login page.",
            "favicon_hint": "Icon will be shown in browser’s tab. (The feature is not supported in Internet Explorer.)",
            "logo_hint": "The logo is shown at the login page, in PDF-reports and Email notifications to users.",
            "login_wallpaper_hint": "Upload attractive background image at the login page of your service",
            "domain_ph": ".navixy.com",
            "domain_hint": "Launch and run your service on your own domain name (e.g.: tracking.company.com). Before configuring a custom domain here, you need to setup an appropriate CNAME-record on your DNS server and point it to saas.navixy.com.",
            "domain_help": "How do I set up a CNAME-record",
            "domain_help_link": "https://docs.navixy.com/admin-panel/domain-name",
            "locale_hint": "The language used by default for all new user accounts. User can also change the preferred language in his account settings.",
            "currency_hint": "Choose the currency which is commonly used in your region. The system will bill your users in this currency and according to the service plans you set up.",
            "allow_registration": "Allow users to create accounts",
            "allow_registration_hint": "By checking this checkbox you allow users to create user accounts on their own – from the login page and with mobile apps. If the checkbox is disabled, you will able to create new user accounts from this Admin Panel only (and with Admin Panel API).",
            "show_mobile_apps_hint": "If this checkbox is marked, the buttons for mobile apps downloading will be visible at the login page. Regardless this checkbox users will be able to use mobile version of the web interface.",
            "measurement_system_hint": "All physical quantities (length, weight, volume, etc.) will be represented in chosen measurement system.",
            "time_zone_hint": "The most typical time zone for your users.",
            "translit_hint": "Transliteration allow to reduce the amount of symbols in SMS by replacing the symbols of national alphabet with the closest latin ones.",
            "geocoder_hint": "The service which transforms the address to coordinates and versa.",
            "route_provider_hint": "The service for finding optimal directions between start place and destinations.",
            "geolocation": "Cell ID geolocation",
            "geolocation_hint": "Backup geolocation via cellular base stations allows to acquire approximate location of the assets, when signals of satellite navigation systems can not be received (i.e. in the underground parking, in the subway).",
            "speed_restriction": "Speed limits",
            "speed_restriction_hint": "Service allows to detect speed limits violations according to traffic regulations and road signs. The speed limit data accuracy is not guaranteed, however; the data may be estimated, incomplete or outdated.",
            "roads_snap": "Snap to roads",
            "roads_snap_hint": "Service visually improves the tracks received from GPS devices to the most likely roads the vehicle was traveling along. It helps to draw paths that smoothly follow the geometry of the road.",
            "daily_reports_ph": "email1@company.com,email2@company.com,...",
            "newsletters": "Newsletters",
            "newsletters_hint": "Emails for newsletters and important updates. Use comma to separate multiple addresses.",
            "daily_reports": "Daily reports",
            "daily_reports_hint": "Emails for daily reports about the revenues. Use comma to separate multiple addresses.",
            "invoices": "Invoices",
            "invoices_hint": "Emails for invoices and accounting documents. Use comma to separate multiple addresses.",
            "demo_login_ph": "login",
            "demo_password_ph": "password",
            "sms_gateway": "SMS Gateway",
            "sms_gateway_ph": "SMS Gateway not selected",
            "sms_gateway_hint": "Select the SMS gateway you use. You need to have an appropriate account and provide credentials for the secure connection with that gateway.",
            "sms_sender_id": "Sender ID",
            "sms_sender_id_ph": "Example: Navixy",
            "sms_sender_id_hint": "It is highly recommended to use the number your lease for inbound messages as a Sender ID. In this case the service platform will be able to receive SMS from devices replies with the command confirmations and other valued data.",
            "user_sms_gateway": "SMS Gateway",
            "user_sms_gateway_ph": "SMS Gateway not selected",
            "user_sms_gateway_hint": "Select the SMS gateway you use. You need to have an appropriate account and provide credentials for the secure connection with that gateway.",
            "user_sms_sender_id": "Sender ID",
            "user_sms_sender_id_ph": "Example: Navixy",
            "user_sms_sender_id_hint": "Numeric or alpha-numeric sender identificator that an SMS appears to come from (‘from address’) when users receive a message on his phone. Most commonly it is the number you lease for inbound messages or your service marketing name.<br />Special requirements can be applied by local laws and regulations to avoid spam. Please ensure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "user_sms_inbound": "Number for inbound messages",
            "user_sms_inbound_ph": "Example: 12162780905",
            "user_sms_inbound_hint": "Numeric or alpha-numeric sender identificator that an SMS appears to come from (‘from address’) when users receive a message on his phone. Most commonly it is the number you lease for inbound messages or your service marketing name.<br /><br />Special requirements can be applied by local laws and regulations to avoid spam. Please ensure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "not_editable": "not editable",
            "sms_inbound": "Number for inbound messages",
            "sms_inbound_ph": "Example: 12162780905",
            "sms_inbound_hint": "We do not recommend, but you can also use another numeric or alpha-numeric Sender ID. However, in this case it is likely that platform will not be able to receive any SMS from devices. Please also note that special requirements can be applied by national laws and regulations to avoid spam. Make sure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "display_model_features_link": "Show a link to a website with information about the model",
            "display_model_features_link_hint": "User can be provided with additional information about the model of the device activated",
            "monitoring_logo_hint": "Additional logo that is shown in the user web interface (above menu)",
            "show_call_notifications": "Allow configuration of voice notifications",
            "monitoring_logo_clickable": "Click on the logo in the interface opens a promo web-site"
        },
        "sms_gateway": {
            "navixy": {
                "name": "Navixy",
                "desc": "SMS-service, provided to you by Navixy for free while you are using Trial version."
            },
            "nexmo": {
                "name": "Nexmo",
                "desc": "One of the most popular services in the world (<a href=\"http://www.nexmo.com\" target=\"blank\">www.nexmo.com</a>)",
                "credentials": {
                    "key": "Key",
                    "secret": "Secret"
                }
            },
            "twilio": {
                "name": "Twilio",
                "desc": "One of the most popular services in the world (<a href=\"http://www.twilio.com\" target=\"blank\">www.twilio.com</a>)",
                "credentials": {
                    "sid": "Account SID",
                    "token": "Auth token"
                }
            },
            "smstraffic": {
                "name": "SMSTraffic",
                "desc": "The service provided by SMSTraffic company (<a href=\"http://www.smstraffic.ru\" target=\"blank\">www.smstraffic.ru</a>)",
                "credentials": {
                    "login": "Login",
                    "password": "Password"
                }
            },
            "yaestar": {
                "name": "Yaestar NeoGate",
                "desc": "Hardware gateway, which you can purchase and install locally (<a href=\"http://www.yeastar.com\" target=\"blank\">www.yeastar.com</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "Login",
                    "password": "Password"
                }
            },
            "smpp": {
                "name": "SMPP v.3.4",
                "desc": "Common industrial standard for communication with SMS Gateways (<a href=\"https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer\" target=\"blank\">Wikipedia</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "Login (System ID)",
                    "password": "Password",
                    "source": "Source TON/NPI",
                    "source_select": {
                        "0": "Unknown",
                        "1": "International",
                        "2": "National",
                        "3": "Network Specific",
                        "4": "Subscriber Number",
                        "5": "Abbreviated",
                        "6": "Alphanumeric",
                        "7": "Reserved",
                        "-1": "Auto"
                    },
                    "destination": "Destination TON/NPI",
                    "destination_select": {
                        "0": "Unknown",
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
                    "charset": "Default charset",
                    "charset_select": {
                        "GSM8": "GSM8",
                        "GSM7": "GSM7",
                        "ISO-8859-1": "ISO-8859-1",
                        "ISO-8859-15": "ISO-8859-15",
                        "UTF-8": "UTF-8",
                        "UCS-2": "UCS-2"
                    },
                    "long": "Long messages",
                    "long_select": {
                        "UDH": "UDH",
                        "Payload": "Payload"
                    }
                }
            }
        },
        "edit_form": {
            "title": "Diensteinstellungen",
            "save_btn": "Speichern",
            "save_msg": "Einstellungen erfolgreich gespeichert",
            "main_fields": "Grundeinstellungen",
            "map_fields": "Karten-Einstellungen",
            "permission_fields": "Benachrichtigungs-Einstellungen",
            "domain_sup": "* - für Domänen wie * {0} verfügbar Landkarte Typen beschränkt",
            "custom_fields": "Anpassung",
            "main_buttons_title": "Schaltflächen anzeigen",
            "show_mobile_apps": "Zeigen Sie Schaltflächen für den Hochladen von mobile apps an",
            "main_texts_title": "Wichtigsten Texte",
            "footer_texts_title": "Text im Keller der Anmeldeseite",
            "logo_title": "Logo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Autorisierung Seitenhintergrund",
            "desktop_wallpaper_title": "Hintergrund der Service-Seite",
            "upload_btn": "Hochladen",
            "update_btn": "Ändern",
            "remove_btn": "Entfernen",
            "upload_loading": "Bild hochladen",
            "domain_fields": "Domäne",
            "regional_fields": "Regionale Einstellungen",
            "maps_fields": "Karten",
            "demo_fields": "Demo-Benutzer",
            "notifications_fields": "Benachrichtigungen",
            "password_fields": "Passwort ändern",
            "pass_hint": "Änderungen in anderen Registern werden nicht gespeichert",
            "pass_save_msg": "Passwort wurde erfolgreich geändert",
            "pass_save_btn": "Passwort ändern",
            "demo_hint": "Wählen Sie Benutzerkonto, das zu Demonstrationszwecken und auf Login-Seite verwendet werden soll (optional)",
            "user_notifications_title": "Benachrichtigungen an Benutzer",
            "user_notifications_hint": "Einstellungen für Benachrichtigungen von Ihrem Trackingsystem, Benutzer: über Geo-Veranstaltungen, niedrige, Gleichgewicht, Passwort wiederherstellen, etc..",
            "special_notifications_title": "Benachrichtigungen an Administratoren",
            "special_notifications_hint": "Systembenachrichtigungen an Administratoren über Service-Status, Statistiken und andere",
            "branding_fields": "Branding",
            "branding_main_title": "Branding main settings",
            "branding_img_title": "Images and logo",
            "branding_contacts_title": "Contact information for users",
            "service_fields": "Service preferences",
            "service_links_title": "Domain and URLs",
            "service_regional_title": "Regional settings",
            "service_login_title": "Login page",
            "service_maps_title": "Maps",
            "service_maps_defaults_title": "Map default settings",
            "service_additional_title": "Email notifications",
            "accounts_fields": "User defaults",
            "accounts_regional_title": "Regional settings",
            "accounts_geocoding_title": "Cartography and databases",
            "account_info": "These user profile settings will be applied for every new user account. When it is required, users can change default settings in their accounts themselves.",
            "account_roads_title": "Roads",
            "emails_fields": "Email messages",
            "emails_main_title": "Main settings",
            "emails_main_info": "Settings for sending Emails to users about geo based events, low balance warnings, etc.",
            "sms_fields": "SMS messages",
            "sms_main_title": "Main settings",
            "sms_main_info": "Configure SMS messages and SMS gateways which are used for bi-directional communication between service platform and users, service platform and devices.<br>You can use same or different gateways to deliver messages to users and devices.",
            "sms_m2m_title": "M2M messages",
            "sms_m2m_info": "M2M message exchange between service platform and devices through SMS channel plays important role for simple device activation and remote management.<br /><br />            SMS channel is used for the following purposes:<br /><ul><li>initial automatic device configuration (APN, server address, etc.) of majority devices</li><li>receiving confirmations from devices about command accomplishing</li><li>as a backup channel to locate assets when GPRS is not available (low signal, international roaming, etc.)</li><li>for models which support such a feature</li></ul><br />.Furthermore, for those budget models which do not offer the possibility to control them remotely over GPRS/IP protocol, their settings change and output control is also performed via SMS channel.",
            "sms_user_title": "User notifications",
            "sms_user_info": "The service platform can deliver SMS notifications to users about geo-based events they want to stay aware of. Besides, the platform can also provide a special phone number, to which users can send SMS commands from their trusted phone numbers (command examples: ‘?’ – acquire location, ‘ON 1’ – enable device output).",
            "branding_main_info": "Configure the appearance of your service, using your company’s brand names, marketing attributes and other customization options.",
            "service_info": "Define the preferences of your service.",
            "maps_hint": "Bitte definieren Sie die Auswahl der Karten, die für die Kunden von Ihrem Service verfügbar sein wird. Die Liste der Karten für bestimmte Benutzer können mit ihren Tarif -Einstellungen beschränkt sein.<br><br>Der Gebrauch von Kartendienstleistungen, die Sie ausgewählt haben, muss Ihnen von ihren Rechteigentümern gewährt werden. NAVIXY ist nicht verantwortlich für ein Verstoß gegen die Lizenzbedingungen durch Sie oder Ihre Endbenutzer.",
            "maps_defaults_hint": "Choose the map and its options, which will be used when user logins the Web-interface for the first time.",
            "service_maps_preview": "Map default settings preview",
            "service_maps_preview_info": "You an example of the initial display of the map view on the user interface. You can change center of the map by moving the marker and zoom by using tool or by using the mouse wheel on the map.",
            "map_edit_btn": "Visual editor",
            "map_window": {
                "title": "Map default settings – Visual editor",
                "header": "Choose default map center by moving the crosshair with your mouse. To select default map zoom use the scroll wheel or zoom in / out buttons.",
                "save_btn": "Choose"
            },
            "clear_btn": "Reset",
            "misc_header": "Optional features",
            "monitoring_logo_title": "User interface logo"
        },
        "upload_form": {
            "save_btn": "Hochladen",
            "cancel_btn": "Abbrechen",
            "upload_btn": "Ansicht",
            "title": "Bild hochladen. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Login Seite Tapete",
                "desktop_wallpaper": "Service-Seite-Tapete",
                "monitoring_logo": "Additional logo"
            },
            "tips": {
                "logo": "Empfohlene orientierte horizontal laden Bild mit einem transparenten Hintergrund und einer Breite von nicht weniger als 200 Punkte.",
                "favicon": "Laden Sie das Bild mit einem transparenten Hintergrund und einer Mindestauflösung von 32 x 32 Pixel empfohlen.",
                "login_wallpaper": "Empfohlen, um Hintergrund-Bilder mit einer Auflösung von mindestens 1920 x 1080 Pixel (FullHD) Format JPEG zu laden.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "Die Bild-Format {0} (die maximale Größe von {1} MB)",
            "error_text": "Fehler beim Laden des Bildes"
        },
        "subscription": {
            "activation_btn_text": "Pay activation fee now (500 USD) online",
            "monthly_fee_btn_text": "Pay online",
            "activation_hint": "You are evaluating Navixy ServerMate trial version (till {0}). To continue with the commercial version please choose your subscription options and proceed with the activation payment:",
            "monthly_fee_hint": "Review your subscription’s balance and add funds here. We thank you for your timely payments. To avoid the automatic disruption of your subscription please always close your bills within 10 days after you received the invoice for the previous month.",
            "license_balance": "Pending amount {0}",
            "subscription_hint": "To complete the online payment you will be redirected to our payment gateway’s secure web page. You can use various payment options there. Once the payment is confirmed, your funds will be automatically added to your ServerMate account. For any questions please contact us by email accounting@navixy.com",
            "pending_amount": "Pending amount: {0}",
            "current_balance": "Current balance: {0}",
            "payment_recieved_msg": "Your payment was successfully executed and will be processed shortly.",
            "waiting_activation_fee": "Your payment was successfully executed and will be processed shortly."
        }
    },
    "accounting": {
        "menu_text": "Buchhaltung",
        "report_msg": {
            "title": "E-mail-Newsletter bestätigen",
            "text": "Kunden alarmieren über Exportieren von Daten zu 1C <b>{0}</b>.Stellen <br>Sie sicher, dass Sie <b>e-mail-Newsletter</b> machen wollen?"
        },
        "form": {
            "title": "«1C: Enterprise» Datenexport",
            "export1c": {
                "tab_title": "Buchhaltung",
                "save_btn": "1C-Daten-Datei erhalten",
                "report_btn": "Taten per e-Mail senden",
                "fields": {
                    "month": "Einen Monat wählen",
                    "last_act": "Letzte Tat Nummer"
                }
            },
            "payments": {
                "tab_title": "Zahlungen",
                "save_btn": "1C-Daten-Datei zu erhalten",
                "fields": {
                    "date": "Zeitintervall",
                    "type": "Zahlungssystem"
                },
                "ps": {
                    "default": "Alle oben genannten",
                    "cyberplat": "CyberPlat",
                    "deltapay": "DeltaPay",
                    "mobile": "Mobile",
                    "mobimoney": "Mobi.Money",
                    "rbkmoney": "RBK Money",
                    "webmoney": "WebMoney",
                    "sberbank": "Sberbank"
                }
            }
        },
        "report_success": "Email-newsletter successful"
    },
    "payments": {
        "menu_text": "Zahlungen",
        "import_sberbank": {
            "title": "Sberbank Zahlungen importieren",
            "save_btn": "Import von Zahlungen",
            "upload_btn": "Ansicht",
            "upload_loading": "Datei hochladen",
            "error_text": "Fehler beim Importieren von Zahlungen",
            "fields": {
                "file_title": "Import-Datei Format {0} (maximale Größe {1} Mb)"
            },
            "errors": {
                "242": "Zeile {0}, Spalte {1}, Beschreibung: <br><i>{2}</i>"
            },
            "success_msg": "Sberbank Zahlungen erfolgreich importiert",
            "success_dsc": "Datum der Registrierung: <b>{0}</b> <br>Anzahl der geladenen Zahlungen: <b>{1}</b> <br>Summe geladen Zahlungen: <b>{2}</b>"
        }
    },
    "bundles": {
        "menu_text": "Package contents",
        "title": "Working with sets of equipment",
        "menu": {
            "list": "A list of sets",
            "scan": "Linking the SIM card to the beacon",
            "shipping": "Shipping",
            "import": "Import"
        },
        "fields": {
            "id": "ID",
            "model_code": "Model",
            "imei": "IMEI",
            "iccid": "ICCID",
            "sim_card": "SIM card",
            "assign_time": "Date",
            "phone": "Phone",
            "apn": "APN",
            "order_id": "The order number"
        },
        "list": {
            "scan_btn_text": "Snap beacons",
            "empty_text": "No kits",
            "unassign": "detach from order",
            "unassign_q": "Do you want to remove the complete<br>c IMEI-code \"{0}\" out of order?"
        },
        "shipping": {
            "search_btn": "Search",
            "steps": {
                "first": {
                    "title": "The order search"
                },
                "second": {
                    "title": "The addition of retro fit kits to order"
                }
            },
            "hints": {
                "ready_for_search": "Please enter the order number.",
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
                "id": "The order number",
                "user_id": "The user number",
                "sum": "Order amount",
                "payer": "Payer",
                "recipient": "The recipient",
                "contacts": "Contacts",
                "place": "Address",
                "comment": "Comment",
                "creation_time": "Creation time",
                "status": "Status"
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
                "unassign_failure": "Error. Failed to detach the SIM card from device"
            }
        },
        "import": {
            "import_hints": {
                "enter_list": "Enter or scan the list of IMEI-codes",
                "enter_list_no_focus": "Enter or scan the list of IMEI-codes<br>scanning not ready<br>Set the focus on the field",
                "list_count": "Response codes: <b>{0}</b>",
                "list_miss": "incorrect: <b>{0}</b>",
                "list_rep": "introduced repetitions: <b>{0}</b>",
                "import_success": "Successfully imported {0}",
                "import_failure": "The list of devices to import failed",
                "factory_preset": "The device is already configured by the manufacturer",
                "no_model": "The model is not selected"
            },
            "titles": {
                "first": "The input set of IMEI-codes",
                "second": "Model selection for devices"
            },
            "buttons": {
                "import": "To import codes",
                "reset": "Clear form"
            }
        }
    },
    "equipment": {
        "fields": {
            "equip_id": "ID",
            "name": "Name",
            "model_name": "Model",
            "model_code": "Model code",
            "vendor": "Manufacturer"
        },
        "select": {
            "title": "The choice of kit"
        },
        "list": {
            "empty_text": "Packages not found"
        }
    },
    "measurement_systems": {
        "metric": "Metrisch",
        "imperial": "Kaiserlich",
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
        "disabled": "Disabled",
        "navixy": "Mozilla location services / @Navixy Telehouse",
        "mozilla": "Mozilla location services",
        "combain": "Combain"
    },
    "speed_restriction": {
        "disabled": "Disabled",
        "google": "Google Maps Roads",
        "quazar": "Quazar"
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
        "KGS": "{0} som",
        "TMT": "{0} man.",
        "UZS": "{0} som",
        "MDL": "{0} lei",
        "GEL": "{0} lari",
        "AMD": "{0} dram",
        "AZN": "{0} man.",
        "ALL": "{0} Lek",
        "AFN": "{0} ؋",
        "ARS": "{0} $",
        "AWG": "{0} ƒ",
        "BSD": "{0} $",
        "BBD": "{0} $",
        "BZD": "{0} BZ$",
        "BMD": "{0} $",
        "BOB": "{0} $b",
        "BAM": "{0} KM",
        "BWP": "{0} P",
        "BGN": "{0} лв",
        "BND": "{0} $",
        "KHR": "{0} ៛",
        "KYD": "{0} $",
        "COP": "{0} $",
        "CRC": "{0} ₡",
        "HRK": "{0} kn",
        "CUP": "{0} ₱",
        "DOP": "{0} RD$",
        "XCD": "{0} $",
        "EGP": "{0} £",
        "SVC": "{0} $",
        "FKP": "{0} £",
        "FJD": "{0} $",
        "GHS": "{0} ¢",
        "GIP": "{0} £",
        "GTQ": "{0} Q",
        "GGP": "{0} £",
        "GYD": "{0} $",
        "HNL": "{0} L",
        "ISK": "{0} kr",
        "IRR": "{0} ﷼",
        "IMP": "{0} £",
        "JMD": "{0} J$",
        "JEP": "{0} £",
        "KPW": "{0} ₩",
        "LAK": "{0} ₭",
        "LBP": "{0} £",
        "LRD": "{0} $",
        "MKD": "{0} ден",
        "MUR": "{0} ₨",
        "MNT": "{0} ₮",
        "MZN": "{0} MT",
        "NAD": "{0} $",
        "NPR": "{0} ₨",
        "ANG": "{0} ƒ",
        "NIO": "{0} C$",
        "NGN": "{0} ₦",
        "OMR": "{0} ﷼",
        "PAB": "{0} B/.",
        "PYG": "{0} Gs",
        "PEN": "{0} S/.",
        "QAR": "{0} ﷼",
        "RON": "{0} lei",
        "SHP": "{0} £",
        "SAR": "{0} ﷼",
        "RSD": "{0} Дин.",
        "SCR": "{0} ₨",
        "SBD": "{0} $",
        "SOS": "{0} S",
        "LKR": "{0} ₨",
        "SRD": "{0} $",
        "SYP": "{0} £",
        "TTD": "{0} TT$",
        "TVD": "{0} $",
        "UYU": "{0} $U",
        "VEF": "{0} Bs",
        "VND": "{0} ₫",
        "YER": "{0} ﷼",
        "ZWD": "{0} Z$",
        "MAD": "{0} Dh",
        "KWD": "KD {0}",
        "BDT": "{0} ৳",
        "PGK": "{0} K",
        "TZS": "{0} TSh"
    },
    "features": {
        "api": "API",
        "app_tasks": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>Tasks</a>",
        "app_fleet": "Flotte",
        "app_reports": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>Reports</a>",
        "batch_operations": "Batch operations",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "Kartenebenen",
        "multilevel_access": "Object clones",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>Scheduled reports</a>",
        "routing": "Routing",
        "ui_mobile": "Mobile web interface",
        "weblocator": "Weblocator",
        "chat": "Chat",
        "statuses": "Work statuses"
    },
    "singleton": true,
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "Zoom out"
    },
    "map_type_label": "Map"
});
