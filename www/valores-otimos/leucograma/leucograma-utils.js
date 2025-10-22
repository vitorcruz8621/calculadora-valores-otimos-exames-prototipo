class LeucogramaUtils {
	// Faixas de referência organizadas
	static referencia = {
		leucocitosTotais: { min: 4500, max: 10000 }, // células/µL
		neutrofilos: { min: 40, max: 70 }, // %
		linfocitos: { min: 20, max: 40 }, // %
		moncitos: { min: 2, max: 8 }, // %
		eosinofilos: { min: 1, max: 4 }, // %
		basofilos: { min: 0.5, max: 1 }, // %
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
	 * Método principal para avaliar o leucograma
	 * @param {Object} dados - JSON com os dados
	 */
	static avaliarLeucograma(dados) {
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
const dadosPacienteLeucograma = {
  leucocitosTotais: 12000,  // células/µL
  neutrofilos: 75,          // %
  linfocitos: 18,           // %
  moncitos: 5,              // %
  eosinofilos: 2,           // %
  basofilos: 0.7            // %
};

// Avaliando
const resultadoLeucograma = LeucogramaUtils.avaliarLeucograma(dadosPacienteLeucograma);

// Exibindo no console
console.log("Resultado do Leucograma:", resultadoLeucograma);

*/
