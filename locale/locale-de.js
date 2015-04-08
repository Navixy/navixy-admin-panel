/**
 * @class Locale.locale-de
 * @extends Ext.Base
 * Description
 */

Ext.define('Locale.locale-de', {
    extend: 'Locale.AbstractLocale',
    dependencies: [
        'Locale.ext.locale-de'
    ],
    singleton: true,

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
    "yes": "Ja",
    "no": "Nein",
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
        }
    },
    "units_combination": {
        "days": [
            "Tage",
            "Tag",
            "Tage"
        ],
        "hours": [
            "Stunden",
            "Stunde",
            "Stunden"
        ],
        "minutes": [
            "Minuten",
            "Minute",
            "Minuten"
        ],
        "seconds": [
            "Sekunden",
            "Sekunde",
            "Sekunden"
        ],
        "everyminutes": [
            "Minuten",
            "Minute",
            "Minuten"
        ],
        "everyseconds": [
            "Sekunden",
            "Sekunde",
            "Sekunden"
        ],
        "meters": [
            "Meter",
            "Meter",
            "Meter"
        ],
        "degrees": [
            "Grad",
            "Grad",
            "Grad"
        ],
        "objects": [
            "Objekte",
            "Objekt",
            "Objekte"
        ],
        "years": [
            "Jahre",
            "Jahr",
            "Jahre"
        ],
        "months": [
            "Monate",
            "Monat",
            "Monate"
        ],
        "codes": [
            "Codes",
            "Code",
            "Codes"
        ],
        "trackers": [
            "Tracker",
            "Tracker",
            "Tracker"
        ],
        "devices": [
            "Geräte",
            "Gerät",
            "Geräte"
        ],
        "entries": [
            "Treffern",
            "Übereinstimmung",
            "Treffern"
        ]
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
        "day": "d"
    },
    "search": {
        "empty": "Suche nach Kategorie",
        "btn": "Finden"
    },
    "list": {
        "edit_tool": "Bearbeiten",
        "create_btn_text": "Erstellen",
        "empty_text": "Keine Daten",
        "search_title_tpl": "{0}: gefunden {1} ",
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
        "rub": "Russischer Rubel",
        "usd": "US-Dollar",
        "kzt": "Kasachstan Tenge",
        "byr": "Weißrussischer Rubel",
        "eur": "Euro",
        "jpy": "Japanischer Yen",
        "gbp": "Pfund sterling",
        "chf": "Schweizer Franken",
        "cad": "Kanadischer dollar",
        "aud": "Australischer Dollar",
        "nzd": "Neuseeland-Dollar",
        "tjs": "Tajik Somoni"
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
        "ovi": "OVI Maps",
        "mailru": "Mail.ru Maps"
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
            "save_btn": " Änderungen speichern",
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
                "status_false": "Nicht aktiv"
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
                "create_transaction": "Balance ändern"
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
                    "everyday": "monatlich bei Tag"
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
            "title": "Tarif für tracker ändern ",
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
            "tariff_type_short": "Zahlung"
        },
        "list": {
            "create_btn_text": "Neuen Tarif hinzufügen ",
            "empty_text": "Tarife nicht gefunden"
        },
        "card": {
            "links": {
                "make_default": "Mark als Standard",
                "tariff_edit": " Tarif bearbeiten"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Tracker bei diesem Tarif"
                }
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
            "footer_text": "Der Text am Ende der Seite"
        },
        "edit_form": {
            "title": "Diensteinstellungen",
            "save_btn": "Speichern",
            "save_msg": "Einstellungen erfolgreich gespeichert",
            "main_fields": "Grundeinstellungen",
            "map_fields": "Karten-Einstellungen",
            "permission_fields": " Benachrichtigungs-Einstellungen",
            "domain_sup": "* - für Domänen wie * {0} verfügbar Landkarte Typen beschränkt",
            "custom_fields": "Anpassung",
            "main_buttons_title": "Schaltflächen anzeigen",
            "show_mobile_apps": "Zeigen Sie Schaltflächen für den Hochladen von mobile apps an",
            "allow_registration": "Benutzer Selbstregistrierung zulassen",
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
            "maps_hint": "Bitte definieren Sie die Auswahl der Karten, die für die Kunden von Ihrem Service verfügbar sein wird. Die Liste der Karten für bestimmte Benutzer können mit ihren Tarif -Einstellungen beschränkt sein.<br><br>Der Gebrauch von Kartendienstleistungen, die Sie ausgewählt haben, muss Ihnen von ihren Rechteigentümern gewährt werden. NAVIXY ist nicht verantwortlich für ein Verstoß gegen die Lizenzbedingungen durch Sie oder Ihre Endbenutzer.",
            "demo_hint": "Wählen Sie Benutzerkonto, das zu Demonstrationszwecken und auf Login-Seite verwendet werden soll (optional)"
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
                "desktop_wallpaper": "Service-Seite-Tapete"
            },
            "tips": {
                "logo": "Empfohlene orientierte horizontal laden Bild mit einem transparenten Hintergrund und einer Breite von nicht weniger als 200 Punkte.",
                "favicon": "Laden Sie das Bild mit einem transparenten Hintergrund und einer Mindestauflösung von 32 x 32 Pixel empfohlen.",
                "login_wallpaper": "Empfohlen, um Hintergrund-Bilder mit einer Auflösung von mindestens 1920 x 1080 Pixel (FullHD) Format JPEG zu laden."
            },
            "img_title": "Die Bild-Format {0} (die maximale Größe von {1} MB)",
            "error_text": "Fehler beim Laden des Bildes"
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
                    "month": "Einen Monat wählen ",
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
                    "webmoney": "WebMoney"
                }
            }
        }
    }
});