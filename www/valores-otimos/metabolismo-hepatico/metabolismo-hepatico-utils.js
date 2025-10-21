class MetabolismoHepaticoUtils {
  // Faixas de referência organizadas
  static referencia = {
    alt: { min: 10, max: 40 },            // U/L
    ast: { min: 10, max: 40 },            // U/L
    ggt: { min: 9, max: 48 },             // U/L
    bilirrubinaTotal: { min: 0.3, max: 1.2 } // mg/dL
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
   * Avalia todos os parâmetros do metabolismo hepático
   * @param {Object} dados - JSON com resultados do paciente
   */
  static avaliarHepatico(dados) {
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
const dadosPacienteHepatico = {
  alt: 50,               // U/L
  ast: 35,               // U/L
  ggt: 60,               // U/L
  bilirrubinaTotal: 1.0  // mg/dL
};

// Avaliando metabolismo hepático
const resultadoHepatico = MetabolismoHepaticoUtils.avaliarHepatico(dadosPacienteHepatico);

console.log("Resultado Metabolismo Hepático:", resultadoHepatico);
*/