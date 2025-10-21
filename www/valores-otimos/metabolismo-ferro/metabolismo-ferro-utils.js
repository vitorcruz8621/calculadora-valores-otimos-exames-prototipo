class MetabolismoFerroUtils {
  // Faixas de referência organizadas
  static referencia = {
    ferro: { min: 60, max: 170 },                  // µg/dL
    transferrina: { min: 200, max: 360 },          // mg/dL
    ferritina: { min: 70, max: 400 },              // ng/mL, ideal > 70
    ctlf: { min: 240, max: 450 },                  // µg/dL
    saturacaoTransferrina: { min: 20, max: 50 }    // %
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
   * Avalia todos os parâmetros do metabolismo do ferro
   * @param {Object} dados - JSON com resultados do paciente
   */
  static avaliarFerro(dados) {
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
const dadosPacienteFerro = {
  ferro: 55,                  // µg/dL
  transferrina: 250,          // mg/dL
  ferritina: 65,              // ng/mL
  ctlf: 400,                  // µg/dL
  saturacaoTransferrina: 55   // %
};

// Avaliando metabolismo do ferro
const resultadoFerro = MetabolismoFerroUtils.avaliarFerro(dadosPacienteFerro);

console.log("Resultado Metabolismo do Ferro:", resultadoFerro);
*/