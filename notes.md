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
