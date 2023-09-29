class Jogador{
    constructor(ctx, canvas, teclado){
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
        this.jogador.addEventListener('load', ()=>{
            this.desenhar()
        })
    }

    gerenciar(){
        if(this.teclado.direita){
            this.px += this.velocidade
        }else if(this.teclado.esquerda){
            this.px -= this.velocidade
        }else if(this.teclado.cima){
            this.py -= this.velocidade
        }else if(this.teclado.baixo){
            this.py += this.velocidade
        }
    }

    animacao(){
        cWidth = canvas.width;
                cHeigth = canvas.height;
            
            altSprite
                if (direita) {
                    px += velocidade;
                    numSprite++
                    if (numSprite >= 5) {
                        numSprite = 0;
                    }
                    if(px + largSprite >= cWidth - 36){
                        px = cWidth - largSprite - 36
                    }
                } else if (esquerda) {
                    px -= velocidade;
                    numSprite++
                    if (numSprite >= 5) {
                        numSprite = 0;
                    }
                     if (px <= -54) {
                         px = -54;
                     }
                }
                if (cima) {
                    py -= velocidade;

                    numSprite++
                    if (numSprite >= 5) {
                        numSprite = 0;
                    }
                    if (py <= -34) {
                         py = -34;
                     }
                } else if (baixo) {
                    py += velocidade;
                    numSprite++
                    if (numSprite >= 5) {
                        numSprite = 0;
                    }
                    if (py + altSprite >= cHeigth - 36) {
                        py = cHeigth - altSprite - 36;
                     }
                }
                desenhar();

                setTimeout(() => {
                    requestAnimationFrame(animacao);
                }, 50);
            }
            animacao();
    }

    desenhar(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.gerenciar();
        this.animacao();

        let largImg = this.jogador.width;
        let altImg = this.jogador.height;
        let largSprite = largImg / this.SpriteX;
        let altSprite = altImg / this.SpriteY;

                this.posIniY = colunSprite * altSprite;
                this.posIniX = numSprite * largSprite;

        this.ctx.drawImage(this.jogador, this.posIniX, this.posIniY, largSprite, altSprite, this.px, this.py, 150, 150)
    }
}

module.exports = Jogador;