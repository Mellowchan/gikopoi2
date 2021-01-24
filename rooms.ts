import { Room } from "./types";

export const rooms: { [roomId: string]: Room } = {
    bar: {
        id: "bar",
        scale: 1,
        size: { x: 9, y: 9 },
        originCoordinates: { x: 0, y: 660 },
        spawnPoint: "right",
        backgroundImageUrl: "rooms/bar/background.png",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 2, y: 1, url: "table.png" },
            { x: 2, y: 2, url: "table.png" },
            { x: 6, y: 1, url: "table.png" },
            { x: 6, y: 2, url: "table.png" },
            { x: 2, y: 7, url: "counter_left.png" },
            { x: 2, y: 6, url: "counter_left.png" },
            { x: 2, y: 5, url: "counter_bottom_left.png" },
            { x: 3, y: 5, url: "counter_bottom.png" },
            { x: 4, y: 5, url: "counter_bottom.png" },
            { x: 5, y: 5, url: "counter_bottom.png" },
            { x: 6, y: 7, url: "counter_right.png" },
            { x: 6, y: 6, url: "counter_right.png" },
            { x: 6, y: 5, url: "counter_bottom_right.png" },
        ],
        sit: [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 5, y: 1 },
            { x: 5, y: 2 },
            { x: 7, y: 1 },
            { x: 7, y: 2 },
            { x: 1, y: 5 },
            { x: 1, y: 6 },
            { x: 1, y: 7 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 4 },
            { x: 5, y: 4 },
            { x: 6, y: 4 },
            { x: 7, y: 5 },
            { x: 7, y: 6 },
            { x: 7, y: 7 }
        ],
        blocked: [
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 6, y: 1 },
            { x: 6, y: 2 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 6, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 6, y: 6 },
            { x: 6, y: 7 },
            { x: 1, y: 8 },
            { x: 2, y: 8 },
            { x: 3, y: 8 },
            { x: 4, y: 8 },
            { x: 5, y: 8 },
            { x: 6, y: 8 },
            { x: 7, y: 8 },
        ],
        forbiddenMovements: [],
        doors: {
            right: { x: 8, y: 4, direction: "left", target: { roomId: "bar_st", doorId: "bar" } },
            ladder: { x: 0, y: 0, direction: "right", target: { roomId: "bar_st", doorId: "bar_roof" } },
            hatch: { x: 3, y: 7, direction: "down", target: { roomId: "basement", doorId: "left" } }
        },
        streamSlotCount: 2,
        secret: false
    },
    admin_st: {
        id: "admin_st",
        scale: 2,
        size: { x: 10, y: 9 },
        originCoordinates: { x: 0, y: 622 },
        spawnPoint: "admin",
        backgroundImageUrl: "rooms/admin_st/background.svg",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 1, y: 5, url: "house1.svg", scale: 1, xOffset: -1, yOffset: 58 + 3 },
            { x: 1, y: 5, url: "house2.svg", scale: 1, xOffset: -1, yOffset: 58 + 3 },
            { x: 5, y: 4, url: "trash-bin1.svg", scale: 1, xOffset: 3, yOffset: -16 + 3 },
            { x: 6, y: 4, url: "trash-bin2.svg", scale: 1, xOffset: -26, yOffset: -40 + 3 },
            { x: 6, y: 4, url: "trash-bin2.svg", scale: 1, xOffset: -27, yOffset: -40 + 3 },
            { x: 5, y: 7, url: "go-table.svg", scale: 1, xOffset: 10, yOffset: -7 + 3 },
            { x: 5, y: 6, url: "chair.svg", scale: 1, xOffset: 28, yOffset: -18 + 3 },
            { x: 5, y: 8, url: "chair.svg", scale: 1, xOffset: 28, yOffset: -18 + 3 },

            { x: 6, y: 5, url: "boom-barrier.svg", scale: 1, xOffset: -1, yOffset: -11 + 3 },
            { x: 10, y: 4, url: "funkyboon.svg", scale: 1, xOffset: -35, yOffset: -28 + 3 },
        ],
        sit: [
            { x: 5, y: 6 },
            { x: 5, y: 8 },
        ],
        blocked: [
            // { x: 0, y: 5 },
            { x: 1, y: 5 },
            { x: 1, y: 6 },
            { x: 1, y: 8 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 4, y: 6 },
            // { x: 4, y: 8 },
            { x: 6, y: 5 },
            { x: 7, y: 5 },
            { x: 8, y: 5 },

            { x: 5, y: 7 }, // go table
        ],
        forbiddenMovements: [
            // can't enter the trash bin
            { xFrom: 4, yFrom: 4, xTo: 5, yTo: 4 },
            { xFrom: 6, yFrom: 4, xTo: 5, yTo: 4 },
            { xFrom: 5, yFrom: 3, xTo: 5, yTo: 4 },
            // can't exit the trash bin
            { xFrom: 5, yFrom: 4, xTo: 5, yTo: 3 },
            { xFrom: 5, yFrom: 4, xTo: 6, yTo: 4 },
            { xFrom: 5, yFrom: 4, xTo: 4, yTo: 4 },
            // can't enter funky boon
            { xFrom: 9, yFrom: 3, xTo: 9, yTo: 4 },
            { xFrom: 8, yFrom: 4, xTo: 9, yTo: 4 },
            // cant' exit funky boon
            { xFrom: 9, yFrom: 4, xTo: 9, yTo: 3 },
            { xFrom: 9, yFrom: 4, xTo: 8, yTo: 4 },

        ],
        doors: {
            world_spawn: { x: 5, y: 2, direction: "right", target: null },
            left: { x: 0, y: 2, direction: "right", target: { roomId: "bar_st", doorId: "right" } },
            admin: { x: 2, y: 4, direction: "down", target: { roomId: "admin", doorId: "down" } },
            barrier: { x: 7, y: 4, direction: "down", target: { roomId: "radio_backstage", doorId: "right_center" } }, // Temp
            down: { x: 7, y: 0, direction: "up", target: "NOT_READY_YET" },
            right: { x: 9, y: 2, direction: "left", target: { roomId: "takadai", doorId: "down_left" } },
            up_left: { x: 0, y: 8, direction: "down", target: "NOT_READY_YET" },
            manhole_left: { x: 2, y: 0, direction: "up", target: { roomId: "basement", doorId: "up_right_1" } },
            manhole_right: { x: 9, y: 7, direction: "up", target: { roomId: "basement", doorId: "up_right_2" } },
            warp: { x: 9, y: 0, direction: "up", target: { roomId: "admin_st", doorId: "trash" } },
            trash: { x: 5, y: 4, direction: "down", target: null },
        },
        streamSlotCount: 0,
        secret: false
    },
    basement: {
        id: "basement",
        scale: 160 / 200,
        size: { x: 10, y: 4 },
        originCoordinates: { x: 80, y: 534 },
        spawnPoint: "secret_bar",
        backgroundImageUrl: "rooms/basement/basement.png",
        backgroundColor: "#c0c0c0",
        objects: [
        ],
        sit: [],
        blocked: [
            { x: 4, y: 3 }
        ],
        forbiddenMovements: [
        ],
        doors: {
            left: { x: 0, y: 2, direction: "right", target: { roomId: "bar", doorId: "hatch" } },
            up_left: { x: 1, y: 3, direction: "down", target: { roomId: "bar_st", doorId: "manhole" } },
            secret_bar: { x: 3, y: 3, direction: "down", target: "NOT_READY_YET" },
            bar777: { x: 6, y: 3, direction: "down", target: "NOT_READY_YET" },
            up_right_1: { x: 8, y: 3, direction: "down", target: { roomId: "admin_st", doorId: "manhole_left" } },
            up_right_2: { x: 9, y: 3, direction: "down", target: { roomId: "admin_st", doorId: "manhole_right" } },
            down_left: { x: 1, y: 0, direction: "up", target: "NOT_READY_YET" },
            down_right: { x: 8, y: 0, direction: "up", target: "NOT_READY_YET" },
        },
        streamSlotCount: 0,
        secret: false
    },
    admin: {
        id: "admin",
        scale: 2,
        size: { x: 12, y: 6 },
        originCoordinates: { x: 90, y: 540 },
        spawnPoint: "down",
        backgroundImageUrl: "rooms/admin/background.svg",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 2, y: 1, url: "long_table_left.svg", scale: 1, offset: { x: 164, y: 194 } },
            { x: 2, y: 3, url: "long_table_right.svg", scale: 1, offset: { x: 237, y: 164 } },
            { x: 8, y: 2, url: "round_table.svg", scale: 1, offset: { x: 473, y: 313 } },
        ],
        sit: [
            { x: 10, y: 2 },
            { x: 10, y: 3 },
            { x: 7, y: 2 },
            { x: 7, y: 3 },
            { x: 9, y: 1 },
            { x: 9, y: 4 },
            { x: 8, y: 1 },
            { x: 8, y: 4 },
            { x: 4, y: 1 },
            { x: 4, y: 2 },
            { x: 4, y: 3 },
            { x: 4, y: 4 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
        ],
        blocked: [
            { x: 0, y: 5 }, // shobon
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 3, y: 3 },
            { x: 3, y: 4 },
            { x: 8, y: 2 },
            { x: 8, y: 3 },
            { x: 9, y: 2 },
            { x: 9, y: 3 },
            { x: 6, y: 5 },
        ],
        forbiddenMovements: [],
        doors: {
            down: { x: 10, y: 0, direction: "up", target: { roomId: "admin_st", doorId: "admin" } }
        },
        streamSlotCount: 2,
        secret: false
    },
    radio_backstage: {
        id: "radio_backstage",
        scale: 160 / 200,
        size: { x: 3, y: 9 },
        originCoordinates: { x: 37, y: 900 },
        spawnPoint: "spawn",
        backgroundImageUrl: "rooms/radio_backstage/radio_backstage.png",
        backgroundColor: "#333333",
        objects: [],
        sit: [],
        blocked: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 7 },
            { x: 0, y: 8 },
        ],
        forbiddenMovements: [],
        doors: {
            right_up: { x: 2, y: 1, direction: "left", target: { roomId: "bar", doorId: "right" } }, // Temp
            right_center: { x: 2, y: 4, direction: "left", target: { roomId: "admin", doorId: "down" } }, // Temp
            right_down: { x: 2, y: 7, direction: "left", target: { roomId: "admin_st", doorId: "admin" } }, // Temp
            spawn: { x: 2, y: 2, direction: "left", target: null }
        },
        streamSlotCount: 0,
        secret: false
    },
    school_st: {
        id: "school_st",
        scale: 160 / 200,
        size: { x: 6, y: 8 },
        originCoordinates: { x: 52, y: 780 },
        spawnPoint: "school",
        backgroundImageUrl: "rooms/school_st/giko-hell.png",
        // backgroundColor: "#c0c0c0",
        backgroundColor: "#990600",
        objects: [],
        sit: [
            { x: 0, y: 2 },
            { x: 0, y: 4 },
            { x: 0, y: 6 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 4, y: 2 },
            { x: 5, y: 5 },
            { x: 0, y: 2 },
            { x: 3, y: 4 },
            { x: 3, y: 2 },
            { x: 5, y: 5 },
            { x: 0, y: 3 },

            { x: 0, y: 2 },
            { x: 0, y: 5 },
            { x: 3, y: 7 },
            { x: 5, y: 2 },
            { x: 4, y: 1 },

        ],
        blocked: [
            // correct blocks:
            // { x: 0, y: 3 },
            // { x: 0, y: 4 },
            // { x: 0, y: 4 },
            // { x: 0, y: 6 },
            // { x: 0, y: 7 },


            { x: 2, y: 7 },
            { x: 5, y: 6 },
            { x: 0, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 2, y: 5 },
            { x: 6, y: 7 },
            { x: 3, y: 4 },
            { x: 4, y: 6 },
            { x: 6, y: 2 },
        ],
        forbiddenMovements: [],
        doors: {
            world_spawn: { x: 3, y: 4, direction: "down", target: null },
            left: { x: 0, y: 2, direction: "right", target: "NOT_READY_YET" },
            school: { x: 0, y: 5, direction: "right", target: "NOT_READY_YET" },
            up: { x: 3, y: 7, direction: "down", target: "NOT_READY_YET" },
            right: { x: 5, y: 2, direction: "left", target: "NOT_READY_YET" },
            manhole: { x: 4, y: 1, direction: "down", target: "NOT_READY_YET" }
        },
        streamSlotCount: 0,
        secret: true
    },
    bar_st: {
        id: "bar_st",
        scale: 160 / 200,
        size: { x: 10, y: 9 },
        originCoordinates: { x: 20, y: 580 },
        spawnPoint: "spawn",
        backgroundImageUrl: "rooms/bar_st/bar_st.png",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 4, y: 5, url: "door.svg", scale: 2.5, xOffset: 8, yOffset: -1 },
            { x: 4, y: 5, url: "arrow.svg", scale: 2.5, xOffset: 30, yOffset: -12 },
            { x: 4, y: 5, url: "signboard.svg", scale: 2.5, xOffset: 5, yOffset: -9 },
        ],
        sit: [
            { x: 0, y: 7 },
            { x: 0, y: 8 },

            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },

            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },

            { x: 4, y: 7 },
            { x: 4, y: 8 },
        ],
        blocked: [
            // roof:
            { x: 0, y: 6 },
            { x: 1, y: 7 },
            { x: 1, y: 8 },

            // cola vending machines:
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            // building:
            { x: 3, y: 4 },
            { x: 3, y: 5 },
            { x: 3, y: 6 },
            { x: 3, y: 7 },
            { x: 3, y: 8 },
        ],
        forbiddenMovements: [
            { xFrom: 4, yFrom: 5, xTo: 5, yTo: 5 },
            { xFrom: 4, yFrom: 5, xTo: 4, yTo: 6 },
            { xFrom: 5, yFrom: 5, xTo: 4, yTo: 5 },
            { xFrom: 4, yFrom: 6, xTo: 4, yTo: 5 },
        ],
        doors: {
            bar_roof: { x: 0, y: 8, direction: "down", target: null },
            bar: { x: 4, y: 5, direction: "right", target: { roomId: "bar", doorId: "right" } },
            spawn: { x: 4, y: 5, direction: "down", target: null },
            down: { x: 7, y: 0, direction: "up", target: { roomId: "school_st", doorId: "up" } },
            up: { x: 7, y: 8, direction: "down", target: { roomId: "long_st", doorId: "down" } },
            up_right: { x: 9, y: 8, direction: "down", target: "NOT_READY_YET" },
            right: { x: 9, y: 2, direction: "left", target: { roomId: "admin_st", doorId: "left" } },
            manhole: { x: 8, y: 4, direction: "up", target: { roomId: "basement", doorId: "up_left" } }
        },
        streamSlotCount: 0,
        secret: false
    },
    takadai: {
        id: "takadai",
        scale: 160 / 200,
        size: { x: 9, y: 14 },
        originCoordinates: { x: -90, y: 620 },
        spawnPoint: "spawn",
        backgroundImageUrl: "rooms/takadai/takadai-cropped.png",
        backgroundColor: "#c0c0c0",
        needsFixedCamera: true,
        objects: [],
        sit: [
            { x: 3, y: 5 },
            { x: 3, y: 6 },
        ],
        blocked: [
            // dango flag
            { x: 1, y: 0 },
            // naito shop
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 2, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
            { x: 1, y: 6 },
            { x: 1, y: 7 },

            { x: 1, y: 8 },
            { x: 1, y: 10 },
            { x: 1, y: 11 },
            { x: 1, y: 12 },
            { x: 4, y: 12 },
            { x: 5, y: 12 },
            { x: 5, y: 11, },
            { x: 5, y: 10 },
            { x: 5, y: 9 },
            { x: 6, y: 8 },
            { x: 7, y: 8 },
            { x: 8, y: 7 },
            { x: 7, y: 7 },

            { x: 3, y: 1 },

            { x: 6, y: 5 },

            { x: 8, y: 0 },
            { x: 8, y: 1 },

            { x: 0, y: 13 },
            { x: 0, y: 9 },
            { x: 3, y: 13 },
            { x: 5, y: 8 },
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
        ],
        forbiddenMovements: [
        ],
        doors: {
            down_left: { x: 2, y: 0, direction: "right", target: { roomId: "admin_st", doorId: "right" } },
            spawn: { x: 2, y: 0, direction: "up", target: null },
            down_right: { x: 6, y: 0, direction: "up", target: { roomId: "silo", doorId: "right" } },
        },
        streamSlotCount: 2,
        secret: false
    },
    silo: {
        id: "silo",
        scale: 1.18,
        size: { x: 14, y: 14 },
        originCoordinates: { x: -419, y: 688 },
        spawnPoint: "spawn",
        backgroundImageUrl: "rooms/silo/testmap.svg",
        backgroundColor: "#c0c0c0",
        backgroundOffset: { x: -119, y: 28 },
        needsFixedCamera: true,
        objects: [],
        sit: [],
        blocked: [
            // { x: 5, y: 7 }
            { x: 8, y: 2 },
            { x: 7, y: 1 },
            { x: 6, y: 1 },
            { x: 9, y: 2 },
            { x: 10, y: 3 },
            { x: 11, y: 4 },
            { x: 11, y: 5 },
            { x: 12, y: 6 },
            { x: 12, y: 7 },
            { x: 12, y: 8 },
            { x: 12, y: 9 },
            { x: 12, y: 10 },
            { x: 11, y: 11 },
            { x: 10, y: 12 },
            { x: 9, y: 13 },
            { x: 8, y: 13 },
            { x: 3, y: 13 },
            { x: 1, y: 12 },
            { x: 0, y: 11 },
            { x: 0, y: 10 },
            { x: 2, y: 13 },
            { x: 5, y: 1 },
            { x: 4, y: 1 },
            { x: 3, y: 2 },
            { x: 1, y: 3 },
            { x: 0, y: 4 },
            { x: 0, y: 5 },
            { x: 2, y: 2 },
        ],
        forbiddenMovements: [],
        doors: {
            spawn: { x: 6, y: 7, direction: "down", target: null },
            down: { x: 6, y: 2, direction: "up", target: { roomId: "badend", doorId: "rip" } },
            right: { x: 11, y: 7, direction: "left", target: { roomId: "takadai", doorId: "down_right" } }
        },
        streamSlotCount: 2,
        secret: false
    },
    badend: {
        id: "badend",
        scale: 1.18,
        size: { x: 0, y: 0 },
        originCoordinates: { x: 0, y: 0 },
        spawnPoint: "spawn",
        backgroundImageUrl: "rooms/badend/badend.jpg",
        backgroundColor: "#000000",
        backgroundOffset: { x: 0, y: 0 },
        needsFixedCamera: true,
        objects: [],
        sit: [],
        blocked: [],
        forbiddenMovements: [],
        doors: {
            spawn: { x: 6, y: 7, direction: "left", target: null },
            rip: { x: -100, y: -100, direction: "left", target: null }
        },
        streamSlotCount: 0,
        secret: true
    },
    long_st: {
        id: "long_st",
        scale: 2,
        size: { x: 3, y: 33 },
        originCoordinates: { x: 25, y: 900 },
        spawnPoint: "down",
        backgroundImageUrl: "rooms/long_st/long_st.svg",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [
            { x: 0, y: 0 }
        ],
        blocked: [
            { x: 2, y: 32 }
        ],
        forbiddenMovements: [],
        doors: {
            down: { x: 1, y: 0, direction: "up", target: { roomId: "bar_st", doorId: "up" } },
            up: { x: 1, y: 32, direction: "down", target: { roomId: "long_st", doorId: "down" } },
            left: { x: 0, y: 30, direction: "up", target: "NOT_READY_YET" }
        },
        streamSlotCount: 0,
        secret: false
    },
}

export const defaultRoom = rooms.admin_st
