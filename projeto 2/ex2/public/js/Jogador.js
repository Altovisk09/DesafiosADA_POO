class Jogador {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.cWidth = this.canvas.width;
        this.cHeigth = this.canvas.height;
        this.px = 0;
        this.py = 0;
        this.largPlayer = 15;
        this.compPlayer = 120;
        this.moveSpeed = 3.5;

        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;

        this.movimento = false;

        const btnI = document.getElementById('iniciar');
        const btnP = document.getElementById('pausar');
        btnI.addEventListener('click', (event)=>{
            this.iniciar();
        })

        btnP.addEventListener('click', (event)=>{
            this.pausar();
        })
    }

    iniciar() {
        this.movimento = true;
    }

    pausar() {
        this.movimento = false;
        this.px = this.px;
        this.py = this.px;
    }

    animacao() {
        if(this.movimento){
            window.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight') {
                    this.right = true;
    
                } else if (event.key === 'ArrowLeft') {
                    this.left = true;
                }
                if (event.key === 'ArrowUp') {
                    this.up = true;
    
                } else if (event.key === 'ArrowDown') {
                    this.down = true;
                }
            });
    
            window.addEventListener('keyup', (event) => {
                if (event.key === 'ArrowRight') {
                    this.right = false;
    
                } else if (event.key === 'ArrowLeft') {
                    this.left = false;
                }
                if (event.key === 'ArrowUp') {
                    this.up = false;
    
                } else if (event.key === 'ArrowDown') {
                    this.down = false;
                }
            });
        }

            if (this.right) {
                this.px += this.moveSpeed;
                if (this.px + this.largPlayer >= this.cWidth) {
                    this.px = this.cWidth - this.largPlayer;
                }
                
            } else if (this.left) {
                this.px -= this.moveSpeed;
                if (this.px <= 0) {
                    this.px = 0;
                }
            }
            if (this.up) {
                this.py -= this.moveSpeed;
                if (this.py <= 0) {
                    this.py = 0;
                }
            } else if (this.down) {
                this.py += this.moveSpeed;
                if (this.py + this.compPlayer >= this.cHeigth) {
                    this.py = this.cHeigth - this.compPlayer;
                }
            }
        this.desenhar();
    }

    desenhar() {
    this.ctx.fillStyle = '#FF0000';
    this.ctx.fillRect(this.px, this.py, this.largPlayer, this.compPlayer);
    }
}