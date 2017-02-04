angular.module('app')

.constant('Dict', {
	"en" : {
		// TEXT
		TXT_LOGIN: 'Login',
		TXT_USERNAME: 'Username',
		TXT_PASSWORD: 'Password',
		TXT_OR: 'OR',
		TXT_CREATE_ACCOUNT: 'Create an Account',
		TXT_LOGIN_SIGNUP: 'Login / Signup',
		TXT_LOGOUT: 'Logout',
		TXT_COLLECTIONS: 'Collections',
		TXT_LETS_SHOPPING: 'LET\'S SHOPPING',
		TXT_CANCEL: 'Cancel',
		TXT_SEARCH: 'Search',
		TXT_TYPE_SEARCH: 'Type your search',
		TXT_SEARCH_RERSULT: 'Search Results',
		TXT_COUNTRY: 'Country',
		TXT_CLOSE: 'Close',
		TXT_LOADING: 'Loading',
		TXT_SHOP: 'Shop',
		TXT_RATE: 'Rate',
		TXT_SUBTOTAL: 'Subtotal',
		TXT_TOTAL: 'TOTAL',
		TXT_SHIPPING_METHOD: 'SHIPPING METHOD',
		TXT_PAYMENT_METHOD: 'PAYMENT METHOD',
		TXT_ADD_TO_CART: 'Add to Cart',
		TXT_SOLD: 'Sold Out',
		TXT_SHARE: 'Share',
		TXT_OFF: 'Off',
		TXT_YES: 'Yes',
		TXT_NO: 'No',
		TXT_EXIT: 'Are you sure want to exit',
		TXT_CHECK_CONNECT: 'Error, please check your connection!',
		TXT_SAVE: 'Save',
		TXT_FIRSTNAME: 'First name',
		TXT_LASTNAME: 'Last name',
		TXT_EMAIL: 'Email',
		TXT_PHONE: 'Phone',
		TXT_STREET: 'Street address',
		TXT_STATE: 'State',
		TXT_ZIP: 'Zipcode',
		TXT_TOWN: 'Town/city',
		TXT_NOTE: 'Note',
		TXT_ADDRESS2: 'Apartment, suit, unit etc. (optional)',
		TXT_STATUS: 'Status',
		TXT_PAY: 'PAY',
		TXT_COUPON: 'Coupon Code (optional)',
		TXT_COUPON_INPUT: 'Input your coupon code',
		TXT_SUBMIT: 'Submit',
		TXT_COUPON_DISC: 'Coupon Discount',
		TXT_COUPON_CANCEL: 'Cancel Coupon',
		TXT_COUPON_NOT_SUPPORT: 'Currently not supported from app',

		// ERROR / INVALID
		TXT_CANT_EMPTY: ' can not be empty',
		TXT_INVALID: ' is not valid',
		TXT_NOTMATCH: ' is not match',
		TXT_MUST_ALPHA: 'must be alphanumeric',
		TXT_MUST_5_CHARACTERS: 'must be >= 5 characters',
		TXT_COUPON_EXP: 'Coupon has been expired',
		TXT_COUPON_MIN_MAX: 'Order must be ',

		// HOME
		HOME_LATEST: 'Latest Product',

		// CART
		CART_TITLE: 'Cart',		
		CART_CHECKOUT: 'CHECKOUT',
		CART_EMPTY: 'Cart is empty',

		// CHECKOUT
		CHECKOUT_TITLE: 'Checkout',
		CHECKOUT_SHIPPING_ADDRESS: 'SHIPPING ADDRESS',
		CHECKOUT_CONFIRM: 'Confirm',


		// CONFIRM
		CONFIRM_TITLE: 'Confirmation',
		CONFIRM_SUMMARY: 'Summary',
		CONFIRM_SHIPCOST: 'Shipping Cost',
		CONFIRM_POLICY: 'Payment Policy',

		// MY ACCOUNT
		ACCOUNT_TITLE: 'My Account',
		ACCOUNT_BILLING: 'Edit Billing Address',
		ACCOUNT_SHIPPING: 'Edit Shipping Address',
		EDIT_ACCOUNT_TITLE: 'Edit Account',

		//EDIT BILLING / SHIPPING
		EDIT_BILLING_TITLE: 'Edit Billing',
		EDIT_SHIPPING_TITLE: 'Edit Shipping',

		// MY ORDER
		ORDER_TITLE: 'My Order',
		ORDER_EMPTY: 'Order is empty',

		// BLOG
		BLOG_TITLE: 'Blog',
		BLOG_DETAIL_TITLE: 'Blog Detail',
		BLOG_EMPTY: 'Blog is empty',

		// WISH
		WISH_TITLE: 'Wishlist',
		WISH_EMPTY: 'Wishlist is empty',
		WISH_PRODUCT_DETAIL: 'Product Detail',
		WISH_REMOVE: 'Product has been removed from Wishlist',

		// PRODUCT
		PRODUCT_TITLE: 'Product',
		PRODUCT_VARIATIONS: 'Product Variations',
		PRODUCT_DESC: 'Product Description',
		PRODUCT_ADDED: 'Product added successfully',

		// CONTACT
		CONTACT_TITLE: 'Contact',
		CONTACT_CALL_US: 'Call Us',
		CONTACT_SEND_EMAIL: 'Send Email',

		// FAQ
		FAQ: 'FAQ',

		// ABOUT
		ABOUT_TITLE: 'About',
		ABOUT_ADDRESS: 'Address',

		// SETTINGS
		SETTINGS_TITLE: 'Settings',
		SETTINGS_SUBTITLE: 'language',

		THANKS_TITLE: 'Thanks',
		THANKS_SUCCESS: 'Congratulations!. <br> Your order is successfull',
		THANKS_ID_ORDER: 'Your id order is',
		THANKS_TOTAL_ORDER: 'Your total order is',
		THANKS_PAID: 'You have paid this order using',
		THANKS_GOTO: 'Manage Orders'
	},

	"ar" : {
		// TEXT
		TXT_LOGIN: 'تسجيل الدخول',
		TXT_USERNAME: 'اسم المستخدم',
		TXT_PASSWORD: 'كلمة المرور',
		TXT_OR: 'OR',
		TXT_CREATE_ACCOUNT: 'إنشاء حساب',
		TXT_LOGIN_SIGNUP: 'تسجيل الدخول / تسجيل',
		TXT_LOGOUT: 'خروج',
		TXT_COLLECTIONS: 'مجموعات',
		TXT_LETS_SHOPPING: 'اسمحوا التسوق',
		TXT_CANCEL: 'إلغاء',
		TXT_SEARCH: 'بحث',
		TXT_TYPE_SEARCH: 'اكتب البحث الخاص بك',
		TXT_SEARCH_RERSULT: 'نتائج البحث',
		TXT_COUNTRY: 'البلد',
		TXT_CLOSE: 'إغلاق',
		TXT_LOADING: 'تحميل',
		TXT_SHOP: 'تسوق',
		TXT_RATE: 'تقييم',
		TXT_SUBTOTAL: 'المجموع',
		TXT_TOTAL: 'توتال',
		TXT_SHIPPING_METHOD: 'أسلوب الشحن',
		TXT_PAYMENT_METHOD: 'دفع طريقة',
		TXT_ADD_TO_CART: 'إضافة إلى العربة',
		TXT_SOLD: 'مباع',
		TXT_SHARE: 'حصة',
		TXT_OFF: 'إيقاف',
		TXT_YES: 'نعم',
		TXT_NO: 'لا',
		TXT_EXIT: 'هل أنت متأكد تريد الخروج',
		TXT_CHECK_CONNECT: 'خطأ, يرجى التحقق من اتصالك!',
		TXT_SAVE: 'حفظ',
		TXT_FIRSTNAME: 'الاسم الأول',
		TXT_LASTNAME: 'الاسم الأخير',
		TXT_EMAIL: 'البريد الإلكتروني',
		TXT_PHONE: 'الهاتف',
		TXT_STREET: 'عنوان الشارع',
		TXT_STATE: 'الدولة',
		TXT_ZIP: 'الرمز البريدي',
		TXT_TOWN: 'تاون / المدينة',
		TXT_NOTE: 'ملاحظة',
		TXT_ADDRESS2: 'شقة, دعوى, وحدة الخ (اختياري)',
		TXT_STATUS: 'الحالة',
		TXT_PAY: 'دفع',
		TXT_COUPON: 'رمز القسيمة (اختياري)',
		TXT_COUPON_INPUT: 'إدخال رمز القسيمة الخاصة بك',
		TXT_SUBMIT: 'إرسال',
		TXT_COUPON_DISC: 'قسيمة الخصم',
		TXT_COUPON_CANCEL: 'إلغاء قسيمة',
		TXT_COUPON_NOT_SUPPORT: 'في الوقت الراهن غير معتمد من تطبيقات',

		// // ERROR / INVALID
		TXT_CANT_EMPTY: 'لا يمكن أن يكون فارغا',
		TXT_INVALID: 'غير صحيح',
		TXT_NOTMATCH: 'لا تتناسب',
		TXT_MUST_ALPHA: 'يجب أن تكون أبجدية',
		TXT_MUST_5_CHARACTERS: 'يجب أن يكون> ​​= 5 أحرف',

		// HOME
		HOME_LATEST: 'آخر المنتجات',

		// CART
		CART_TITLE: 'العربة',
		CART_CHECKOUT: 'الدفع',
		CART_EMPTY: 'العربة فارغة',

		// CHECKOUT
		CHECKOUT_TITLE: 'الخروج',
		CHECKOUT_SHIPPING_ADDRESS: 'عنوان الشحن',
		CHECKOUT_CONFIRM: 'تأكيد',

		// CONFIRM
		CONFIRM_TITLE: 'التأكيد',
		CONFIRM_SUMMARY: 'ملخص',
		CONFIRM_SHIPCOST: 'كلف الشحن',
		CONFIRM_POLICY: 'سياسة الدفع',

		// ACCOUNT
		ACCOUNT_TITLE: 'حسابي',
		ACCOUNT_BILLING: 'تحرير عنوان الفواتير',
		ACCOUNT_SHIPPING: 'تحرير عنوان الشحن',
		EDIT_ACCOUNT_TITLE: 'حسابي تعديل',

		// EDIT BILLING / EDIT SHIPPING
		EDIT_BILLING_TITLE: 'تحرير الفواتير',
		EDIT_SHIPPING_TITLE: 'تحرير الشحن',

		// ORDER
		ORDER_TITLE: 'طلبي',
		ORDER_EMPTY: 'النظام هو فارغ',

		// BLOG
		BLOG_TITLE: 'المدونة',
		BLOG_DETAIL_TITLE: 'مدونة التفاصيل',
		BLOG_EMPTY: 'مدونة فارغة',

		// WISH
		WISH_TITLE: 'أمنياتي',
		WISH_EMPTY: 'قائمة الامنيات فارغة',
		WISH_PRODUCT_DETAIL: 'تفاصيل المنتج',
		WISH_REMOVE: 'تمت إزالة المنتج من قائمة الامنيات',

		// PRODUCT
		PRODUCT_TITLE: 'المنتج',
		PRODUCT_VARIATIONS: 'الأشكال المختلفة للمنتج',
		PRODUCT_DESC: 'وصف المنتج',
		PRODUCT_ADDED: 'وأضاف المنتج بنجاح',

		// CONTACT
		CONTACT_TITLE: 'الاتصال',
		CONTACT_CALL_US: 'اتصل بنا',
		CONTACT_SEND_EMAIL: 'ارسال الرسالة',

		// FAQ
		FAQ: 'التعليمات',

		// ABOUT
		ABOUT_TITLE: 'حول',
		ABOUT_ADDRESS: 'عنوان',

		// SETTINGS
		SETTINGS_TITLE: 'إعدادات',
		SETTINGS_SUBTITLE: 'لغة',

		THANKS_TITLE: 'بفضل',
		THANKS_SUCCESS: 'مبروك! <br> النظام الخاص بك هو ناجحا',
		THANKS_ID_ORDER: 'ترتيب معرف الخاص بك هو',
		THANKS_TOTAL_ORDER: 'النظام الكلي الخاص بك هو',
		THANKS_PAID: 'لقد دفع هذا النظام باستخدام ',
		THANKS_GOTO: 'إدارة أوامر'
	},

	"pt" : {
		// TEXT
		TXT_LOGIN: 'Login',
		TXT_USERNAME: 'Nome de usuário',
		TXT_PASSWORD: 'Senha',
		TXT_OR: 'OU',
		TXT_CREATE_ACCOUNT: 'Criar uma conta',
		TXT_LOGIN_SIGNUP: 'Login / Signup',
		TXT_LOGOUT: 'Sair',
		TXT_COLLECTIONS: 'Coleções',
		TXT_LETS_SHOPPING: 'Vamos fazer compras',
		TXT_CANCEL: 'Cancelar',
		TXT_SEARCH: 'Pesquisar',
		TXT_TYPE_SEARCH: 'Digite sua pesquisa',
		TXT_SEARCH_RERSULT: 'Resultados da pesquisa',
		TXT_COUNTRY: 'País',
		TXT_CLOSE: 'Fechar',
		TXT_LOADING: 'Carregando',
		TXT_SHOP: 'Loja',
		TXT_RATE: 'Taxa',
		TXT_SUBTOTAL: 'Subtotal',
		TXT_TOTAL: 'TOTAL',
		TXT_SHIPPING_METHOD: 'MÉTODO DE ENVIO',
		TXT_PAYMENT_METHOD: 'MÉTODO DE PAGAMENTO',
		TXT_ADD_TO_CART: 'Adicionar ao Carrinho',
		TXT_SOLD: 'Vendido para fora',
		TXT_SHARE: 'Compartilhar',
		TXT_OFF: 'Desligado',
		TXT_YES: 'Sim',
		TXT_NO: 'Não',
		TXT_EXIT: 'Tem certeza de que deseja sair',
		TXT_CHECK_CONNECT: 'Erro, verifique a sua conexão!',
		TXT_SAVE: 'Salvar',
		TXT_FIRSTNAME: 'Nome próprio',
		TXT_LASTNAME: 'Sobrenome',
		TXT_EMAIL: 'E-mail',
		TXT_PHONE: 'Telefone',
		TXT_STREET: 'Endereço',
		TXT_STATE: 'Estado',
		TXT_ZIP: 'Código postal',
		TXT_TOWN: 'Cidade / cidade',
		TXT_NOTE: 'Observação',
		TXT_ADDRESS2: 'Apartamento, terno, unidade etc. (opcional)',
		TXT_STATUS: 'Estado',
		TXT_PAY: 'PAGAMENTO',
		TXT_COUPON: 'Código de cupão (opcional)',
		TXT_COUPON_INPUT: 'Introduza o seu código de cupão',
		TXT_SUBMIT: 'Enviar',
		TXT_COUPON_DISC: 'Desconto de cupão',
		TXT_COUPON_CANCEL: 'Cancelar cupão',
		TXT_COUPON_NOT_SUPPORT: 'Actualmente não é suportado pelo app',

		// ERROR / INVALID
		TXT_CANT_EMPTY: 'não pode ser vazio',
		TXT_INVALID: 'não é válido',
		TXT_NOTMATCH: 'não corresponde',
		TXT_MUST_ALPHA: 'deve ser alfanumérico',
		TXT_MUST_5_CHARACTERS: 'must be> = 5 caracteres',

		// CASA
		HOME_LATEST: 'Produto mais recente',

		// CART
		CART_TITLE: 'Carrinho',
		CART_CHECKOUT: 'CHECKOUT',
		CART_EMPTY: 'Carrinho está vazio',

		// CONFIRA
		CHECKOUT_TITLE: 'Saída',
		CHECKOUT_SHIPPING_ADDRESS: 'ENDEREÇO ​​DE ENVIO',
		CHECKOUT_CONFIRM: 'Confirmar',

		// CONFIRMAR
		CONFIRM_TITLE: 'Confirmação',
		CONFIRM_SUMMARY: 'Resumo',
		CONFIRM_SHIPCOST: 'Custos de remessa',
		CONFIRM_POLICY: 'Política de pagamento',

		// MINHA CONTA
		ACCOUNT_TITLE: 'Minha conta',
		ACCOUNT_BILLING: 'Editar endereço de faturamento',
		ACCOUNT_SHIPPING: 'Editar endereço de remessa',
		EDIT_ACCOUNT_TITLE: 'Editar conta',

		// EDIT Faturamento / Expedição
		EDIT_BILLING_TITLE: 'Editar faturamento',
		EDIT_SHIPPING_TITLE: 'Editar envio',

		// MEU PEDIDO
		ORDER_TITLE: 'Minha ordem',
		ORDER_EMPTY: 'Ordem está vazia',

		// BLOG
		BLOG_TITLE: "Blog",
		BLOG_DETAIL_TITLE: 'Detalhe do blog',
		BLOG_EMPTY: 'O blog está vazio',

		// DESEJO
		WISH_TITLE: 'Lista de desejos',
		WISH_EMPTY: 'A lista de desejos está vazia',
		WISH_PRODUCT_DETAIL: 'Detalhe do produto',
		WISH_REMOVE: 'Produto foi removido da lista de desejos',

		// PRODUTO
		PRODUCT_TITLE: 'Produto',
		PRODUCT_VARIATIONS: 'Variações do produto',
		PRODUCT_DESC: 'Descrição do Produto',
		PRODUCT_ADDED: 'Produto adicionado com sucesso',

		// CONTATO
		CONTACT_TITLE: 'Contato',
		CONTACT_CALL_US: 'Ligue para nós',
		CONTACT_SEND_EMAIL: 'Enviar e-mail',

		// PERGUNTAS FREQUENTES
		FAQ: 'FAQ',

		// SOBRE
		ABOUT_TITLE: 'Sobre',
		ABOUT_ADDRESS: 'Endereço',

		// CONFIGURAÇÕES
		SETTINGS_TITLE: 'Configurações',
		SETTINGS_SUBTITLE: 'idioma',

		THANKS_TITLE: 'Obrigado',
		THANKS_SUCCESS: 'Parabéns !. <br> Sua ordem é bem sucedida ',
		THANKS_ID_ORDER: 'Sua ordem de identificação é',
		THANKS_TOTAL_ORDER: 'Sua ordem total é',
		THANKS_PAID: 'Você pagou esta ordem usando',
		THANKS_GOTO: 'Gerenciar encomendas'
	},

	"de" : {
		// TEXT
		TXT_LOGIN: 'Anmeldung',
		TXT_USERNAME: 'Benutzername',
		TXT_PASSWORD: 'Kennwort',
		TXT_OR: 'ODER',
		TXT_CREATE_ACCOUNT: 'Konto erstellen',
		TXT_LOGIN_SIGNUP: 'Login / Anmeldung',
		TXT_LOGOUT: 'Abmelden',
		TXT_COLLECTIONS: 'Sammlungen',
		TXT_LETS_SHOPPING: 'LETs EINKAUFEN',
		TXT_CANCEL: 'Abbrechen',
		TXT_SEARCH: 'Suchen',
		TXT_TYPE_SEARCH: 'Geben Sie Ihre Suche ein',
		TXT_SEARCH_RERSULT: 'Suchergebnisse',
		TXT_COUNTRY: 'Land',
		TXT_CLOSE: 'Schließen',
		TXT_LOADING: 'Laden',
		TXT_SHOP: 'Geschäft',
		TXT_RATE: 'Bewertungs-App',
		TXT_SUBTOTAL: 'Zwischensumme',
		TXT_TOTAL: 'GESAMT',
		TXT_SHIPPING_METHOD: 'VERSCHIFFEN-METHODE',
		TXT_PAYMENT_METHOD: 'ZAHLUNGSMETHODE',
		TXT_ADD_TO_CART: 'In den Warenkorb',
		TXT_SOLD: 'Ausverkauft',
		TXT_SHARE: 'Freigeben',
		TXT_OFF: 'Aus',
		TXT_YES: 'Ja',
		TXT_NO: 'Nein',
		TXT_EXIT: 'Sind Sie sicher, dass Sie beenden möchten',
		TXT_CHECK_CONNECT: 'Fehler, bitte überprüfen Sie Ihre Verbindung!',
		TXT_SAVE: 'Speichern',
		TXT_FIRSTNAME: 'Vorname',
		TXT_LASTNAME: 'Nachname',
		TXT_EMAIL: 'E-Mail',
		TXT_PHONE: 'Telefonieren',
		TXT_STREET: 'Straßenadresse',
		TXT_STATE: 'Zustand',
		TXT_ZIP: 'Postleitzahl',
		TXT_TOWN: 'Stadt / Gemeinde',
		TXT_NOTE: 'Hinweis',
		TXT_ADDRESS2: 'Wohnung, Anzug, Einheit usw. (optional)',
		TXT_STATUS: 'Status',
		TXT_PAY: "ZAHLEN",
		TXT_COUPON: 'Gutschein-Code (optional)',
		TXT_COUPON_INPUT: 'Geben Sie Ihren Gutscheincode ein',
		TXT_SUBMIT: 'Senden',
		TXT_COUPON_DISC: 'Gutscheinrabatt',
		TXT_COUPON_CANCEL: 'Gutschein stornieren',
		TXT_COUPON_NOT_SUPPORT: 'Derzeit wird von App nicht unterstützt',

		// ERROR / INVALID
		TXT_CANT_EMPTY: 'kann nicht leer sein',
		TXT_INVALID: 'ist ungültig',
		TXT_NOTMATCH: 'ist nicht Übereinstimmung',
		TXT_MUST_ALPHA: 'muss alphanumerisch sein',
		TXT_MUST_5_CHARACTERS: 'muss> = 5 Zeichen',

		// ZUHAUSE
		HOME_LATEST: 'neues Produkt',

		// KARTE
		CART_TITLE: 'Warenkorb',
		CART_CHECKOUT: 'KASSE',
		CART_EMPTY: 'Einkaufswagen ist leer',

		// AUSCHECKEN
		CHECKOUT_TITLE: 'Zur Kasse',
		CHECKOUT_SHIPPING_ADDRESS: 'VERSCHIFFEN ADDRESS',
		CHECKOUT_CONFIRM: 'Bestätigen',

		// BESTÄTIGEN
		CONFIRM_TITLE: 'Bestätigung',
		CONFIRM_SUMMARY: 'Zusammenfassung',
		CONFIRM_SHIPCOST: 'Versandkosten',
		CONFIRM_POLICY: "Zahlungsbedingungen",

		// MEIN KONTO
		ACCOUNT_TITLE: 'Mein Konto',
		ACCOUNT_BILLING: 'Rechnungsadresse bearbeiten',
		ACCOUNT_SHIPPING: 'Lieferadresse bearbeiten',
		EDIT_ACCOUNT_TITLE: 'Konto bearbeiten',

		// BEARBEITEN BILLING / SHIPPING
		EDIT_BILLING_TITLE: 'Abrechnung bearbeiten',
		EDIT_SHIPPING_TITLE: 'Bearbeiten Versand',

		// MEINE BESTELLUNG
		ORDER_TITLE: 'Meine Bestellung',
		ORDER_EMPTY: 'Bestellung ist leer',

		// BLOG
		BLOG_TITLE: 'Blog',
		BLOG_DETAIL_TITLE: 'Blog-Detail',
		BLOG_EMPTY: 'Blog ist leer',

		// WUNSCH
		WISH_TITLE: 'Wunschliste',
		WISH_EMPTY: 'Wunschliste ist leer',
		WISH_PRODUCT_DETAIL: 'Produktbeschreibung',
		WISH_REMOVE: 'Produkt wurde aus der Wunschliste entfernt',

		// PRODUKT
		PRODUKT_TITLE: 'Produkt',
		PRODUKTVARIANTEN: 'Produktvarianten',
		PRODUCT_DESC: 'Produktbeschreibung',
		PRODUCT_ADDED: 'Produkt erfolgreich hinzugefügt',

		// KONTAKT
		CONTACT_TITLE: 'Kontakt',
		CONTACT_CALL_US: 'Rufen Sie uns an',
		CONTACT_SEND_EMAIL: 'E-Mail senden',

		// FAQ
		FAQ: 'Häufig gestellte Fragen',

		// ETWA
		ABOUT_TITLE: 'Über',
		ABOUT_ADDRESS: 'Adresse',

		// EINSTELLUNGEN
		SETTINGS_TITLE: 'Einstellungen',
		SETTINGS_SUBTITLE: 'Sprache',

		THANKS_TITLE: 'Danke',
		THANKS_SUCCESS: 'Herzlichen Glückwunsch !. <br> Ihre Bestellung ist erfolgreich',
		THANKS_ID_ORDER: 'Ihre id Bestellung ist',
		THANKS_TOTAL_ORDER: 'Ihr Gesamtauftrag ist',
		THANKS_PAID: 'Sie haben diesen Auftrag mit',
		THANKS_GOTO: 'Verwalten von Aufträgen'
	},

	"hi": {
		// पाठ
		TXT_LOGIN: 'लॉग इन',
		TXT_USERNAME: 'नाम',
		TXT_PASSWORD: 'पासवर्ड',
		TXT_OR: 'या',
		TXT_CREATE_ACCOUNT: 'एक खाता बनाएँ',
		TXT_LOGIN_SIGNUP: 'लॉगइन / पंजीकरण',
		TXT_LOGOUT: 'लॉगआउट',
		TXT_COLLECTIONS: 'संग्रह',
		TXT_LETS_SHOPPING: 'लश्करs एस शॉपिंग ',
		TXT_CANCEL: 'रद्द करें',
		TXT_SEARCH: 'खोज',
		TXT_TYPE_SEARCH: 'अपनी खोज टाइप',
		TXT_SEARCH_RERSULT: 'खोज परिणाम',
		TXT_COUNTRY: 'देश',
		TXT_CLOSE: 'बंद',
		TXT_LOADING: 'लोड हो रहा है',
		TXT_SHOP: 'दुकान',
		TXT_RATE: 'दर',
		TXT_SUBTOTAL: 'आधा',
		TXT_TOTAL: 'कुल',
		TXT_SHIPPING_METHOD: 'शिपिंग विधि',
		TXT_PAYMENT_METHOD: 'भुगतान विधि',
		TXT_ADD_TO_CART: 'गाड़ी में जोड़ें',
		TXT_SOLD: 'बिक',
		TXT_SHARE: 'शेयर',
		TXT_OFF: 'बंद',
		TXT_YES: 'हाँ',
		TXT_NO: 'नहीं',
		TXT_EXIT: 'क्या आप यकीन है कि बाहर निकलने के लिए चाहते हैं',
		TXT_CHECK_CONNECT: 'त्रुटि, अपने कनेक्शन की जाँच करें!',
		TXT_SAVE: 'बचाओ',
		TXT_FIRSTNAME: 'प्रथम नाम',
		TXT_LASTNAME: 'अंतिम नाम',
		TXT_EMAIL: 'ईमेल',
		TXT_PHONE: 'फोन',
		TXT_STREET: 'स्ट्रीट पता',
		TXT_STATE: 'राज्य',
		TXT_ZIP: 'ZIPCODE',
		TXT_TOWN: 'टाउन / शहर',
		TXT_NOTE: 'नोट',
		TXT_ADDRESS2: 'अपार्टमेंट, सूट, आदि इकाई (वैकल्पिक)',
		TXT_STATUS: 'स्थिति',
		TXT_PAY: 'भुगतान',
		TXT_COUPON: 'कूपन कोड (वैकल्पिक)',
		TXT_COUPON_INPUT: 'इनपुट अपने कूपन कोड',
		TXT_SUBMIT: 'सबमिट',
		TXT_COUPON_DISC: 'कूपन डिस्काउंट',
		TXT_COUPON_CANCEL: 'रद्द कूपन',
		TXT_COUPON_NOT_SUPPORT: 'वर्तमान में app से समर्थित नहीं',

		// त्रुटि / अमान्य
		TXT_CANT_EMPTY: 'खाली नहीं हो सकता',
		TXT_INVALID: 'मान्य नहीं है',
		TXT_NOTMATCH: 'मेल नहीं है',
		TXT_MUST_ALPHA: 'अल्फान्यूमेरिक होना चाहिए',
		TXT_MUST_5_CHARACTERS: '> = 5 अक्षरों का होना चाहिए',

		// घर
		HOME_LATEST: 'नवीनतम उत्पाद',

		// डालिए
		Cart_title: 'गाड़ी',
		CART_CHECKOUT: 'Checkout',
		CART_EMPTY: 'कार्ट खाली है',

		// चेक आउट
		CHECKOUT_TITLE: 'चेकआउट',
		CHECKOUT_SHIPPING_ADDRESS: 'शिपिंग पता',
		CHECKOUT_CONFIRM: 'पुष्टि',

		// पुष्टि करें
		CONFIRM_TITLE: 'पुष्टि',
		CONFIRM_SUMMARY: 'सारांश',
		CONFIRM_SHIPCOST: 'नौवहन लागत',
		CONFIRM_POLICY: 'भुगतान नीति',

		// मेरा खाता
		ACCOUNT_TITLE: 'मेरा खाता',
		ACCOUNT_BILLING: 'संपादन बिलिंग पता',
		ACCOUNT_SHIPPING: 'संपादन शिपिंग पता',
		EDIT_ACCOUNT_TITLE: 'संपादन खाता',

		// बिलिंग संपादित करें / शिपिंग
		EDIT_BILLING_TITLE: 'बिलिंग संपादित करें',
		EDIT_SHIPPING_TITLE: 'संपादन शिपिंग',

		// मेरा आदेश
		ORDER_TITLE: 'मेरे आदेश',
		ORDER_EMPTY: 'आदेश खाली है',

		// ब्लॉग
		BLOG_TITLE: 'ब्लॉग',
		BLOG_DETAIL_TITLE: 'ब्लॉग विस्तार',
		BLOG_EMPTY: 'ब्लॉग खाली है',

		// तमन्ना
		WISH_TITLE: 'कार्ट',
		WISH_EMPTY: 'कार्ट खाली है',
		WISH_PRODUCT_DETAIL: 'उत्पाद विवरण',
		WISH_REMOVE: 'उत्पाद कार्ट से हटा दिया गया है',

		// उत्पाद
		PRODUCT_TITLE: 'उत्पाद',
		PRODUCT_VARIATIONS: 'उत्पाद बदलाव',
		PRODUCT_DESC: 'उत्पाद विवरण',
		PRODUCT_ADDED: 'इस उत्पाद को सफलतापूर्वक जोड़ा',

		// संपर्क करें
		CONTACT_TITLE: 'संपर्क',
		CONTACT_CALL_US: 'हमें फोन',
		CONTACT_SEND_EMAIL: 'ईमेल भेजें',

		// सामान्य प्रश्न
		FAQ: 'सामान्य प्रश्न',

		// के बारे में
		ABOUT_TITLE: 'के बारे में',
		ABOUT_ADDRESS: 'पता',

		// सेटिंग्स
		SETTINGS_TITLE: 'सेटिंग',
		SETTINGS_SUBTITLE: 'भाषा',

		THANKS_TITLE: 'धन्यवाद',
		THANKS_SUCCESS: 'बधाई !. <br> आपका आदेश सफल है ',
		THANKS_ID_ORDER: 'अपना आईडी आदेश है',
		THANKS_TOTAL_ORDER: 'अपने कुल आदेश है',
		THANKS_PAID: 'आप का उपयोग कर इस आदेश का भुगतान किया है',
		THANKS_GOTO: 'आदेश का प्रबंधन'
	}
});
