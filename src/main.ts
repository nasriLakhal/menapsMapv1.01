/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { ActionMessage } from "@workadventure/iframe-api-typings";
console.log("Script started successfully");

let currentPopup: any = undefined;
var i: number = 0;
function displayDoor(state: unknown) {
    if (state === true) {
        WA.room.showLayer("door/door_opened");
        WA.room.hideLayer("door/door_closed");
    } else {
        WA.room.hideLayer("door/door_opened");
        WA.room.showLayer("door/door_closed");
    }
}
// Waiting for the API to be ready
WA.onInit()
    .then(async () => {
        console.log("Scripting API ready");
        console.log("Player tags: ", WA.player.tags);

        // WA.room.onEnterLayer("ZoneMeetA").subscribe(async () => {
        //     await WA.players.configureTracking();
        //     const players = WA.players.list();
        //     console.log("checking players", players);
        //     // let playersArray = Array.from(players)
        //     // console.log(playersArray.length)
        //     // for (const player of players) {
        //     //     console.log(`Player ${player.name} is near you`);
        //     // }
        //     // console.log('checking the variable before', WA.state.loadVariable("counter"))
        //     // // let xx = WA.state.loadVariable('counter') as number;
        //     // WA.state.saveVariable("counter", 1);
        //     // console.log('checking the variable', WA.state.loadVariable("counter"))
        // });

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

        WA.room.onEnterLayer("ZoneMeetA").subscribe(() => {
            console.log("checking here the debuggig", WA.player);
            WA.player.state.saveVariable("currentRoom", "ZoneMeetA", {
                public: true,
                persist: false,
            });
        });

        WA.room.onLeaveLayer("ZoneMeetA").subscribe(() => {
            console.log('iam leaving')
            WA.player.state.saveVariable("currentRoom", undefined, {
                public: true,
                persist: false,
            });
        });

        // We need to call this method to tell WorkAdventure to send players information to the scripting API
        await WA.players.configureTracking({
            players: true,
            movement: false,
        });

        // When someone walks on the doorstep (outside the room), we check if the door is closed
        // If the door is closed, and if no one is inside (because no player has the "currentRoom" variable set to "meetingRoom"),
        // we open the door automatically.
        WA.room.onEnterLayer("door_open_zoneA_menaps").subscribe(() => {
            if (WA.state.doorState === false) {
                const players = WA.players.list();
                for (const player of players) {
                    if (player.state.currentRoom === "ZoneMeetA") {
                        // Someone is in the room
                        return;
                    }
                }
                // If no one is in the room and if the door is closed, we open it automatically
                WA.state.doorState = true;
            }
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
