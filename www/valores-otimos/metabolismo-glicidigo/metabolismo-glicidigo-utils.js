class MetabolismoGlicidicoUtils {
	// Faixas de referência (ótimos)
	static referencia = {
		glicemiaJejum: { min: 75, max: 85 }, // mg/dL
		glicemiaPosSobrecarga: { min: 0, max: 140 }, // mg/dL (2h)
		frutosamina: { min: 200, max: 285 }, // μmol/L
		peptideoC: { min: 0.5, max: 2 }, // ng/mL
		hbA1c: { min: 4.8, max: 5.4 }, // %
		acidoLatico: { min: 0.5, max: 2.2 }, // mmol/L
		insulina: { min: 5, max: 8 }, // μU/mL
		indiceHOMA: { min: 0, max: 2.5 }, // sem unidade
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
	 * Avalia todos os parâmetros do metabolismo glicídico
	 * @param {Object} dados - JSON com resultados do paciente
	 */
	static avaliarMetabolismo(dados) {
		let resultado = {};

		Object.keys(this.referencia).forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referencia[param]);
			}
		});

		return resultado;
	}
}

/*
// Dados fictícios do paciente
const dadosPacienteMetabolismo = {
  glicemiaJejum: 95,          // mg/dL
  glicemiaPosSobrecarga: 130, // mg/dL
  frutosamina: 250,           // μmol/L
  peptideoC: 0.4,             // ng/mL
  hbA1c: 6.1,                 // %
  acidoLatico: 1.8,           // mmol/L
  insulina: 9,                // μU/mL
  indiceHOMA: 3.2             // sem unidade
};

// Avaliando
const resultadoMetabolismo = MetabolismoGlicidicoUtils.avaliarMetabolismo(dadosPacienteMetabolismo);

// Exibindo no console
console.log("Resultado Metabolismo Glicídico:", resultadoMetabolismo);
*/
