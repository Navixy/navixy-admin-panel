/**
* @class Locale.locale-pt
* @extends Locale.AbstractLocale
*/
Ext.define('Locale.locale-pt',{
    "extend": "Locale.AbstractLocale",
    "dependencies": [
        {
            "name": "Locale.ext.locale-pt",
            "history": false
        }
    ],
    "singleton": true,
    "main_copyright": "© RusLink de 2015. Todos os direitos reservados.",
    "panel_title": "NavixyPanel",
    "error": "Erro",
    "loading": "Carregar...",
    "conneting_loader": "Conectando ao servidor",
    "access_denied": "Acesso negado",
    "access_denied_tip": "Você não tem permissão para acessar a página solicitada",
    "index_title": "Bem-vindo ao Painel de Controle",
    "old_version": "Versão antiga",
    "auth": {
        "login": "Login ou endereço de E-mail",
        "password": "Senha",
        "login_btn": "Login",
        "locale_title": "Escolha o idioma",
        "locale_title_short": "língua",
        "auth_error": "Erro de autenticação",
        "reloading_soon": "Recarga",
        "logout": "Logout",
        "title": "Painel de administração"
    },
    "no_path_found": "Nenhuma página neste caminho",
    "phone_invalid_msg": "Introduza um número de telefone válido",
    "invalid_numeric_msg": "Não é um número válido",
    "invalid_amount_msg": "Não é um número válido <br>(2 dígitos depois da marca decimal)",
    "searcher_empty_text": "Digite a consulta de pesquisa",
    "search_empty_text": "Digite a consulta de pesquisa",
    "searchTitle": "Pesquisar por categoria",
    "clear_form_btn": "Clara",
    "save_form_btn": "Salvar",
    "back_form_btn": "Voltar",
    "select_form_btn": "Selecione",
    "close_form_btn": "Fechar",
    "yes": "sim",
    "no": "não",
    "show_btn": "Mostrar",
    "wrong_period": "Um período inválido",
    "required_fields": "* - campos ou seções necessários",
    "invalid_tab": "Campos preenchidos inválidos",
    "page_size": "Tamanho da página",
    "errors": {
        "1": "Erro de conexão de banco de dados (001). Por favor entre em contato com o suporte, ou tente novamente mais tarde.",
        "2": "Erro de sistema de autorização (002).  Por favor entre em contato com o suporte, ou tente novamente mais tarde.",
        "3": "Chave de sessão errada (003).  Por favor, re-login. Se o problema persistir, contate o suporte.",
        "4": "Usuário não pode ser encontrado ou sessão terminou (004).  Por favor, re-login.",
        "5": "Solicitação incorreta (005). Por favor entre em contato com o suporte, ou tente novamente mais tarde.",
        "6": "Erro inesperado (006). Por favor entre em contato com o suporte, ou tente novamente mais tarde.",
        "7": {
            "default_msg": "Parâmetros de solicitação incorreta. Verifique os dados.",
            "title": "Parâmetros incorretos:",
            "errors": {
                "login": "Deve ser um endereço de e-mail válido",
                "domain": "Nome de domínio incorreto"
            }
        },
        "11": "Acesso negado",
        "12": "A plataforma de serviço não se encontra",
        "101": "No modo demo este recurso está desativado",
        "102": "Nome de usuário errado ou a senha",
        "103": "O usuário não tiver ativado",
        "111": "Manipulador de errado",
        "112": "Método errado",
        "201": "Nenhum dado encontrado",
        "202": "Há muitos pontos na área",
        "203": "Item relacionado foi excluído",
        "204": "Elemento não encontrado",
        "205": "Parâmetros inválidos",
        "206": "Este nome de usuário já está em uso",
        "207": "Captcha inválido",
        "208": "O dispositivo está bloqueado.",
        "209": "Falha ao enviar mensagem",
        "210": "Geocodificação falhada",
        "211": "Intervalo de tempo requerido é muito grande",
        "212": "Limite solicitado é muito grande",
        "213": "O dispositivo está offline",
        "214": "As operações solicitadas não são apoiadas pelo dispositivo",
        "215": "Erro de serviço externo",
        "216": "Grupo não está vazio",
        "217": "Lista contém entidades inexistentes",
        "218": "Parâmetros de serviço externo malformado",
        "219": "A ação não é permitida para os objetos de clone",
        "220": "Modelo de dispositivo desconhecido",
        "221": "Pautais restrição:</br> limite de dispositivo ultrapassado.",
        "222": "Plugin não encontrado",
        "223": "Este número de telefone já está em uso",
        "224": "Dispositivo com este id de dispositivo já está em uso",
        "225": "Não permitido para este tipo jurídico",
        "226": "ICCID errado",
        "227": "Código de ativação inválido",
        "228": "Não suportados pelo sensor",
        "229": "Dados solicitados ainda não está prontos",
        "230": "Não há suporte para esse tipo de entidade",
        "231": "Incompatibilidade de tipo de entidade",
        "232": "Entrada já em uso",
        "233": "Nenhum arquivo de dados",
        "234": "Formato de dados inválido",
        "235": "Falta de dados de calibração",
        "236": "Recurso indisponível devido a restrições tarifárias",
        "238": "Mudança de tarifa não é permitida",
        "240": "Não podem para alterar a pauta também freqüentemente",
        "242": "Erro de validação",
        "251": "Fundos insuficientes",
        "254": "Não é possível salvar o arquivo.",
        "upload_exeption": "Erro de upload de arquivo",
        "no_hash": "A chave de sessão não for encontrada.",
        "service_not_respond": "O serviço está temporariamente indisponível",
        "tracker": {
            "203": "Tracker atribuiu regras",
            "237": "Pauta inválida",
            "238": "Mudança de tarifa não é permitida",
            "239": "Não existe nova pauta",
            "246": "Usuário está incorreto",
            "247": "Clone já existe",
            "249": "A operação está disponível apenas para os clones",
            "250": "Não permitido para dispositivos excluídos",
            "253": "A operação não pode ser executada, o rastreador tem clones <br>Clones ID: {0}"
        },
        "tariff": {
            "244": "Tarifa com o mesmo nome já existe."
        },
        "settings": {
            "225": "A nova senha deve ser diferente",
            "248": "Senha errada"
        },
        "payment": {
            "201": "Não foi encontrado no banco de dados",
            "242": "Houve erros durante a validação de conteúdo",
            "246": "ID de usuário inválido",
            "247": "Entidade já existe",
            "259": "Contagem de pagamentos não cumprir com resumo",
            "260": "Soma de pagamentos não cumprir com resumo"
        }
    },
    "units_combination_list": {
        "days": "dias|dia|dias",
        "hours": "horas|hora|horas",
        "minutes": "minutos|minuto|minutos",
        "seconds": "segundos|segundo|segundos",
        "everyminutes": "minutos|minuto|minutos",
        "everyseconds": "segundos|segundo|segundos",
        "meters": "metros|medidor|metros",
        "degrees": "graus|grau|graus",
        "objects": "objetos|objeto|objetos",
        "years": "anos|ano|anos",
        "months": "meses|mês|meses",
        "codes": "códigos|código|códigos",
        "trackers": "rastreadores|rastreador|rastreadores",
        "devices": "dispositivos|dispositivo|dispositivos",
        "entries": "fósforos|fósforo|fósforos",
        "assets": "assets|asset|assets"
    },
    "units_short": {
        "kilometer": "km",
        "meter": "m",
        "square_kilometer": "sq km",
        "square_meter": "sq m",
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
        "empty": "Pesquisar por categoria",
        "btn": "Encontrar"
    },
    "list": {
        "edit_tool": "editar",
        "create_btn_text": "Criar",
        "empty_text": "Não há dados",
        "search_title_tpl": "{0}: encontrado {1}",
        "search_empty_title_tpl": "{0}: nenhuma correspondência encontrada",
        "search_title": "Pesquisa",
        "search_empty_title": "Nenhuma correspondência encontrada"
    },
    "card": {
        "links": {
            "collapser_tip": "Esconder links",
            "collapser_exptip": "Mostrar links"
        },
        "body": {
            "title": "Informações adicionais:",
            "exptitle": "Informações adicionais <a>(mostrar)</a>",
            "collapser_tip": "Ocultar informações adicionais",
            "collapser_exptip": "Mostrar informações adicionais",
            "exptitle_show": "<a>(show)</a>"
        }
    },
    "devices": {
        "tracker": "Tracker",
        "camera": "Câmera",
        "socket": "Soquete"
    },
    "currency": {
        "rub": "Rublo Russo",
        "usd": "Dólar de E.U.",
        "kzt": "Tenge do Cazaquistão",
        "byr": "Rublo bielorrusso",
        "eur": "Euro",
        "jpy": "Iene Japonês",
        "gbp": "Sterling de libra",
        "chf": "Franco suíço",
        "cad": "Dólar canadense",
        "aud": "Dólar australiano",
        "nzd": "Dólar de Nova Zelândia",
        "tjs": "Somoni Tadjique",
        "php": "Peso Philippine",
        "uah": "Ukrainian hryvnia",
        "brl": "Brazilian real",
        "huf": "Hungarian forint",
        "hkd": "Hong Kong dollar",
        "dkk": "Danish krone",
        "ils": "Israeli new shekel",
        "inr": "Indian rupee",
        "idr": "Indonesian rupiah",
        "cny": "Renminbi",
        "krw": "South Korean won",
        "myr": "Malaysian ringgit",
        "mxn": "Mexican peso",
        "nok": "Norwegian krone",
        "pkr": "Pakistani rupee",
        "pln": "Polish złoty",
        "sgd": "Singapore dollar",
        "twd": "New Taiwan dollar",
        "thb": "Thai baht",
        "try": "Turkish lira",
        "czk": "Czech koruna",
        "clp": "Chilean peso",
        "sek": "Swedish krona",
        "zar": "South African rand",
        "ltl": "Lithuanian litas",
        "lvl": "Latvian lats",
        "kgs": "Kyrgyzstani som",
        "tmt": "Turkmenistan manat",
        "uzs": "Uzbekistani som",
        "mdl": "Moldovan leu",
        "gel": "Georgian lari",
        "amd": "Armenian dram",
        "azn": "Azerbaijani manat",
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
        "eek": "Estonia Kroon",
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
        "trl": "Turkey Lira",
        "tvd": "Tuvalu Dollar",
        "uyu": "Uruguay Peso",
        "vef": "Venezuela Bolivar",
        "vnd": "Viet Nam Dong",
        "yer": "Yemen Rial",
        "zwd": "Zimbabwe Dollar",
        "mad": "Moroccan dirham",
        "kwd": "Kuwaiti dinar"
    },
    "maps": {
        "roadmap": "Google roadmap",
        "satellite": "Satélite do Google",
        "hybrid": "Google híbrido",
        "yandex": "Yandex Maps",
        "yandexpublic": "Yandex Narod Map",
        "cdcom": "ProGorod Maps",
        "osm": "OpenStreet Maps",
        "osmmapnik": "OpenStreet Maps 2",
        "wikimapia": "Wikimapia",
        "navitel": "Navitel Maps",
        "doublegis": "DoubleGis Maps",
        "ovi": "OVI Maps",
        "mailru": "Mail.ru Maps",
        "here": "HERE Maps",
        "bing": "Bing Maps"
    },
    "dealer_info": {
        "first": "total",
        "last": "de"
    },
    "index": {
        "menu_text": "Casa"
    },
    "users": {
        "menu_text": "Usuários",
        "create_btn": "Novo usuário",
        "create_form": {
            "title": "Novo usuário",
            "main_fields": "Informações gerais",
            "contact_fields": "Informações para contato",
            "address_fields": "Endereço",
            "legal_fields": "Informações de pessoa jurídica",
            "password": "Senha",
            "password_repeat": "Repita a senha",
            "password_mismatched": "Senhas não combinam",
            "language": "Idioma padrão",
            "time_zone": "Fuso horário",
            "save_btn": "Criar usuário",
            "clear_btn": "Forma clara",
            "copy_address": "Copiar do endereço"
        },
        "edit_form": {
            "title": "Editar usuário",
            "save_btn": "Salvar as alterações",
            "return_btn": "Voltar"
        },
        "fields": {
            "creation_date": "Data do registo",
            "login": "Endereço de e-mail",
            "balance": "Balance",
            "bonus": "Bônus",
            "first_name": "Nome",
            "middle_name": "Nome do meio",
            "last_name": "Sobrenome",
            "activated": "Ativado",
            "activated_t": "Usuário ativo",
            "legal_type": "Estatuto jurídico",
            "tin": "TIN",
            "legal_name": "Nome legal",
            "iec": "IEC",
            "phone": "Número de telefone",
            "post_country": "País",
            "post_index": "Código Postal",
            "post_region": "Região",
            "post_city": "Cidade",
            "post_street_address": "Rua, endereço",
            "registered_country": "País de registo",
            "registered_index": "Registro CEP",
            "registered_region": "Região de registro",
            "registered_city": "Cidade de registro",
            "registered_street_address": "Endereço de inscrição",
            "sole_trader": "Único comerciante",
            "legal_entity": "Pessoa jurídica",
            "individual": "Indivíduo",
            "full_name": "Nome completo",
            "login_short": "Login",
            "user_id": "ID",
            "user_id_exp": "Número de usuário",
            "activated_short": {
                "title": "Status",
                "status_true": "Ativo",
                "status_false": "Não ativo",
                "status_no": "Active, email not confirmed"
            },
            "registered_short": "legal",
            "password": "Nova senha",
            "password_repeat": "Repetir nova senha",
            "password_mismatched": "Senhas não combinam"
        },
        "password_form": {
            "title": "Alterar senha do usuário",
            "save_btn": "Definir senha",
            "return_btn": "Cancelar",
            "success_msg": "Senha alterada com sucesso"
        },
        "list": {
            "create_btn_text": "Criar novo usuário",
            "empty_text": "Nenhum usuário encontrado"
        },
        "session_alert": {
            "error": "Não é possível criar a sessão do usuário",
            "title": "O seu código de sessão"
        },
        "card": {
            "tab_panel": {
                "trackers": {
                    "title": "Rastreadores de usuário"
                },
                "transactions": {
                    "title": "Transações"
                }
            },
            "links": {
                "session_text": "Ir para monitoramento",
                "user_edit": "Editar usuário",
                "user_change_password": "Alterar senha",
                "transactions": "Transações",
                "create_transaction": "Alterar o equilíbrio",
                "hash_text": "Get session key"
            }
        },
        "transactions": {
            "list": {
                "empty_text": "Nenhuma transação encontrada",
                "title": "Transações por usuário"
            },
            "fields": {
                "description": "Operação",
                "type": "Tipo de operação",
                "subtype": "Subtipo",
                "date": "Data",
                "amount": "Soma",
                "old_balance": "Velho",
                "new_balance": "Novo",
                "type_set": {
                    "main_charge": "assinatura",
                    "payment": "pagamento",
                    "tariff_charge": "serviços de telecom",
                    "bonus_charge": "reenchimento de bônus"
                },
                "subtype_set": {
                    "monthly": "mensal",
                    "partner": "de um parceiro",
                    "activeday": "dia activo",
                    "everyday": "mensal por dia",
                    "sms": "SMS message"
                }
            }
        },
        "transaction_add": {
            "title": "Alterando o balance (adição de transação) de usuários",
            "description": "Descrição da transação",
            "balance": "Alterações de balance",
            "bonus": "Alterações de bônus",
            "value_sup": "* - quantidade de que irá alterar o valor atual, pode ser negativo"
        },
        "combo_empty": "Selecione um usuário",
        "select_error": "Tracker ou o clone dele já está vinculado ao usuário selecionado",
        "select": {
            "title": "Selecione um usuário"
        },
        "session_hash": {
            "title": "User session key"
        }
    },
    "trackers": {
        "menu_text": "Rastreadores",
        "fields": {
            "tracker_id": "ID",
            "label": "Título",
            "model": "Modelo",
            "phone": "Telefone",
            "device_id": "Id do dispositivo",
            "creation_date": "Data do registo",
            "creation_date_short": "Registrado",
            "connection_status": "Status",
            "tracker_id_exp": "Número do rastreador",
            "phone_exp": "Número de telefone",
            "owner": "Proprietário do rastreador",
            "tariff": "Tarifa de perseguidor",
            "deleted": "Marcado como excluído",
            "blocked": "Serviço pausado",
            "user_id": "ID de usuário",
            "clone": "Clone",
            "clone_owner": "Proprietário do clone",
            "options": {
                "clone": "clone",
                "deleted": "eliminado",
                "blocked": "bloqueado"
            },
            "statuses": {
                "active": "On-line",
                "signal_lost": "Conexão perdida",
                "offline": "Off-line",
                "just_registered": "Acabei de me matricular",
                "idle": "GPS não atualizado"
            }
        },
        "edit_form": {
            "main_fields": "Principais informações",
            "title": "Editar tracker",
            "save_btn": "Salvar as alterações",
            "return_btn": "Voltar"
        },
        "clone_form": {
            "title": "Crie o clone do perseguidor",
            "remove_failure_msg": "Remover o clone falhou",
            "failure_msg": "Criar clone falhou",
            "remove_confirm": "Remover o clone"
        },
        "group_clone_form": {
            "title": "Clonagem-grupo de perseguidores",
            "save_btn": "Clone",
            "grid_clone_label": "Clones serão adicionados",
            "grid_clone_tip": "Você pode alterar o rótulo do clone clicando duas vezes na lista"
        },
        "group_owner_form": {
            "title": "Alterar o proprietário para o grupo de trackers",
            "save_btn": "Mudança de proprietário",
            "grid_clone_label": "Rastreadores serão alterados"
        },
        "tariff_form": {
            "title": "Plano tarifário de mudança para tracker",
            "save_btn": "Salvar as alterações",
            "repay": "Pagar o restante do pagamento de Tarifa atual",
            "charge": "Pagamento de taxa para nova pauta",
            "charge_sup": "somente para os planos tarifários com pagamento mensal",
            "tariff_invalid": "deve ser diferente da atual"
        },
        "list": {
            "create_btn_text": "Criar novo tracker",
            "owner_btn": "Alterar o proprietário",
            "clone_btn": "Clone",
            "edit_btn": "Edição selecionada",
            "empty_text": "Nenhum perseguidor encontrou",
            "after_clone_success": "Clonado: {0}",
            "after_clone_failure": "Clonado: {0}, {1} clone falhado",
            "after_owner_success": "Alterado: {0}",
            "after_owner_failure": "Alterado: {0}, {1} mudança falhada",
            "select_req": "Selecione perseguidores da lista",
            "select_clone_req": "Clones selecionados, as operações de grupo não podem ser executadas"
        },
        "card": {
            "links": {
                "change_tracker_user": "Alterar o proprietário",
                "tracker_edit": "Editar tracker",
                "tracker_tariff_edit": "Tarifa de mudança",
                "tracker_clone_create": "Criar clone deste tracker",
                "tracker_clone_remove": "Excluir este clone",
                "tracker_tariff": "Pauta tracker",
                "tracker_owner": "Proprietário do rastreador",
                "tracker_console": "GPRS-terminal",
                "tracker_corrupt": "Cancelar registro"
            }
        },
        "console": {
            "title": "GPRS-terminal para tracker",
            "connect_btn": "Iniciar ligação",
            "disconnect_btn": "Conexão fechada",
            "auto_scroll": "Rolagem automática",
            "clear": "Clara console",
            "send_btn": "Enviar",
            "send_empty": "Digite o comando",
            "loading": "Conectando a um dispositivo",
            "connect_init": "Conexão é estabelecida.",
            "show_time": "Mostrar mensagem tempo",
            "show_status": "Mostrar status",
            "disconnect_msg": "Conexão encerrada",
            "connect_msg": "Conexão é estabelecida.",
            "error_msg": "Erro ao conectar ao dispositivo",
            "connection_failure": "Não é possível se conectar ao dispositivo",
            "close_question": "Fechar a conexão?",
            "status_title": "Status do dispositivo",
            "status_property_title": "Status",
            "status_value_title": "Valor"
        },
        "corrupt": {
            "alert": {
                "title": "Remover o registro do rastreador?",
                "text": "O dispositivo será permanentemente excluído do banco de dados, todos os dados - não disponíveis! <br><br>Tem certeza que quer remove o registro?"
            },
            "success_msg": "{0} dispositivo removido com sucesso"
        }
    },
    "tariffs": {
        "menu_text": "Tarifas",
        "create_form": {
            "title": "Criar nova pauta",
            "main_fields": "Principais informações",
            "save_btn": "Criar tarifa",
            "clear_btn": "Forma clara",
            "options_fields": "Opções tarifárias",
            "prices_fields": "Preços tabelados"
        },
        "edit_form": {
            "title": "Editar pautais",
            "save_btn": "Salvar as alterações"
        },
        "default_form": {
            "title": "Pauta configurações padrão"
        },
        "fields": {
            "tariff_id": "ID",
            "name": "Rótulo",
            "group_id": "Grupo",
            "price": "Pagamento mensal",
            "device_limit": "Limite de dispositivos",
            "device_type": "Tipo de dispositivo",
            "store_period": "Período de armazenagem de história",
            "active": "Disponível para o usuário",
            "has_reports": "Os relatórios de mesa são disponíveis",
            "proportional_charge": "Taxa de assinatura para o mês parcial de proporção ao número de dias para amortizar",
            "incoming_sms": "SMS recebidas",
            "outgoing_sms": "Saída de SMS",
            "service_sms": "Serviço SMS",
            "phone_call": "Chamadas de telefone",
            "traffic": "GPRS (por Mb)",
            "default_tariff": "pauta padrão para dispositivos do tipo «{0}»",
            "default_short": "padrão",
            "service_price": "o valor cobrado para o uso do serviço",
            "group_id_exp": "Grupo tarifário",
            "active_exp": "Os usuários podem alternar para essa tarifa por conta própria",
            "device_limit_exp": "Máximo dispositivos",
            "activation_bonus": "Bônus de ativação",
            "free_days": "Número de dias livres",
            "tariff_type": "Ciclo de faturamento",
            "tariff_type_short": "Pagamento",
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
            "create_btn_text": "Adicionar nova pauta",
            "empty_text": "Tarifas não encontradas"
        },
        "card": {
            "links": {
                "make_default": "Marcar como padrão",
                "tariff_edit": "Editar pautais"
            },
            "tab_panel": {
                "trackers": {
                    "title": "Registadores nessa tarifa"
                }
            },
            "edit_form_btn": "Edit plan",
            "create_form_btn": "Create plan",
            "add_form_btn": "Add new plan",
            "save_form_btn": "Save plan",
            "currency_in": "(in {0})",
            "features": {
                "groups": {
                    "apps": "Apps",
                    "features": "Features",
                    "misc": "Miscellanous"
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
        "combo_empty": "Selecione a pauta",
        "select_error": "Essa tarifa não está disponível",
        "select": {
            "title": "Selecione a pauta"
        },
        "types": {
            "activeday": "Diário",
            "monthly": "Mensal",
            "everyday": "Mensal (débito diário)"
        },
        "price_type": {
            "monthly": "Taxa mensal",
            "activeday": "Taxa diária",
            "everyday": "Taxa mensal"
        }
    },
    "codes": {
        "menu_text": "Códigos de ativação",
        "fields": {
            "activated": "status",
            "activation_date": "Data de ativação",
            "bonus_amount": "Bônus",
            "code": "código",
            "device_id": "ID do dispositivo",
            "device_type": "Tipo de dispositivo",
            "free_days": "Dias livres",
            "money_amount": "Quantidade",
            "tariff_id": "ID de Tarifa",
            "tariff_name": "Pauta",
            "status": {
                "activated": "ativado",
                "no_activated": "não ativado"
            }
        },
        "edit_form": {
            "title": "Editar códigos de ativação",
            "save_btn": "Salvar as alterações",
            "selected_count": "Códigos selecionados",
            "device_type": "Códigos selecionados para dispositivos"
        },
        "create_form": {
            "title": "Criar códigos de ativação",
            "save_btn": "Criar códigos",
            "new_codes_count": "Quantidade de novos códigos"
        },
        "list": {
            "empty_text": "Códigos de ativação não encontrados",
            "create_btn": "Criar uma nova",
            "edit_btn": "Edição selecionada",
            "reload_btn": "Recarga",
            "after_create_success": "Criado: {0}",
            "after_edit_success": "Alterações: {0}",
            "after_edit_failure": "Alterado: {0}, {1} mudança falhada",
            "select_req": "Selecione códigos da lista",
            "same_type_req": "Você deve especificar um código do tipo de dispositivo",
            "edited_tip": "mudou",
            "filters": {
                "activated": "Ativado",
                "no_activated": "Não ativado",
                "trackers": "Rastreadores",
                "cameras": "Câmeras",
                "sockets": "Soquetes",
                "toggle_all": "Mostrar todo"
            },
            "faq_link": "https://www.navixy.com/docs/admin-panel-docs/activation-codes/ ",
            "faq_text": "Activation codes FAQ"
        }
    },
    "settings": {
        "menu_text": "Configurações",
        "fields": {
            "service_title": "Título do serviço",
            "page_title": "Título da página",
            "locale": "Idioma da interface do usuário",
            "demo_login": "Usuário demo",
            "demo_password": "Demo senha",
            "maps_title": "Mapas disponíveis",
            "maps_default": {
                "type": "Mapa padrão",
                "location_lat": "Padrão de latitude",
                "location_lng": "Padrão de longitude",
                "zoom": "Zoom padrão"
            },
            "google_client_id": "ID do cliente para o google maps",
            "currency": "Moeda para usuários",
            "payment_link": "URL do sistema de pagamento",
            "promo_url": "Promo site URL",
            "domain": "Domínio",
            "email_from": "E-mail remetente",
            "email_special": "E-mail para alertas",
            "email_footer": "Rodapé do e-mail",
            "sms_originator": "Originador SMS",
            "caller_id": "Remetente de anúncio de voz",
            "password": "Nova senha",
            "password_repeat": "Repetir nova senha",
            "password_old": "Senha atual",
            "password_mismatched": "Senhas não combinam",
            "footer_email": "E-mail da empresa",
            "footer_site": "«Acerca de nós» Link",
            "footer_text": "O texto na parte inferior da página",
            "geocoder": "Geocodificador padrão",
            "route_provider": "Provedor de rota padrão",
            "translit": "Transliteração de SMS",
            "measurement_system": "Sistema de medida",
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
            "domain_help_link": "https://www.navixy.com/docs/admin-panel-docs/settings/domain-name/",
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
            "sms_inbound_hint": "We do not recommend, but you can also use another numeric or apha-numeric Sender ID. However, in this case it is likely that platform will not be able to receive any SMS from devices. Please also note that special requirements can be applied by national laws and regulations to avoid spam. Make sure that the Sender ID you entered meets these requirements, otherwise SMS messaging service might not work properly.",
            "monitoring_logo_hint": "Additional logo that is shown in the user web interface (above menu)",
            "display_model_features_link": "Show a link to a website with information about the model",
            "display_model_features_link_hint": "User can be provided with additional information about the model of the device activated",
            "show_call_notifications": "Allow configuration of voice notifications",
            "monitoring_logo_clickable": "Click on the logo in the interface opens a promo web-site"
        },
        "edit_form": {
            "title": "Configurações do serviço",
            "save_btn": "Salvar",
            "save_msg": "Configurações salvas com sucesso",
            "main_fields": "Configurações básicas",
            "map_fields": "Configurações de mapas",
            "permission_fields": "Colocações de notificação",
            "domain_sup": "* - para domínios como * {0} disponível limitados de tipos de mapa",
            "custom_fields": "Personalização",
            "main_buttons_title": "Exibindo botões",
            "show_mobile_apps": "Mostrar botões para fazer o download de aplicativos móveis",
            "allow_registration": "Permitir que o usuário auto registro",
            "main_texts_title": "Principais textos",
            "footer_texts_title": "Texto no porão da página de login",
            "logo_title": "Logotipo",
            "favicon_title": "Favicon",
            "login_wallpaper_title": "Fundo da página de autorização",
            "desktop_wallpaper_title": "Fundo da página de serviços",
            "upload_btn": "Upload",
            "update_btn": "Mudança",
            "remove_btn": "Remover",
            "upload_loading": "Upload de imagem",
            "domain_fields": "Domínio",
            "regional_fields": "Configurações regionais",
            "maps_fields": "Mapas",
            "demo_fields": "Usuário demo",
            "notifications_fields": "Notificações",
            "password_fields": "Alterar senha",
            "pass_hint": "Alterações em outras guias não serão salvos",
            "pass_save_msg": "Senha alterada com sucesso",
            "pass_save_btn": "Alterar senha",
            "maps_hint": "Por favor, defina a seleção de mapas, que estará disponível para os clientes do seu serviço. A lista de mapas para usuários específicos pode ser limitada com suas configurações de plano tarifário. <br><br>a utilização dos serviços de mapa selecionado deve ser concedido a você por seus proprietários de direitos. NAVIXY não é responsável por qualquer violação dos termos de licença por você ou seus usuários finais.",
            "demo_hint": "Escolher a conta de usuário que será usada para fins de demonstração e estão disponíveis na página de login (opcional)",
            "user_notifications_title": "Notificações aos usuários",
            "user_notifications_hint": "Configurações para notificações do seu sistema de rastreamento de usuários: sobre geo-eventos, baixa o equilíbrio, recuperação de senha, etc.",
            "special_notifications_title": "Notificações para os administradores",
            "special_notifications_hint": "Notificações de sistema para os administradores sobre o status do serviço, estatísticas e outros",
            "defaults_fields": "Configurações padrão do usuário",
            "defaults_hint": "Definições nesta seção será aplicada automaticamente a todos os novos usuários",
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
            "maps_defaults_hint": "Choose the map and its options, which will be used when user logins the Web-interface for the first time.",
            "monitoring_logo_title": "User interface logo",
            "service_maps_preview": "Map default settings preview",
            "service_maps_preview_info": "You an example of the initial display of the map view on the user interface. You can change center of the map by moving the marker and zoom by using tool or by using the mouse wheel on the map.",
            "map_edit_btn": "Visual editor",
            "map_window": {
                "title": "Map default settings – Visual editor",
                "header": "Choose default map center by moving the crosshair with your mouse. To select default map zoom use the scroll wheel or zoom in / out buttons.",
                "save_btn": "Choose"
            },
            "clear_btn": "Reset",
            "misc_header": "Optional features"
        },
        "upload_form": {
            "save_btn": "Upload",
            "cancel_btn": "Cancelar",
            "upload_btn": "Vista",
            "title": "Upload de imagem. {0}",
            "titles": {
                "logo": "Logotipo",
                "favicon": "Favicon",
                "login_wallpaper": "Papel de parede página de login",
                "desktop_wallpaper": "Papel de parede do serviço página",
                "monitoring_logo": "Additional logo"
            },
            "tips": {
                "logo": "Recomendado carregar horizontalmente orientado a imagem com um fundo transparente e com uma largura não inferior a 200 pontos.",
                "favicon": "Recomendado para carregar a imagem com um fundo transparente e uma resolução mínima de 32 x 32 pixels.",
                "login_wallpaper": "Recomendado para carregar imagens de fundo com uma resolução de pelo menos 1920 x 1080 pixels (FullHD) no formato JPEG.",
                "monitoring_logo": "It is recommended to use the logo image with the transparent background (PNG) and minimal width of 200px."
            },
            "img_title": "O {0} de formato de imagem (o tamanho máximo de {1} MB)",
            "error_text": "Falha ao carregar a imagem"
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
                        "7": "Reserverd",
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
        }
    },
    "accounting": {
        "menu_text": "Contabilidade",
        "report_msg": {
            "title": "Confirmar e-mail-boletim",
            "text": "Alerte os clientes sobre como exportar dados de 1c para <b>{0}</b>. <br>Tem certeza que quer fazer o <b>Boletim de e-mail</b>?"
        },
        "form": {
            "title": "«1C:Enterprise» Exportação de dados",
            "export1c": {
                "tab_title": "Contabilidade",
                "save_btn": "Se o arquivo de dados de 1C",
                "report_btn": "Apresentar ações por e-mail",
                "fields": {
                    "month": "Selecione um mês",
                    "last_act": "Último número de escritura"
                }
            },
            "payments": {
                "tab_title": "Pagamentos",
                "save_btn": "Se o arquivo de dados de 1C",
                "fields": {
                    "date": "Intervalo de tempo",
                    "type": "Sistema de pagamento"
                },
                "ps": {
                    "default": "Todas as anteriores",
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
        "menu_text": "Pagamentos",
        "import_sberbank": {
            "title": "Importação de pagamentos Sberbank",
            "save_btn": "Pagamentos de importação",
            "upload_btn": "Vista",
            "upload_loading": "Upload de arquivo",
            "error_text": "Falha ao importar os pagamentos",
            "fields": {
                "file_title": "Importar arquivo de formato {0} (tamanho máximo {1} Mb)"
            },
            "errors": {
                "242": "Linha {0}, {1}, coluna descrição: <br><i>{2}</i>"
            },
            "success_msg": "Sberbank pagamentos importados com êxito",
            "success_dsc": "Data de registro: <b>{0}</b> <br>Conde de pagamentos carregados: <b>{1}</b> <br>carregado dos pagamentos: <b>{2}</b>"
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
        "EEK": "{0} kr",
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
        "TRL": "{0} ₤",
        "TVD": "{0} $",
        "UYU": "{0} $U",
        "VEF": "{0} Bs",
        "VND": "{0} ₫",
        "YER": "{0} ﷼",
        "ZWD": "{0} Z$",
        "MAD": "{0} Dh",
        "KWD": "{0} د.ك"
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
    "edit_form_btn": "Edit",
    "cancel_form_btn": "Cancelar",
    "na": "N/A",
    "enable": "enable",
    "disable": "disable",
    "disabled": "Inválido",
    "forbid": "forbid",
    "allow": "allow",
    "forbidden": "Forbidden",
    "features": {
        "api": "API",
        "app_tasks": "<a href='https://www.navixy.com/docs/user/web-interface-docs/tasks/' target='_blank'>Tasks</a>",
        "app_fleet": "Frota",
        "app_reports": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/' target='_blank'>Reports</a>",
        "batch_operations": "Batch operations",
        "custom_maps": "Custom maps",
        "event_notification": "Event notifications",
        "geocoding": "Geocoding",
        "lbs": "Location by Cell ID",
        "map_layers": "Camadas do mapa",
        "multilevel_access": "Object clones",
        "priority_support": "Priority support",
        "retranslation": "Retranslation",
        "report_xls": "Reports to file",
        "report_scheduled": "<a href='https://www.navixy.com/docs/user/web-interface-docs/reports-docs/scheduled-reports/' target='_blank'>Scheduled reports</a>",
        "routing": "Roteamento de",
        "ui_mobile": "Mobile web interface",
        "weblocator": "Web-locator",
        "chat": "Chat",
        "statuses": "Work statuses"
    },
    "map": {
        "zoom_in": "Zoom in",
        "zoom_out": "Zoom out"
    },
    "map_type_label": "Map"
});