class Jogador {
    constructor(ctx, canvas, teclado) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.teclado = teclado;
        this.px = 0;
        this.py = 0;
        this.numSprite = 0;
        this.colunSprite;
        this.posIniX = 0;
        this.posIniY = 0;
        this.SpriteX = 8;
        this.SpriteY = 8;
        this.velocidade = 5;

        this.jogador = new Image();
        this.jogador.src = './char_a_p1_0bas_humn_v01.png';
        this.largImg = this.jogador.width;
        this.altImg = this.jogador.height;
        this.largSprite = this.largImg / this.SpriteX;
        this.altSprite = this.altImg / this.SpriteY;

        this.jogador.addEventListener('load', () => {
            this.desenhar()
        })
    }

    gerenciar() {
        if (this.teclado.direita) {
            this.px += this.velocidade
        } else if (this.teclado.esquerda) {
            this.px -= this.velocidade
        } else if (this.teclado.cima) {
            this.py -= this.velocidade
        } else if (this.teclado.baixo) {
            this.py += this.velocidade
        }
    }

    animacao() {
        let cWidth = this.canvas.width;
        let cHeigth = this.canvas.height;

        if (this.teclado.direita) {
            this.px += this.velocidade;
            this.numSprite++
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.px + this.largSprite >= cWidth - 36) {
                this.px = cWidth - this.largSprite - 36
            }
        } else if (this.teclado.esquerda) {
            this.px -= this.velocidade;
            this.numSprite++
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.px <= -54) {
                this.px = -54;
            }
        }
        if (this.teclado.cima) {
            this.py -= this.velocidade;

            this.numSprite++
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.py <= -34) {
                this.py = -34;
            }
        } else if (this.teclado.baixo) {
            this.py += this.velocidade;
            this.numSprite++
            if (this.numSprite >= 5) {
                this.numSprite = 0;
            }
            if (this.py + this.altSprite >= cHeigth - 36) {
                this.py = cHeigth - this.altSprite - 36;
            }
        }

        setTimeout(() => {
            requestAnimationFrame(this.animacao);
        }, 50);
    }

    sprites() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                direita = true;
                colunSprite = 6;

            } else if (event.key === 'ArrowLeft') {
                esquerda = true;
                colunSprite = 7;
            }
            if (event.key === 'ArrowUp') {
                cima = true;
                colunSprite = 5;
            } else if (event.key === 'ArrowDown') {
                baixo = true;
                colunSprite = 4;
            }
        })

        window.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowRight') {
                direita = false;
            } else if (event.key === 'ArrowLeft') {
                esquerda = false;
            }
            if (event.key === 'ArrowUp') {
                cima = false;
            } else if (event.key === 'ArrowDown') {
                baixo = false;
            }
            if (!direita && !esquerda && !cima && !baixo) {
                colunSprite = 0;
                numSprite = 0;
            }
        })
    }
    desenhar() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.gerenciar();
        this.animacao();

        this.ctx.drawImage(this.jogador, this.posIniX, this.posIniY, this.largSprite, this.altSprite, this.px, this.py, 150, 150)
    }
}

module.exports = Jogador;