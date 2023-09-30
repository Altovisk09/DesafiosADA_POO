class Jogador {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.px = 0;
        this.py = 0;
        this.numSprite = 0;
        this.colunSprite;
        this.posIniX = 0;
        this.posIniY = 0;
        this.spriteX = 8;
        this.spriteY = 8;
        this.velocidade = 5;

        this.direita = false;
        this.esquerda = false;
        this.cima = false;
        this.baixo = false;

        this.jogador = new Image();
        this.jogador.src = './char_a_p1_0bas_humn_v01.png';
        this.largImg = this.jogador.width;
        this.altImg = this.jogador.height;
        this.largSprite = this.largImg / this.spriteX;
        this.altSprite = this.altImg / this.spriteY;

        this.jogador.addEventListener('load', () => {
            this.animacao();
        });
    }

    animacao() {
        let cWidth = this.canvas.width;
        let cHeigth = this.canvas.height;

        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.direita = true;
                this.colunSprite = 6;
                console.log(this.colunSprite)
            } else if (event.key === 'ArrowLeft') {
                this.esquerda = true;
                this.colunSprite = 7;
            }
            if (event.key === 'ArrowUp') {
                this.cima = true;
                this.colunSprite = 5;
            } else if (event.key === 'ArrowDown') {
                this.baixo = true;
                this.colunSprite = 4;
            }
        });

        window.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowRight') {
                this.direita = false;
            } else if (event.key === 'ArrowLeft') {
                this.esquerda = false;
            }
            if (event.key === 'ArrowUp') {
                this.cima = false;
            } else if (event.key === 'ArrowDown') {
                this.baixo = false;
            }
            if (!this.direita && !this.esquerda && !this.cima && !this.baixo) {
                this.colunSprite = 0;
                this.numSprite = 0;
            }
        });

        if (this.direita) {
            this.px += this.velocidade;
            this.numSprite++;
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.px + this.largSprite >= cWidth - 36) {
                this.px = cWidth - this.largSprite - 36;
            }
        } else if (this.esquerda) {
            this.px -= this.velocidade;
            this.numSprite++;
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.px <= -54) {
                this.px = -54;
            }
        }
        if (this.cima) {
            this.py -= this.velocidade;
            this.numSprite++;
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.py <= -34) {
                this.py = -34;
            }
        } else if (this.baixo) {
            this.py += this.velocidade;
            this.numSprite++;
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.py + this.altSprite >= cHeigth - 36) {
                this.py = cHeigth - this.altSprite - 36;
            }
        }

        this.desenhar()
        setTimeout(() => {
            requestAnimationFrame(this.animacao());
        }, 50);
    }

    desenhar() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.posIniX = this.numSprite * this.largSprite;
        this.posIniY = this.colunSprite * this.altSprite;
        
        this.ctx.drawImage(this.jogador, this.posIniX, this.posIniY, this.largSprite, this.altSprite, this.px, this.py, 150, 150);
    }
}