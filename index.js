class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = Felipao;
        this.idade = 28;
        this.tipo = mago;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou a magia dos codigos';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Felipao', 200, 'mago');
const heroi2 = new Heroi('Douglas', 55, 'guerreiro');
const heroi3 = new Heroi('Arnold', 21, 'monge');
const heroi4 = new Heroi('Chino', 70, 'ninja');

heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken
