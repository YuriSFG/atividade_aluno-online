class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        const media = this.mediaFinal();

        if (media >= 0 && media < 2.5) {
            return "II";
        } else if (media >= 2.5 && media < 5) {
            return "MI";
        } else if (media >= 5 && media < 7.5) {
            return "MM";
        } else if (media >= 7.5 && media < 9) {
            return "MS";
        } else if (media >= 9 && media <= 10) {
            return "SS";
        } else {
            throw new Error("Nota inválida.");
        }
    }
}

module.exports = Nota;