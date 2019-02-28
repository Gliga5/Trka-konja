function Entity(name){
    var me = {
        name: name,
        AD: 10,
        HP: 50,
        isDead: function(enemy){
            if (enemy.HP <= 0){
                bool = true;
            }else{
                bool = false;
            }
            return bool;
        },
        napad: function(enemy){
            enemy.HP -= me.AD
            if(me.isDead(enemy) == true){
                return console.log(`%c${enemy.name} is dead.`,"color: red")
            }else{
                return console.log(`%cTi si napao ${enemy.name} i osatlo mu je ${enemy.HP} HP.`,"color: green")
            };
        }
    }
    return me;
}

var player = new Entity("Kostolomac");
var enemy = new Entity("Misica");

for(i = 0; i < 10; i++){
    player.napad(enemy);
    if (enemy.HP > 0){
        enemy.HP += Math.floor(Math.random()*10 + 1);
        console.log(`%c${enemy.name} se regenerisao i sad ima ${enemy.HP} HP.`,`color: orange`)
    }
}