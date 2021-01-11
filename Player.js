class Player {
    constructor(){}

    getcount(){
        console.log("hi")
        var playerref=database.ref('playercount')
        playerref.on("value",function(data){
            playercount=data.val()
            console.log(playercount)
        })
    }
    updateCount(count){
        database.ref('/').update({playercount:count})
    }
    update(name){
        var playerindex="player"+playercount
        database.ref(playerindex).set({name:name})
    }
}