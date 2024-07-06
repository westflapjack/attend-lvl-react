# Developer Notes

## Scaffolding

Created project and scaffolding by:

```shell
composer create-project laravel/laravel attend-lvl
cd attend-lvl
composer require laravel/breeze
php artisan breeze:install react
npm i
git init .
php artisan migrate:fresh --seed
```

Seeding creates, among other things, the "users" table and a single user with a username of "test@example.com"
and a password of "password".

## Styling

Let's start getting rid of Tailwind:

```shell
npm i node-sass
mkdir resources/sass
```

Add npm scripts to package.json for compiling SASS

```json
{
    "sass:compile": "node-sass resources/sass/main.scss public/style.css",
    "sass:watch": "node-sass resources/sass/main.scss public/style.css -w"
}
```

___

## Classrooms

Generate the Classroom model and all other associated classes:

```shell
php artisan make:model -a Classroom
```

- Edit the migration
- Run the migration `php artisan migrate`
- Define the Classroom seeding in `ClassroomFactory::definition()`
- Update `DatabaseSeeder::run()` to include the Classroom seeding

___

**Import Material Design components**

```shell
npm install @mui/material @emotion/react @emotion/styled
```

(This may have been a mistake, as it seems to style with Tailwind, which is not what I want.)
___

## Students

Generate the Students model and all other associated classes:

```shell
php artisan make:model -a Student
```

- Edit the migration
- Run the migration `php artisan migrate`
- Define the Student seeding in `StudentFactory::definition()`
- Update `DatabaseSeeder::run()` to include the Classroom seeding
- Write the Students JSX page component
- Update `StudentsController::index()`
- Add the route for '/students'
- migrate and seed

```shell
php artisan migrate:fresh --seed
```
