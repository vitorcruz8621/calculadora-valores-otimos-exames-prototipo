
# Calculadora de Valores Ótimos

Uma aplicação desenvolvida em Neutralino.js para análise e interpretação de exames laboratoriais médicos, fornecendo comparação com valores de referência ótimos para diferentes tipos de análises clínicas.

## 📋 Sobre o Projeto

A Calculadora de Valores Ótimos é uma ferramenta médica que permite aos profissionais de saúde:

- Inserir resultados de exames laboratoriais
- Comparar valores com faixas de referência ótimas
- Obter interpretação automática dos resultados (BAIXO, IDEAL, ALTO)
- Visualizar resultados de forma clara e organizada

### 🔬 Tipos de Análises Suportadas

- **Hemograma** - Análise completa do sangue
- **Leucograma** - Contagem de glóbulos brancos
- **Vitaminograma** - Níveis de vitaminas hidrossolúveis e lipossolúveis
- **Mineralograma** - Minerais essenciais e metais tóxicos
- **Metabolismo Glicídico** - Glicose, insulina, HbA1c
- **Metabolismo Lipídico** - Colesterol, triglicérides, lipoproteínas
- **Metabolismo da Tireoide** - Hormônios tireoidianos
- **Metabolismo Hepático** - Enzimas hepáticas
- **Metabolismo do Ferro** - Ferro sérico, ferritina, transferrina
- **Biomarcadores Renais** - Função renal
- **Deficiências Pós-Bariátrica** - Nutrientes críticos pós-cirurgia
- **Desnutrição Proteica** - Proteínas séricas
- **Perfil Hormonal** - Hormônios diversos
- **Testes de Intolerância Alimentar** - Lactose, glúten

## 🚀 Tecnologias Utilizadas

- **Neutralino.js** - Framework para aplicações desktop multiplataforma
- **HTML5/CSS3** - Interface do usuário
- **JavaScript** - Lógica da aplicação
- **Bootstrap 5** - Framework CSS para design responsivo
- **Bootstrap Icons** - Ícones da interface

## 📦 Estrutura do Projeto

```
calculadora-valores-otimos/
├── www/                                    # Arquivos da aplicação web
│   ├── index.html                         # Página principal
│   ├── style.css                          # Estilos globais
│   ├── configs/styles/                    # Estilos adicionais
│   └── valores-otimos/                    # Módulos de análise
│       ├── hemograma/                     # Análise de hemograma
│       ├── leucograma/                    # Análise de leucograma
│       ├── vitaminograma/                 # Análise de vitaminas
│       ├── mineralograma/                 # Análise de minerais
│       ├── metabolismo-glicidigo/         # Metabolismo glicídico
│       ├── metabolismo-lipidico/          # Metabolismo lipídico
│       ├── metabolismo-tireoide/          # Metabolismo tireoidiano
│       ├── metabolismo-hepatico/          # Metabolismo hepático
│       ├── metabolismo-ferro/             # Metabolismo do ferro
│       ├── biomarcadores-renais/          # Biomarcadores renais
│       ├── deficiencias-pos-bariatrica/   # Deficiências pós-bariátrica
│       ├── desnutricao-proteica/          # Desnutrição proteica
│       ├── perfil-hormonal/               # Perfil hormonal
│       └── testes-intolerancia/           # Testes de intolerância
├── bin/                                   # Binários do Neutralino.js
├── Classes_Utilitarios/                   # Documentação dos valores
├── neutralino.config.json                # Configuração do Neutralino.js
└── README.md                             # Este arquivo
```

## 🛠️ Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **Neutralino CLI** instalado globalmente

## 📥 Instalação e Configuração

### 1. Instalar o Neutralino CLI

```bash
npm install -g @neutralinojs/neu
```

### 2. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd calculadora-valores-otimos
```

### 3. Verificar arquivos binários

Os binários do Neutralino.js já estão incluídos na pasta bin. Certifique-se de que os arquivos estão presentes:

- `neutralino-linux_x64`
- `neutralino-mac_universal`
- `neutralino-win_x64.exe`

### 4. Configurar permissões (Linux/Mac)

```bash
chmod +x bin/neutralino-linux_x64
chmod +x bin/neutralino-mac_universal
```

## 🏃‍♂️ Como Executar

### 1. Executar em modo de desenvolvimento

```bash
neu run
```

### 2. Executar em modo específico

```bash
# Modo janela (padrão)
neu run --mode=window

# Modo browser
neu run --mode=browser
```

### 3. Build para distribuição

```bash
neu build
```

Os arquivos compilados estarão na pasta dist.

## 🎯 Como Usar

1. **Inicie a aplicação** usando `neu run`
2. **Selecione o tipo de análise** no menu lateral
3. **Insira os valores** dos exames nos campos correspondentes
4. **Clique em "Analisar"** para obter os resultados
5. **Visualize a interpretação** com cores:
   - 🟢 **Verde (IDEAL)** - Valores dentro da faixa ótima
   - 🟡 **Amarelo (BAIXO)** - Valores abaixo do ideal
   - 🔴 **Vermelho (ALTO)** - Valores acima do ideal

## 🔧 Configuração

### Arquivo neutralino.config.json

```json
{
  "applicationId": "js.neutralino.zero",
  "version": "1.0.0",
  "defaultMode": "window",
  "modes": {
    "window": {
      "title": "calculadora-valores-otimos",
      "width": 900,
      "height": 700,
      "minWidth": 700,
      "minHeight": 500
    }
  }
}
```

## 📚 Documentação dos Valores de Referência

Os valores de referência utilizados estão documentados em:
- listagem_valores_otimos.md
- listagem_valores_otimos_gpt.md

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaAnalise`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova análise'`)
4. Push para a branch (`git push origin feature/NovaAnalise`)
5. Abra um Pull Request

## ⚠️ Importante

**Esta aplicação é uma ferramenta auxiliar e não substitui a interpretação médica profissional. Sempre consulte um profissional de saúde qualificado para interpretação de exames laboratoriais.**

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🆘 Suporte

Em caso de problemas:

1. Verifique se o Neutralino CLI está instalado corretamente
2. Certifique-se de que os binários têm permissão de execução
3. Consulte a [documentação oficial do Neutralino.js](https://neutralino.js.org/)

## 📊 Status do Projeto

✅ **Funcionalidades Implementadas:**
- Interface principal com menu lateral
- 14 tipos diferentes de análises laboratoriais
- Sistema de interpretação automática
- Design responsivo com Bootstrap
- Visualização clara dos resultados

🔄 **Em Desenvolvimento:**
- Relatórios em PDF
- Histórico de análises
- Configurações personalizáveis