class PerfilHormonalUtils {
  // Faixas gerais
  static referencia = {
    adh: { min: 0.5, max: 4.5 },         // pg/mL
    gh: { min: 1, max: 5 },              // ng/mL
    acth: { min: 7, max: 50 },           // pg/mL, manhã
    progesterona: { min: 5, max: 20 },   // ng/mL, fase luteal
    pth: { min: 10, max: 65 },           // pg/mL
    betaHCG: { min: 0, max: 5 }          // mUI/mL, não gestante
  };

  // Faixas dependentes do sexo
  static referenciaSexo = {
    cortisol: {
      manha: { min: 6, max: 23 },        // mcg/dL
      tarde: { min: 3, max: 16 }         // mcg/dL
    },
    fsh: {
      homens: { min: 1, max: 10 },
      mulheres: { min: 1, max: 8 }       // fase folicular
    },
    calcitonina: {
      homens: { min: 0, max: 10 },       // pg/mL
      mulheres: { min: 0, max: 5 }       // pg/mL
    },
    testosterona: {
      homens: { min: 300, max: 1000 },   // ng/dL
      mulheres: { min: 15, max: 70 }     // ng/dL
    },
    prolactina: {
      homens: { min: 2, max: 18 },       // ng/mL
      mulheres: { min: 2, max: 29 }      // ng/mL
    }
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
   * Avalia todos os parâmetros do perfil hormonal
   * @param {Object} dados - JSON com resultados do paciente
   * @param {"homens"|"mulheres"} sexo - Sexo do paciente
   */
  static avaliarHormonal(dados, sexo = "homens") {
    let resultado = {};

    // Avalia parâmetros gerais
    Object.keys(this.referencia).forEach(param => {
      if (dados[param] !== undefined) {
        resultado[param] = this.avaliar(dados[param], this.referencia[param]);
      }
    });

    // Avalia parâmetros dependentes do sexo e/ou horário
    if (dados.cortisol !== undefined) {
      if (dados.cortisol.manha !== undefined) {
        resultado.cortisolManha = this.avaliar(dados.cortisol.manha, this.referenciaSexo.cortisol.manha);
      }
      if (dados.cortisol.tarde !== undefined) {
        resultado.cortisolTarde = this.avaliar(dados.cortisol.tarde, this.referenciaSexo.cortisol.tarde);
      }
    }

    ["fsh", "calcitonina", "testosterona", "prolactina"].forEach(param => {
      if (dados[param] !== undefined) {
        resultado[param] = this.avaliar(dados[param], this.referenciaSexo[param][sexo]);
      }
    });

    return resultado;
  }
}

/*
const dadosPacienteHormonal = {
  adh: 5.0,                     // pg/mL
  cortisol: { manha: 25, tarde: 4 }, // mcg/dL
  fsh: 9,                        // mUI/mL
  gh: 3,                         // ng/mL
  calcitonina: 8,                // pg/mL
  acth: 40,                       // pg/mL
  progesterona: 18,               // ng/mL
  testosterona: 500,             // ng/dL
  pth: 50,                        // pg/mL
  prolactina: 20,                // ng/mL
  betaHCG: 3                      // mUI/mL
};

// Avaliando perfil hormonal para paciente masculino
const resultadoHormonal = PerfilHormonalUtils.avaliarHormonal(dadosPacienteHormonal, "homens");

console.log("Resultado Perfil Hormonal:", resultadoHormonal);
*/