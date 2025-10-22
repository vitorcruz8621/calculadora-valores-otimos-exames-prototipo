class HemogramaUtils {
	// Faixas de referência organizadas
	static referencia = {
		hemacias: {
			homens: { min: 4.7, max: 6.1 }, // milhões/µL
			mulheres: { min: 4.2, max: 5.4 },
		},
		hemoglobina: {
			homens: { min: 13.5, max: 16.5 }, // g/dL
			mulheres: { min: 12, max: 15 },
		},
		hematocrito: {
			homens: { min: 40, max: 52 }, // %
			mulheres: { min: 36, max: 47 },
		},
		vcm: { min: 80, max: 95 }, // fL
		hcm: { min: 27, max: 33 }, // pg
		chcm: { min: 32, max: 36 }, // g/dL
		rdw: { min: 11.5, max: 14.5 }, // %
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
	 * Método principal para avaliar o hemograma
	 * @param {Object} dados - JSON com os dados
	 * @param {"homens"|"mulheres"} sexo - Sexo para aplicar os valores de referência
	 */
	static avaliarHemograma(dados, sexo = "homens") {
		let resultado = {};

		// Hemácias
		if (dados.hemacias !== undefined) {
			resultado.hemacias = this.avaliar(dados.hemacias, this.referencia.hemacias[sexo]);
		}

		// Hemoglobina
		if (dados.hemoglobina !== undefined) {
			resultado.hemoglobina = this.avaliar(dados.hemoglobina, this.referencia.hemoglobina[sexo]);
		}

		// Hematócrito
		if (dados.hematocrito !== undefined) {
			resultado.hematocrito = this.avaliar(dados.hematocrito, this.referencia.hematocrito[sexo]);
		}

		// Parâmetros que não dependem de sexo
		["vcm", "hcm", "chcm", "rdw"].forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referencia[param]);
			}
		});

		return resultado;
	}
}

/*
// Definindo os dados do paciente
const dadosPaciente = {
  hemacias: 5.2,       // milhões/µL
  hemoglobina: 14.8,   // g/dL
  hematocrito: 45,     // %
  vcm: 88,             // fL
  hcm: 29,             // pg
  chcm: 34,            // g/dL
  rdw: 15              // %
};

// Avaliando hemograma para paciente do sexo masculino
const resultado = HemogramaUtils.avaliarHemograma(dadosPaciente, "homens");

// Mostrando resultado
console.log("Resultado do Hemograma:", resultado);

*/
