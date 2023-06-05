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
        var m = Math.max(
            0.4 * this.a1 + 0.6 * this.a2,
            0.4 * this.a1 + 0.6 * this.a3,
            0.4 * this.a3 + 0.6 * this.a2
        );
        if (m <= 10) {
            if (m >= 9) {
                return "SS";
            } else if (m >= 7 && m < 9) {
                return "MS";
            } else if (m >= 5 && m < 7) {
                return "MM";
            } else {
                if (m >= 3) { return "MI"; }
                else if (m >= 0.1 && m < 3){return "II";}
                return "SR";
            }
        } else {
            return "erro na matrix de notas"
        }
    }
}

module.exports = Nota;
