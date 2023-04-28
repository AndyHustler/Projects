const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Peoples = sequelize.define('Peoples', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type:DataTypes.STRING, allowNull: false},
    email: {type:DataTypes.STRING, unique: true, },
    password: {type:DataTypes.STRING, },
    role: {type:DataTypes.STRING, defaultValue:"USER"}
});

const Chang_log = sequelize.define('Chang_log', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    table_name: {type:DataTypes.STRING, allowNull: false},
    fild_name: {type:DataTypes.STRING, allowNull: false},
    old_data: {type:DataTypes.STRING, allowNull: false},
    new_data: {type:DataTypes.STRING, allowNull: false},
    date_time: {type:DataTypes.DATE, defaultValue: DataTypes.NOW}
});

const Doljnost = sequelize.define('Doljnost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    doljnost_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    rang: {type:DataTypes.INTEGER, allowNull: false, defaultValue:999},
});

const Groups = sequelize.define('Groups', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    group: {type:DataTypes.STRING, },
});

const Departaments = sequelize.define('Departaments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    index: {type:DataTypes.INTEGER, unique: true},
    departament: {type:DataTypes.STRING,  allowNull: true},
});

const Organisations = sequelize.define('Organisations', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    organisation_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Address = sequelize.define('Address', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const City = sequelize.define('City', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    city_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Streets = sequelize.define('Streets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    street_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Device_sets = sequelize.define('Device_sets', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    serial_number: {type:DataTypes.STRING, unique: true},
    inv_number: {type:DataTypes.STRING, unique: true},
    room: {type:DataTypes.STRING},
});

const Switching_equipment = sequelize.define('Switching_equipment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eq_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    room: {type:DataTypes.STRING},
});

const Switching_equipment_type = sequelize.define('Switching_equipment_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    short_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Switching_equipment_boxes = sequelize.define('Switching_equipment_boxes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    box_name: {type:DataTypes.STRING, allowNull: false},
});

const Box_models = sequelize.define('Box_models', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Case_record_status = sequelize.define('Case_record_status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status_value: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Destination = sequelize.define('Destination', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    short: {type:DataTypes.STRING, unique: true, allowNull: false},
    long: {type:DataTypes.STRING, unique: true, allowNull: false},
    for: {type:DataTypes.STRING},
    notes: {type:DataTypes.STRING},
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
});

const People_vs_records = sequelize.define('People_vs_records', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Routes = sequelize.define('Routes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pair_number: {type:DataTypes.STRING, allowNull: false},
    row: {type:DataTypes.INTEGER, allowNull: false},
    column: {type:DataTypes.INTEGER, allowNull: false},
    faulty_pair: {type:DataTypes.BOOLEAN, defaultValue:false},
});

const Removed_records_routes = sequelize.define('Removed_records_routes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pair_number: {type:DataTypes.STRING, allowNull: false},
    row: {type:DataTypes.INTEGER, allowNull: false},
    column: {type:DataTypes.INTEGER, allowNull: false},
});

const Line_box_connections = sequelize.define('Line_box_connections', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_pair: {type:DataTypes.STRING, allowNull: false},
    start_pair: {type:DataTypes.STRING, allowNull: false},
});

const Lines = sequelize.define('Lines', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_com_eq_a: {type:DataTypes.INTEGER, allowNull: false},
    id_com_eq_b: {type:DataTypes.INTEGER, allowNull: false},
});

const Cables = sequelize.define('Cables', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type:DataTypes.STRING, allowNull: false},
    pairs_quantity: {type:DataTypes.INTEGER, allowNull: false},
    langth: {type:DataTypes.INTEGER, allowNull: false},
    inv_number: {type:DataTypes.STRING, unique: true},
    service_group: {type:DataTypes.STRING},
});

const Cables_types = sequelize.define('Cables_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Lines_vs_cables = sequelize.define('Lines_vs_cables', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Country = sequelize.define('Country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('Brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    brand_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Properties = sequelize.define('Properties', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    property_value: {type:DataTypes.STRING},
});

const Properties_names = sequelize.define('Properties_names', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    property_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Device_models = sequelize.define('Device_models', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    description: {type:DataTypes.STRING, allowNull: false}
});

const PBX_ports = sequelize.define('PBX_ports', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Forwarding_type = sequelize.define('Forwarding_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const Forwarding = sequelize.define('Forwarding', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const PBX_config = sequelize.define('PBX_config', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cabinet: {type:DataTypes.STRING, allowNull: false},
    gateway: {type:DataTypes.STRING, allowNull: false},
    slot: {type:DataTypes.INTEGER, allowNull: false},
    room: {type:DataTypes.STRING, allowNull: false},
    hw_version: {type:DataTypes.STRING},
    sw_version: {type:DataTypes.STRING},
});

const Boards = sequelize.define('Boards', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    board_name: {type:DataTypes.STRING, unique: true, allowNull: false},
    artikul: {type:DataTypes.STRING, unique: true},
});

const Activ_equipment = sequelize.define('Activ_equipment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model_name: {type:DataTypes.STRING, allowNull: false},
    gateway: {type:DataTypes.STRING, allowNull: false},
    slot: {type:DataTypes.INTEGER, allowNull: false},
    room: {type:DataTypes.STRING, allowNull: false},
    hw_version: {type:DataTypes.STRING},
    sw_version: {type:DataTypes.STRING},
});

const Equipment_info = sequelize.define('Equipment_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false},
    description: {type:DataTypes.STRING, allowNull: false},
});

const Communication_type = sequelize.define('Communication_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type_name: {type:DataTypes.STRING, unique: true, allowNull: false},
});

const PPR = sequelize.define('ppr', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type:DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW},
});

Doljnost.hasMany(Peoples)
Peoples.belongsTo(Doljnost)

Organisations.hasMany(Departaments)
Departaments.belongsTo(Organisations)

Departaments.hasMany(Groups)
Groups.belongsTo(Departaments)

Groups.hasMany(Peoples)
Peoples.belongsTo(Groups)

City.hasMany(Streets)
Streets.belongsTo(City)

Streets.hasMany(Address)
Address.belongsTo(Streets)

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

Groups.hasMany(Case_record)
Case_record.belongsTo(Groups)

Case_record_status.hasMany(Removed_case_record)
Removed_case_record.belongsTo(Case_record_status)

Destination.hasMany(Removed_case_record)
Removed_case_record.belongsTo(Destination)

Peoples.hasMany(PPR)
PPR.belongsTo(Peoples)

Peoples.hasMany(Chang_log)
Chang_log.belongsTo(Peoples)

Peoples.belongsToMany(Case_record, {through: People_vs_records})
Case_record.belongsToMany(Peoples, {through: People_vs_records})

Switching_equipment_boxes.hasMany(Routes)
Routes.belongsTo(Switching_equipment_boxes)

Switching_equipment_boxes.hasMany(Removed_records_routes)
Removed_records_routes.belongsTo(Switching_equipment_boxes)

Switching_equipment_boxes.hasMany(Line_box_connections)
Line_box_connections.belongsTo(Switching_equipment_boxes)

Lines.belongsToMany(Cables, {through: Lines_vs_cables})
Cables.belongsToMany(Lines, {through: Lines_vs_cables})

Lines.hasMany(Line_box_connections)
Line_box_connections.belongsTo(Lines)

Lines.hasMany(Lines_vs_cables)
Lines_vs_cables.belongsTo(Lines)

Cables_types.hasMany(Cables)
Cables.belongsTo(Cables_types)

Country.hasMany(Brand)
Brand.belongsTo(Country)

Properties_names.hasMany(Properties)
Properties.belongsTo(Properties_names)

Device_models.hasMany(Properties)
Properties.belongsTo(Device_models)

Brand.hasMany(Device_models)
Device_models.belongsTo(Brand)

PBX_ports.hasOne(Case_record)
Case_record.belongsTo(PBX_ports)

Forwarding_type.hasMany(Forwarding)
Forwarding.belongsTo(Forwarding_type)

Case_record.hasMany(Forwarding)
Forwarding.belongsTo(Case_record)

Communication_type.hasMany(Device_models)
Device_models.belongsTo(Communication_type)

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
    PPR,
    Chang_log,
    Doljnost, 
    Departaments, 
    Organisations, 
    Address, 
    City, 
    Streets, 
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
    Line_box_connections, 
    Lines, 
    Cables, 
    Cables_types, 
    Lines_vs_cables, 
    Country, 
    Brand, 
    Properties, 
    Properties_names, 
    Device_models, 
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