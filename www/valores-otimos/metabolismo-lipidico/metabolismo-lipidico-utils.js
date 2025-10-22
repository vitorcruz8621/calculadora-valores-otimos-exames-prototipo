class MetabolismoLipidicoUtils {
	// Faixas de referência organizadas
	static referencia = {
		triglicerides: { min: 0, max: 100 }, // mg/dL
		colesterolTotal: { min: 0, max: 200 }, // mg/dL
		hdl: { min: 60, max: Infinity }, // mg/dL (quanto maior, melhor)
		ldl: { min: 0, max: 100 }, // mg/dL (ideal <70 em alto risco não tratado aqui)
		vldl: { min: 0, max: 30 }, // mg/dL
		homocisteina: { min: 0, max: 10 }, // µmol/L
		pcrUs: { min: 0, max: 1 }, // mg/L (tolerável <6)
		apoB: { min: 0, max: 90 }, // mg/dL
		indiceCastelliII: { min: 0, max: 2.5 }, // LDL/HDL
	};

	static referenciasSexo = {
		apoA: {
			homens: { min: 120, max: Infinity },
			mulheres: { min: 140, max: Infinity },
		},
		indiceCastelliI: {
			homens: { min: 0, max: 4.5 },
			mulheres: { min: 0, max: 3.5 },
		},
	};

	/**
	 * Avalia um valor com base em faixa
	 */
	static avaliar(valor, ref) {
		if (valor < ref.min) return "BAIXO";
		if (valor > ref.max) return "ALTO";
		return "IDEAL";
	}

	/**
	 * Avalia todos os parâmetros do metabolismo lipídico
	 * @param {Object} dados - JSON com resultados do paciente
	 * @param {"homens"|"mulheres"} sexo - Sexo do paciente (para ApoA e Castelli I)
	 */
	static avaliarMetabolismo(dados, sexo = "homens") {
		let resultado = {};

		// Avalia parâmetros gerais
		Object.keys(this.referencia).forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referencia[param]);
			}
		});

		// Avalia parâmetros dependentes do sexo
		Object.keys(this.referenciasSexo).forEach((param) => {
			if (dados[param] !== undefined) {
				resultado[param] = this.avaliar(dados[param], this.referenciasSexo[param][sexo]);
			}
		});

		return resultado;
	}
}

/*
const dadosPacienteLipideos = {
  triglicerides: 120,       // mg/dL
  colesterolTotal: 180,     // mg/dL
  hdl: 55,                  // mg/dL
  ldl: 110,                 // mg/dL
  vldl: 25,                 // mg/dL
  homocisteina: 8,          // µmol/L
  pcrUs: 0.8,               // mg/L
  apoA: 130,                // mg/dL
  apoB: 85,                 // mg/dL
  indiceCastelliI: 4.0,     // CT/HDL
  indiceCastelliII: 3.0     // LDL/HDL
};

// Avaliando metabolismo lipídico para paciente do sexo masculino
const resultadoLipideos = MetabolismoLipídicoUtils.avaliarMetabolismo(dadosPacienteLipideos, "homens");

console.log("Resultado Metabolismo Lipídico:", resultadoLipideos);
*/
