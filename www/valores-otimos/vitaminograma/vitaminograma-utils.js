class VitaminogramaUtils {
	// Faixas de referência organizadas
	static referencia = {
		vitaminaC: { min: 0.6, max: 2 }, // mg/dL
		vitaminaB1: { min: 70, max: 180 }, // nmol/L
		vitaminaB2: { min: 5, max: 50 }, // µg/L
		vitaminaB3: { min: 0.5, max: 8.0 }, // µg/mL
		vitaminaB5: { min: 1, max: 3 }, // µg/mL
		vitaminaB6: { min: 5, max: 30 }, // ng/mL
		vitaminaB9: { min: 10, max: 20 }, // ng/mL
		vitaminaB12: { min: 400, max: 800 }, // pg/mL
		vitaminaA: { min: 30, max: 65 }, // µg/dL
		vitaminaD: { min: 40, max: 60 }, // ng/mL
		vitaminaE: { min: 12, max: 25 }, // µg/mL
		vitaminaK: { min: 0.5, max: 2 }, // ng/mL
	};

	/**
	 * Função utilitária para avaliar valores
	 */
	static avaliar(valor, ref) {
		if (valor < ref.min) return "BAIXO";
		if (valor > ref.max) return "ALTO";
		return "IDEAL";
	}

	/**
	 * Método principal para avaliar o vitaminograma
	 * @param {Object} dados - JSON com os dados
	 */
	static avaliarVitaminograma(dados) {
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
const dadosPacienteVitaminas = {
  vitaminaC: 0.4,        // mg/dL
  vitaminaB1: 160,       // nmol/L
  vitaminaB2: 60,        // µg/L
  vitaminaB3: 3,         // µg/mL
  vitaminaB5: 2,         // µg/mL
  vitaminaB6: 10,        // ng/mL
  vitaminaB9: 8,         // ng/mL
  vitaminaB12: 1200,     // pg/mL
  vitaminaA: 50,         // µg/dL
  vitaminaD: 38,         // ng/mL
  vitaminaE: 15,         // µg/mL
  vitaminaK: 1           // ng/mL
};

// Avaliando
const resultadoVitaminograma = VitaminogramaUtils.avaliarVitaminograma(dadosPacienteVitaminas);

// Exibindo no console
console.log("Resultado do Vitaminograma:", resultadoVitaminograma);
*/
