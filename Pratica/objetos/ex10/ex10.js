const rest = document.getElementById('rest')

const curso = {
    titulo: "JavaScript Intermediário",
    estudantes: [
        { nome: "João", progresso: 85 },
        { nome: "Ana", progresso: 40 },
        { nome: "Juliano", progresso: 72 },
        { nome: "Patrícia", progresso: 60 }
    ],

    gerarRelatorio: function () {
        let totalProgresso = 0;

        for (let estudante of this.estudantes) {
            const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
            rest.innerHTML += `<p>Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}</p>`

            totalProgresso += estudante.progresso;
        }

        const media = (totalProgresso / this.estudantes.length).toFixed(2);

        rest.innerHTML += `<p>\nTotal de estudantes: ${this.estudantes.length}</p>`

        rest.innerHTML += `<p>Média geral da turma: ${media}%</p>`


    }
};

curso.gerarRelatorio();