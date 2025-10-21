class BiomarcadoresRenaisUtils {
  // Faixas de referência organizadas
  static referencia = {
    ureia: { min: 15, max: 45 },                // mg/dL
    creatinina: { min: 0.6, max: 1.3 },         // mg/dL
    sodio: { min: 135, max: 145 },              // mEq/L
    potassio: { min: 3.5, max: 5.0 },           // mEq/L
    calcioTotal: { min: 8.5, max: 10.2 },       // mg/dL
    calcioIonico: { min: 4.4, max: 5.4 },       // mg/dL
    fosforo: { min: 2.5, max: 4.5 },            // mg/dL
    magnesio: { min: 1.7, max: 2.2 },           // mg/dL
    acidoUrico: { min: 3.5, max: 7.2 },         // mg/dL
    citrato: { min: 320, max: 1240 },           // mg/dL
    oxalato: { min: 0, max: 45 },               // mg/dL
    proteinaUrinaria: { min: 0, max: 150 }      // mg/dia
  };

  /**
   * Avalia um valor com base em faixa de referência
   */
  static avaliar(valor, ref) {
    if (valor < ref.min) return "BAIXO";
    if (valor > ref.max) return "ALTO";
    return "IDEAL";
  }

  /**
   * Avalia todos os parâmetros dos biomarcadores renais
   * @param {Object} dados - JSON com resultados do paciente
   */
  static avaliarRenais(dados) {
    let resultado = {};

    Object.keys(this.referencia).forEach(param => {
      if (dados[param] !== undefined) {
        resultado[param] = this.avaliar(dados[param], this.referencia[param]);
      }
    });

    return resultado;
  }
}

/*
const dadosPacienteRenais = {
  ureia: 50,               // mg/dL
  creatinina: 1.1,         // mg/dL
  sodio: 140,              // mEq/L
  potassio: 3.2,           // mEq/L
  calcioTotal: 9.0,        // mg/dL
  calcioIonico: 4.5,       // mg/dL
  fosforo: 5.0,            // mg/dL
  magnesio: 2.0,           // mg/dL
  acidoUrico: 8.0,         // mg/dL
  citrato: 500,            // mg/dL
  oxalato: 50,             // mg/dL
  proteinaUrinaria: 120    // mg/dia
};

// Avaliando biomarcadores renais
const resultadoRenais = BiomarcadoresRenaisUtils.avaliarRenais(dadosPacienteRenais);

console.log("Resultado Biomarcadores Renais:", resultadoRenais);
*/