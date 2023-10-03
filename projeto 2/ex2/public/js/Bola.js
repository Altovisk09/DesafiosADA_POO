class Bola {
    constructor(ctx, jogador) {
        this.ctx = ctx;
        this.jogador = jogador;
        this.px = (this.ctx.canvas.width/2);
        this.py = (this.ctx.canvas.height/2);
       
        this.largBola = 12;
        this.compBola = 12;
        
        this.movimento = false;

        this.moveSpeed = 3.5;
        this.dirX = 0;
        this.dirY = 0;

        const btnI = document.getElementById('iniciar');
        const btnP = document.getElementById('pausar');
        btnI.addEventListener('click', (event)=>{
            this.iniciar();
        });
        btnP.addEventListener('click', (event)=>{
            this.pausar();
        })


    }

    iniciar() {
        this.movimento = true;
        this.dirX = -1;
        this.dirY = (Math.random()*10 > 5 ? 1 : -1);
    }

    pausar() {
        this.movimento = false;
        this.dirX = this.px;
        this.dirY = this.py;
    }

    animacao() {
        if(this.movimento){
            this.px += (this.dirX * this.moveSpeed);
            this.py += (this.dirY * this.moveSpeed);
            if(this.px >= this.ctx.canvas.width - this.largBola){
                this.dirX = -1;
            }else if(this.px <= 0){
                this.dirX = 1;
            }

            if(this.py >= this.ctx.canvas.height - this.compBola){
                this.dirY = -1;
            }else if(this.py <= 0){
                this.dirY = 1;
            }

            if (
                (this.px <= this.jogador.px + this.jogador.largPlayer &&
                this.px  + this.largBola >= this.jogador.px) && 
                (this.py + this.compBola >= this.jogador.py && this.py <= this.jogador.py + this.jogador.compPlayer)
            ){
                this.dirX = 1;
            }
            
                
            
    }
        this.desenhar();
    }

    desenhar() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(this.px, this.py, this.largBola, this.compBola);
    }
}