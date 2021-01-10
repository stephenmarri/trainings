new Vue ({
    el:"#vue-app",
    data:{
        health: 100,
        perPunch: 20,
        gameOver: false,
    },
    methods: {
        punch:function(){
            this.health -= this.perPunch;
            if(this.health == 0){
                this.gameOver = true;
            }
        },
        restart:function(){
            this.gameOver = false;
            this.health = 100;
        }
    }
})