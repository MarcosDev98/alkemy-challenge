CREATE DATABASE alkemy_fullstack;

USE alkemy_fullstack;

CREATE TABLE user(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(200) NOT NULL,
  email VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  is_deleted VARCHAR(1) NOT NULL,
);

CREATE TABLE transaction(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  concept VARCHAR(50) NOT NULL,
  amount DOUBLE(9,2) NOT NULL,
  date VARCHAR(10) NOT NULL,
  user_id INT NOT NULL,
  id_type_transaction INT NOT NULL,
  category_id INT NOT NULL,
  is_deleted VARCHAR(1) NOT NULL,
);

CREATE TABLE category(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  is_deleted VARCHAR(1) NOT NULL,
);

CREATE TABLE type_transaction(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(20) NOT NULL,
  is_deleted VARCHAR(1) NOT NULL,
);

INSERT INTO type_transaction VALUES(1, 'ingreso', 'N');
INSERT INTO type_transaction VALUES(2, 'egreso', 'N');