/**
 * @class Locale.locale-es
 * @extends Locale.AbstractLocale
 */
Ext.define('Locale.locale-es', {
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-es",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© 2015 RusLink. Todos los derechos reservados.",
    "panel_title": "NavixyPanel",
    "error": "Error",
    "loading": "Cargando...",
    "conneting_loader": "Conectando con el servidor",
    "access_denied": "Acceso denegado",
    "access_denied_tip": "no tiene permiso para acceder la página solicitada",
    "index_title": "Bienvenido al panel de control",
    "index_tip": "",
    "old_version": "Version Antigua",
    "auth": {
        "login": "Login o correo electrónico",
        "password": "Contraseña",
        "login_btn": "Login",
        "locale_title": "Elegir idioma",
        "locale_title_short": "Idioma",
        "auth_error": "Error de autenticación",
        "reloading_soon": "Recargando",
        "logout": "Logout",
        "title": "Panel de administración"
    },
    "no_path_found": "No hay página en esta ruta",
    "phone_invalid_msg": "Por favor introduzca un numero de telefono válido",
    "invalid_numeric_msg": "No es un numero válido",
    "invalid_amount_msg": "No es un numero valido<br>(2 dígitos después del separador decimal)",
    "searcher_empty_text": "Introduce criterios de búsqueda",
    "search_empty_text": "Introduce criterios de búsqueda",
    "searchTitle": "Búsqueda por categoría",
    "clear_form_btn": "Limpiar",
    "save_form_btn": "Guardar",
    "back_form_btn": "Regresar",
    "select_form_btn": "Seleccionar",
    "close_form_btn": "Cerrar",
    "yes": "Sí",
    "no": "No",
    "show_btn": "Mostrar",
    "wrong_period": "Un período inválido",
    "required_fields": "* - campos requeridos o secciones",
    "invalid_tab": "Campos llenos inválidos",
    "page_size": "Tamaño de la página",
    "errors": {
        "1": "Error de conexión en la base de datos (001). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.",
        "2": "Error del sistema de autorización (002). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.",
        "3": "Clave de sesión incorrecto (003).  Por favor, volver a iniciar sesión. Si el problema persiste, póngase en contacto con soporte.",
        "4": "El usuario no puede ser encontrado o sesión ha terminado (004).  Por favor, vuelva a iniciar sesión.",
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
    "units_combination": {
        "days": [
            "días",
            "día",
            "días"
        ],
        "hours": [
            "horas",
            "hora",
            "horas"
        ],
        "minutes": [
            "minutos",
            "minuto",
            "minutos"
        ],
        "seconds": [
            "segundos",
            "segundo",
            "segundos"
        ],
        "everyminutes": [
            "minutos",
            "minuto",
            "minutos"
        ],
        "everyseconds": [
            "segundos",
            "segundo",
            "segundos"
        ],
        "meters": [
            "metros",
            "metro",
            "metros"
        ],
        "degrees": [
            "grados",
            "grado",
            "grados"
        ],
        "objects": [
            "objetos",
            "objeto",
            "objetos"
        ],
        "years": [
            "años",
            "año",
            "años"
        ],
        "months": [
            "meses",
            "mes",
            "meses"
        ],
        "codes": [
            "códigos",
            "código",
            "códigos"
        ],
        "devices": [
            "dispositivos",
            "dispositivo",
            "dispositivos"
        ],
        "entries": [
            "cumple",
            "cumple",
            "cumples"
        ],
        "trackers": [
            "trackers",
            "tracker",
            "trackers"
        ]
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
        "day": "d"
    },
    "search": {
        "empty": "busqueda por categoria",
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
		"nzd": "Dólar neozelandés",
		"nok": "Corona noruega",
		"pkr": "Rupia pakistaní",
		"pln": "Złoty",
		"rub": "Rublo ruso",
		"sgd": "Dólar de Singapur",
		"usd": "Dólar estadounidense",
		"twd": "Nuevo dólar taiwanés",
		"thb": "Baht tailandés",
		"try": "Lira turca",
		"php": "Peso filipino",
		"czk": "Corona checa",
		"clp": "Peso (moneda de Chile)",
		"sek": "Corona sueca",
		"chf": "Franco suizo",
		"zar": "Rand sudafricano",
		"jpy": "Yen",
		"kzt": "Tenge kazajo",
		"byr": "Rublo bielorruso",
		"aud": "Dólar australiano",
		"tjs": "Somoni tayiko",
		"uah": "Grivna",
		"ltl": "Litas lituana",
		"lvl": "Lats letón",
		"kgs": "Som kirguís",
		"tmt": "Manat turcomano",
		"uzs": "Som uzbeko",
		"mdl": "Leu moldavo",
		"gel": "Lari georgiano",
		"amd": "Dram armenio",
		"azn": "Manat azerbaiyano",
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
        "ovi": "OVI Maps",
        "mailru": "Mail.ru Maps"
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
                "status_false": "No activo"
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
                "create_transaction": "Cambiar balance"
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
                "bonus_amount": "Prima:",
                "old_bonus": "Viejo",
                "new_bonus": "Nuevo",
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
                    "everyday": "mensualmente por día"
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
            "creation_date": "Fecha de registro",
            "creation_date_short": "Registrado",
            "connection_status": "Status",
            "tracker_id_exp": "Numero de tracker",
            "phone_exp": "Número de teléfono",
            "owner": "Propietario del tracker",
            "tariff": "Tarifa del tracker",
            "deleted": "Marcado como eliminado",
            "blocked": "Servicio pausado",
            "clone": "Clon",
            "clone_owner": "Propietario del clon",
            "options": {
                "clone": "clon",
                "deleted": "Borrado",
                "blocked": "bloqueado"
            },
            "statuses": {
                "online": "En linea",
                "offline": "Offline",
                "just_registered": "Acaba de registrar",
                "signal_lost": "No conectado",
                "active": "Online",
                "idle": "GPS no actualizado"
            },
            "user_id": "ID de usuario"
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
        "tariff_form": {
            "title": "Cambio la tarifa para el tracker",
            "save_btn": "Guardar cambios",
            "repay": "Pagar el resto del pago actual de tarifas",
            "charge": "Carga de pago para nueva tarifa",
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
        "corrupt": {
            "alert": {
                "title": "¿Eliminar registro de tracker?",
                "text": "El dispositivo se eliminará permanentemente de la base de datos, todos los datos - no disponibles! <br><br>Estás seguro que quieres eliminar registro?"
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
            "name": "Etiqueta",
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
            "traffic": "GPRS (para Mb)",
            "default_tariff": "Tarifa predeterminada para los dispositivos de tipo «{0}»",
            "default_short": "defecto",
            "service_price": "La cantidad que se cobra por el uso del servicio",
            "group_id_exp": "Grupo de la tarifa",
            "active_exp": "Los usuarios pueden cambiar a esta tarifa por su cuenta",
            "device_limit_exp": "Máximo de dispositivos",
            "activation_bonus": "Bonus de activación",
            "free_days": "Número de días libres",
            "tariff_type": "Ciclo de facturación",
            "tariff_type_short": "Pago"
        },
        "list": {
            "create_btn_text": "Agregar una nueva tarifa",
            "empty_text": "Tarifas no encontradas"
        },
        "card": {
            "links": {
                "make_default": "Marcar como predeterminado",
                "tariff_edit": "Editar tarifa"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Trackers a esta tarifa"
                }
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
            "footer_text": "El texto en la parte inferior de la página",
            "page_title": "Título de la página",
            "footer_email": "Correo electrónico de empresa",
            "footer_site": "«Sobre nosotros» Link"
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
            "allow_registration": "Permitir a usuario registrarse",
            "main_texts_title": "Principales textos",
            "footer_texts_title": "Texto en el sótano de la página de inicio de sesión",
            "logo_title": "Logo",
            "favicon_title": "Favicon",
            "favicon_desc": "no funciona en Internet Explorer",
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
            "maps_hint": "Por favor, defina la selección de mapas que estará disponible para los clientes de su servicio. La lista de mapas para usuarios específicos se puede limitar con sus configuración del plan tarifario.<br><br>El uso de los servicios de mapas que ha seleccionado se debe conceder a usted por sus titulares de derechos. NAVIXY no se hace responsable por cualquier violación de los términos de la licencia por usted o sus usuarios finales.",
            "demo_hint": "Seleccione la cuenta de usuario que se utilizará para fines de demostración y disponible en la página de inicio de sesión (opcional)",
            "user_notifications_title": "Notificaciones a los usuarios",
            "user_notifications_hint": "Configuración de las notificaciones de su sistema de seguimiento a los usuarios: geo-acontecimientos, bajo balance, recuperación de contraseña, etc.",
            "special_notifications_title": "Notificaciones a los administradores",
            "special_notifications_hint": "Notificaciones del sistema a los administradores sobre el estado del servicio, estadísticas y otros"
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
                "desktop_wallpaper": "Fondo de pantalla de servicio página"
            },
            "tips": {
                "logo": "Recomendado para cargar la imagen de orientación horizontal con un fondo transparente y una anchura no inferior a 200 puntos.",
                "favicon": "Recomendado para cargar la imagen con un fondo transparente y una resolución mínima de 32x32 píxeles.",
                "login_wallpaper": "Recomendado para cargar las imágenes de fondo con una resolución de al menos 1920x1080 píxeles (FullHD) en formato JPEG."
            },
            "img_title": "El formato de imagen {0} (el tamaño máximo de {1} MB)",
            "error_text": "Error al cargar la imagen"
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
        }
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
    }
});