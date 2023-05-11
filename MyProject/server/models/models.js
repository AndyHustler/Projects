const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Peoples = sequelize.define('Peoples', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type:DataTypes.STRING, allowNull: false},
    email: {type:DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue:"USER"},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Chang_log = sequelize.define('Chang_log', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    table_name: {type:DataTypes.STRING, allowNull: false},
    fild_name: {type:DataTypes.STRING, allowNull: false},
    old_data: {type:DataTypes.STRING, allowNull: false, defaultValue: 'Добавлено'},
    new_data: {type:DataTypes.STRING, allowNull: false, defaultValue: 'Удалено'},
    date_time: {type:DataTypes.DATE, defaultValue: DataTypes.NOW}
});

const Doljnost = sequelize.define('Doljnost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    doljnost_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    rang: {type:DataTypes.INTEGER, allowNull: false, defaultValue:999},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Group = sequelize.define('Group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    group: {type:DataTypes.STRING},
    short_name: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Departament = sequelize.define('Departament', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    index: {type:DataTypes.INTEGER, unique: true},
    departament: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Organisation = sequelize.define('Organisation', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organisation_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Address = sequelize.define('Address', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const City = sequelize.define('City', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    city_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Street = sequelize.define('Street', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    street_name: {type:DataTypes.STRING, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Device_sets = sequelize.define('Device_sets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    serial_number: {type:DataTypes.STRING, unique: true},
    inv_number: {type:DataTypes.STRING, unique: true},
    room: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Switching_equipment = sequelize.define('Switching_equipment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eq_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    room: {type:DataTypes.STRING, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Switching_equipment_type = sequelize.define('Switching_equipment_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    short_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Switching_equipment_boxes = sequelize.define('Switching_equipment_boxes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    box_name: {type:DataTypes.STRING, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Box_models = sequelize.define('Box_models', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Case_record_status = sequelize.define('Case_record_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status_value: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Destination = sequelize.define('Destination', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    short: {type:DataTypes.STRING, unique: true, allowNull: false},
    long: {type:DataTypes.STRING, unique: true, allowNull: false},
    for: {type:DataTypes.STRING},
    notes: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Case_record = sequelize.define('Case_record', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone_number: {type:DataTypes.STRING, unique: true},
    cid_pstn: {type:DataTypes.STRING},
    record_name: {type:DataTypes.STRING},
    notes: {type:DataTypes.STRING},
    cor: {type: DataTypes.INTEGER},
    quantity: {type: DataTypes.INTEGER, allowNull: false, defaultValue:1},
    tn: {type: DataTypes.INTEGER},
    responsible_departament: {type:DataTypes.STRING},
    contract: {type: DataTypes.BOOLEAN, defaultValue:false},
    show_in_directory: {type: DataTypes.BOOLEAN, defaultValue:false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Removed_case_record = sequelize.define('Removed_case_record', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone_number: {type:DataTypes.STRING, unique: true},
    cid_pstn: {type:DataTypes.STRING},
    record_name: {type:DataTypes.STRING},
    notes: {type:DataTypes.STRING},
    cor: {type: DataTypes.INTEGER},
    quantity: {type: DataTypes.INTEGER, allowNull: false, defaultValue:1},
    tn: {type: DataTypes.INTEGER},
    responsible_departament: {type:DataTypes.STRING},
    contract: {type: DataTypes.BOOLEAN, defaultValue:false},
    show_in_directory: {type: DataTypes.BOOLEAN, defaultValue:false},
    organisation: {type:DataTypes.STRING},
    destination: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const People_vs_records = sequelize.define('People_vs_records', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Routes = sequelize.define('Routes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pair_number: {type:DataTypes.STRING, allowNull: false},
    row: {type:DataTypes.INTEGER, allowNull: false},
    column: {type:DataTypes.INTEGER, allowNull: false},
    faulty_pair: {type:DataTypes.BOOLEAN, defaultValue:false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Removed_records_routes = sequelize.define('Removed_records_routes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pair_number: {type:DataTypes.STRING, allowNull: false},
    row: {type:DataTypes.INTEGER, allowNull: false},
    column: {type:DataTypes.INTEGER, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Line_box_connection = sequelize.define('Line_box_connection', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_pair: {type:DataTypes.STRING, allowNull: false},
    start_pair: {type:DataTypes.STRING, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Communication_line = sequelize.define('Communication_line', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_com_eq_a: {type:DataTypes.INTEGER, allowNull: false, references: {model: Switching_equipment, key: 'id'}},
    id_com_eq_b: {type:DataTypes.INTEGER, allowNull: false, references: {model: Switching_equipment, key: 'id'}},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Cable = sequelize.define('Cable', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type:DataTypes.STRING, allowNull: false},
    pairs_quantity: {type:DataTypes.INTEGER, allowNull: false},
    langth: {type:DataTypes.INTEGER, allowNull: false},
    inv_number: {type:DataTypes.STRING, unique: true},
    service_group: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Cables_type = sequelize.define('Cables_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Lines_vs_cables = sequelize.define('Lines_vs_cables', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Country = sequelize.define('Country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Brand = sequelize.define('Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Devici_property = sequelize.define('Devici_property', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    property_value: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Property_name = sequelize.define('Property_name', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    property_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Device_model = sequelize.define('Device_model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    description: {type:DataTypes.STRING, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const PBX_ports = sequelize.define('PBX_ports', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Forwarding_type = sequelize.define('Forwarding_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Forwarding = sequelize.define('Forwarding', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const PBX_config = sequelize.define('PBX_config', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cabinet: {type:DataTypes.STRING, allowNull: false},
    gateway: {type:DataTypes.STRING, allowNull: false},
    slot: {type:DataTypes.INTEGER, allowNull: false},
    room: {type:DataTypes.STRING, allowNull: false},
    hw_version: {type:DataTypes.STRING},
    sw_version: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Boards = sequelize.define('Boards', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    board_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    artikul: {type:DataTypes.STRING, unique: true},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Activ_equipment = sequelize.define('Activ_equipment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model_name: {type:DataTypes.STRING, allowNull: false},
    gateway: {type:DataTypes.STRING, allowNull: false},
    slot: {type:DataTypes.INTEGER, allowNull: false},
    room: {type:DataTypes.STRING, allowNull: false},
    hw_version: {type:DataTypes.STRING},
    sw_version: {type:DataTypes.STRING},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Equipment_info = sequelize.define('Equipment_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false},
    description: {type:DataTypes.STRING, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Communication_type = sequelize.define('Communication_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

const Ppr = sequelize.define('ppr', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type:DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
    admin_name: {type:DataTypes.STRING, allowNull: false},
});

Doljnost.hasMany(Peoples)
Peoples.belongsTo(Doljnost)

Organisation.hasMany(Departament)
Departament.belongsTo(Organisation)

Departament.hasMany(Group)
Group.belongsTo(Departament)

Departament.hasMany(Case_record)
Case_record.belongsTo(Departament)

Group.hasMany(Peoples)
Peoples.belongsTo(Group)

City.hasMany(Street)
Street.belongsTo(City)

Street.hasMany(Address)
Address.belongsTo(Street)

Address.hasMany(Device_sets)
Device_sets.belongsTo(Address)

Address.hasMany(Switching_equipment)
Switching_equipment.belongsTo(Address)

Switching_equipment_type.hasMany(Switching_equipment)
Switching_equipment.belongsTo(Switching_equipment_type)

Box_models.hasMany(Switching_equipment_boxes)
Switching_equipment_boxes.belongsTo(Box_models)

Switching_equipment.hasMany(Switching_equipment_boxes)
Switching_equipment_boxes.belongsTo(Switching_equipment)
 
Case_record_status.hasMany(Case_record)
Case_record.belongsTo(Case_record_status)

Destination.hasMany(Case_record)
Case_record.belongsTo(Destination)

Group.hasMany(Device_sets)
Device_sets.belongsTo(Group)

Peoples.hasMany(Ppr)
Ppr.belongsTo(Peoples)

Peoples.hasMany(Chang_log)
Chang_log.belongsTo(Peoples)

Peoples.belongsToMany(Case_record, {through: People_vs_records})
Case_record.belongsToMany(Peoples, {through: People_vs_records})

Switching_equipment_boxes.hasMany(Routes)
Routes.belongsTo(Switching_equipment_boxes)

Switching_equipment_boxes.hasMany(Removed_records_routes)
Removed_records_routes.belongsTo(Switching_equipment_boxes)

Switching_equipment_boxes.hasMany(Line_box_connection)
Line_box_connection.belongsTo(Switching_equipment_boxes)

Communication_line.belongsToMany(Cable, {through: Lines_vs_cables})
Cable.belongsToMany(Communication_line, {through: Lines_vs_cables})

Communication_line.hasMany(Line_box_connection)
Line_box_connection.belongsTo(Communication_line)

Communication_line.hasMany(Lines_vs_cables)
Lines_vs_cables.belongsTo(Communication_line)

Cables_type.hasMany(Cable)
Cable.belongsTo(Cables_type)

Country.hasMany(Brand)
Brand.belongsTo(Country)

Property_name.hasMany(Devici_property)
Devici_property.belongsTo(Property_name)

Device_model.hasMany(Devici_property)
Devici_property.belongsTo(Device_model)

Brand.hasMany(Device_model)
Device_model.belongsTo(Brand)

Case_record.hasOne(PBX_ports)
PBX_ports.belongsTo(Case_record)

Forwarding_type.hasMany(Forwarding)
Forwarding.belongsTo(Forwarding_type)

Case_record.hasMany(Forwarding)
Forwarding.belongsTo(Case_record)

Case_record.hasMany(Device_sets)
Device_sets.belongsTo(Case_record)

Device_model.hasMany(Device_sets)
Device_sets.belongsTo(Device_model)

Device_sets.hasMany(Ppr)
Ppr.belongsTo(Device_sets)

Case_record.hasMany(Routes)
Routes.belongsTo(Case_record)

Communication_type.hasMany(Device_model)
Device_model.belongsTo(Communication_type)

Address.hasMany(PBX_config)
PBX_config.belongsTo(Address)

Boards.hasMany(PBX_config)
PBX_config.belongsTo(Boards)

Activ_equipment.hasMany(Boards)
Boards.belongsTo(Activ_equipment)

Activ_equipment.hasMany(Equipment_info)
Equipment_info.belongsTo(Activ_equipment)

module.exports = {
    Peoples, 
    Ppr,
    Chang_log,
    Doljnost, 
    Departament, 
    Organisation,
    Group, 
    Address, 
    City, 
    Street, 
    Device_sets, 
    Switching_equipment, 
    Switching_equipment_type, 
    Switching_equipment_boxes, 
    Box_models, 
    Case_record_status, 
    Destination, 
    Case_record, 
    Removed_case_record, 
    People_vs_records, 
    Routes, 
    Removed_records_routes, 
    Line_box_connection, 
    Communication_line, 
    Cable, 
    Cables_type, 
    Lines_vs_cables, 
    Country, 
    Brand, 
    Devici_property, 
    Property_name, 
    Device_model, 
    PBX_ports, 
    PBX_ports, 
    Forwarding_type, 
    Forwarding, 
    PBX_config, 
    Boards, 
    Activ_equipment, 
    Equipment_info, 
    Communication_type
}