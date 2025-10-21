class TestesIntoleranciaUtils {
  static referencia = {
    lactose: { min: 20, max: 25 }, // ppm hidrogênio exalado
    gliadina: { max: 20 },         // U/mL (IgA, IgG, IgM)
    endomisio: { positivo: false }, // negativo < 1:10
    transglutaminase: {
      IgA: { max: 4 },             // U/mL
      IgG: { max: 6 }              // U/mL
    }
  };

  /**
   * Avalia lactose pelo teste de hidrogênio
   */
  static avaliarLactose(valor) {
    if (valor >= this.referencia.lactose.min && valor <= this.referencia.lactose.max) {
      return "POSITIVO para intolerância à lactose";
    }
    return "NEGATIVO (normal)";
  }

  /**
   * Avalia anticorpos contra gliadina
   */
  static avaliarGliadina(valor) {
    return valor < this.referencia.gliadina.max ? "NEGATIVO" : "POSITIVO";
  }

  /**
   * Avalia anticorpos anti-endomísio
   */
  static avaliarEndomisio(resultado) {
    // resultado deve ser booleano ou string ("negativo"/"positivo")
    if (typeof resultado === "string") {
      resultado = resultado.toLowerCase() === "positivo";
    }
    return resultado ? "POSITIVO" : "NEGATIVO";
  }

  /**
   * Avalia anti-transglutaminase
   */
  static avaliarTransglutaminase(dados) {
    let r = {};
    if (dados.IgA !== undefined) {
      r.IgA = dados.IgA < this.referencia.transglutaminase.IgA.max ? "NEGATIVO" : "POSITIVO";
    }
    if (dados.IgG !== undefined) {
      r.IgG = dados.IgG < this.referencia.transglutaminase.IgG.max ? "NEGATIVO" : "POSITIVO";
    }
    return r;
  }

  /**
   * Avaliação geral
   */
  static avaliarIntolerancia(dados) {
    let resultado = {};

    if (dados.lactose !== undefined) {
      resultado.lactose = this.avaliarLactose(dados.lactose);
    }
    if (dados.gliadina !== undefined) {
      resultado.gliadina = this.avaliarGliadina(dados.gliadina);
    }
    if (dados.endomisio !== undefined) {
      resultado.endomisio = this.avaliarEndomisio(dados.endomisio);
    }
    if (dados.transglutaminase !== undefined) {
      resultado.transglutaminase = this.avaliarTransglutaminase(dados.transglutaminase);
    }

    return resultado;
  }
}

/*
const dadosPacienteIntolerancia = {
  lactose: 22,                     // ppm de H2 exalado
  gliadina: 35,                     // U/mL
  endomisio: "positivo",            // ou true
  transglutaminase: { IgA: 6, IgG: 3 }
};

const resultadoIntolerancia = TestesIntoleranciaUtils.avaliarIntolerancia(dadosPacienteIntolerancia);

console.log("Resultado Testes de Intolerância:", resultadoIntolerancia);
*/