class DeficienciasPosBariatricaUtils {
  // Faixas de referência organizadas
  static referencia = {
    vitaminaB12: { min: 500, max: 1000 },             // pg/mL
    acidoFolico: { min: 5, max: 16 },                // ng/mL
    calcioTotal: { min: 8.5, max: 10.2 },            // mg/dL
    ferro: { min: 60, max: 170 },                    // µg/dL
    ferritina: { min: 70, max: 400 },                // ng/mL, ideal > 70
    ctlf: { min: 240, max: 450 },                    // µg/dL
    saturacaoTransferrina: { min: 20, max: 50 },     // %
    albumina: { min: 3.5, max: 5.0 }                 // g/dL
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
   * Avalia todos os parâmetros de deficiências pós-bariátrica
   * @param {Object} dados - JSON com resultados do paciente
   */
  static avaliarDeficiencias(dados) {
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
const dadosPacienteBariatrica = {
  vitaminaB12: 450,           // pg/mL
  acidoFolico: 12,            // ng/mL
  calcioTotal: 9.0,           // mg/dL
  ferro: 55,                  // µg/dL
  ferritina: 60,              // ng/mL
  ctlf: 400,                  // µg/dL
  saturacaoTransferrina: 55,  // %
  albumina: 3.2               // g/dL
};

// Avaliando deficiências pós-bariátrica
const resultadoBariatrica = DeficienciasPosBariatricaUtils.avaliarDeficiencias(dadosPacienteBariatrica);

console.log("Resultado Deficiências Pós-Bariátrica:", resultadoBariatrica);
*/