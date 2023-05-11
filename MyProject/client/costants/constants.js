const cityControll = {
    title: 'городов',
    dataTable:{
        table:'City',
        attributes: [['id','ID'],['city_name', 'Город'],['updatedAt', 'Дата изменения'],['admin_name', 'Последняя рука']],
    },
}

const streetControll = {
    title: 'улиц',
    select:{
        table:'City',
        attributes: ['id','city_name'],
        inputid: 'city',
    },
    input:{
        table:'Street',
        attributes: ['street_name'],
        inputid: 'street',
    }
}

const adminMenuItems = {
    a:[
        {href:"javascript:SimpleController(cityControll)",text:"Города"},
        {href:"javascript:SimpleController(streetControll)",text:"Улицы"},
        {},
        {},
        {}
    ],
    visible:true,
};

const mainMenuItems = {
    li:[
        {
            text:"Главная",
            vm:{
                a:[
                    {href:"javascript:Kartochka()",text:"Карточка"},
                    {href:"javascript:PoNomeram()",text:"Номера"},
                    {href:"javascript:Spravochnik()",text:"Справочник"},
                ]
            }
        },
        {
            text:"С номерами",
            vm:{
                a:[
                    {href:"javascript:IPPhonesSAP()",text:"IP-телефоны Asterisk"},
                    {href:"javascript:IPPhonesECP()",text:"IP-телефоны Avaya"},
                    {href:"javascript:CityNubers()",text:"Городские"},
                    {href:"javascript:DECTNubers()",text:"Номера DECT"},
                    {href:"javascript:ODSNubers()",text:"Прямые связи"},
                    {href:"javascript:ECPBossNubers()",text:"Директорская"},
                    {href:"#",text:"Факсы"},
                    {href:"javascript:XmobileNumbers()",text:"Xmobile"},
                ]
            }
        },
        {
            text:"Без номеров",
            vm:{
                a:[
                    {href:"javascript:Modems()",text:"Модемы"},
                    {href:"javascript:ECPclock()",text:"Часы"},
                    {href:"javascript:Sirena()",text:"Сирены"},
                    {href:"javascript:Optika()",text:"Таблица Оптика"},
                    {href:"javascript:OpticMapOpen()",text:"Схема оптики"},
                    {href:"javascript:CuprumCableLoad()",text:"Медные кабели"},
                    {href:"#",text:"Архив без №"},
                ]
            }
        },
        {
            text:"Запросы с условием",
            vm:{
                a:[
                    {href:"#",text:"По портам"},
                    {href:"#",text:"По кроссу"},
                    {href:"javascript:DataPPR()",text:"Для ППР"},
                    {href:"javascript:SuperRequestBuildWindow()",text:"Супер запрос"},
                ]
            }
        },
    ]
}

const adminPanel = {
    li:[
        {
            text:"Управление",
            vm:{
                a:[
                    {href:"javascript:SideMenuPage(adminMenuItems)",text:"Панель администратора"},
                ]
            }
        }
    ]
}

/*
{href:"javascript:SpravochnikAbonentov(1)",text:"Справ. абонентов"},
                    {href:"javascript:OrganisatoinsNSI()",text:"Организации"},
                    {href:"javascript:ModeliTANSI()",text:"Модели ТА"},
                    {href:"javascript:ZdanieNSI()",text:"Адреса"},
                    {href:"javascript:KomutacionnoeOborudovanieNSI()",text:"Коммутационное оборудование"},
                    {href:"javascript:BoardsATS()",text:"Платы АТС"},
                    {href:"javascript:PereadresaciiTable()",text:"Переадресации"}
*/