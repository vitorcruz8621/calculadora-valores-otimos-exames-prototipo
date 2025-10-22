class MineralogramaUtils {
	// Faixas de referência organizadas
	static referencia = {
		calcioTotal: { min: 9, max: 10.5 }, // mg/dL
		calcioIonico: { min: 4.6, max: 5.3 }, // mg/dL
		zinco: { min: 90, max: 120 }, // µg/dL
		magnesio: { min: 2.0, max: 2.5 }, // mg/dL
		selenio: { min: 70, max: 120 }, // ng/mL
	};

	// Metais tóxicos (quanto menor melhor → ideal é 0 ou "indetectável")
	static metaisToxicos = ["aluminio", "arsenio", "cadmio", "chumbo", "mercurio", "niquel"];

	/**
	 * Função utilitária para avaliar valores dentro de faixa
	 */
	static avaliar(valor, ref) {
		if (valor < ref.min) return "BAIXO";
		if (valor > ref.max) return "ALTO";
		return "IDEAL";
	}

	/**
	 * Método principal para avaliar minerais e metais
	 * @param {Object} dados - JSON com os dados
	 */
	static avaliarMineraisMetais(dados) {
		let resultado = {};

		// Avaliar minerais
		Object.keys(this.referencia).forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referencia[param]);
			}
		});

		// Avaliar metais tóxicos
		this.metaisToxicos.forEach((metal) => {
			if (dados[metal] !== undefined) {
				resultado[metal] = dados[metal] > 0 ? "ALTO" : "IDEAL";
			}
		});

		return resultado;
	}
}

/*
// Dados fictícios do paciente
const dadosPacienteMinerais = {
  calcioTotal: 8.8,    // mg/dL
  calcioIonico: 5.0,   // mg/dL
  zinco: 100,          // µg/dL
  magnesio: 2.8,       // mg/dL
  selenio: 60,         // ng/mL
  aluminio: 0,         // µg/L
  chumbo: 15,          // µg/L
  mercurio: 0          // µg/L
};

// Avaliando
const resultadoMinerais = MineralogramaUtils.avaliarMineraisMetais(dadosPacienteMinerais);

// Exibindo no console
console.log("Resultado Minerais e Metais:", resultadoMinerais);
*/
