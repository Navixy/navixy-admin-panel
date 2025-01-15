/**
* @class Locale.locale-es
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-es',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-es",
            "history": false
        }
    ],
    "main_copyright": "© SquareGPS Inc. Todos los derechos reservados.",
    "panel_title": "Panel de Administración Navixy",
    "error": "Error",
    "loading": "Cargando...",
    "conneting_loader": "Conectando con el servidor",
    "access_denied": "Acceso denegado",
    "access_denied_tip": "no tiene permiso para acceder la página solicitada",
    "index_title": "Bienvenido al Panel de Control",
    "old_version": "Versión anterior",
    "auth": {
        "login": "Login ó correo electrónico",
        "password": "Contraseña",
        "login_btn": "Login",
        "locale_title": "Seleccione su idioma",
        "locale_title_short": "Idioma",
        "auth_error": "Error de autenticación",
        "reloading_soon": "Recargando",
        "logout": "Logout",
        "title": "Panel de administración"
    },
    "no_path_found": "No hay página - URL incorrecta",
    "phone_invalid_msg": "Por favor ingrese un numero de teléfono válido",
    "invalid_numeric_msg": "No es un número válido",
    "invalid_amount_msg": "No es un número válido<br>(2 dígitos después del separador decimal)",
    "searcher_empty_text": "Ingrese los criterios de búsqueda",
    "search_empty_text": "Ingrese los criterios de búsqueda",
    "searchTitle": "Búsqueda por categoría",
    "clear_form_btn": "Borrar",
    "save_form_btn": "Guardar",
    "back_form_btn": "Regresar",
    "select_form_btn": "Seleccionar",
    "close_form_btn": "Cerrar",
    "edit_form_btn": "Editar",
    "cancel_form_btn": "Cancelar",
    "yes": "Sí",
    "no": "No",
    "na": "N/A",
    "enable": "activar",
    "disable": "desactivar",
    "disabled": "Desactivado",
    "forbid": "prohibir",
    "allow": "permitir",
    "forbidden": "Prohibido",
    "show_btn": "Mostrar",
    "wrong_period": "Un período inválido",
    "required_fields": "* - campos requeridos ó secciones",
    "invalid_tab": "Campos llenos inválidos",
    "page_size": "Tamaño de la página",
    "errors": {
        "1": "Error de conexión en la base de datos (001). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.",
        "2": "Error del sistema de autorización (002). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.",
        "3": "Clave de sesión incorrecta (003).  Por favor, vuelva a iniciar sesión. Si el problema persiste, póngase en contacto con soporte.",
        "4": "El usuario no puede ser encontrado o la sesión ha terminado (004).  Por favor, vuelva a iniciar sesión.",
        "5": "Solicitud incorrecta (005). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.",
        "6": "Error inesperado (006). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.",
        "7": {
            "default_msg": "Parámetros de la petición incorrectas. Compruebe los datos.",
            "title": "Parámetros incorrectos:",
            "errors": {
                "login": "Debe ser una dirección válida de correo electrónico",
                "domain": "Nombre de dominio incorrecto"
            }
        },
        "11": "Acceso denegado",
        "12": "La plataforma de servicios no se encuentra",
        "101": "En el modo de demostración esta función está desactivada",
        "102": "usuario o contraseña incorrecto",
        "103": "El usuario no esta activado",
        "111": "Controlador incorrecto",
        "112": "Método incorrecto",
        "201": "No se encontraron datos",
        "202": "Hay demasiados puntos en el area",
        "203": "Articulo relacionado ha sido borrado",
        "204": "Elemento no encontrado",
        "205": "Parametros invalidos",
        "206": "Este nombre de usuario ya esta en uso",
        "207": "Captcha Invalido",
        "208": "El dispositivo esta bloqueado",
        "209": "Error al enviar mensaje",
        "210": "Geocodificación fallo",
        "211": "Lapso de tiempo solicitado es demasiado grande",
        "212": "Limite solicitado es demasiado grande",
        "213": "El dispositivo esta desconectado",
        "214": "La operacion solicitada no es soportada por el dispositivo",
        "215": "Erro del servicio externo",
        "216": "Grupo no está vacía",
        "217": "Lista contiene entidades inexistentes",
        "218": "Parámetros de servicios externos con formato incorrecto",
        "219": "La acción no está permitida para los objetos de clon",
        "220": "Modelo de dispositivo desconosido",
        "221": "Restricción de la tarifa:</br> límite de dispositivo excedido.",
        "222": "Plugin no encontrado",
        "223": "Este número de teléfono ya está en uso",
        "224": "Dispositivo con este id de dispositivo ya está en uso",
        "225": "No se permite para este tipo legal",
        "226": "ICCID incorrecto",
        "227": "Código de activación inválido",
        "228": "No es compatible con el sensor",
        "229": "Datos solicitados aún no están listos",
        "230": "No se admite para este tipo de entidad",
        "231": "Tipo de entidad no coincide",
        "232": "Entrada ya están en uso",
        "233": "Ningún archivo de datos",
        "234": "Formato de datos inválido",
        "235": "Faltan datos de calibración",
        "236": "Característica disponible debido a restricciones arancelarias",
        "238": "No está permitido el cambio de tarifa",
        "240": "No se permite cambiar de tarifas con demasiada frecuencia",
        "242": "Error de validación",
        "251": "Fondos insuficientes",
        "254": "No se puede guardar archivo",
        "268": "Se ha superado el límite de objetos creados",
        "upload_exeption": "Error de carga de archivos",
        "no_hash": "La clave de sesión no se encuentra",
        "service_not_respond": "El servicio no está disponible temporalmente",
        "tracker": {
            "203": "Tracker tiene reglas adjuntas",
            "237": "Tarifa no válida",
            "238": "Cambio de tarifa no se permite",
            "239": "Nueva tarifa no existe",
            "246": "Usuario incorrecto",
            "247": "Ya existe clon",
            "249": "La operación sólo está disponible para los clones",
            "250": "No disponible para disposotivos borrados",
            "253": "No se puede realizar la operación, el perseguidor tiene clones <br>Clones ID: {0}"
        },
        "tariff": {
            "244": "Tarifa con el mismo nombre ya existe"
        },
        "settings": {
            "225": "Nueva contraseña debe ser diferente",
            "248": "Contraseña incorrecta"
        },
        "payment": {
            "201": "No encontrado en base de datos",
            "242": "Hubo errores durante la validación de contenido",
            "246": "ID de usuario inválido",
            "247": "Entidad ya existe",
            "259": "Conteo de pagos no cumplen con sumario",
            "260": "Suma de pagos no cumplen con sumario"
        }
    },
    "units_combination_list": {
        "days": "días|día|días",
        "hours": "horas|hora|horas",
        "minutes": "minutos|minuto|minutos",
        "seconds": "segundos|segundo|segundos",
        "everyminutes": "minutes|minute|minutes",
        "everyseconds": "seconds|second|seconds",
        "meters": "meters|meter|meters",
        "degrees": "degrees|degree|degrees",
        "objects": "objects|object|objects",
        "years": "years|year|years",
        "months": "months|month|months",
        "codes": "codes|code|codes",
        "trackers": "trackers|tracker|trackers",
        "devices": "devices|device|devices",
        "entries": "matches|match|matches",
        "assets": "assets|asset|assets"
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "km²",
        "square_meter": "sq. m",
        "ar": "ar",
        "hectare": "ja",
        "kmh": "km / h",
        "hour": "h",
        "minute": "m",
        "second": "s",
        "litres": "l",
        "day": "d",
        "mile": "mi"
    },
    "search": {
        "empty": "búsqueda por categoría",
        "btn": "Encontrar"
    },
    "list": {
        "edit_tool": "editar",
        "create_btn_text": "Crear",
        "empty_text": "Sin datos",
        "search_title_tpl": "{0}: encontrado {1}",
        "search_empty_title_tpl": "{0}: No hay resultados",
        "search_title": "Búsqueda",
        "search_empty_title": "No hay resultados"
    },
    "card": {
        "links": {
            "collapser_tip": "Ocultar enlaces",
            "collapser_exptip": "Mostrar enlaces"
        },
        "body": {
            "title": "Información adicional:",
            "exptitle": "Informacion Adicional <a>(mostrar)</a>",
            "exptitle_show": "<a>(show)</a>",
            "collapser_tip": "Ocultar informacion adicional",
            "collapser_exptip": "Mostrar informacion adicional"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Camara",
        "socket": "Socket"
    },
    "currency": {
        "gbp": "Libra esterlina",
        "brl": "Real brasileño",
        "huf": "Forinto húngaro",
        "hkd": "Dólar de Hong Kong",
        "dkk": "Corona danesa",
        "eur": "Euro",
        "ils": "Nuevo shéquel",
        "inr": "Rupia india",
        "idr": "Rupia indonesia",
        "cad": "Dólar canadiense",
        "cny": "Yuan chino",
        "krw": "Won surcoreano",
        "myr": "Ringgit",
        "mxn": "Peso mexicano",
        "nzd": "Dólar de Nueva Zelanda",
        "nok": "Corona noruega",
        "pkr": "Rupia pakistaní",
        "pln": "Złoty",
        "rub": "Rublo Ruso",
        "sgd": "Dólar de Singapur",
        "usd": "U.S. Dollar",
        "twd": "Nuevo dólar taiwanés",
        "thb": "Baht tailandés",
        "try": "Lira turca",
        "php": "Peso filipino",
        "czk": "Corona checa",
        "clp": "Peso (moneda de Chile)",
        "sek": "Corona sueca",
        "chf": "Franco suizo",
        "zar": "Rand sudafricano",
        "jpy": "Yen japonés",
        "kzt": "Kazajstán Tenge",
        "byr": "Rublo Bielorruso",
        "aud": "Dólar australiano",
        "tjs": "Somoni tayiko",
        "uah": "Grivna",
        "kgs": "Som kirguís",
        "tmt": "Manat turcomano",
        "uzs": "Som uzbeko",
        "mdl": "Leu moldavo",
        "gel": "Lari georgiano",
        "amd": "Dram armenio",
        "azn": "Manat azerbaiyano",
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
        "bdt": "Bangladeshi taka",
        "kes": "Kenyan shilling",
        "ugx": "Ugandan shilling",
        "pgk": "Papua New Guinean kina",
        "tzs": "Tanzanian Shilling",
        "bhd": "Bahraini dinar",
        "bif": "Burundian Franc",
        "btn": "Bhutanese Ngultrum",
        "cdf": "Congolese franc",
        "cve": "Cape Verde Escudo",
        "djf": "Djiboutian Franc",
        "dzd": "Algerian dinar",
        "ern": "Eritrean Nakfa",
        "etb": "Ethiopian Birr",
        "gmd": "Gambian Dalasi",
        "gnf": "Guinean Franc",
        "htg": "Haitian Gourde",
        "iqd": "Iraqi Dinar",
        "jod": "Jordanian Dinar",
        "lsl": "Lesotho Loti",
        "lyd": "Libyan Dinar",
        "mga": "Malagasy Ariary",
        "mop": "Macau pataca",
        "mvr": "Maldives Rufiyaa",
        "mwk": "Malawian kwacha",
        "rwf": "Rwandan Franc",
        "sdg": "Sudanese pound",
        "sll": "Sierra Leonean leone",
        "szl": "Swazi Lilangeni",
        "tnd": "Tunisian Dinar",
        "top": "Tongan paʻanga",
        "wst": "Samoan tālā",
        "zmw": "Zambian Kwacha",
        "kmf": "Comorian franc"
    },
    "maps": {
        "roadmap": "Google roadmap",
        "satellite": "Google satellite",
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
        "first": "total",
        "last": "de"
    },
    "index": {
        "menu_text": "Inicio"
    },
    "users": {
        "menu_text": "Usuarios",
        "create_btn": "Nuevo usuario",
        "create_form": {
            "title": "Nuevo usuario",
            "main_fields": "Informacion general",
            "contact_fields": "Datos de contacto",
            "address_fields": "Dirección",
            "legal_fields": "Informacion de la entidad legal",
            "password": "Contraseña",
            "password_repeat": "Repetir contraseña",
            "password_mismatched": "Passwords no coincide",
            "language": "Idioma predeterminado",
            "time_zone": "Zona horaria",
            "save_btn": "Crear Usuario",
            "clear_btn": "Borrar forma",
            "copy_address": "Copiar de dirección"
        },
        "edit_form": {
            "title": "Editar usuario",
            "assigned_menu_preset": "Preajuste de menú asignado",
            "save_btn": "Guardar cambios",
            "return_btn": "regresar"
        },
        "fields": {
            "creation_date": "Fecha de registro",
            "login": "Dirección de correo electrónico",
            "balance": "Balance",
            "bonus": "Bonus",
            "first_name": "Nombre",
            "middle_name": "Segundo nombre",
            "last_name": "Apellido",
            "activated": "Activado",
            "activated_t": "Usuario activo",
            "legal_type": "Estado Legal",
            "tin": "TIN",
            "legal_name": "Nombre legal",
            "iec": "IEC",
            "phone": "Numero de telefono",
            "post_country": "País",
            "post_index": "Código postal",
            "post_region": "Región",
            "post_city": "Ciudad",
            "post_street_address": "Calle, dirección",
            "registered_country": "País de registro",
            "registered_index": "Registro de codigo postal",
            "registered_region": "Región de registro",
            "registered_city": "Ciudad de registro",
            "registered_street_address": "Dirección de registro",
            "sole_trader": "Empresario independiente",
            "legal_entity": "Persona jurídica",
            "individual": "Individuo",
            "full_name": "Nombre Completo",
            "login_short": "Login",
            "user_id": "ID",
            "user_id_exp": "Numero de usuario",
            "activated_short": {
                "title": "estado",
                "status_true": "Activo",
                "status_false": "No activo",
                "status_no": "Active, email not confirmed"
            },
            "registered_short": "legal",
            "password": "Nueva contraseña",
            "password_repeat": "Repetir nueva contraseña",
            "password_mismatched": "Las contraseñas no coinciden"
        },
        "password_form": {
            "title": "Cambiar contraseña de usuario",
            "save_btn": "Fijar Contraseña",
            "return_btn": "Cancelar",
            "success_msg": "Contraseña cambiada con éxito"
        },
        "list": {
            "create_btn_text": "Crear nuevo usuario",
            "empty_text": "Ningún usuario encontrado"
        },
        "session_alert": {
            "error": "No puede crear la sesion de usuario",
            "title": "Su código sessio"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Trackers de usuario"
                },
                "transactions": {
                    "title": "Transacciones"
                }
            },
            "links": {
                "session_text": "Ir a monitoreo",
                "user_edit": "Editar usuario",
                "user_change_password": "Cambiar contraseña",
                "transactions": "Transacciones",
                "create_transaction": "Cambiar balance",
                "hash_text": "Get session key"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "Transacciones no encontradas",
                "title": "Transacciones por usuario"
            },
            "fields": {
                "description": "Operación",
                "type": "Tipo de operación",
                "subtype": "Subtipo",
                "date": "Fecha",
                "amount": "Suma:",
                "old_balance": "Viejo",
                "new_balance": "Nuevo",
                "type_set": {
                    "main_charge": "suscripción",
                    "payment": "pago",
                    "tariff_charge": "servicios de telecomunicaciones",
                    "bonus_charge": "recarga bono"
                },
                "subtype_set": {
                    "monthly": "mensual",
                    "partner": "de un socio",
                    "activeday": "día activo",
                    "everyday": "mensualmente por día",
                    "sms": "SMS message"
                }
            }
        },
        "transaction_add": {
            "title": "Se cambia el balance (añadiendo transacción) de los usuarios",
            "description": "Descripción de la transacción",
            "balance": "Cambios de balance",
            "bonus": "Cambio de Bonus",
            "value_sup": "* - cantidad de la que va a cambiar el valor de la corriente, puede ser negativo"
        },
        "combo_empty": "Seleccione un usuario",
        "select_error": "Tracker o su clon ya esta ligado a usuario seleccionado",
        "select": {
            "title": "Seleccione un usuario"
        },
        "session_hash": {
            "title": "User session key"
        }
    },
    "trackers": {
        "menu_text": "Trackers",
        "fields": {
            "tracker_id": "ID",
            "label": "Titulo",
            "model": "Modelo",
            "phone": "Teléfono",
            "device_id": "id de dispositivo",
            "last_connection_date": "Última conexión (UTC+0)",
            "creation_date": "Fecha de registro",
            "creation_date_short": "Registrado",
            "creation_date_short2": "Registrado",
            "connection_status": "Status",
            "tracker_id_exp": "Numero de tracker",
            "phone_exp": "Número de teléfono",
            "owner": "Propietario del tracker",
            "owner_short": "Propietario",
            "owner_name": "Nombre del propietario",
            "owner_id": "ID del propietario",
            "tariff": "Tarifa del tracker",
            "deleted": "Marcado como eliminado",
            "blocked": "Servicio pausado",
            "user_id": "ID de usuario",
            "clone": "Clon",
            "clone_owner": "Propietario del clon",
            "comment": "Сomentario",
            "options": {
                "clone": "clon",
                "deleted": "Borrado",
                "blocked": "bloqueado"
            },
            "statuses": {
                "active": "Online",
                "signal_lost": "No conectado",
                "offline": "Offline",
                "just_registered": "Acaba de registrar",
                "idle": "GPS no actualizado"
            }
        },
        "edit_form": {
            "main_fields": "Informacion principal",
            "title": "Editar tracker",
            "save_btn": "Guardar cambios",
            "return_btn": "Regresar"
        },
        "clone_form": {
            "title": "Crear clon de tracker",
            "remove_failure_msg": "No se pudo quitar clon",
            "failure_msg": "Error al crear el clon",
            "remove_confirm": "Quitar clon"
        },
        "group_clone_form": {
            "title": "La reproducción de grupo de trackers",
            "save_btn": "Clon",
            "grid_clone_label": "Se agregarán clones",
            "grid_clone_tip": "Puede cambiar la etiqueta del clon haciendo doble clic en él en la lista"
        },
        "group_owner_form": {
            "title": "Cambio de propietario de grupo de trackers",
            "save_btn": "Cambio de propietario",
            "grid_clone_label": "Trackers serán cambiados"
        },
        "tariff_form": {
            "title": "Cambio la tarifa para el tracker",
            "save_btn": "Guardar cambios",
            "repay": "Repay remainder of current tariff payment",
            "charge": "Charge user now (according to the new plan)",
            "charge_sup": "Sólo para los planes de tarifas con pago mensual",
            "tariff_invalid": "debe ser diferente de la actual"
        },
        "list": {
            "create_btn_text": "Crear nuevo tracker",
            "owner_btn": "Cambiar propietario",
            "clone_btn": "Clon",
            "edit_btn": "Editar seleccionado",
            "empty_text": "No se han encontrado marcadores",
            "after_clone_success": "clonada: {0}",
            "after_clone_failure": "Clonado: {0}, {1} clon fracasado",
            "after_owner_success": "Cambiado: {0}",
            "after_owner_failure": "Cambiado: {0}, {1} cambio fallado",
            "select_req": "Seleccione trackers de lista",
            "select_clone_req": "Los clones seleccionados, las operaciones del grupo no se pueden realizar"
        },
        "card": {
            "links": {
                "change_tracker_user": "Cambio de propietario",
                "tracker_edit": "Editar tracker",
                "tracker_tariff_edit": "Cambiar tarifa",
                "tracker_clone_create": "Crear clon de este tracker",
                "tracker_clone_remove": "Borrar este clon",
                "tracker_tariff": "Tarifa de tracker",
                "tracker_owner": "Propietario de tracker",
                "tracker_console": "GPRS-terminal",
                "tracker_corrupt": "Cancelar registro"
            }
        },
        "console": {
            "title": "GPRS-terminal para tracker",
            "connect_btn": "Inicie la conexión",
            "disconnect_btn": "Cierra conexión",
            "auto_scroll": "Auto-scrolling",
            "clear": "Limpiar consola",
            "send_btn": "Enviar",
            "send_empty": "Escriba un comando",
            "loading": "conectando a un dispositivo",
            "connect_init": "La conexión establecida",
            "show_time": "Muestra hora de mensaje",
            "show_status": "Muesta status",
            "disconnect_msg": "Conexión terminada",
            "connect_msg": "Conexión establecida",
            "error_msg": "Error al conectar el dispositivo",
            "connection_failure": "No se puede conectar al dispositivo",
            "close_question": "¿Cerrar conexión?",
            "status_title": "Estado del dispositivo",
            "status_property_title": "Estado",
            "status_value_title": "Valor"
        },
        "corrupt": {
            "alert": {
                "title": "¿Eliminar registro de tracker?",
                "text": "El dispositivo se eliminará permanentemente de la base de datos, todos los datos - no disponibles!",
                "confirm_login_label": "Confirmar el inicio de sesión del usuario",
                "confirm_login_error": "Inicio de sesión de usuario incorrecto"
            },
            "success_msg": "Dispositivo {0} quitado con éxito"
        }
    },
    "tariffs": {
        "menu_text": "Tarifas",
        "create_form": {
            "title": "Crear nueva tarifa",
            "main_fields": "Información principal",
            "save_btn": "Crear tafira",
            "clear_btn": "Borrar formulario",
            "options_fields": "Opciones de tarifas",
            "prices_fields": "Precio de tarifas"
        },
        "edit_form": {
            "title": "Editar tarifa",
            "save_btn": "Guardar cambios"
        },
        "default_form": {
            "title": "Ajustes de tarifa de falta"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Label",
            "group_id": "Grupo",
            "price": "Pago del mes",
            "device_limit": "Limite de dispositivos",
            "device_type": "Tipo de dispositivo",
            "store_period": "Período de almacenaje de la historia",
            "active": "Disponible para el usuario",
            "has_reports": "Tabla de reportes esta disponible",
            "proportional_charge": "Comisión de suscripción para el mes parcial de forma proporcional al número de días a cancelar",
            "incoming_sms": "SMS entrante",
            "outgoing_sms": "Saliente SMS",
            "service_sms": "Servicio SMS",
            "phone_call": "Llamadas telefónicas",
            "traffic": "GPRS rate (per Mb)",
            "default_tariff": "Tarifa predeterminada para los dispositivos de tipo «{0}»",
            "default_short": "defecto",
            "service_price": "La cantidad que se cobra por el uso del servicio",
            "group_id_exp": "Grupo de la tarifa",
            "active_exp": "Los usuarios pueden cambiar a esta tarifa por su cuenta",
            "device_limit_exp": "Maximum devices",
            "activation_bonus": "Bonus de activación",
            "free_days": "Number of free days",
            "tariff_type": "Ciclo de facturación",
            "tariff_type_short": "Pago",
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
            "create_btn_text": "Agregar una nueva tarifa",
            "empty_text": "Tarifas no encontradas"
        },
        "card": {
            "edit_form_btn": "Edit plan",
            "create_form_btn": "Create plan",
            "add_form_btn": "Add new plan",
            "save_form_btn": "Save plan",
            "currency_in": "(in {0})",
            "links": {
                "make_default": "Marcar como predeterminado",
                "tariff_edit": "Editar tarifa"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Trackers a esta tarifa"
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
                "2": "Messages sent with user’s consent or by his request. These SMS are sent from the service platform to users and devices through the SMS gateway you defined.<br /><br />Particular use cases:<br /> – Notifications about geo-based events your users want to stay aware of<br /> – M2M commands to those devices which can be configured over SMS channel only (e.g. device configuration, output change), as well as manual location request via SMS (for models which support such feature).",
                "3": "Service and maintenance SMS commands which are sent from the platform to devices, normally without any special approvement from user. For example, they are used for automatic device activation – to deliver initialization SMS commands (APN, server address, etc.), or when your support team performs remote device diagnostics.",
                "4": "If you use Navixy SIM cards in devices, you can additionally charge users for incoming SMS messages from these SIM cards (e.g. confirmations from devices about accomplishing the commands).",
                "5": "If you use Navixy SIM-cards in devices, you can set up a fee for the its usage based on traffic volume (traffic in both directions is billed).",
                "6": "User notifications by automatic phone calls are currently supported in some regions and in limited languages only.",
                "7": "If user reaches the limit, he will not be able to add or track more assets in his account. In case user has assets on different plans, the minimum value will be applied.",
                "8": "The system logs and stores data (about trips, events, etc.) within set time span relative to the current date only. If you extend the time span, the older logs might not be available.",
                "9": "Select maps available for user if he tracks assets on the current plan. The list of all available maps is defined by the preferences for your service.",
                "10": "Select options which are available for users who have assets on this plan.",
                "11": "Select options which are available for users who have assets on this plan.",
                "12": "The price user pays to you as a service provider. The billing system uses the currency you defined in Account settings.<br /><br />If you see “N/A” instead of value, it means that service is not offered or cannot be billed by the billing system.",
                "13": "The price you pay for services provided to you by Navixy. If you see “N/A” instead of value, it means that service is not offered (not ordered or unavailable).",
                "14": "This plan will be used by default when user activates a new device. Note: this setting will be overridden by the plan defined in the activation code parameters.",
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
        "combo_empty": "Seleccione tarifa",
        "select_error": "Esta tarifa no está disponible",
        "select": {
            "title": "Seleccione tarifa"
        },
        "types": {
            "activeday": "Diaria",
            "monthly": "Mensual",
            "everyday": "Mensual (débito diario)"
        },
        "price_type": {
            "monthly": "Cuota mensual",
            "activeday": "Tarifa diaria",
            "everyday": "Cuota mensual"
        }
    },
    "codes": {
        "menu_text": "Codigo de activacion",
        "fields": {
            "activated": "estado",
            "activation_date": "Fecha de activacion",
            "bonus_amount": "Bonus",
            "code": "codigo",
            "device_id": "ID de dispositivo",
            "device_type": "Tipo de dispositivo",
            "free_days": "Días sin costo",
            "money_amount": "cantidad",
            "tariff_id": "ID de tarifa",
            "tariff_name": "Tarifa",
            "status": {
                "activated": "activado",
                "no_activated": "no activado"
            }
        },
        "edit_form": {
            "title": "Editar codigo de activacion",
            "save_btn": "Guardar cambios",
            "selected_count": "Codigos seleccionados",
            "device_type": "Codigos seleccionados para dispositivos"
        },
        "create_form": {
            "title": "Crear códigos de activación",
            "save_btn": "Crear codigos",
            "new_codes_count": "Cantidad de nuevos codigos"
        },
        "list": {
            "empty_text": "Codigos de activacion no encontrados",
            "create_btn": "Crear nuevo",
            "edit_btn": "Editar seleccionado",
            "reload_btn": "Recargar",
            "after_create_success": "Crear: {0}",
            "after_edit_success": "Cambios: {0}",
            "after_edit_failure": "Cambiado: {0}, {1} Cambio fallo",
            "select_req": "Seleccione los códigos de lista",
            "same_type_req": "Debes de especificar un codigo de tipo de dispositivo",
            "edited_tip": "cambiado",
            "faq_link": "https://docs.navixy.com/admin-panel/activation-codes ",
            "faq_text": "Activation codes FAQ",
            "filters": {
                "activated": "Activado",
                "no_activated": "No activado",
                "trackers": "Trackers",
                "cameras": "Cámaras",
                "sockets": "Sockets",
                "toggle_all": "Mostrar todo"
            }
        }
    },
    "settings": {
        "menu_text": "Ajustes",
        "fields": {
            "service_title": "Título de servicio",
            "page_title": "Título de la página",
            "locale": "Monitoreo Idioma",
            "demo_login": "Usuario demo",
            "demo_password": "Demo contraseña",
            "maps_title": "Mapas disponibles",
            "maps_default": {
                "type": "Mapa predeterminada",
                "location_lat": "latitud predeterminada",
                "location_lng": "Longitud predeterminada",
                "zoom": "Zoom predeterminado"
            },
            "google_client_id": "Cliente ID para google maps",
            "currency": "Moneda para los usuarios",
            "payment_link": "URL del sistema de pago",
            "promo_url": "Sitio de promoción URL",
            "domain": "Dominio",
            "email_from": "Remitente de  Email",
            "email_special": "Correo electrónico para recibir alertas",
            "email_footer": "Email de pie de pagina",
            "sms_originator": "SMS originador",
            "caller_id": "Aviso de voz originador",
            "password": "Nueva contraseña",
            "password_repeat": "Repetir nueva contraseña",
            "password_old": "Contraseña actual",
            "password_mismatched": "Las contraseñas no coinciden",
            "footer_email": "Correo electrónico de empresa",
            "footer_site": "«Sobre nosotros» Link",
            "footer_text": "El texto en la parte inferior de la página",
            "geocoder": "Geocoder por defecto",
            "default_geocoder": "Geocodificación",
            "route_provider": "Proveedor de ruta",
            "translit": "SMS transcripción",
            "measurement_system": "Sistema de medición",
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
            "do_not_apply_default_seetings_during_activation": "No aplicar las configuraciones predeterminadas al activar dispositivo",
            "do_not_apply_default_seetings_during_activation_hint": "Al elegir esta opción la plataforma no va a enviar comandos SMS y GPRS con las configuraciones predeterminadas al dispositivo. Debe configurar el dispositivo de forma manual antes de activarlo en la plataforma",
            "monitoring_logo_hint": "Additional logo that is shown in the user web interface (above menu)",
            "show_call_notifications": "Allow configuration of voice notifications",
            "monitoring_logo_clickable": "Click on the logo in the interface opens a promo web-site",
            "menu_preset": "Preajustes de menú",
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
            "title": "Ajustes de servicio",
            "save_btn": "guardar",
            "save_msg": "Configuracion guardada con exito",
            "main_fields": "Ajustes Basicos",
            "map_fields": "Ajustes de mapas",
            "permission_fields": "Ajustes de notificaciones",
            "domain_sup": "* - para dominios como *{0} tipos de mapas disponibles limitados",
            "custom_fields": "Personalización",
            "main_buttons_title": "Mostrando botones",
            "show_mobile_apps": "Mostrar botones para la descarga de aplicaciones móviles",
            "main_texts_title": "Principales textos",
            "footer_texts_title": "Texto en el sótano de la página de inicio de sesión",
            "logo_title": "Logo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "La página de Autorización de fondo",
            "desktop_wallpaper_title": "Servicios de la página de fondo",
            "upload_btn": "Subir",
            "update_btn": "Cambiar",
            "remove_btn": "Eliminar",
            "upload_loading": "Subir imagen",
            "domain_fields": "Dominio",
            "regional_fields": "Ajuste regional",
            "maps_fields": "Mapas",
            "demo_fields": "Usuario demo",
            "notifications_fields": "Notificaciones",
            "password_fields": "Cambiar contraseña",
            "pass_hint": "No se guardarán los cambios en otras pestañas",
            "pass_save_msg": "Contraseña cambiada con éxito",
            "pass_save_btn": "Cambiar contraseña",
            "demo_hint": "Seleccione la cuenta de usuario que se utilizará para fines de demostración y disponible en la página de inicio de sesión (opcional)",
            "user_notifications_title": "Notificaciones a los usuarios",
            "user_notifications_hint": "Configuración de las notificaciones de su sistema de seguimiento a los usuarios: geo-acontecimientos, bajo balance, recuperación de contraseña, etc.",
            "special_notifications_title": "Notificaciones a los administradores",
            "special_notifications_hint": "Notificaciones del sistema a los administradores sobre el estado del servicio, estadísticas y otros",
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
            "accounts_geocoding_title": "Cartography",
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
            "maps_hint": "Por favor, defina la selección de mapas que estará disponible para los clientes de su servicio. La lista de mapas para usuarios específicos se puede limitar con sus configuración del plan tarifario.<br><br>El uso de los servicios de mapas que ha seleccionado se debe conceder a usted por sus titulares de derechos. NAVIXY no se hace responsable por cualquier violación de los términos de la licencia por usted o sus usuarios finales.",
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
            "monitoring_logo_title": "User interface logo",

            "ui_settings_header":"Configuración de la interfaz",
            "device_settings_checkbox":"Mostrar el elemento del menú \"Configuración del dispositivo\"",
            "device_settings_checkbox_hint":"La configuración se aplicará a todos los usuarios. Sin embargo, puede habilitar o deshabilitar esta opción para cada usuario individualmente en el perfil de usuario.",
            "display_release_notes": "Mostrar feed de actualización",
            "display_release_notes_hint": "Esta configuración permite que el historial de actualizaciones de Navixy se muestre en la interfaz de usuario. Se admiten los siguientes idiomas: inglés, español, francés y ruso.",
            "menu_editor": "Editor de menú"
        },
        "upload_form": {
            "save_btn": "Subir",
            "cancel_btn": "Cancelar",
            "upload_btn": "Vista",
            "title": "Subir imagen. {0}",
            "titles": {
                "logo": "Logo",
                "favicon": "Favicon",
                "login_wallpaper": "Página de registro de papel tapiz",
                "desktop_wallpaper": "Fondo de pantalla de servicio página",
                "monitoring_logo": "Additional logo"
            },
            "tips": {
                "logo": "Recomendado para cargar la imagen de orientación horizontal con un fondo transparente y una anchura no inferior a 200 puntos.",
                "favicon": "Recomendado para cargar la imagen con un fondo transparente y una resolución mínima de 32x32 píxeles.",
                "login_wallpaper": "Recomendado para cargar las imágenes de fondo con una resolución de al menos 1920x1080 píxeles (FullHD) en formato JPEG.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "El formato de imagen {0} (el tamaño máximo de {1} MB)",
            "error_text": "Error al cargar la imagen"
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
        "menu_text": "Contabilidad",
        "report_msg": {
            "title": "Confirme el correo informativo",
            "text": "Alerte a los clientes acerca de la exportación de datos a 1C para <b>{0}</b>.<br>Y¿Seguro que quieres hacer <a> correo-informativo</b>?"
        },
        "form": {
            "title": "«1C:Enterprise» Datos exportados",
            "export1c": {
                "tab_title": "Contabilidad",
                "save_btn": "Conseguir archivo de datos 1C",
                "report_btn": "Presentar hechos por correo electrónico",
                "fields": {
                    "month": "Seleccione un mes",
                    "last_act": "Último número de la escritura"
                }
            },
            "payments": {
                "tab_title": "Pagos",
                "save_btn": "Obtener archivo de datos de 1C",
                "fields": {
                    "date": "Intervalo de tiempo",
                    "type": "Sistema de pago"
                },
                "ps": {
                    "default": "Todo lo anterior",
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
        "menu_text": "Pagos",
        "import_sberbank": {
            "title": "importación de pagos Sberbank",
            "save_btn": "Importar pagos",
            "upload_btn": "Vista",
            "upload_loading": "Cargando Archivo",
            "error_text": "Fallo en importación de archivos",
            "fields": {
                "file_title": "Importar archivo de formato {0} (tamaño máximo {1} Mb)"
            },
            "errors": {
                "242": "Línea {0}, columna {1}, descripción:<br><i>{2}</i>"
            },
            "success_msg": "Pagos de Sberbank importados satisfactoriamente",
            "success_dsc": "Fecha de registro: <b>{0}</b><br>Conteo de pagos cargados: <b>{1}</b><br>Suma de pagos cargados: <b>{2}</b>"
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
        "metric": "Métrico",
        "imperial": "Imperial",
        "us": "US",
        "metric_gal_us": "Métrico + Galón (US)",
        "nautical": "Náutica"
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
        "RUB": "{0} RUB.",
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
        "BYR": "{0} RUB.",
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
        "KES": "{0} KSh",
        "UGX": "{0} USh",
        "PGK": "{0} K",
        "TZS": "{0} TSh",
        "BHD": "{0} BD",
        "BIF": "{0} FBu",
        "BTN": "{0} BTN",
        "CDF": "{0} FC",
        "CVE": "{0} $",
        "DJF": "{0} Fdj",
        "DZD": "{0} DA",
        "ERN": "{0} Nkf",
        "ETB": "{0} Br",
        "GMD": "{0} D",
        "GNF": "{0} GFr",
        "HTG": "{0} G",
        "IQD": "{0}  د.ع",
        "JOD": "{0} JD",
        "LSL": "{0} L",
        "LYD": "{0} LD",
        "MGA": "{0} Ar",
        "MOP": "{0} MOP$",
        "MVR": "{0} Rf",
        "MWK": "{0} MK",
        "RWF": "{0} FRw",
        "SDG": "{0} SDG",
        "SLL": "{0} Le",
        "SZL": "E {0}",
        "TND": "{0} DT",
        "TOP": "{0} T$",
        "WST": "{0} WS$",
        "ZMW": "{0} ZK",
        "KMF": "{0} CF"
    },
    "features": {
        "api": "API",
        "app_tasks": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>Tasks</a>",
        "app_fleet": "Flota",
        "app_reports": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>Reports</a>",
        "batch_operations": "Batch operations",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "Capas de mapa",
        "multilevel_access": "Object clones",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>Scheduled reports</a>",
        "routing": "Enrutamiento",
        "driver_journal": "Diario el conductor",
        "ui_mobile": "Mobile web interface",
        "weblocator": "Weblocator",
        "chat": "Chat",
        "statuses": "Work statuses",
        "checkins": "Los check-ins en el mapa"
    },
    "singleton": true,
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "Zoom out"
    },
    "map_type_label": "Map",

    "menu-editor": {
        "default-preset": "Plantilla de menú predeterminada"
    }
});
