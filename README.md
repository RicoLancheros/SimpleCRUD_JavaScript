# SimpleCRUD_JavaScript


Base de datos (Mysql)
create database CrudProductosRichard;
use CrudProductosRichard;

#DB - Primera Clase

create table products(
Id int auto_increment not null,
name varchar(100) not null,
price double not null,
description varchar(255),
primary key(Id)
);

#DB - Segunda Clase:

create table users(
Id int auto_increment,
username varchar(155) not null,
email varchar(155) not null,
password varchar(155) not null,
primary key(Id)
);
