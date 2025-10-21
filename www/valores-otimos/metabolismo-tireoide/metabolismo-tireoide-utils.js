class MetabolismoTireoideUtils {
  // Faixas de referência organizadas
  static referencia = {
    t3Total: { min: 80, max: 180 },      // ng/dL
    t3Reversa: { min: 10, max: 24 },     // ng/dL
    t4Total: { min: 4.5, max: 12.5 },    // µg/dL
    t4Livre: { min: 0.8, max: 1.8 },     // ng/dL
    tsh: { min: 0.5, max: 2.5 },         // mUI/L
    trab: { min: 0, max: 1.75 },         // UI/L
    antiTPO: { min: 0, max: 9 },         // UI/mL
    tireoglobulina: { min: 0, max: 30 }, // ng/mL
    antiTG: { min: 0, max: 4 },          // UI/mL
    tgb: { min: 12, max: 30 }            // mcg/mL
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
   * Avalia todos os parâmetros do metabolismo da tireoide
   * @param {Object} dados - JSON com resultados do paciente
   */
  static avaliarTireoide(dados) {
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
const dadosPacienteTireoide = {
  t3Total: 190,       // ng/dL
  t3Reversa: 12,      // ng/dL
  t4Total: 10,        // µg/dL
  t4Livre: 2.0,       // ng/dL
  tsh: 3.0,           // mUI/L
  trab: 0.5,          // UI/L
  antiTPO: 10,        // UI/mL
  tireoglobulina: 25, // ng/mL
  antiTG: 5,          // UI/mL
  tgb: 28             // mcg/mL
};

// Avaliando metabolismo da tireoide
const resultadoTireoide = MetabolismoTireoideUtils.avaliarTireoide(dadosPacienteTireoide);

console.log("Resultado Metabolismo da Tireoide:", resultadoTireoide);
*/