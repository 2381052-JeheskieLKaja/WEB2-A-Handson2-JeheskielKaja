// dekalrasi dengan tipe data explicit

let age: number = 19;
let name: string = "Jesky";
let isActive: boolean = true;
let notFound: null = null;
let notDefined: undefined = undefined;
let anything: any = "any";
anything = 41;

// dekalrasi dengan type inference

let gaji = 110000000;
let pesan = "Hello World";

// tipe data void
function logMessage(): void{
    console.log("ini pesan");

}

logMessage();
console.log("Age:", age);
console.log("Name:", name);
console.log("Is Active:", isActive);

export {};