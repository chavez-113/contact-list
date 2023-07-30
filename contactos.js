
let lstCont = [
  {
    alias: "Andrea Mendoza",
    id: 1,
    nombres: "Andrea Beatriz",
    apellidos: "Morales Mendoza",
    telefono: 95869317,
    ubicaciones: {
      ciudad: "El Progreso",
      direccion: "La Planeta",
    },
  },
  {
    alias: "Pedro Banegas",
    id: 2,
    nombres: "Pedro Antonio",
    apellidos: "Banegas Maradiaga",
    telefono: 85748525,
    ubicaciones: {
      ciudad: "San Pedro Sula",
      direccion: "La Planeta",
    },
  },
  {
    alias: "David Maradiaga",
    id: 3,
    nombres: "David Giovanny",
    apellidos: "Hernandez Maradiaga",
    telefono: 85747415,
    ubicaciones: {
      ciudad: "San Pedro Sula",
      direccion: "La Satelite",
    },
  },
  {
    alias: "Mario Almendarez",
    id: 4,
    nombres: "Mario Antonio",
    apellidos: "Almendarez Benedetti",
    telefono: 85246315,
    ubicaciones: {
      ciudad: "El Progreso",
      direccion: "Los Pinares",
    },
  },
];

//funciones

function agregarContacto(contacto) {
  lstCont.push(contacto);
}

//Imprimir Contactos normales
function imprimirContacto(contacto) {
  console.log("\n==Contactos==");
  for (let i = 0; i < contacto.length; i++) {
    console.log(contacto[i]);
  }
}

imprimirContacto(lstCont);

//Agregar
agregarContacto({
  alias: "Julie Espinoza",
  id: 4,
  nombres: "Ana Julie",
  apellidos: "Espinoza Carbajales",
  telefono: 85748525,
  ubicaciones: {
    ciudad: "San Pedro Sula",
    direccion: "La Planeta",
  },
});

imprimirContacto(lstCont);

//borrar
function eliminarContacto(contacto) {
  const index = lstCont.findIndex((lstCont) => lstCont.alias == contacto);
  lstCont.splice(index, 1);
}

eliminarContacto("Pedro Banegas");
imprimirContacto(lstCont);

function actualizarContacto(contacto, propiedades) {
  const index = lstCont.findIndex((lstCont) => lstCont.alias === contacto);
    const actualizado = Object.assign(lstCont[index], propiedades);
    console.log(actualizado);
}

actualizarContacto("Andrea Mendoza", { alias: "Andrea M.", telefono: 98765432 });
imprimirContacto(lstCont);