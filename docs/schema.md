# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null, indexed, unique
city_id         | integer   | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
date        | string    | not null
time        | string    | not null
address     | string    | not null
description | string    | not null
host_id     | integer   | not null
city_id     | integer   | not null

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | integer   | not null
image_url   | string    | not null

## hosts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    | not null
user_id     | integer   | not null, indexed
