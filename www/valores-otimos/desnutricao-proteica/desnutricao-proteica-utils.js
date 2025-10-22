class DesnutricaoProteicaUtils {
	// Faixas de referência gerais
	static referencia = {
		proteinasTotais: { min: 6.4, max: 8.3 }, // g/dL
		albuminaSerica: { min: 3.5, max: 5.0 }, // g/dL
		rbp: { min: 2.6, max: 7.6 }, // mg/dL
		proteinuria: { min: 0, max: 150 }, // mg/dia
	};

	// Faixas dependentes do sexo
	static referenciaSexo = {
		hemoglobina: {
			homens: { min: 13.8, max: 17.2 },
			mulheres: { min: 12.1, max: 15.1 },
		},
		hematocrito: {
			homens: { min: 40, max: 54 },
			mulheres: { min: 36, max: 48 },
		},
		indiceCreatinina: {
			homens: { min: 0.7, max: 1.3 },
			mulheres: { min: 0.6, max: 1.1 },
		},
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
	 * Avalia todos os parâmetros de desnutrição proteica
	 * @param {Object} dados - JSON com resultados do paciente
	 * @param {"homens"|"mulheres"} sexo - Sexo do paciente
	 */
	static avaliarDesnutricao(dados, sexo = "homens") {
		let resultado = {};

		// Avalia parâmetros gerais
		Object.keys(this.referencia).forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referencia[param]);
			}
		});

		// Avalia parâmetros dependentes do sexo
		Object.keys(this.referenciaSexo).forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referenciaSexo[param][sexo]);
			}
		});

		return resultado;
	}
}

/*
const dadosPacienteDesnutricao = {
  hemoglobina: 12.0,        // g/dL
  hematocrito: 35,           // %
  proteinasTotais: 7.0,      // g/dL
  albuminaSerica: 3.2,       // g/dL
  rbp: 3.0,                  // mg/dL
  indiceCreatinina: 0.65,    // mg/dL
  proteinuria: 160            // mg/dia
};

// Avaliando desnutrição proteica para paciente do sexo feminino
const resultadoDesnutricao = DesnutricaoProteicaUtils.avaliarDesnutricao(dadosPacienteDesnutricao, "mulheres");

console.log("Resultado Desnutrição Proteica:", resultadoDesnutricao);
*/
