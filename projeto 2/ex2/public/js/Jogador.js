class Jogador{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.px = 0; 
        this.py = 0; 
        
        this.desenhar()
    }

    animacao(){

    }
    desenhar(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.fillStyle = '#FFF'
        this.ctx.fillRect(this.px, this.py, 15, 100);

    }
}