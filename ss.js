let myArray = [1, 2, 3, 4, 5];
let par = []
let impar = []

myArray.map(num => num % 2 === 0 ? par.push(num) : impar.push(num))
console.log(par)
console.log(impar)


create database Characters;
drop database Characters;
use Characters;
use master

create table Naruto (
    id int primary key not null  identity (1,1),
    name char(30) not null,
    clan char(30) not null,
    age char(30) not null,
);


create database Prueba;

use Prueba;

create table Alumno (
    id int primary key not null  identity (1,1),
    nombre varchar(30) not null,
    apellido varchar(40) not null,
    Fecha_Nacimiento datetime
);

create table Profesores (
    id int primary key not null  identity (1,1),
    nombre varchar(30) not null,
    domicilio text not null,
);

create table Asignatura (
    id int primary key not null  identity (1,1),
    nombre varchar(30) not null,
);


create table Inscripcion (
    id int primary key not null  identity (1,1),
    idAsignatura int not null,
    idProfesor int not null,
    idAlumno int not null,
    constraint FK_Asignatura foreign key (idAsignatura) references Asignatura(id),
    constraint FK_Profesor foreign key (idProfesor) references Profesores(id),
    constraint FK_Alumno foreign key (idAlumno) references Alumno(id)
);

/*INSERTS Alumno*/
insert into Alumno (nombre, apellido, Fecha_Nacimiento) values ('Juan', 'Perez', '01/01/2000');

/*INSERTS Profesor*/
insert into Profesores (nombre, domicilio) values ('Erudito', 'Libertad del Toachi');

/*INSERTS Asignatura*/
insert into Asignatura (nombre) values  ('Lengua') ;

/*INSERTS Inscripcion*/
insert into Inscripcion (idAsignatura, idProfesor, idAlumno) values (4, 4, 4);

/*QUERY*/
select * from Alumno where nombre = 'Juan';

/*QUERY TWO TABLES*/
select * from Alumno, Profesores where Alumno.id = Profesores.id;
select * from Alumno as A,  Profesores as P, Asignatura as Asi,
Inscripcion as Ins where A.id = Ins.idAlumno and P.id = Ins.idProfesor and Asi.id = Ins.idAsignatura;

select  * from Alumno join Profesores on Alumno.id = Profesores.id;

/* EXAMPLE 2 */
create database Tutorial;
use Tutorial;
drop table Persona
create table Persona (
    id_Persona int primary key not null  identity (1,1),
    nombre varchar(30) not null,
    apellido varchar(40) not null,
    Fecha_Nacimiento datetime
);

drop table Ciudades
create table Ciudades (
    id_Ciudad int primary key not null  identity (1,1),
    nombre varchar(30) not null,
);

drop table Pais
create table Pais (
    id_Pais int primary key not null  identity (1,1),
    nombre varchar(30) not null,
);

drop table Venta
create  table Venta (
    id_Venta int primary key not null  identity (1,1),
    fecha datetime not null,
    id_Ciudad int not null,
    id_Pais int not null,
    id_Persona int not null,
    constraint  FK_Ciudad foreign key (id_Ciudad) references Ciudades(id_Ciudad),
    constraint  FK_Pais foreign key (id_Pais) references Pais(id_Pais),
    constraint  FK_Persona foreign key (id_Persona) references Persona(id_Persona)
);

insert into Persona (nombre, apellido, Fecha_Nacimiento) values ('Jorge', 'Loor', '01/01/2000');
insert into Ciudades (nombre) values ('Santo Domingo');
insert into Pais (nombre) values ('Ecuador');
insert into Venta (fecha, id_Ciudad, id_Pais, id_Persona) values ('01/01/2000', 1, 1, 1);
