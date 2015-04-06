/**
 * @class Locale.locale-en
 * @extends Ext.Base
 * Description
 */

Ext.define('Locale.locale-es', {
    extend: 'Locale.AbstractLocale',
    dependencies: [
        'Locale.ext.locale-en'
    ],
    singleton: true,

    main_copyright: '© ' + new Date().getUTCFullYear() + ' RusLink. Todos los derechos reservados.',

    panel_title: 'NavixyPanel',
    error: 'Error',
    loading: 'Loading...',
    conneting_loader: 'Conectando con el servidor',

    access_denied: 'Acceso denegado',
    access_denied_tip: 'no tiene permiso para acceder la página solicitada',

    index_title: 'Bienvenido al panel de control',
    index_tip: '',
    old_version: 'Version Antigua',

    auth: {
        login: 'Login o correo electrónico',
        password: 'Password',
        login_btn: 'Login',
        locale_title: 'Idioma de la interfaz / Язык интерфейса',
        locale_title_short: 'Idioma',
        auth_error: 'Error de autentificacion',
        reloading_soon: 'Recarga',
        logout: 'Logout',
        title: 'Panel de Administracion'
    },

    no_path_found: 'No page on this path',
    phone_invalid_msg: 'Por favor introduzca un numero de telefono valido',
    invalid_numeric_msg: 'No es un numero valido',
    invalid_amount_msg: 'No es un numero valido<br>(2 dígitos después marca decimal)',

    searcher_empty_text: 'Introduce criterios de búsqueda',
    search_empty_text: 'Introduce criterios de búsqueda',
    searchTitle: 'Búsqueda por categoría',

    clear_form_btn: 'Limpiar',
    save_form_btn: 'Guardar',
    back_form_btn: 'Regresar',
    select_form_btn: 'Seleccionar',
    close_form_btn: 'Cerrar',
    yes: 'Si',
    no: 'No',
    show_btn: 'Show',
    wrong_period: 'Un período inválido',
    required_fields: '* - campos o secciones requeridas',

    invalid_tab: 'Campos llenos inválidos',

    page_size: 'Tamaño de la página',

    errors: {
        1: 'Error de conexión en la base de datos (001). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.',
        2: 'Error del sistema de autorización (002). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.',
        3: 'Clave de sesión incorrectas (003).  Por favor, vuelva a iniciar sesión. Si el problema persiste, póngase en contacto.',
        4: 'El usuario no puede ser encontrado o sesión ha terminado (004).  Por favor, vuelva a iniciar sesión.',
        5: 'Solicitud incorrecta (005). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.',
        6: 'Error inesperado (006). Por favor, póngase en contacto con soporte o inténtelo de nuevo más tarde.',
        7: {
            default_msg: 'Parámetros de la petición incorrectas. Compruebe los datos.',
            title: 'Parámetros incorrectos:',
            errors: {
                login: 'Debe ser una dirección válida de correo electrónico',
                domain: 'Nombre de dominio incorrecto'
            }
        },

        11: 'Acceso denegado',
        12: 'La plataforma de servicios no se encuentra',
        101: 'En el modo de demostración de esta función está desactivada',
        102: 'usuario o contraseña incorrecto',
        103: 'El usuario no esta activado',
        111: 'Controlador incorrecto',
        112: 'Metodo incorrectos>',
        201: 'No se encontraron datos',
        202: 'Nay demasiados puntos en el area',
        203: 'Articulo relacionado ha sido borrado',
        204: 'Elemento no encontrado',
        205: 'Parametros invalidos',
        206: 'Este nombre de usuario ya esta en uso',
        207: 'Captcha Invalido',
        208: 'El dispositivo esta bloqueado',
        209: 'Fallo al enviar el mensaje',
        213: 'El dispositivo esta desconectado',
        214: 'La operacion solicitada no es soportada por el dispositivo',
        219: 'Esta accion no esta disponible para los objetos clone1',
        221: 'Tariff restriction:</br> Device limit exceeded.',
        223: 'Este numero de telefono ya esta en uso',
        224: 'Dispositivo con este device-id ya esta en uso',
        227: 'Codigo de activacion invalido',
        210: 'Geocodificación fallo',
        211: 'Lapso de tiempo solicitado es demasiado greande',
        212: 'Limite solicitado es demasiado greande',
        215: 'Erro del servicio externo',
        216: 'Grupo no esta vacio',
        217: 'Lista contiene entidades inexistentes',
        218: 'Parámetros de servicios externos con formato incorrecto',
        220: 'Modelo de dispositivo desconosido',
        222: 'Plugin no encontrado',
        225: 'No permitido en este tipo legal',
        226: 'ICCID incorrecto',
        228: 'No es compatible con el sensor',
        229: 'Los datos solicitados no está listo',
        230: 'No se admite para este tipo de entidad',
        231: 'Tipo de entidad no coincide',
        232: 'Entrada ya están en uso',
        233: 'Ningún archivo de datos',
        234: 'Formato de datos no válido',
        235: 'Faltan datos de calibración',
        236: 'Característica disponible debido a restricciones arancelarias',
        238: 'Cambio de tarifa no se permite',
        240: 'No se permite cambiar de tarifas con demasiada frecuencia',
        242: 'Error de validación',
        upload_exeption: 'Error de carga de archivos',
        no_hash: 'La clave de sesión no se encuentra',
        service_not_respond: 'El servicio no está disponible temporalmente',
        tracker: {
            203: 'Tracker tiene reglas adjuntas',
            237: 'Tarifa válida',
            238: 'Cambio de tarifa no se permite',
            239: 'Nueva tarifa no existe',
            250: 'No disponible para disposotivos borrados',
            246: 'Usuario Incorrecto',
            247: 'Ya existe clon',
            249: 'La operacion solo esta disponible para clones'
        },
        tariff: {
            244: 'Tarifa con el mismo nombre ya existe'
        },
        settings: {
            225: 'Nuevo password debe ser diferente',
            248: 'Password inconrrecto'
        }
    },

    units_combination: {
        days: ['dias', 'dia', 'dias'],
        hours: ['horas', 'hora', 'horas'],
        minutes: ['minutos', 'minuto', 'minutos'],
        seconds: ['segundos', 'segundo', 'segundos'],
        everyminutes: ['minutos', 'minuto', 'minutos'],
        everyseconds: ['segundos', 'segundo', 'segundos'],
        meters: ['metros', 'metro', 'metros'],
        degrees: ['degrees', 'degree', 'degrees'],
        objects: ['objects', 'object', 'objects'],
        years: ['years', 'year', 'years'],
        months: ['months', 'month', 'months'],
        codes: ['codes', 'code', 'codes'],
        devices: ['devices', 'device', 'devices'],
        entries: ['matches', 'match', 'matches']
    },

    units_short: {
        kilometer: 'km',
        meter: 'm',
        square_kilometer: 'sq. km',
        square_meter: 'sq. m',
        ar: 'ar',
        hectare: 'ha',
        kmh: 'km / h',
        hour: 'h',
        minute: 'm',
        second: 's',
        litres: 'l',
        day: 'd'
    },

    search: {
        empty: 'busqueda por categoria',
        btn: 'Encontrar'
    },

    list: {
        edit_tool: 'editar',
        create_btn_text: 'Crear',
        empty_text: 'Sin datos',
        search_title_tpl: '{0}: found {1}',
        search_empty_title_tpl: '{0}: No hay resultados',
        search_title: 'Busqueda',
        search_empty_title: 'No hay resultados'
    },

    card: {
        links: {
            collapser_tip: 'Ocultar enlaces',
            collapser_exptip: 'Mostrar enlaces'
        },
        body: {
            title: 'Informacion Adicional:',
            exptitle: 'Informacion Adicional <a>(show)</a>',
            collapser_tip: 'Ocultar informacion adicional',
            collapser_exptip: 'Mostrar informacion adicional'
        }
    },

    devices: {
        tracker: 'Tracker',
        camera: 'Camara',
        socket: 'Socket'
    },

    currency: {
        rub: 'Rublo Ruso',
        usd: 'U.S. Dollar',
        kzt: 'Kazakhstan Tenge',
        byr: 'Rublo Bieloruso',
        eur: 'Euro',
        jpy: 'Yen japonés',
        gbp: 'Libra esterlina',
        chf: 'Franco suizo',
        cad: 'Canadian dollar',
        aud: 'Dólar canadiense',
        nzd: 'Dólar de Nueva Zelanda',
        tjs: 'Tajik Somoni',
        php: 'Peso filipino'
    },

    maps: {
        roadmap: 'Google roadmap',
        satellite: 'Google satellite',
        hybrid: 'Google hybrid',
        yandex: 'Yandes Maps',
        yandexpublic: 'Yandex Narod Map',
        cdcom: 'ProGorod Maps',
        osm: 'OpenStreet Maps',
        osmmapnik: 'OpenStreet Maps 2',
        wikimapia: 'Wikimapia',
        navitel: 'Navitel Maps',
        doublegis: 'DoubleGis Maps',
        ovi: 'OVI Maps',
        mailru: 'Mail.ru Maps'
    },

    dealer_info: {
        first: 'total',
        last: 'of'
    },

    index: {
        menu_text: 'Home'
    },

    users: {
        menu_text: 'Usuario',
        create_btn: 'Nuevo usuario',
        create_form: {
            title: 'Nuevo usuario',
            main_fields: 'Informacion general',
            contact_fields: 'Datos de contacto',
            address_fields: 'Direccion',
            legal_fields: 'Informacion de la entidad legal',
            password: 'Password',
            password_repeat: 'Repetir password',
            password_mismatched: 'Passwords no coincide',
            language: 'Idioma por defecto',
            time_zone: 'Zona horaria',
            save_btn: 'Crear Usuarior',
            clear_btn: 'Borrar form',
            copy_address: 'copiar de direccion'
        },
        edit_form: {
            title: 'Editar usuario',
            save_btn: 'Guardar cambios',
            return_btn: 'regresar'
        },
        fields: {
            creation_date: 'Fecha de registro',
            login: 'Direccion de correo',
            balance: 'Balance',
            bonus: 'Bonus',
            first_name: 'Nombre',
            middle_name: 'Segundo nombre',
            last_name: 'Apellido',
            activated: 'Activado',
            activated_t: 'Usuario activo',
            legal_type: 'Estado Legal',
            tin: 'TIN',
            legal_name: 'Nombre legal',
            iec: 'IEC',
            phone: 'Numero de telefono',
            post_country: 'Pais',
            post_index: 'Codig Postal',
            post_region: 'Region',
            post_city: 'Ciudad',
            post_street_address: 'calle, direccion',
            registered_country: 'Registro de pais',
            registered_index: 'Registro de codigo postal',
            registered_region: 'Registro de region',
            registered_city: 'Registro de ciudad',
            registered_street_address: 'Registro de direccion',

            sole_trader: 'Empresario independiente',
            legal_entity: 'Persona juridica',
            individual: 'Individual',
            full_name: 'Nombre Completo',
            login_short: 'Login',
            user_id: 'ID',
            user_id_exp: 'Numero de usuario',
            activated_short: {
                title: 'estado',
                status_true: 'Activo',
                status_false: 'No activo'
            },
            registered_short: 'legal',

            password: 'Nuevo password',
            password_repeat: 'Repita el nuevo password',
            password_mismatched: 'Passwords no coincide',
        },
        password_form: {
            title: 'Cambiar la contraseña de usuario',
            save_btn: 'Fijar Contraseña',
            return_btn: 'Cancelar',
            success_msg: 'Contraseña cambiada con éxito'
        },
        list: {
            create_btn_text: 'Crear nuevo usuarior',
            empty_text: 'Usuario no encontrado'
        },
        session_alert: {
            error: 'No puede crear la sesion de usuario',
            title: 'Su codigo de sesion'
        },
        card: {
            tab_panel: {
                trackers: {
                    title: 'Usuarios trackers'
                },
                transactions: {
                    title: 'Transacciones'
                }
            },
            links: {
                session_text: 'Ir a monitoreo',
                user_edit: 'Editar usuario',
                user_change_password: 'Cambiar contraseña',
                transactions: 'Transacciones',
                create_transaction: 'Cambiar balance'
            }
        },
        transactions: {
            list: {
                empty_text: 'Transacciones no encontradas',
                title: 'Transacciones por usuario'
            },
            fields: {
                description: 'Operacion	',
                type: 'Tipo de operacion',
                subtype: 'Subtipo',
                date: 'Fecha',
                bonus_amount: 'Prima:',
                old_bonus: 'Viejo',
                new_bonus: 'Nuevo',
                amount: 'Suma:',
                old_balance: 'Viejo',
                new_balance: 'Nuevo',
                type_set: {
                    main_charge: 'suscripción',
                    payment: 'pago',
                    tariff_charge: 'servicios de telecomunicaciones',
                    bonus_charge: 'recarga bono'
                },
                subtype_set: {
                    monthly: 'mensual',
                    partner: 'de un socio',
                    activeday: 'día activo',
                    everyday: 'mensualmente por día'
                }
            }
        },
        transaction_add: {
            title: 'Se cambia el balance (añadiendo transacción) de los usuarios',
            description: 'Descripcion de transacción',
            balance: 'Cambios de balance',
            bonus: 'Cambio de Bonus',
            value_sup: '* - cantidad de la que va a cambiar el valor de la corriente, puede ser negativo'
        },
        combo_empty: 'Selecciona un usuario',
        select_error: 'Tracker o clone ya esta ligado a usuario seleccionado',
        select: {
            title: 'Seleccione un usuario'
        }
    },

    trackers: {
        menu_text: 'Trackers',
        fields: {
            tracker_id: 'ID',
            label: 'Titulo',
            model: 'Modelo',
            phone: 'Telefono',
            device_id: 'id de dispositivo',
            creation_date: 'Fecha de registro',
            creation_date_short: 'Registrado',
            connection_status: 'Status',
            tracker_id_exp: 'Numero de tracker',
            phone_exp: 'Numero de telefono',
            owner: 'Propietario del tracker',
            tariff: 'Tarifa del tracker',
            deleted: 'Marcado como eliminado',
            blocked: 'Servicio pausado',
            clone: 'Clon',
            clone_owner: 'Propietario del clon',
            options: {
                clone: 'clon',
                deleted: 'Borrado',
                blocked: 'bloquado'
            },
            statuses: {
                online: 'En linea',
                offline: 'Fuera de linea	',
                just_registered: 'Fuera de linea',
                signal_lost: 'No conectado'
            }
        },
        edit_form: {
            main_fields: 'Informacion principal',
            title: 'Editar tracker',
            save_btn: 'Guardar cambios',
            return_btn: 'Regresar'
        },
        clone_form: {
            title: 'Crear clone de tracker',
            remove_failure_msg: 'Extraccion de clon fallo',
            failure_msg: 'Creacion de clon fall',
            remove_confirm: 'Retire clon'
        },
        tariff_form: {
            title: 'Cambio plan de tarifa para tracker',
            save_btn: 'Guardar cambios',
            repay: 'Pagar el resto del pago actual de tarifas',
            charge: 'Pago para nueva tarifa',
            charge_sup: 'Sólo para los planes de tarifas con pago mensual',
            tariff_invalid: 'debe ser diferente de la actual'
        },
        list: {
            create_btn_text: 'Crea un nuevo tracker',
            owner_btn: 'Cambiar propietario',
            clone_btn: 'Clon',
            edit_btn: 'Editar seleccionado',
            empty_text: 'No se han encontrado marcadores',
            after_clone_success: 'clonada: {0}',
            after_clone_failure: 'clonados: {0}, {1} clon no',
            after_owner_success: 'Cambiado: {0}',
            after_owner_failure: 'Cambiado: {0}, {1} cambio no',
            select_req: 'Seleccione rastreadores de la lista',
            select_clone_req: 'Los clones seleccionados, las operaciones del grupo no se pueden realizar'
        },
        card: {
            links: {
                change_tracker_user: 'Cambio de propietario',
                tracker_edit: 'Editar tracker',
                tracker_tariff_edit: 'Camabiar tarifa',
                tracker_clone_create: 'Crear clon de este tracker',
                tracker_clone_remove: 'Borrar este clon',
                tracker_tariff: 'Tarifa de tracker',
                tracker_owner: 'Propietario de tracker',
                tracker_console: 'GPRS-terminal'
            }
        },
        console: {
            title: 'GPRS-terminal para tracker',
            connect_btn: 'Inicie la conexión',
            disconnect_btn: 'Cierra conexión',
            auto_scroll: 'Auto-scrolling',
            clear: 'Limpiar consola',
            send_btn: 'Enviar',
            send_empty: 'Escriba un comando',
            loading: 'conectando a un dispositivo',
            connect_init: 'Coneccion establecida',
            show_time: 'Muestra hora de mensaje',
            show_status: 'Muesta status',
            disconnect_msg: 'Coneccion terminada',
            connect_msg: 'Coneccion establecida',
            error_msg: 'Error al conectar el dispositivo',
            connection_failure: 'No se puede conectar al dospositivo',
            close_question: 'Cerrar coneccion?',
            status_title: 'Estado del dispositivo',
            status_property_title: 'Status',
            status_value_title: 'Valor'
        }
    },

    tariffs: {
        menu_text: 'Tarifas',
        create_form: {
            title: 'Crear nueva tarifa',
            main_fields: 'Informaciion principal',
            save_btn: 'Crear tafira',
            clear_btn: 'Borrar formulario',
            options_fields: 'Opciones de tarifas',
            prices_fields: 'Precio de tarifas'
        },
        edit_form: {
            title: 'Editar tarifa',
            save_btn: 'Guardar cambios'
        },
        default_form: {
            title: 'Ajustes de tafira por defecto'
        },
        fields: {
            tariff_id: 'ID',
            name: 'Etiqueta',
            group_id: 'Grupo',
            price: 'Pago del mes',
            device_limit: 'Limite de dispositivos',
            device_type: 'Tipo de dispositivo',
            store_period: 'History storage period',
            active: 'Disponible para el usuario',
            has_reports: 'Tabla de reportes esta disponible',
            proportional_charge: 'Comisión de suscripción para el mes parcial de forma proporcional al número de días a cancelar',
            incoming_sms: 'Entrante SMS',
            outgoing_sms: 'Saliente SMS',
            service_sms: 'Servicio SMS',
            phone_call: 'Llamadas telefonicas',
            traffic: 'GPRS (for Mb)',
            default_tariff: 'Tarifa por defecto para los dispositivos de tipo «{0}»',
            default_short: 'defecto',
            service_price: 'La cantidad que se cobra por el uso del servicio',
            group_id_exp: 'Tarifa de grupo',
            active_exp: 'Los usuarios puede cambiar esta tarifa por su cuenta',
            device_limit_exp: 'Dispositivos maximos',
            activation_bonus: 'Activation bonus',
            free_days: 'Numero de dias libres',
            tariff_type: 'Ciclo de facturación',
            tariff_type_short: 'Pago'
        },
        list: {
            create_btn_text: 'Agregar una nueva tarifa',
            empty_text: 'Tarifas no encontradas'
        },
        card: {
            links: {
                make_default: 'Marcar como predeterminado',
                tariff_edit: 'Editar tarifa'
            },
            tab_panel: {
                trackers: {
                    title: 'Trackers a esta tarifa'
                }
            }
        },
        combo_empty: 'Seleccione tarifa',
        select_error: 'Esta tarifa no esta disponible',
        select: {
            title: 'Seleccione tarifa'
        },
        types: {
            activeday: 'Diaria',
            monthly: 'Mensual',
            everyday: 'Mensual (débito diario)'
        },
        price_type: {
            monthly: 'Cuota mensual',
            activeday: 'Tarifa diaria',
            everyday: 'Cuota mensual'
        }
    },

    codes: {
        menu_text: 'Codigo de activacion',
        fields: {
            activated: 'estado',
            activation_date: 'Fecha de activacion',
            bonus_amount: 'Bonus',
            code: 'codigo',
            device_id: 'ID de dispositivo',
            device_type: 'Tipo de dispositivo',
            free_days: 'Dias libres',
            money_amount: 'cantidad',
            tariff_id: 'ID de tarifa',
            tariff_name: 'Tarifa',
            status: {
                activated: 'activado',
                no_activated: 'no activado'
            }
        },
        edit_form: {
            title: 'Editar codigo de activacion',
            save_btn: 'Guardar cambios',
            selected_count: 'Codigo seleccionado',
            device_type: 'Codigos seleccionados para dispositivos'
        },
        create_form: {
            title: 'Crear un codigo de activacion',
            save_btn: 'Crear codigo',
            new_codes_count: 'Cantidad de nuevos codigos'
        },
        list: {
            empty_text: 'Codigos de activacion no encontrados',
            create_btn: 'Crear nuevo',
            edit_btn: 'Editar seleccion',
            reload_btn: 'Recargar',
            after_create_success: 'Crear: {0}',
            after_edit_success: 'Cambios: {0}',
            after_edit_failure: 'Cambios: {0}, {0} Cambio fallo',
            select_req: 'Select codes from list',
            same_type_req: 'Debes de especificar un codigo de tipo de dispositivo',
            edited_tip: 'cambios',
            filters: {
                activated: 'Activado',
                no_activated: 'No activado',
                trackers: 'Trackers',
                cameras: 'Camarasras',
                sockets: 'Sockets',
                toggle_all: 'muestra todo'
            }
        }
    },

    settings: {
        menu_text: 'Ajustes',
        fields: {
            service_title: "Titulo de servicio	",
            locale: "Monitoreo Idioma",
            demo_login: "Usuario demo",
            demo_password: "Password demo",
            maps_title: 'Mapas disponibles',
            maps_default: {
                type: 'Mapa por defecto',
                location_lat: 'Latitude por defectot',
                location_lng: 'Longitude por defecto',
                zoom: 'Zoom por defecto'
            },
            google_client_id: "Cliente ID para google maps",
            currency: "Moneda para facturacion de usuarios",
            payment_link: "URL del sistema de pago",
            promo_url: "Sitio de promoción URL",
            domain: "Dominio",
            email_from: "Remitente de  Email",
            email_special: "Correo electrónico las alertas",
            email_footer: "Email de pie de pagina",
            sms_originator: "SMS originador",
            caller_id: "Aviso de voz originador ",

            password: 'Nuevo password',
            password_repeat: 'Repita el nuevo password',
            password_old: 'Current password',
            password_mismatched: 'Passwords no coincide',

            footer_text: 'El texto en la parte inferior de la página'
        },
        edit_form: {
            title: 'iPaas Settngs',
            save_btn: 'guardar',
            save_msg: 'Configuracion guardada con exito',
            main_fields: 'Ajustes Basicos',
            map_fields: 'Ajustes de mapas',
            permission_fields: 'Ajustes de notificaciones',
            domain_sup: '* - para dominios como *{0} tipos de mapas disponibles limitados',

            custom_fields: 'Personalización',

            main_buttons_title: 'Mostrando botones',
            show_mobile_apps: 'Mostrar botones para la descarga de aplicaciones móviles',
            allow_registration: 'Permitir inquilino usuario',

            main_texts_title: 'Principales textos',
            footer_texts_title: 'Texto en el sótano de la página de inicio de sesión',

            logo_title: 'Logo',
            favicon_title: 'Favicon',
            favicon_desc: 'no funciona en Internet Explorer',

            login_wallpaper_title: 'La página de Autorización de fondo',
            desktop_wallpaper_title: 'Servicios de la página de fondo',

            upload_btn: 'Subir',
            update_btn: 'Change',
            remove_btn: 'Eliminar',

            upload_loading: 'Subir imagen',
            domain_fields: 'Dominio',
            regional_fields: 'Ajuste regional',
            maps_fields: 'Mapas',
            demo_fields: 'Usuario demo',
            notifications_fields: 'Notificacioness',
            password_fields: 'Cambiar password',
            pass_hint: 'No se guardarán los cambios en otras pestañas',
            pass_save_msg: 'Contraseña cambiada con éxito',
            pass_save_btn: 'Cambiar contraseña',

            maps_hint: 'Por favor, defina la selección de mapas que estará disponible para los clientes de su servicio. La lista de mapas para usuarios específicos se puede limitar con sus configuración del plan tarifario.<br><br>El uso de los servicios de mapas que ha seleccionado se debe conceder a usted por sus titulares de derechos. NAVIXY no se hace responsable por cualquier violación de los términos de la licencia por usted o sus usuarios finales.',
            demo_hint: 'Seleccione la cuenta de usuario que se utilizará para fines de demostración y disponible en la página de inicio de sesión (opcional)'
        },
        upload_form: {
            save_btn: 'Subir',
            cancel_btn: 'Cancelar',
            upload_btn: 'View',
            title: 'Subir imagen. {0}',
            titles: {
                logo: 'Logo',
                favicon: 'Favicon',
                login_wallpaper: 'Página de registro de papel tapiz',
                desktop_wallpaper: 'Service page wallpaper'
            },
            tips: {
                logo: 'Recomendado para cargar la imagen de orientación horizontal con un fondo transparente y una anchura no inferior a 200 puntos.',
                favicon: 'Recomendado para cargar la imagen con un fondo transparente y una resolución mínima de 32x32 píxeles.',
                login_wallpaper: 'Recomendado para cargar las imágenes de fondo con una resolución de al menos 1920x1080 píxeles (FullHD) en formato JPEG.'
            },
            img_title: 'El formato de imagen {0} (el tamaño máximo de {1} MB)',
            error_text: 'Error al cargar la imagen'
        }
    },

    accounting: {
        menu_text: 'Contabilidad',
        report_msg: {
            title: 'Confirme el correo informativo',
            text: 'Alerte a los clientes acerca de la exportación de datos a 1C para <b>{0}</b>.<br>Y¿Seguro que quieres hacer <a> correo-informativo</b>?'
        },
        form: {
            title: '«1C:Empresa» Datos exportados',
            export1c: {
                tab_title: 'Contabilidad',
                save_btn: 'Conseguir archivo de datos 1C',
                report_btn: 'Presentar hechos por correo electrónico',
                fields: {
                    month: 'Seleccione un mes',
                    last_act: 'Ultimo numero escrito'
                }
            },
            payments: {
                tab_title: 'Pagos',
                save_btn: 'Get 1C data file',
                fields: {
                    date: 'Intervalo de tiempo',
                    type: 'Sistema de pago'
                },
                ps: {
                    default: 'Todo lo anterior',
                    cyberplat: 'CyberPlat',
                    deltapay: 'DeltaPay',
                    mobile: 'Mobile',
                    mobimoney: 'Mobi.Money',
                    rbkmoney: 'RBK Money',
                    webmoney: 'WebMoney'
                }
            }
        }
    }

});
