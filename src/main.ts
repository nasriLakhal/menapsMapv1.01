/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log("Script started successfully");

let currentPopup: any = undefined;
var i: number = 0;

// Waiting for the API to be ready
WA.onInit()
    .then(() => {
        console.log("Scripting API ready");
        console.log("Player tags: ", WA.player.tags);

        WA.room.onEnterLayer("ZoneMeetA").subscribe(async () => {
            await WA.players.configureTracking();
            const players = WA.players.list();
            console.log("checking players", players);    
            let playersArray = Array.from(players)
            // console.log(playersArray.length)    
            // for (const player of players) {
            //     console.log(`Player ${player.name} is near you`);                
            // }
            // console.log('checking the variable before', WA.state.loadVariable("counter"))
            // // let xx = WA.state.loadVariable('counter') as number; 
            // WA.state.saveVariable("counter", 1);            
            // console.log('checking the variable', WA.state.loadVariable("counter"))            
        });

        WA.room.onLeaveLayer("ZoneMeetA").subscribe(() => {
            i = i - 1;
            if (i === 0) {
                WA.state.saveVariable("doorZoneA", true);
            }
        });

        WA.room.onLeaveLayer("door_open_zone1").subscribe(() => {
            WA.chat.sendChatMessage(
                "Bienvenue chez Menaps Famille! tu peux tout demander ici",
                "Mr Robot"
            );
        });

        


        WA.room.onLeaveLayer("clockZone").subscribe(closePopUp);

        // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
        bootstrapExtra()
            .then(() => {
                console.log("Scripting API Extra ready");
            })
            .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export { };
