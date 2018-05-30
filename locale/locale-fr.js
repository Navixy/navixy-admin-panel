/**
* @class Locale.locale-fr
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-fr',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-fr",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© Navixy. Tous droits réservés.",
    "panel_title": "NavixyPanel",
    "error": "Erreur",
    "loading": "Chargement...",
    "conneting_loader": "Connexion au serveur",
    "access_denied": "Accès refusé",
    "access_denied_tip": "vous n'êtes pas autorisé à accéder à la page demandée",
    "index_title": "Bienvenue à Admin-Panel",
    "old_version": "Old version",
    "auth": {
        "login": "Ouverture de session",
        "password": "Mot de passe",
        "login_btn": "Entrer",
        "locale_title": "Sélectionnez votre langue",
        "locale_title_short": "langue",
        "auth_error": "Erreur d'authentification",
        "reloading_soon": "Rechargement",
        "logout": "Se déconnecter",
        "title": "Admin panel"
    },
    "no_path_found": "Aucune page - URL incorrecte",
    "phone_invalid_msg": "Veuillez entrer un numéro de téléphone valide",
    "invalid_numeric_msg": "Pas un nombre valide",
    "invalid_amount_msg": "Pas un nombre valide <br>(2 chiffres après la virgule)",
    "searcher_empty_text": "Entrez la requête de recherche",
    "search_empty_text": "Entrez la requête de recherche",
    "searchTitle": "Effectuer une recherche par catégorie",
    "clear_form_btn": "Claire",
    "save_form_btn": "Enregistrer",
    "back_form_btn": "Précédent",
    "select_form_btn": "Sélectionnez",
    "close_form_btn": "Fermer",
    "yes": "Oui",
    "no": "ne",
    "show_btn": "Voir",
    "wrong_period": "Une période non valide",
    "required_fields": "* - requis les champs ou sections",
    "invalid_tab": "Zones remplies non valides",
    "page_size": "Taille de la page",
    "errors": {
        "1": "Database connection error (001). Please contact support or try again later.",
        "2": "Erreur de système autorisation (002).  S'il vous plaît, contactez le support technique ou réessayez plus tard.",
        "3": "Clé de session incorrect (003).  S'il vous plaît re-connexion. Si le problème persiste, contactez le support.",
        "4": "L'utilisateur ne peut pas être trouvé ou la session s'est terminée (004).  S'il vous plaît re-connexion.",
        "5": "Demande incorrecte (005). S'il vous plaît, contactez le support technique ou réessayez plus tard.",
        "6": "Erreur inattendue (006). S'il vous plaît, contactez le support technique ou réessayez plus tard.",
        "7": {
            "default_msg": "Paramètres de requête incorrecte. Vérifier les données.",
            "title": "Paramètres incorrects :",
            "errors": {
                "login": "Doit être une adresse email valide",
                "domain": "Nom de domaine incorrect"
            }
        },
        "11": "Accès refusé",
        "12": "Plateforme de services n'est pas trouvé",
        "101": "Cette fonctionnalité n'est pas disponible en mode démo",
        "102": "Mauvais nom d'utilisateur ou mot de passe",
        "103": "L'utilisateur n'a pas été activé.",
        "111": "Mauvais gestionnaire",
        "112": "Mauvaise méthode",
        "201": "Aucune donnée trouvée",
        "202": "Trop de points dans la zone",
        "203": "Élément connexe a été supprimé",
        "204": "Élément introuvable",
        "205": "Paramètres non valides",
        "206": "Ce nom d'utilisateur est déjà utilisé",
        "207": "Captcha non valide",
        "208": "L'appareil est verrouillé",
        "209": "Impossible d'envoyer message",
        "210": "Géocodage a échoué",
        "211": "Plage horaire demandée est trop grand",
        "212": "Limite demandée est trop grand",
        "213": "L'appareil est en mode hors connexion",
        "214": "Opération demandée ne sont pas supportés par l'appareil",
        "215": "Erreur du service externe",
        "216": "Groupe n'est pas vide",
        "217": "Liste contient des entités inexistantes",
        "218": "Paramètres incorrects service externe",
        "219": "Cette action n'est pas autorisée pour les objets clonés",
        "220": "Modèle de périphérique inconnu",
        "221": "Plan de restriction :</br> limite périphérique dépassée.",
        "222": "Plugin introuvable",
        "223": "Ce numéro de téléphone est déjà en cours d'utilisation",
        "224": "Appareil avec cet ID existe déjà",
        "225": "Pas autorisés pour ce type de personne morale",
        "226": "Mauvais numéro ICCID",
        "227": "Code d'activation non valide",
        "228": "Pas pris en charge par capteur",
        "229": "Les données demandées ne sont pas encore prêtes",
        "230": "Non pris en charge pour ce type de personne morale",
        "231": "Incompatibilité de type d'entité",
        "232": "Entrée déjà en cours d'utilisation",
        "233": "Aucun fichier de données",
        "234": "Format de données non valide",
        "235": "Données manquantes d'étalonnage",
        "236": "Cette fonctionnalité n'est pas disponible sur le plan actuel",
        "238": "Changent de plan n'est pas autorisé",
        "240": "Pas autorisé à modifier le plan trop souvent",
        "242": "Erreur de validation",
        "251": "Une insuffisance de fonds",
        "254": "Impossible d'enregistrer fichier",
        "upload_exeption": "Erreur de chargement de fichier",
        "no_hash": "La clé de session n'est pas trouvée",
        "service_not_respond": "Le service est temporairement indisponible",
        "tracker": {
            "203": "Tracker a fixé des règles",
            "237": "Plan non valide",
            "238": "Modification de plan n'est pas autorisée",
            "239": "Nouveau plan n'existe pas",
            "246": "L'utilisateur est incorrect",
            "247": "Clone existe déjà",
            "249": "L'opération est disponible uniquement pour les clones",
            "250": "Pas autorisé pour les périphériques supprimés",
            "253": "L'opération ne peut pas être effectuée, le tracker a les clones suivants <br>Clones ID: {0}"
        },
        "tariff": {
            "244": "Plan avec le même nom existe déjà"
        },
        "settings": {
            "225": "Nouveau mot de passe doit être différent",
            "248": "Mot de passe erroné"
        },
        "payment": {
            "201": "Introuvable dans la base de données",
            "242": "Il y avait des erreurs au cours de la validation du contenu",
            "246": "ID d'utilisateur non valide",
            "247": "Entité existe déjà",
            "259": "Montant des paiements ne correspond pas à la somme totale",
            "260": "Montant des paiements ne correspond pas à la somme totale"
        }
    },
    "units_combination_list": {
        "days": "Days|Day|Days",
        "hours": "hours|Hour|hours",
        "minutes": "minutes|minute|minutes",
        "seconds": "seconds|second|seconds",
        "everyminutes": "minutes|minute|minutes",
        "everyseconds": "seconds|second|seconds",
        "meters": "meters|Meter|meters",
        "degrees": "degrés|degrés|degrés",
        "objects": "Objects|Object|Objects",
        "years": "ANS|ANS|ANS",
        "months": "months|month|months",
        "codes": "codes|code|codes",
        "trackers": "trackers|tracker|trackers",
        "devices": "Devices|Device|Devices",
        "entries": "matches|match|matches",
        "assets": "Assets|Asset|Assets"
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "sq. km",
        "square_meter": "sq. m",
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
        "empty": "Effectuer une recherche par catégorie",
        "btn": "Trouver"
    },
    "list": {
        "edit_tool": "Edit",
        "create_btn_text": "Créer",
        "empty_text": "Aucune donnée",
        "search_title_tpl": "{0}: trouvé {1}",
        "search_empty_title_tpl": "{0}: aucune correspondance trouvée",
        "search_title": "Recherche",
        "search_empty_title": "Aucune correspondance trouvée"
    },
    "card": {
        "links": {
            "collapser_tip": "Masquer les liens",
            "collapser_exptip": "Afficher les liens"
        },
        "body": {
            "title": "Plan d'options et détails :",
            "exptitle": "Plan d'options et détails <a>(agrandir)</a>",
            "collapser_tip": "Cacher les options de plan et les détails",
            "collapser_exptip": "Voir la plus",
            "exptitle_show": "<a>(montrer)</a>"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Camera",
        "socket": "Prise de courant"
    },
    "currency": {
        "gbp": "Livre sterling",
        "brl": "Réal brésilien",
        "huf": "Forint hongrois",
        "hkd": "Hong Kong dollar",
        "dkk": "Couronne danoise",
        "eur": "Euro",
        "ils": "palestine nouveau shekel",
        "inr": "Roupie indienne",
        "idr": "Rupiah indonésienne",
        "cad": "Dollar canadien",
        "cny": "Renminbi",
        "krw": "Corée du Sud a remporté",
        "myr": "Ringgit malaisien",
        "mxn": "Peso mexicain",
        "nzd": "Dollar néo-zélandais",
        "nok": "Couronne norvégienne",
        "pkr": "Roupie pakistanaise",
        "pln": "Złoty polonais",
        "rub": "Rouble russe",
        "sgd": "Dollar de Singapour",
        "usd": "Dollar des Etats-Unis",
        "twd": "Nouveau dollar de Taïwan",
        "thb": "Baht thaïlandais",
        "try": "Livre turque",
        "php": "Peso philippin",
        "czk": "Couronne tchèque",
        "clp": "Peso chilien",
        "sek": "Couronne suédoise",
        "chf": "Franc Suisse",
        "zar": "Rand sud-africain",
        "jpy": "Yen japonais",
        "kzt": "Kazakhstan Tenge",
        "byr": "Rouble Biélorusse",
        "aud": "Dollar australien",
        "tjs": "Somoni tadjik",
        "uah": "Hryvnia ukrainienne",
        "ltl": "Litas lituanien",
        "lvl": "Lats letton",
        "kgs": "Som kirghize",
        "tmt": "Manat turkmène",
        "uzs": "Som ouzbek",
        "mdl": "Leu de Moldovie",
        "gel": "Lari géorgien",
        "amd": "Dram arménien",
        "azn": "Manat azerbaïdjanais",
        "all": "Albanie Lek",
        "afn": "Afghanistan Afghani",
        "ars": "Argentine Peso",
        "awg": "Florin d'Aruba",
        "bsd": "Dollar des Bahamas",
        "bbd": "Dollar de Barbade",
        "bzd": "Dollar de Belize",
        "bmd": "Dollar des Bermudes",
        "bob": "Bolivie Boliviano",
        "bam": "Marka Convertible de Bosnie-Herzégovine",
        "bwp": "Pula du Botswana",
        "bgn": "Lev de Bulgarie",
        "bnd": "Dollar de Brunei Darussalam",
        "khr": "Cambodge Riel",
        "kyd": "Dollar des Iles Caïmans",
        "cop": "Peso de Colombie",
        "crc": "Colon de Costa Rica",
        "hrk": "Kuna de Croatie",
        "cup": "Peso de Cuba",
        "dop": "République dominicaine Peso",
        "xcd": "Dollar des Caraïbes orientales",
        "egp": "Livre de l'Égypte",
        "svc": "Colon du El Salvador",
        "eek": "Estonie Couronne estonienne",
        "fkp": "Livre des îles Falkland (Malvinas)",
        "fjd": "Dollar de Fidji",
        "ghc": "Ghana Cedi",
        "gip": "Livre de Gibraltar",
        "gtq": "Guatemala Quetzal",
        "ggp": "Livre de Guernesey",
        "gyd": "Dollar de Guyane",
        "hnl": "Honduras Lempira",
        "isk": "Couronne islandaise",
        "irr": "L'Iran Rial",
        "imp": "Livre de l'île de Man",
        "jmd": "Dollar de la Jamaïque",
        "jep": "Livre de Jersey",
        "kpw": "Won de la Corée (Nord)",
        "lak": "Laos kips",
        "lbp": "Liban livres",
        "lrd": "Dollar libérien",
        "mkd": "Macédoine Denar",
        "mur": "Roupie de Maurice",
        "mnt": "Tughrik de Mongolie",
        "mzn": "Mozambique Metical",
        "nad": "Dollar namibien",
        "npr": "Roupie du Népal",
        "ang": "Florin des Antilles néerlandaises",
        "nio": "Le Nicaragua Cordoba",
        "ngn": "Nigeria Naira",
        "omr": "Rial d'Oman",
        "pab": "Panama Balboa",
        "pyg": "Paraguay Guarani",
        "pen": "Pérou Nuevo Sol",
        "qar": "Riyal du Qatar",
        "ron": "La Roumanie nouveau Leu",
        "shp": "Saint-Hélène livre",
        "sar": "Arabie saoudite riyals",
        "rsd": "Dinar de Serbie",
        "scr": "Roupie des Seychelles",
        "sbd": "Dollar des îles Salomon",
        "sos": "Shilling de Somalie",
        "lkr": "Roupie de Sri Lanka",
        "srd": "Dollar surinamien",
        "syp": "Livre de Syrie",
        "ttd": "Dollar de Trinidad et Tobago",
        "trl": "Turquie lires",
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
        "roadmap": "Carte routière Google",
        "satellite": "Google satellite",
        "hybrid": "Hybride de Google",
        "yandex": "Cartes de Yandex",
        "yandexpublic": "Yandex Narod Map",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel cartes",
        "doublegis": "DoubleGIS cartes",
        "ovi": "OVI Maps",
        "mailru": "Mail.ru Maps",
        "here": "Cartes ICIS",
        "bing": "Bing Maps"
    },
    "dealer_info": {
        "first": "total",
        "last": "of"
    },
    "index": {
        "menu_text": "Accueil"
    },
    "users": {
        "menu_text": "Utilisateurs",
        "create_btn": "Nouvel utilisateur",
        "create_form": {
            "title": "Nouvel utilisateur",
            "main_fields": "Informations générales",
            "contact_fields": "Détails de contact",
            "address_fields": "Adresse",
            "legal_fields": "Information de la personne morale",
            "password": "Mot de passe",
            "password_repeat": "Répétez mot de passe",
            "password_mismatched": "Passwords do not match",
            "language": "Default language",
            "time_zone": "Fuseau horaire",
            "save_btn": "Création d'utilisateur",
            "clear_btn": "Réinitialiser le formulaire",
            "copy_address": "Copier de l'adresse"
        },
        "edit_form": {
            "title": "Modifier utilisateur",
            "save_btn": "Enregistrer les modifications",
            "return_btn": "Précédent"
        },
        "fields": {
            "creation_date": "Date d'enregistrement",
            "login": "Adresse de courriel",
            "balance": "Balance",
            "bonus": "Bonus",
            "first_name": "Nom",
            "middle_name": "Deuxième prénom",
            "last_name": "Nom de famille",
            "activated": "Activé",
            "activated_t": "Utilisateur actif",
            "legal_type": "Statut juridique",
            "tin": "Numéro fiscal",
            "legal_name": "Dénomination sociale",
            "iec": "IEC",
            "phone": "Numéro de téléphone",
            "post_country": "Pays",
            "post_index": "Code postal",
            "post_region": "Région",
            "post_city": "Ville",
            "post_street_address": "Rue, adresse",
            "registered_country": "Pays d'inscription",
            "registered_index": "Code postal d'enregistrement",
            "registered_region": "Région d'inscription",
            "registered_city": "Ville d'inscription",
            "registered_street_address": "Registration address",
            "sole_trader": "Unique négociant",
            "legal_entity": "Personne morale",
            "individual": "Individu",
            "full_name": "Nom et prénom",
            "login_short": "Ouverture de session",
            "user_id": "ID",
            "user_id_exp": "Numéro de l'utilisateur",
            "activated_short": {
                "title": "Statut",
                "status_true": "Actif",
                "status_false": "Pas actif",
                "status_no": "Active, e-mail non confirmé"
            },
            "registered_short": "juridiques",
            "password": "Nouveau mot de passe",
            "password_repeat": "Répéter nouveau mot de passe",
            "password_mismatched": "Mots de passe ne correspondent pas"
        },
        "password_form": {
            "title": "Changer mot de passe de l'utilisateur",
            "save_btn": "Définir mot de passe",
            "return_btn": "Annuler",
            "success_msg": "Mot de passe modifié avec succès"
        },
        "list": {
            "create_btn_text": "Créer un nouvel utilisateur",
            "empty_text": "Aucun utilisateur trouvé"
        },
        "session_alert": {
            "error": "Impossible de créer session utilisateur",
            "title": "Votre code de session"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Traqueurs de l'utilisateur"
                },
                "transactions": {
                    "title": "Transactions"
                }
            },
            "links": {
                "session_text": "Connectez-vous en tant qu'utilisateur",
                "user_edit": "Modifier utilisateur",
                "user_change_password": "Changer mot de passe",
                "transactions": "Transactions",
                "create_transaction": "Modifier l'équilibre",
                "hash_text": "Get session key"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "Aucune transaction trouvée",
                "title": "Transactions pour l'utilisateur"
            },
            "fields": {
                "description": "Opération",
                "type": "Type de transaction",
                "subtype": "Sous-type",
                "date": "Date",
                "amount": "Montant",
                "old_balance": "Vieux",
                "new_balance": "Nouveau",
                "type_set": {
                    "main_charge": "abonnement",
                    "payment": "paiement",
                    "tariff_charge": "services de télécommunications",
                    "bonus_charge": "recharge de bonus"
                },
                "subtype_set": {
                    "monthly": "mensuel",
                    "partner": "d'un partenaire",
                    "activeday": "journée active",
                    "everyday": "tous les mois par jour",
                    "sms": "Message SMS"
                }
            }
        },
        "transaction_add": {
            "title": "Changement de balance (ajout d'opération) d'utilisateurs",
            "description": "Transaction description",
            "balance": "Balance changes",
            "bonus": "Changements de bonus",
            "value_sup": "* Montant à ajouter (positif) ou soustraire (négatif)"
        },
        "combo_empty": "Sélectionnez utilisateur",
        "select_error": "Tracker ou clone était déjà limité pour l'utilisateur sélectionné",
        "select": {
            "title": "Sélectionnez utilisateur"
        },
        "session_hash": {
            "title": "User session key"
        }
    },
    "trackers": {
        "menu_text": "Trackers",
        "fields": {
            "tracker_id": "ID",
            "label": "Titre",
            "model": "Modèle",
            "phone": "Téléphone",
            "device_id": "ID de périphérique",
            "creation_date": "Date d'activation du Traqueur",
            "creation_date_short": "Activé",
            "connection_status": "Statut",
            "tracker_id_exp": "Nombre de traqueur",
            "phone_exp": "Numéro de téléphone",
            "owner": "Propriétaire de traqueur",
            "tariff": "Plan de traqueur",
            "deleted": "Traqueur supprimé",
            "blocked": "Service suspendu",
            "user_id": "ID de l'utilisateur",
            "clone": "Clone",
            "clone_owner": "Propriétaire de clone",
            "options": {
                "clone": "Clone",
                "deleted": "supprimé",
                "blocked": "bloqué"
            },
            "statuses": {
                "active": "En ligne",
                "signal_lost": "Connexion perdue",
                "offline": "En mode hors connexion",
                "just_registered": "Viens de m'inscrire",
                "idle": "GPS ne pas mis à jour"
            }
        },
        "edit_form": {
            "main_fields": "Informations générales",
            "title": "Modifier le traqueur",
            "save_btn": "Enregistrer les modifications",
            "return_btn": "Précédent"
        },
        "clone_form": {
            "title": "Crate clone of tracker",
            "remove_failure_msg": "Échec de suppression de clone",
            "failure_msg": "Création de clone a échoué",
            "remove_confirm": "Supprimer le clone"
        },
        "group_clone_form": {
            "title": "Groupe de clonage de trackers",
            "save_btn": "Clone",
            "grid_clone_label": "Clones seront ajoutés",
            "grid_clone_tip": "Utilisation double-cliquer pour changer l'étiquette de clone"
        },
        "group_owner_form": {
            "title": "Changement de propriétaire pour groupe de trackers",
            "save_btn": "Changement de propriétaire",
            "grid_clone_label": "Trackers changera"
        },
        "tariff_form": {
            "title": "Plan de changement pour tracker",
            "save_btn": "Enregistrer les modifications",
            "repay": "Repay remainder of current tariff payment",
            "charge": "Charge user now (according to the new plan)",
            "charge_sup": "uniquement pour les forfaits mensuels de base",
            "tariff_invalid": "doit être différent de l'actuel"
        },
        "list": {
            "create_btn_text": "Créer nouveau tracker",
            "owner_btn": "Changement de titulaire",
            "clone_btn": "Clone",
            "edit_btn": "Modifier Sélectionné",
            "empty_text": "Aucun trackers trouvés",
            "after_clone_success": "Cloné : {0}",
            "after_clone_failure": "Cloné : {0} avec succès, {1} a échoué",
            "after_owner_success": "Changé : {0}",
            "after_owner_failure": "Changé: {0}, {1} changement a échoué",
            "select_req": "Sélectionnez les traqueurs de liste",
            "select_clone_req": "Clones sélectionnés, les opérations du groupe ne peuvent pas être effectuées"
        },
        "card": {
            "links": {
                "change_tracker_user": "Changement de titulaire",
                "tracker_edit": "Modifier le traqueur",
                "tracker_tariff_edit": "Plan de changement",
                "tracker_clone_create": "Créer clone",
                "tracker_clone_remove": "Supprimer le clone",
                "tracker_tariff": "Tracker tariff",
                "tracker_owner": "Propriétaire de traqueur",
                "tracker_console": "Console d'air",
                "tracker_corrupt": "Annuler l'inscription"
            }
        },
        "console": {
            "title": "Console d'air pour tracker",
            "connect_btn": "Démarrer connexion",
            "disconnect_btn": "Terminer la session",
            "auto_scroll": "Défilement automatique",
            "clear": "Clear console",
            "send_btn": "Envoyer",
            "send_empty": "Tapez la commande",
            "loading": "Connexion à un périphérique",
            "connect_init": "La connexion est établie",
            "show_time": "Afficher l'heure du message",
            "show_status": "Afficher l'État",
            "disconnect_msg": "Connexion terminée",
            "connect_msg": "La connexion est établie",
            "error_msg": "Erreur de connexion au périphérique",
            "connection_failure": "Impossible de se connecter au périphérique",
            "close_question": "Fermer la connexion ?",
            "status_title": "État du périphérique",
            "status_property_title": "Statut",
            "status_value_title": "Valeur"
        },
        "corrupt": {
            "alert": {
                "title": "Supprimer le tracker ?",
                "text": "Dispositif disparaît définitivement de la base de données. Retated toutes les données seront perdues. <br><br>Etes-vous pour supprimer le périphérique ?"
            },
            "success_msg": "{0} dispositif supprimé avec succès"
        }
    },
    "tariffs": {
        "menu_text": "Plans",
        "create_form": {
            "title": "Créer un nouveau plan",
            "main_fields": "Informations générales",
            "save_btn": "Créer un plan",
            "clear_btn": "Texte clair",
            "options_fields": "Tariff options",
            "prices_fields": "Tarifs"
        },
        "edit_form": {
            "title": "Modifier le plan de",
            "save_btn": "Enregistrer les modifications"
        },
        "default_form": {
            "title": "Paramètres par défaut du plan"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Label",
            "group_id": "Groupe",
            "price": "Paiement mensuel",
            "device_limit": "Limite des dispositifs",
            "device_type": "Type d'appareil",
            "store_period": "Histoire de magasin pour",
            "active": "Disponible pour l'utilisateur",
            "has_reports": "Tableau des rapports disponibles",
            "proportional_charge": "Frais mensuels de frais proportionnels",
            "incoming_sms": "SMS entrants",
            "outgoing_sms": "SMS sortants",
            "service_sms": "Service SMS",
            "phone_call": "Appels téléphoniques",
            "traffic": "GPRS rate (per Mb)",
            "default_tariff": "plan par défaut pour les périphériques avec le type « {0} »",
            "default_short": "par défaut",
            "service_price": "le montant facturé pour l'utilisation du service",
            "group_id_exp": "Plan de groupe",
            "active_exp": "Les utilisateurs sont autorisés à sélectionner ce plan",
            "device_limit_exp": "Maximum devices",
            "activation_bonus": "Bonus de l'activation",
            "free_days": "Number of free days",
            "tariff_type": "Cycle de facturation",
            "tariff_type_short": "Paiement",
            "rate": "Taux",
            "users_price": "Prix pour les utilisateurs",
            "client_costs": "Vos coûts",
            "plan_options": "Options de plan",
            "plan_availability": "Plan de disponibilité",
            "available_maps": "Cartes disponibles",
            "available_features": "Available features",
            "default_name": "Mon plan",
            "tariff_is_default": "Utiliser ce plan par défaut"
        },
        "list": {
            "create_btn_text": "Ajouter nouveau plan",
            "empty_text": "Pas trouvés de plans"
        },
        "card": {
            "links": {
                "make_default": "Marquer comme valeur par défaut",
                "tariff_edit": "Modifier le plan"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Trackers sur ce plan"
                }
            },
            "edit_form_btn": "Modifier le plan de",
            "create_form_btn": "Créer le plan",
            "add_form_btn": "Ajouter nouveau plan",
            "save_form_btn": "Enregistrer plan",
            "currency_in": "(in {0})",
            "features": {
                "groups": {
                    "apps": "Apps",
                    "features": "Caractéristiques",
                    "misc": "Divers"
                }
            },
            "hints": {
                "2": "Messages sent with user’s consent or by his request. These SMS are sent from the service platform to users and devices through the SMS gateway you defined.<br /><br />Particular use cases:<br /> – Notifications about geo-based events your users want to stay aware of<br /> – M2M commands to those devices which can be configured over SMS channel only (e.g. device configuration, output change), as well as manual location request via SMS (for models which support such feature).",
                "3": "Service and maintenance SMS commands which are sent from the platform to devices, normally without any special approvement from user. For example, they are used for automatic device activation – to deliver initialization SMS commands (APN, server address, etc.), or when your support team performs remote device diagnostics.",
                "4": "Si vous utilisez des cartes SIM Navixy dans les appareils, vous pouvez charger en outre aux utilisateurs pour les messages SMS entrants de ces cartes SIM (par exemple les confirmations de dispositifs sur la réalisation des commandes).",
                "5": "Si vous utilisez des cartes SIM Navixy dans les appareils, vous pouvez configurer une redevance pour son utilisation basée sur le volume de trafic (circulation dans les deux directions est facturée).",
                "6": "Notifications de l'utilisateur par des appels téléphoniques automatiques sont actuellement pris en charge pour un nombre limité de régions et d'un nombre limité de langues.",
                "7": "If user reaches the limit, he will not be able to add or track more assets in his account. In case user has assets on different plans, the minimum value will be applied.",
                "8": "Le système enregistre et stocke les données (concernant les voyages, événements, etc.) dans un délai fixe par rapport à la date du jour seulement. Si vous étendez le laps de temps, les journaux plus anciens n'est peut-être pas disponibles.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan.",
                "11": "Select options which are available for users who have assets on this plan.",
                "12": "The price user pays to you as a service provider. The billing system uses the currency you defined in Account settings.<br /><br />If you see “N/A” instead of value, it means that service is not offered or cannot be billed by the billing system.",
                "13": "The price you pay for services provided to you by Navixy. If you see “N/A” instead of value, it means that service is not offered (not ordered or unavailable).",
                "14": "Ce plan servira par défaut lorsque l'utilisateur active un nouvel appareil. Remarque : ce paramètre va être substitué par le plan défini dans les paramètres de code d'activation.",
                "15": "Integer number (0, 1, 2, …) of the group to which this plan belongs to.",
                "16": "Mark the checkbox if you allow users to switch their devices to this plan (from other plans within the same group) by their own.",
                "17": "The plan will be set by default for all devices added by user, if no activation code used.<br /><br />When user enters an activation code its parameters are used as primary.",
                "18": "Amount of complimentary days user gets after adding a device (including the day when device was added).",
                "19": "Amount of money complimentary charged to user’s balance after he adds a new device.<br /><br />It can’t be used for general service fee payments, but only for additional services, e.g. SMS notifications.",
                "20": "If the checkbox is marked, user will be charged proportionally to the amount of days left from the date of last payment till the end of the current month.<br /><br />If the checkbox is cleared, user will be always charged a full monthly fee after the service for the device has been renewed. For example, if user failed to pay on time and filled up his balance on the 10th day, he will be charged for the full month anyway.",
                "plan_options": "<b>Notice about plans compatibility.</b> If there are assets on different plans within same user account, some maps and options (which are not included into all plans) might become unavailable for that user. You can avoid such a collision by nesting similar plans into groups, thus making impossible for users to have devices on incompatible plans. We consider that is the only possible way to offer your flexible configuration of your plans and, at the same time, not giving your users the opportunity to cheat with your pricing.",
                "plan_availability": "By combining plans into groups you can organize your plans better and allow your users to switch between plans on their own. While you can assign any plan for any asset in the Admin panel, your users are able to switch only to the plans that are marked with appropriate checkbox."
            }
        },
        "combo_empty": "Sélectionnez plan",
        "select_error": "Ce plan n'est pas disponible",
        "select": {
            "title": "Select tariff"
        },
        "types": {
            "activeday": "Tous les jours",
            "monthly": "Mensuel",
            "everyday": "Mensuel (débit quotidien)"
        },
        "price_type": {
            "monthly": "Frais mensuels",
            "activeday": "Tarif journalier",
            "everyday": "Frais mensuels"
        }
    },
    "codes": {
        "menu_text": "Codes d'activation",
        "fields": {
            "activated": "statut",
            "activation_date": "Date d'activation",
            "bonus_amount": "Bonus",
            "code": "code",
            "device_id": "ID de périphérique",
            "device_type": "Type d'appareil",
            "free_days": "Journées libres",
            "money_amount": "Montant",
            "tariff_id": "Plan d'ID",
            "tariff_name": "Plan",
            "status": {
                "activated": "activé",
                "no_activated": "non activé"
            }
        },
        "edit_form": {
            "title": "Modifier les codes d'activation",
            "save_btn": "Enregistrer les modifications",
            "selected_count": "Codes sélectionnés",
            "device_type": "Types d'appareils pour les codes sélectionnés"
        },
        "create_form": {
            "title": "Créer des codes d'activation",
            "save_btn": "Créer des codes",
            "new_codes_count": "Montant des nouveaux codes"
        },
        "list": {
            "empty_text": "Aucun code d'activation trouvé",
            "create_btn": "Créer de nouvelles",
            "edit_btn": "Edit sélectionné",
            "reload_btn": "Reload",
            "after_create_success": "Créé : {0}",
            "after_edit_success": "Changes: {0}",
            "after_edit_failure": "Changé : {0} avec succès, {1} a échoué",
            "select_req": "Sélectionnez les codes de liste",
            "same_type_req": "Vous devez spécifier un code de type de périphérique",
            "edited_tip": "a changé",
            "filters": {
                "activated": "Activé",
                "no_activated": "Non activé",
                "trackers": "Trackers",
                "cameras": "Cameras",
                "sockets": "Sockets",
                "toggle_all": "Afficher tout"
            },
            "faq_link": "https://www.navixy.com/docs/admin-panel-docs/activation-codes/ ",
            "faq_text": "Codes d'activation FAQ"
        }
    },
    "settings": {
        "menu_text": "Gestion des comptes",
        "fields": {
            "service_title": "Service title",
            "page_title": "Titre de la page",
            "locale": "Langue de l'interface utilisateur",
            "demo_login": "Utilisateur de démo",
            "demo_password": "Mot de passe demo",
            "maps_title": "Cartes disponibles",
            "maps_default": {
                "type": "Mappage par défaut",
                "location_lat": "Latitude default",
                "location_lng": "Longitude par défaut",
                "zoom": "Zoom par défaut"
            },
            "google_client_id": "ID de client pour google maps",
            "currency": "Monnaie de facturation pour les utilisateurs",
            "payment_link": "URL de système de paiement",
            "promo_url": "URL du site Web promo",
            "domain": "Domaine",
            "email_from": "Email de l'expéditeur",
            "email_special": "E-mail des alertes",
            "email_footer": "Pied de page par courriel",
            "sms_originator": "Expéditeur SMS",
            "caller_id": "Auteur avis de voix",
            "password": "Nouveau mot de passe",
            "password_repeat": "Répéter nouveau mot de passe",
            "password_old": "Mot de passe actuel",
            "password_mismatched": "Mots de passe ne correspondent pas",
            "footer_email": "Company E-mail",
            "footer_site": "« Qui sommes-nous » lien",
            "footer_text": "Le texte en bas de page",
            "geocoder": "Géocodage",
            "measurement_system": "Système de mesure",
            "route_provider": "Fournisseur d'itinéraire par défaut",
            "translit": "Translittération pour les SMS",
            "payment_description": "Termes et options de paiement",
            "support_email": "Email for customers support",
            "alerts_email": "Courriels des alertes importantes et factures",
            "time_zone": "Fuseau horaire",
            "service_title_ph": "nom commercial",
            "service_title_hint": "Utilisé à la page de connexion, dans l'onglet navigateur et dans d'autres endroits",
            "footer_text_ph": "Un texte que vous souhaitez ajouter en bas de la page de connexion",
            "footer_text_hint": "Texte personnalisé pour le bas de la page de connexion, des liens vers la politique de confidentialité, etc.. Liens commençant par http: et maito : sera active. Utilisez uniquement du texte brut, les balises HTML ne sont pas pris en charge.",
            "promo_url_ph": "http://www.company.com",
            "promo_url_hint": "Site de votre entreprise, commençant par http://. Si le jeu, ce lien est utilisé pour « About » à la page de connexion.",
            "favicon_hint": "Icône s'affichera dans l'onglet du navigateur (la fonction n'est pas pris en charge dans Internet Explorer).",
            "logo_hint": "Le logo est montré à la page de connexion, en PDF-rapports et Email notifications aux utilisateurs.",
            "login_wallpaper_hint": "Télécharger image de fond attrayant à la page de connexion de votre service",
            "domain_ph": ".navixy.com",
            "domain_hint": "Lancer et exécuter votre service sur votre propre nom de domaine (par exemple: tracking.company.com). Avant de configurer un domaine personnalisé ici, vous devez configurer un enregistrement CNAME approprié sur votre serveur DNS et qu'il pointe vers saas.navixy.com.",
            "domain_help": "Comment puis-je configurer un enregistrement CNAME",
            "domain_help_link": "https://www.navixy.com/docs/User/admin-panel-docs/Settings/Domain-Name/",
            "locale_hint": "La langue utilisée par défaut pour tous les nouveaux comptes d'utilisateurs. Utilisateur peut également modifier la langue par défaut dans les paramètres de son compte.",
            "currency_hint": "Choisir la devise qui est couramment utilisée dans votre région. Le système sera facturer vos utilisateurs dans cette monnaie et selon les plans de service vous mis en place.",
            "allow_registration": "Permettre aux utilisateurs de créer des comptes",
            "allow_registration_hint": "En cochant cette case vous permettez de créer des comptes d'utilisateurs sur leurs propres – depuis la page de connexion et avec des applications mobiles. Si la case à cocher est désactivée, vous serez capable de créer des nouveaux comptes d'utilisateurs de ce panneau Admin uniquement (et avec Admin Panel API).",
            "show_mobile_apps_hint": "Si cette case est cochée, les boutons pour les applications mobiles téléchargement sera visibles à la page de connexion. Quelle que soit cette case à cocher les utilisateurs seront en mesure d'utiliser la version mobile de l'interface web.",
            "measurement_system_hint": "Toutes les grandeurs physiques (longueur, poids, volume, etc.) seront représentés dans le système de mesure choisie.",
            "time_zone_hint": "Le fuseau horaire plus typique pour vos utilisateurs.",
            "translit_hint": "Translittération permettent de réduire la quantité de symboles dans les SMS en remplaçant les symboles de l'alphabet national le plus proche latin ceux.",
            "geocoder_hint": "Le service qui transforme l'adresse coordonnées et vice-versa.",
            "route_provider_hint": "Le service pour trouver l'itinéraire optimal entre le lieu de départ et les destinations.",
            "geolocation": "Cell ID géolocalisation",
            "geolocation_hint": "Géolocalisation de sauvegarde par l'intermédiaire de stations de base cellulaires permet d'acquérir l'emplacement approximatif de l'actif, lorsque les signaux des systèmes de navigation par satellite ne peuvent pas être reçus (c'est-à-dire dans le parking souterrain, dans le métro).",
            "speed_restriction": "Limitations de vitesse",
            "speed_restriction_hint": "Service permet de détecter les violations des limites de vitesse selon la réglementation de la circulation et la signalisation routière. L'exactitude des données vitesse limite n'est pas garanti, cependant ; les données peuvent être estimés, incomplètes ou périmées.",
            "roads_snap": "S'aligner sur les routes",
            "roads_snap_hint": "Service améliore visuellement les pistes provenant d'appareils GPS sur les routes très probables que le véhicule circulait le long. Il permet de dessiner des chemins qui suivent en douceur la géométrie de la route.",
            "daily_reports_ph": "email1@company.com,email2@company.com,...",
            "newsletters": "Newsletters",
            "newsletters_hint": "Courriels pour les bulletins et mises à jour importantes. Utiliser la virgule pour séparer plusieurs adresses.",
            "daily_reports": "Rapports quotidiens",
            "daily_reports_hint": "Courriels pour des rapports quotidiens sur les revenus. Utiliser la virgule pour séparer plusieurs adresses.",
            "invoices": "Factures",
            "invoices_hint": "Courriels pour les factures et documents comptables. Utiliser la virgule pour séparer plusieurs adresses.",
            "demo_login_ph": "Entrer",
            "demo_password_ph": "mot de passe",
            "sms_gateway": "SMS Gateway",
            "sms_gateway_ph": "Passerelle SMS ne pas sélectionné",
            "sms_gateway_hint": "Sélectionnez la passerelle SMS que vous utilisez. Vous devez avoir un compte approprié et fournir des informations d'identification pour la connexion sécurisée avec la passerelle.",
            "sms_sender_id": "ID de l'expéditeur",
            "sms_sender_id_ph": "Example: Navixy",
            "sms_sender_id_hint": "Il est fortement recommandé d'utiliser le numéro de votre contrat de location pour les messages entrants comme un Sender ID. Dans ce cas, la plateforme de service sera capable de recevoir des SMS de réponses des dispositifs avec les confirmations de commande et d'autres données valorisées.",
            "sms_inbound": "Numéro pour les messages entrants",
            "sms_inbound_ph": "Exemple : 12162780905",
            "sms_inbound_hint": "Nous ne recommandons pas, mais vous pouvez également utiliser un autre numérique ou numérique apha Sender ID. Toutefois, dans ce cas, il est probable de que cette plate-forme ne sera pas en mesure de recevoir des SMS de périphériques. Veuillez également noter que des exigences particulières peuvent être appliquées par les législations nationales et des règlements pour éviter le spam. Assurez-vous que l'ID de l'expéditeur vous entré répond à ces exigences, sinon les SMS service de messagerie peuvent ne pas fonctionner correctement.",
            "user_sms_gateway": "SMS Gateway",
            "user_sms_gateway_ph": "Passerelle SMS ne pas sélectionné",
            "user_sms_gateway_hint": "Sélectionnez la passerelle SMS que vous utilisez. Vous devez avoir un compte approprié et fournir des informations d'identification pour la connexion sécurisée avec la passerelle.",
            "user_sms_sender_id": "ID de l'expéditeur",
            "user_sms_sender_id_ph": "Exemple : Navixy",
            "user_sms_sender_id_hint": "Identifiant d'expéditeur numérique ou alphanumérique qui un SMS semble provenir de ('adresse') quand les utilisateurs reçoivent un message sur son téléphone. Plus souvent c'est le numéro que vous bail pour les messages entrants ou votre service marketing nom. < br / &gt; spécificités peuvent être appliquées par les lois et règlements pour éviter le spam. Veillez à ce que l'ID de l'expéditeur vous entré répond à ces exigences, sinon les SMS service de messagerie peuvent ne pas fonctionner correctement.",
            "user_sms_inbound": "Numéro pour les messages entrants",
            "user_sms_inbound_ph": "Example: 12162780905",
            "user_sms_inbound_hint": "Identifiant d'expéditeur numérique ou alphanumérique qui un SMS semble provenir de ('adresse') quand les utilisateurs reçoivent un message sur son téléphone. Plus souvent c'est le numéro que vous bail pour les messages entrants ou votre service marketing nom. < br / > < br / &gt; spécificités peuvent être appliquées par les lois et règlements pour éviter le spam. Veillez à ce que l'ID de l'expéditeur vous entré répond à ces exigences, sinon les SMS service de messagerie peuvent ne pas fonctionner correctement.",
            "not_editable": "non modifiable",
            "display_model_features_link": "Afficher un lien vers un site Web avec des informations sur le modèle",
            "display_model_features_link_hint": "L'utilisateur peut être fourni avec des informations supplémentaires sur le modèle de l'appareil activé",
            "monitoring_logo_hint": "Additional logo that is shown in the user web interface (above menu)",
            "show_call_notifications": "Permettre la configuration de la notification de la voix",
            "monitoring_logo_clickable": "Cliquez sur le logo de l'interface ouvre un site web promo"
        },
        "edit_form": {
            "title": "Paramètres de service",
            "save_btn": "Enregistrer",
            "save_msg": "Paramètres enregistrés avec succès",
            "main_fields": "Réglages de base",
            "map_fields": "Maps settings",
            "permission_fields": "Notification dettings",
            "domain_sup": "* Carte choix est limité pour les sous-domaines de * {0}",
            "custom_fields": "Personnalisation",
            "main_buttons_title": "Affichage des boutons",
            "show_mobile_apps": "Afficher les boutons de téléchargement d'applications mobiles",
            "allow_registration": "Allow user self registration",
            "main_texts_title": "Principaux textes",
            "footer_texts_title": "Texte dans le sous-sol de la page de connexion",
            "logo_title": "Logo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Fond de page de login",
            "desktop_wallpaper_title": "Arrière-plan de la page services",
            "upload_btn": "Télécharger",
            "update_btn": "Changement",
            "remove_btn": "Supprimer",
            "upload_loading": "Télécharger Image",
            "domain_fields": "Domain",
            "regional_fields": "Paramètres régionaux",
            "maps_fields": "Cartes",
            "demo_fields": "Utilisateur de démo",
            "notifications_fields": "Notifications",
            "password_fields": "Changer mot de passe",
            "pass_hint": "Modifications dans les autres onglets ne seront pas enregistrées",
            "pass_save_msg": "Mot de passe changé avec succès",
            "pass_save_btn": "Changer mot de passe",
            "maps_hint": "Marquer les cartes que vous voulez être activée pour votre plate-forme de services. Vous pouvez également restreindre les utilisateurs particuliers pour accéder à des cartes spécifiques – en utilisant l'option de la carte de leurs plans tarifaires. < br / > < br / &gt; utilisation des cartes sélectionnées doit être accordée à vous par leurs titulaires de droits. Navixy n'est pas responsable de toute violation des termes de la licence de cartes par vous ou vos utilisateurs finaux.",
            "demo_hint": "Choose user account which will be used for demo purposes and available on login page (optional)",
            "user_notifications_title": "Notifications aux utilisateurs",
            "user_notifications_hint": "Paramètres pour les notifications de votre système de suivi pour les utilisateurs : geo-événements, faible bilan, récupération de mot de passe, etc..",
            "special_notifications_title": "Notifications to administrators",
            "special_notifications_hint": "Notifications du système aux administrateurs concernant l'état du service, des statistiques et autres",
            "defaults_fields": "User default settings",
            "defaults_hint": "Settings in this section will be automatically applied to all new users",
            "branding_fields": "Image de marque",
            "branding_main_title": "Personnalisation des paramètres principaux",
            "branding_img_title": "Images et logo",
            "branding_contacts_title": "Informations de contact pour les utilisateurs",
            "service_fields": "Préférences de service",
            "service_links_title": "Domaine et URL",
            "service_regional_title": "Paramètres régionaux",
            "service_login_title": "Page de connexion",
            "service_maps_title": "Maps",
            "service_maps_defaults_title": "Paramètres par défaut de la carte",
            "service_additional_title": "Notifications par courrier électronique",
            "accounts_fields": "Utilisateur par défaut",
            "accounts_regional_title": "Paramètres régionaux",
            "accounts_geocoding_title": "Cartography and databases",
            "account_info": "Ces paramètres de profil utilisateur seront appliquées pour chaque nouveau compte d'utilisateur. Quand il le faut, les utilisateurs peuvent modifier les paramètres par défaut dans leurs comptes eux-mêmes.",
            "account_roads_title": "Routes",
            "emails_fields": "Messages électroniques",
            "emails_main_title": "Paramètres principaux",
            "emails_main_info": "Paramètres pour envoyer des Emails aux utilisateurs sur geo basée événements, avertissements reste faible, etc..",
            "sms_fields": "SMS messages",
            "sms_main_title": "Paramètres principaux",
            "sms_main_info": "Configurer les messages SMS et passerelles SMS qui sont utilisés pour la communication bidirectionnelle entre utilisateurs, plateforme de services, plateforme de services et dispositifs. <br>Vous pouvez utiliser les passerelles identiques ou différents pour remettre les messages aux utilisateurs et périphériques.",
            "sms_m2m_title": "M2M messages",
            "sms_m2m_info": "M2M échange de messages entre la plate-forme de services et appareils via le canal SMS joue un rôle important pour l'activation de l'appareil simple et remote management. < br / > < br / &gt; canal SMS est utilisé aux fins suivantes: < br / > <ul><li>configuration automatique initiale (APN, adresse du serveur, etc.) des dispositifs de la majorité de</li> <li>recevoir des confirmations de dispositifs sur la réalisation de la commande</li> <li>comme voie de secours pour localiser les actifs lorsque le GPRS n'est pas disponible (signal faible international itinérant, etc.)</li> <li>pour les modèles qui prennent en charge une telle fonctionnalité</li></ul> < br / &gt;. En outre, pour les modèles de budget qui n'offrent pas la possibilité de contrôler à distance au travers du protocole GPRS/IP, modifier leurs paramètres et contrôle de sortie est également effectuée via le canal SMS.",
            "sms_user_title": "Notifications de l'utilisateur",
            "sms_user_info": "La plateforme de services peut livrer les notifications par SMS aux utilisateurs sur les événements géo-base de qu'ils veulent rester au courant. En outre, la plate-forme peut également fournir un numéro de téléphone spécial, auquel les utilisateurs peuvent envoyer des commandes SMS de leurs numéros de téléphone de confiance (exemples de commande: '?' – acquérir l'emplacement, « ON 1 » – activer la sortie de l'appareil).",
            "branding_main_info": "Configurer l'apparence de votre service, en utilisant les noms de marque de votre entreprise, marketing, attributs et autres options de personnalisation.",
            "service_info": "Définir les préférences de votre service.",
            "maps_defaults_hint": "Choisissez la carte et ses options, qui seront utilisé lorsque connexions utilisateur l'interface Web pour la première fois.",
            "service_maps_preview": "Extrait des paramètres par défaut de carte",
            "service_maps_preview_info": "Vous avez un exemple de l'affichage initial de la vue de la carte sur l'interface utilisateur. Vous pouvez changer le centre de la carte en déplaçant le marqueur et zoomer en utilisant l'outil ou à l'aide de la molette de la souris sur la carte.",
            "map_edit_btn": "Éditeur visuel",
            "map_window": {
                "title": "Par défaut paramètres – éditeur visuel de la carte",
                "header": "Choisir le centre de la carte par défaut en déplaçant le viseur avec votre souris. Pour sélectionner par défaut zoom de la carte : utilisez la molette de défilement ou zoomer / dézoomer boutons.",
                "save_btn": "Choisir"
            },
            "clear_btn": "Remise à zéro",
            "misc_header": "Fonctions optionnelles",
            "monitoring_logo_title": "Logo d'interface utilisateur"
        },
        "upload_form": {
            "save_btn": "Télécharger",
            "cancel_btn": "Annuler",
            "upload_btn": "Vue",
            "title": "Télécharger l'image. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Fond d'écran pour la page de connexion",
                "desktop_wallpaper": "Papier peint de page service",
                "monitoring_logo": "Additional logo"
            },
            "tips": {
                "logo": "Il est recommandé d'utiliser l'image du logo avec le fond transparent (PNG) et la largeur minimale de 200px.",
                "favicon": "Il est recommandé d'utiliser l'image du logo avec le fond transparent et la taille de 32 x 32 px.",
                "login_wallpaper": "Il est recommandé d'utiliser des images d'arrière-plan orientée horizontalement avec une résolution d'au moins 1920 x 1080 pixels (Full HD) et en format JPEG.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "Image de format {0} (taille max {1} MB)",
            "error_text": "Échec de chargement d'image"
        },
        "sms_gateway": {
            "navixy": {
                "name": "Navixy",
                "desc": "Service SMS, qui vous est fourni par Navixy gratuite lorsque vous utilisez la version d'évaluation."
            },
            "nexmo": {
                "name": "Nexmo",
                "desc": "Un des services plus populaires dans le monde (<a href=\"http://www.nexmo.com\" target=\"blank\"> www.nexmo.com</a>)",
                "credentials": {
                    "key": "Clé",
                    "secret": "Secret"
                }
            },
            "twilio": {
                "name": "Twilio",
                "desc": "Un des services plus populaires dans le monde (<a href=\"http://www.twilio.com\" target=\"blank\"> www.twilio.com</a>)",
                "credentials": {
                    "sid": "SID du compte",
                    "token": "Jeton d'authentification"
                }
            },
            "smstraffic": {
                "name": "SMSTraffic",
                "desc": "Le service fourni par la société SMSTraffic (<a href=\"http://www.smstraffic.ru\" target=\"blank\"> www.smstraffic.ru</a>)",
                "credentials": {
                    "login": "Entrer",
                    "password": "Mot de passe"
                }
            },
            "yaestar": {
                "name": "Yaestar NeoGate",
                "desc": "Un des services plus populaires dans le monde (<a href=\"http://www.twilio.com\" target=\"blank\"> www.twilio.com</a>)",
                "credentials": {
                    "ip": "Serveur IP",
                    "port": "Port",
                    "login": "Entrer",
                    "password": "Mot de passe"
                }
            },
            "smpp": {
                "name": "V.3.4 SMPP",
                "desc": "Norme industrielle commune pour la communication avec les passerelles SMS (<a href=\"https://en.wikipedia.org/wiki/Short_Message_Peer-to-Peer\" target=\"blank\"> Wikipedia</a>)",
                "credentials": {
                    "ip": "Server IP",
                    "port": "Port",
                    "login": "Ouverture de session (ID du système)",
                    "password": "Mot de passe",
                    "source": "TONNE de source / NPI",
                    "source_select": {
                        "0": "Inconnu",
                        "1": "International",
                        "2": "National",
                        "3": "Réseau spécifique",
                        "4": "Numéro d'abonné",
                        "5": "En abrégé",
                        "6": "Alphanumérique",
                        "7": "Reserverd",
                        "-1": "Auto"
                    },
                    "destination": "Destination tonne / NPI",
                    "destination_select": {
                        "0": "Inconnu",
                        "1": "Plan de numérotation de téléphone/ISDN (E163/E164)",
                        "3": "Données (X.121) de plan de numérotation",
                        "4": "Télex de plan de numérotation (F.69)",
                        "6": "Service Mobile terrestre (E.212)",
                        "8": "National numbering plan",
                        "9": "Plan de numérotation privé",
                        "10": "Plan de numérotation de ERMES (ETSI DE/CH 3 01-3)",
                        "13": "Internet (IP)",
                        "18": "Identifiant Client WAP (à définir par le WAP Forum)"
                    },
                    "charset": "Jeu de caractères par défaut",
                    "charset_select": {
                        "GSM8": "GSM8",
                        "GSM7": "GSM7",
                        "ISO-8859-1": "ISO-8859-1",
                        "ISO-8859-15": "ISO-8859-15",
                        "UTF-8": "UTF-8",
                        "UCS-2": "UCS-2"
                    },
                    "long": "Longs messages",
                    "long_select": {
                        "UDH": "UDH",
                        "Payload": "Charge utile"
                    }
                }
            }
        },
        "subscription": {
            "activation_btn_text": "Payer les frais d'activation maintenant (100 USD) en ligne",
            "monthly_fee_btn_text": "Payer en ligne",
            "activation_hint": "Vous évaluez Navixy ServerMate version d'évaluation (till {0}). Pour continuer avec le commercial version Veuillez choisir vos options d'abonnement et procéder au versement de l'activation :",
            "monthly_fee_hint": "Consulter le solde de votre abonnement et ajouter de l'argent ici. Nous vous remercions pour vos paiements en temps opportun. Pour éviter l'automatique interruption de votre abonnement s'il vous plaît fermez toujours vos factures dans les 10 jours après que vous avez reçu la facture pour le mois précédent.",
            "license_balance": "Montant en attente {0}",
            "subscription_hint": "Pour compléter le paiement en ligne, que vous serez redirigé vers la page de web de notre passerelle de paiement sécurisée. Vous pouvez utiliser plusieurs options de paiement là. Une fois le paiement confirmé, vos fonds seront automatiquement ajoutés à votre compte de ServerMate. Pour toute question, veuillez nous contacter par email accounting@navixy.com",
            "pending_amount": "Dans l'attente de montant : {0}",
            "current_balance": "Solde actuel : {0}",
            "payment_recieved_msg": "Votre paiement a été exécuté avec succès et sera traité sous peu.",
            "waiting_activation_fee": "Votre paiement a été exécuté avec succès et sera traité sous peu."
        }
    },
    "accounting": {
        "menu_text": "Comptabilité",
        "report_msg": {
            "title": "Confirmez email-newsletter",
            "text": "Alerter les visiteurs sur l'exportation des données vers 1C pour <b>{0}</b>. <br>Que voulez-vous vraiment faire <b>Bulletin d'information électronique</b> ?"
        },
        "form": {
            "title": "« 1C: entreprise » l'exportation de données",
            "export1c": {
                "tab_title": "Comptabilité",
                "save_btn": "Téléchargez le fichier de données 1C",
                "report_btn": "Soumettre les actes par courriel",
                "fields": {
                    "month": "Sélectionnez le mois",
                    "last_act": "Dernier numéro de l'acte"
                }
            },
            "payments": {
                "tab_title": "Paiements",
                "save_btn": "Téléchargez le fichier de données 1C",
                "fields": {
                    "date": "Intervalle de temps",
                    "type": "Système de paiement"
                },
                "ps": {
                    "default": "Toutes ces réponses",
                    "cyberplat": "CyberPlat",
                    "deltapay": "DeltaPay",
                    "mobile": "Mobile",
                    "mobimoney": "Mobi.Money",
                    "rbkmoney": "RBK argent",
                    "webmoney": "WebMoney",
                    "sberbank": "Sberbank"
                }
            }
        },
        "report_success": "Bulletin d'information électronique réussie"
    },
    "payments": {
        "menu_text": "Paiements",
        "import_sberbank": {
            "title": "Importation de paiements Sberbank",
            "save_btn": "Importer des paiements",
            "upload_btn": "Vue",
            "upload_loading": "Téléchargement de fichier",
            "error_text": "Impossible d'importer des paiements",
            "fields": {
                "file_title": "Importer un fichier {0} (taille max {1} Mb)"
            },
            "errors": {
                "242": "Ligne {0}, colonne {1}, description : <br><i>{2}</i>"
            },
            "success_msg": "Paiements de Sberbank importés avec succès",
            "success_dsc": "Date de l'enregistrement : <b>{0}</b> <br>comte de paiements chargés : <b>{1}</b> <br>somme des paiements chargés : <b>{2}</b>"
        }
    },
    "bundles": {
        "menu_text": "Contenu de l'emballage",
        "title": "Travailler avec des ensembles d'équipement",
        "menu": {
            "list": "Une liste des jeux",
            "scan": "Reliant la carte SIM vers le radiophare",
            "shipping": "Expédition à la France",
            "import": "Importation"
        },
        "fields": {
            "id": "ID",
            "model_code": "Modèle",
            "imei": "IMEI",
            "iccid": "ICCID",
            "sim_card": "SIM card",
            "assign_time": "Date",
            "phone": "Téléphone",
            "apn": "APN",
            "order_id": "Le numéro d'ordre"
        },
        "list": {
            "scan_btn_text": "Enclenchez les balises",
            "empty_text": "Aucun kit",
            "unassign": "se détacher de l'ordre",
            "unassign_q": "Voulez-vous supprimer le <br>complet c code IMEI « {0} » hors d'usage ?"
        },
        "shipping": {
            "search_btn": "Recherche",
            "steps": {
                "first": {
                    "title": "La recherche de commande"
                },
                "second": {
                    "title": "L'ajout de kits de forme rétro à l'ordre"
                }
            },
            "hints": {
                "ready_for_search": "Veuillez saisir le numéro de commande.",
                "order_search_failure": "Erreur. Commandez le numéro « {0} » introuvable.",
                "order_found": "Ordre numéro « {0} » a été trouvé.",
                "imei_same_order": "Erreur. Jeu que code IMEI de votre téléphone « {0} » est déjà lié à la commande actuelle.",
                "imei_order_set": "Attention ! Numéro de série code IMEI de votre téléphone « {0} » est déjà affecté à la commande « {1} ».",
                "imei_reset_q": "Voulez-vous périnatalité ensemble sur l'ordre actuel ?",
                "imei_reset_btn": "Réassigner",
                "bundle_asssigned": "Jeu que code IMEI de votre téléphone « {0} » a été ajouté avec succès à l'ordre de \"{1}\".",
                "bundle_asssign_failure": "Erreur. Jeu que code IMEI de votre téléphone « {0} » n'a pas pu être ajouté à la commande « {1} »."
            },
            "fields": {
                "id": "Le numéro d'ordre",
                "user_id": "Le nombre d'utilisateur",
                "sum": "Montant de la commande",
                "payer": "Donneur d'ordre",
                "recipient": "Le destinataire",
                "contacts": "Contacts",
                "place": "Adresse",
                "comment": "Commentaire",
                "creation_time": "Moment de la création",
                "status": "Statut"
            }
        },
        "scan": {
            "clear_form": "Pour recommencer",
            "to_list": "Une liste des jeux",
            "steps": {
                "first": {
                    "title": "Scannez le code IMEI de l'appareil"
                },
                "second": {
                    "title": "Dispositif de code installation ICCID"
                }
            },
            "fields": {
                "title": "Information about the kit",
                "title_add": "La carte SIM est déjà liée !",
                "title_add_changed": "La carte SIM est changée",
                "equip_add_changed": "Le kit a changé",
                "id": "Ensemble de salle",
                "imei": "IMEI",
                "iccid": "ICCID",
                "model_code": "Le modèle",
                "equip_id": "Code jeu",
                "order_id": "Le numéro d'ordre",
                "assign_time": "La carte de sim de liaison"
            },
            "buttons": {
                "enter": "Entrez",
                "assign_iccid": "Clin d'oeil la carte SIM",
                "reassign_iccid": "Pour réaffecter la carte SIM",
                "remove_iccid": "Détachez la carte SIM",
                "print": "Pour imprimer l'étiquette",
                "reset": "Pour recommencer",
                "change_equip": "Changement de la composition"
            },
            "imie_hints": {
                "imei_ready": "Attach the scanner to the bar code IMEI",
                "imei_invalid": "Vous avez entré une valeur incorrecte <br>scan Again",
                "imei_focus_lose": "Balayage n'est pas prêt <br>définir le focus sur le champ",
                "imei_not_found": "Ensembles <br><b>{0}</b> introuvable le code IMEI de votre téléphone",
                "auto_print": "Imprimer et redémarrer automatiquement"
            },
            "iccid_hints": {
                "iccid_ready": "Fixez le scanner à code barre ICCID",
                "iccid_invalid": "Vous avez entré une valeur incorrecte <br>scan Again",
                "iccid_focus_lose": "Balayage n'est pas prêt <br>définir le focus sur le champ",
                "iccid_not_found": "Impossible de lier la carte SIM carte c code <br><b>{0}</b>",
                "iccid_cant_unassign": "Impossible de détacher la carte SIM"
            },
            "print_hints": {
                "print_error": "Erreur. Pas trouvé le modèle d'étiquette pour le kit. <br>Impression n'est pas possible."
            },
            "hints": {
                "imei_ready": "Prêt à numériser. Fixez le scanner sur le dispositif de barcode IMEI.",
                "imei_focus_lose": "Erreur. Il n'est pas prêt de numérisation. Cliquez sur le bouton ci-dessous.",
                "imei_focus_lose_btn": "Pour démarrer le scan",
                "imei_invalid": "Erreur. IMEI non valide valeur entrée « {0} ». <br>S'il vous plaît re-scanner.",
                "imei_not_found": "Error. The ICCID value \"{0}\" not found.<br>Please re-scan.",
                "iccid_ready": "IMEI trouvé. Prêt à numériser. <br>Fixer le scanner le code-barres ICCID.",
                "iccid_focus_lose": "Erreur. Il n'est pas prêt de numérisation. Cliquez sur le bouton ci-dessous.",
                "iccid_focus_lose_btn": "Pour démarrer le scan",
                "iccid_invalid": "Erreur. Vous avez entré une valeur incorrecte ICCID « {0} ». <br>S'il vous plaît re-scanner.",
                "iccid_found": "IMEI trouvé. Avec lui est associé ICCID code « {0} ». <br>Vous pouvez scanner le nouveau code ICCID pour modifier manuellement ou détachez la carte SIM",
                "iccid_succcess": "ICCID « {0} » assignés avec succès.",
                "iccid_print_ready": "Si l'impression automatique des étiquettes n'est pas apparue, cliquez sur le bouton ci-dessous.",
                "iccid_no_model": "Erreur. Pas trouvé le modèle d'étiquette pour le modèle. Impossible d'imprimer",
                "iccid_send_btn": "Envoyer ICCID",
                "iccid_unassign_btn": "Détachez la carte SIM",
                "iccid_print_btn": "Imprimer autocollant",
                "last_scan_text": "Les résultats de l'analyse précédente :",
                "unassign_q": "Détachez la carte SIM de l'appareil ?",
                "unassign_success": "Carte SIM non attaché de l'appareil",
                "unassign_failure": "Erreur. Impossible de détacher la carte SIM d'ustroystva"
            }
        },
        "import": {
            "import_hints": {
                "enter_list": "Entrez ou balayer la liste des codes IMEI",
                "enter_list_no_focus": "Entrez ou balayer la liste des codes IMEI <br>ne numérisation pas prêt <br>ensemble la mise au point sur le terrain",
                "list_count": "Codes de réponse : <b>{0}</b>",
                "list_miss": "incorrect : <b>{0}</b>",
                "list_rep": "introduit des répétitions : <b>{0}</b>",
                "import_success": "{0} importé avec succès",
                "import_failure": "La liste des périphériques à l'importation a échoué",
                "factory_preset": "L'appareil est déjà configuré par le fabricant",
                "no_model": "Le modèle n'est pas sélectionné"
            },
            "titles": {
                "first": "L'ensemble d'entrée des codes IMEI",
                "second": "Sélection de modèles pour les périphériques"
            },
            "buttons": {
                "import": "Pour importer des codes",
                "reset": "Texte clair"
            }
        }
    },
    "equipment": {
        "fields": {
            "equip_id": "ID",
            "name": "Nom",
            "model_name": "Modèle",
            "model_code": "Code modèle",
            "vendor": "Référence du fabricant"
        },
        "select": {
            "title": "Le choix du kit"
        },
        "list": {
            "empty_text": "Paquets non trouvés"
        }
    },
    "route_providers": {
        "progorod": "Progorod",
        "google": "Google",
        "osrm": "OSRM"
    },
    "measurement_systems": {
        "metric": "Métrique",
        "imperial": "Imperial",
        "us": "US"
    },
    "geocoders": {
        "google": "Google",
        "yandex": "Yandex",
        "progorod": "Progorod",
        "osm": "OpenStreetMap"
    },
    "geolocation": {
        "disabled": "Désactiver toutes",
        "navixy": "Les services de localisation de Mozilla / Telehouse de @Navixy",
        "mozilla": "Services de localisation de Mozilla",
        "combain": "Combain"
    },
    "speed_restriction": {
        "disabled": "Personnes handicapées",
        "google": "Google Maps routes",
        "quazar": "Quazar"
    },
    "edit_form_btn": "Edit",
    "cancel_form_btn": "Annuler",
    "na": "N/A",
    "enable": "Activé",
    "disable": "Disable",
    "disabled": "Personnes handicapées",
    "forbid": "ne plaise",
    "allow": "permettre à",
    "forbidden": "Interdit",
    "currencies_tpls": {
        "GBP": "£{0}",
        "BRL": "R${0}",
        "HUF": "{0} ft",
        "HKD": "HK$ {0}",
        "DKK": "kr {0}",
        "EUR": "€{0}",
        "ILS": "₪{0}",
        "INR": "₹ {0}",
        "IDR": "RP {0}",
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
        "JPY": "¥ {0}",
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
        "AMD": "dram {0}",
        "AZN": "{0} homme.",
        "ALL": "{0} lek",
        "AFN": "{0} ؋",
        "ARS": "{0} $",
        "AWG": "Ƒ {0}",
        "BSD": "{0} $",
        "BBD": "{0} $",
        "BZD": "{0} BZ$",
        "BMD": "{0} $",
        "BOB": "{0} $b",
        "BAM": "{0} KM",
        "BWP": "{0} P",
        "BGN": "ЛВ {0}",
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
        "EEK": "kr {0}",
        "FKP": "{0} £",
        "FJD": "{0} $",
        "GHS": "{0} ¢",
        "GIP": "{0} £",
        "GTQ": "{0} Q",
        "GGP": "{0} £",
        "GYD": "{0} $",
        "HNL": "{0} L",
        "ISK": "kr {0}",
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
        "ANG": "Ƒ {0}",
        "NIO": "{0} C$",
        "NGN": "{0} ₦",
        "OMR": "{0} ﷼",
        "PAB": "{0} B/.",
        "PYG": "{0} Gs",
        "PEN": "{0} S /.",
        "QAR": "{0} ﷼",
        "RON": "lei {0}",
        "SHP": "{0} £",
        "SAR": "{0} ﷼",
        "RSD": "{0} ДИН.",
        "SCR": "{0} ₨",
        "SBD": "{0} $",
        "SOS": "{0} S",
        "LKR": "{0} ₨",
        "SRD": "{0} $",
        "SYP": "{0} £",
        "TTD": "{0} TT$",
        "TRL": "{0} ₤",
        "TVD": "{0} $",
        "UYU": "{0} $U",
        "VEF": "{0} Bs",
        "VND": "{0} ₫",
        "YER": "{0} ﷼",
        "ZWD": "{0} Z$",
        "MAD": "{0} Dh",
        "KWD": "KD {0}",
        "BDT": "{0} ৳"
    },
    "features": {
        "api": "API",
        "app_tasks": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'> tâches</a>",
        "app_fleet": "Flotte",
        "app_reports": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'> rapports</a>",
        "batch_operations": "Opérations par lots",
        "custom_maps": "Cartes personnalisées",
        "event_notification": "Notifications d'événements",
        "geocoding": "Géocodage",
        "lbs": "Localisation par Cell ID",
        "map_layers": "Couches cartographiques",
        "multilevel_access": "Objet des clones",
        "priority_support": "Support prioritaire",
        "retranslation": "Retraduction",
        "report_xls": "Rapports de déposer",
        "report_scheduled": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'> rapports réguliers</a>",
        "routing": "Routage",
        "ui_mobile": "Interface web mobile",
        "weblocator": "Weblocator",
        "chat": "Chat",
        "statuses": "Statuts de travail"
    },
    "map": {
        "zoom_in": "Effectuez un zoom avant",
        "zoom_out": "Effectuer un zoom arrière"
    },
    "map_type_label": "Carte"
});