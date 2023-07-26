let lstCont = [
  "Andrea Mendoza",
  "Pedro Banegas",
  "David Garcia",
  "Mario Morales",
];

function agregarContacto(contacto) {
  lstCont.push(contacto);
}

function eliminarContacto(contacto) {
  const index = lstCont.indexOf(contacto);
  lstCont.splice(index, 1);
}

function imprimirContacto(contacto) {
  console.log("\n==Contactos==");
  for (let i = 0; i < contacto.length; i++) {
    console.log(contacto[i]);
  }
}

imprimirContacto(lstCont);

agregarContacto("Julie Espinoza");
imprimirContacto(lstCont);

eliminarContacto("Andrea Mendoza");
imprimirContacto(lstCont);
