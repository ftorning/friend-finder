create database if not exists friend_finder;

use friend_finder;

create table if not exists user (
    id int auto_increment not null,
    name varchar(100) not null,
    photo varchar(160) not null,
    primary key (id),
    index (id)
);

create table if not exists question (
    id int auto_increment not null,
    name varchar(100),
    type varchar(50),
    text varchar(255),
    primary key (id),
    index (id)
);

create table if not exists question_options (
    id int auto_increment not null,
    question_id int not null,
    text varchar(50) not null,
    value int not null,
    primary key (id),
    foreign key (question_id) references question(id),
    unique (question_id, text),
    index (id)
);

create table if not exists user_answers (
    user_id int not null,
    answer_id int not null,
    primary key (user_id, answer_id),
    constraint `fk_userJunction` foreign key (user_id) references user(id),
    constraint `fk_answerJunction` foreign key (answer_id) references question_options(id),
    index (user_id, answer_id)
);