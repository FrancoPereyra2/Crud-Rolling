export class Contacto{
    #id;
    #apellido;
    #nombre;
    #email;
    #telefono;
    #github;
    #direccion;
    constructor(apellido, nombre, email, telefono, github, direccion){
        this.#id = crypto.randomUUID();
        this.#apellido = apellido;
        this.#nombre = nombre;
        this.#email = email;
        this.#telefono = telefono;
        this.#github = github;
        this.#direccion = direccion;
    }

    //agregar los get y set

    get id() {
        return this.#id;
    }
    set id(value) {
        this.#id = value;
    }
    get apellido() {
        return this.#apellido;
    }
    set apellido(value) {
        this.#apellido = value;
    }
    get nombre() {
        return this.#nombre;
    }     
    set nombre(value) {
        this.#nombre = value;
    }     
    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }
    get telefono() {
        return this.#telefono;
    }
    set telefono(value) {
        this.#telefono = value;
    }
    get github() {
        return this.#github;
    }
    set github(value) {
        this.#github = value;
    }
    get direccion() {
        return this.#direccion;
    }
    set direccion(value) {
        this.#direccion = value;
    }
}

