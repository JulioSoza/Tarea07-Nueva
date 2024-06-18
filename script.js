// Función saludar
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  // Objeto persona
  const persona = {
    nombre: 'Juan'
  };
  
  // Llamar a la función saludar con el contexto de persona usando call()
  const saludo = saludar.call(persona, persona.nombre);
  
  // Imprimir el saludo
  console.log(saludo); // Debe imprimir: Hola, Juan!
  

// Problema II
// Objeto auto
const auto = {
    marca: 'Toyota',
    mostrarMarca: function() {
        return `La marca del auto es ${this.marca}.`;
    }
};

// Objeto moto
const moto = {
    marca: 'Honda'
};

// Llamar al método mostrarMarca del objeto auto con el contexto de moto usando call()
const mensaje = auto.mostrarMarca.call(moto);

// Imprimir el mensaje
console.log(mensaje); // Debe imprimir: La marca de la moto es Honda.

// Problema III
// Objeto persona1
const persona1 = {
    nombre: 'Juan'
};

// Objeto persona2
const persona2 = {
    nombre: 'María'
};

// Función saludar
function saludar() {
    return `Hola, mi nombre es ${this.nombre}.`;
}

// Usar call() para invocar saludar con el contexto de persona2
const saludoPersona2 = saludar.call(persona2);

// Imprimir el saludo
console.log(saludoPersona2); // Debe imprimir: Hola, mi nombre es María.

// Problema IV
// Objeto rectangulo
const rectangulo = {
    ancho: 0,
    alto: 0,
    area: function() {
        return this.ancho * this.alto;
    }
};

// Objeto cuadrado
const cuadrado = {
    lado: 5
};

// Usar call() para invocar area con el contexto de cuadrado
const areaCuadrado = rectangulo.area.call({ ancho: cuadrado.lado, alto: cuadrado.lado });

// Imprimir el área del cuadrado
console.log(areaCuadrado); // Debe imprimir: 25

// Problema V
// Objeto persona1
const persona1V = {
    nombre: 'Carlos'
};

// Objeto persona2
const persona2V = {
    nombre: 'Ana'
};

// Función presentar
function presentar() {
    return `Hola, soy ${this.nombre}.`;
}

// Usar apply() para invocar presentar con el contexto de persona2
const presentacion = presentar.apply(persona2V);

// Imprimir la presentación
console.log(presentacion); // Debe imprimir: Hola, soy Ana.
