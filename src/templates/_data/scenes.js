const sceneData = [
    {
        "id": "intro1",
        "transitions": {
            "next": "intro2"
        }
    },
    {
        "id": "intro2",
        "transitions": {
            "prev": "intro1",
            "next": "intro3"
        }
    },
    {
        "id": "intro3",
        "transitions": {
            "prev": "intro2",
            "next": "intro4"
        }
    },
    {
        "id": "intro4",
        "transitions": {
            "prev": "intro3",
            "next": "intro5"
        }
    },
    {
        "id": "intro5",
        "transitions": {
            "prev": "intro4",
            "next": "intro6"
        }
    },
    {
        "id": "intro6",
        "transitions": {
            "prev": "intro5",
            "next": "intro7"
        }
    },
    {
        "id": "intro7",
        "transitions": {
            "prev": "intro6",
            "next": "intro8"
        }
    },
    {
        "id": "intro8",
        "transitions": {
            "prev": "intro7",
            "next": "intro9"
        }
    },
    {
        "id": "intro9",
        "transitions": {
            "prev": "intro8",
            "next": "intro10"
        }
    },
    {
        "id": "intro10",
        "transitions": {
            "prev": "intro9",
            "next": "intro11"
        }
    },
    {
        "id": "intro11",
        "transitions": {
            "prev": "intro10",
            "next": "intro12"
        }
    },
    {
        "id": "intro12",
        "transitions": {
            "prev": "intro11",
            "next": "intro13"
        }
    },
    {
        "id": "intro13",
        "transitions": {
            "prev": "intro12",
            "next": "intro14"
        }
    },
    {
        "id": "intro14",
        "transitions": {
            "prev": "intro13",
            "next": "intro15"
        }
    },
    {
        "id": "intro15",
        "transitions": {
            "prev": "intro14",
            "next": "intro16"
        }
    },
    {
        "id": "intro16",
        "transitions": {
            "prev": "intro15",
            "next": "scene1"
        }
    },
    {
        "id": "scene1",
        "transitions": {
            "prev": "intro16",
            "next": "scene2"
        }
    },
    {
        "id": "scene2",
        "transitions": {
            "prev": "scene1",
            "next": "scene3"
        }
    },
    {
        "id": "scene3",
        "transitions": {
            "prev": "scene2",
            "next": "scene4"
        }
    },
    {
        "id": "scene4",
        "transitions": {
            "prev": "scene3",
            "next": "scene5"
        }
    },
    {
        "id": "scene5",
        "transitions": {
            "prev": "scene4",
            "next": "scene6"
        }
    },
    {
        "id": "scene6",
        "transitions": {
            "prev": "scene5",
            "next": "scene7"
        }
    },
    {
        "id": "scene7",
        "transitions": {
            "prev": "scene6",
            "next": "scene8"
        }
    },
    {
        "id": "scene8",
        "transitions": {
            "prev": "scene7",
            "next": "scene9"
        }
    },
    {
        "id": "scene9",
        "transitions": {
            "prev": "scene8",
            "next": "scene10"
        }
    },
    {
        "id": "scene10",
        "transitions": {
            "prev": "scene9",
            "next": "scene11"
        }
    },
    {
        "id": "scene11",
        "transitions": {
            "prev": "scene10",
            "next": "scene26",
            "mean": "scene12",
            "median": "scene14",
            "mode": "scene23",
            "range": "scene24"
        }
    },
    {
        "id": "scene12",
        "transitions": {
            "prev": "scene11",
            "next": "scene13",
            "more": "scene13",
            "backToQuestion": "scene11"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            }
        ]
    },
    {
        "id": "scene13",
        "transitions": {
            "prev": "scene12",
            "next": "scene14",
            "back": "scene12",
            "backToQuestion": "scene11",
            "readyToAnswer": "scene26"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion", "readyToAnswer"]
            }
        ]
    },
    {
        "id": "scene14",
        "transitions": {
            "prev": "scene13",
            "backToQuestion": "scene11",
            "more": "scene15",
            "next": "scene15"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            }
        ]
    }, 
    {
        "id": "scene15",
        "transitions": {
            "prev": "scene14",
            "next": "scene16",
            "back": "scene14",
            "more": "scene16"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_0", "dog_14"] }
        ]
    },
    {
        "id": "scene16",
        "transitions": {
            "prev": "scene15",
            "next": "scene17",
            "back": "scene15",
            "more": "scene17"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_1", "dog_13"] }
        ]

    },
    {
        "id": "scene17",
        "transitions": {
            "prev": "scene16",
            "next": "scene18",
            "back": "scene16",
            "more": "scene18"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_2", "dog_12"] }
        ]

    },
    {
        "id": "scene18",
        "transitions": {
            "prev": "scene17",
            "next": "scene19",
            "back": "scene17",
            "more": "scene19"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_3", "dog_11"] }
        ]
    },
    {
        "id": "scene19",
        "transitions": {
            "prev": "scene18",
            "next": "scene20",
            "back": "scene18",
            "more": "scene20"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_4", "dog_10"] }
        ]
    },
    {
        "id": "scene20",
        "transitions": {
            "prev": "scene19",
            "next": "scene21",
            "back": "scene19",
            "more": "scene21"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_5", "dog_9"] }
        ]
    },
    {
        "id": "scene21",
        "transitions": {
            "prev": "scene20",
            "next": "scene22",
            "back": "scene20",
            "more": "scene22"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            },
            { name: "hiliteDogs", args: ["dog_6", "dog_8"] }
        ]
    },
    {
        "id": "scene22",
        "transitions": {
            "prev": "scene21",
            "next": "scene23",
            "back": "scene21"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion", "readyToAnswer"]
            },
            { name: "hiliteDogs", args: ["dog_7"] }
        ]
    },
    {
        "id": "scene23",
        "transitions": {
            "prev": "scene22",
            "next": "scene24",
            "backToQuestion": "scene11",
            "readyToAnswer": "scene26"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion", "readyToAnswer"]
            }
        ]
    },
    {
        "id": "scene24",
        "transitions": {
            "prev": "scene23",
            "next": "scene25",
            "backToQuestion": "scene11",
            "more": "scene25"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion"]
            }
        ]
    },
    {
        "id": "scene25",
        "transitions": {
            "prev": "scene24",
            "next": "scene26",
            "back": "scene24",
            "backToQuestion": "scene11",
            "readyToAnswer": "scene26"
        },
        actions: [
            {
                name: "hideBtns",
                args: ["prev", "next"]
            },
            {
                name: "showBtns",
                args: ["backToQuestion", "readyToAnswer"]
            }
        ]
    },
    {
        "id": "scene26",
        "transitions": {
            "prev": "scene25",
            "next": "scene27"
        }
    },
    {
        "id": "scene27",
        "transitions": {
            "prev": "scene26",
            "next": "scene27a"
        }
    },
    {
        "id": "scene27a",
        "transitions": {
            "prev": "scene27",
            "next": "scene28"
        }
    },
    {
        "id": "scene28",
        "transitions": {
            "prev": "scene27",
            "next": "scene29"
        }
    },
    {
        "id": "scene29",
        "transitions": {
            "prev": "scene28",
            "next": "scene30"
        }
    },
    {
        "id": "scene30",
        "transitions": {
            "prev": "scene29",
            "next": "scene31"
        }
    },
    {
        "id": "scene31",
        "transitions": {
            "prev": "scene30",
            "next": "scene32"
        }
    },
    {
        "id": "scene32",
        "transitions": {
            "prev": "scene31",
            "next": "scene32a"
        }
    },
    {
        "id": "scene32a",
        "transitions": {
            "prev": "scene32",
            "next": "scene33"
        }
    },
    {
        "id": "scene33",
        "transitions": {
            "prev": "scene32a",
            "next": "scene34"
        }
    },
    {
        "id": "scene34",
        "transitions": {
            "prev": "scene33",
            "next": "scene35"
        }
    },
    {
        "id": "scene35",
        "transitions": {
            "prev": "scene34",
            "next": "scene36"
        }
    },
    {
        "id": "scene36",
        "transitions": {
            "prev": "scene35",
            "next": "scene37"
        }
    },
    {
        "id": "scene37",
        "transitions": {
            "prev": "scene36",
            "next": "scene38"
        }
    },
    {
        "id": "scene38",
        "transitions": {
            "prev": "scene37",
            "next": "scene39"
        }
    },
    {
        "id": "scene39",
        "transitions": {
            "prev": "scene38",
            "next": "scene40"
        }
    },
    {
        "id": "scene40",
        "transitions": {
            "prev": "scene39",
            "next": "scene41"
        }
    },
    {
        "id": "scene41",
        "transitions": {
            "prev": "scene40",
            "next": "scene42"
        }
    },
    {
        "id": "scene42",
        "transitions": {
            "prev": "scene41",
            "next": "scene43"
        }
    },
    {
        "id": "scene43",
        "transitions": {
            "prev": "scene42",
            "next": "scene44"
        }
    },
    {
        "id": "scene44",
        "transitions": {
            "prev": "scene43",
            "next": "scene45"
        }
    },
    {
        "id": "scene45",
        "transitions": {
            "prev": "scene44",
            "next": "scene46"
        }
    },
    {
        "id": "scene46",
        "transitions": {
            "prev": "scene45",
            "next": "scene47"
        }
    },
    {
        "id": "scene47",
        "transitions": {
            "prev": "scene46",
            "next": "scene48"
        }
    },
    {
        "id": "scene48",
        "transitions": {
            "prev": "scene47",
            "next": "scene49"
        }
    },
    {
        "id": "scene49",
        "transitions": {
            "prev": "scene48",
            "next": "scene50"
        }
    },
    {
        "id": "scene50",
        "transitions": {
            "prev": "scene49",
            "next": "scene51"
        }
    },
    {
        "id": "scene51",
        "transitions": {
            "prev": "scene50",
            "next": "scene52"
        }
    },
    {
        "id": "scene52",
        "transitions": {
            "prev": "scene51",
            "next": "scene53"
        }
    },
    {
        "id": "scene53",
        "transitions": {
            "prev": "scene52",
            "next": "scene54"
        }
    },
    {
        "id": "scene54",
        "transitions": {
            "prev": "scene53",
            "next": "scene55"
        }
    },
    {
        "id": "scene55",
        "transitions": {
            "prev": "scene54",
            "next": "scene56"
        }
    },
    {
        "id": "scene56",
        "transitions": {
            "prev": "scene55",
            "next": "scene57"
        }
    },
    {
        "id": "scene57",
        "transitions": {
            "prev": "scene56",
            "next": "scene58"
        }
    },
    {
        "id": "scene58",
        "transitions": {
            "prev": "scene57",
            "next": "scene59"
        }
    },
    {
        "id": "scene59",
        "transitions": {
            "prev": "scene58",
            "next": "scene60"
        }
    },
    {
        "id": "scene60",
        "transitions": {
            "prev": "scene59",
            "next": "scene61"
        }
    },
    {
        "id": "scene61",
        "transitions": {
            "prev": "scene60",
            "next": "scene62"
        }
    },
    {
        "id": "scene62",
        "transitions": {
            "prev": "scene61",
            "next": "scene63"
        }
    },
    {
        "id": "scene63",
        "transitions": {
            "prev": "scene62",
            "next": "scene64"
        }
    },
    {
        "id": "scene64",
        "transitions": {
            "prev": "scene63",
            "next": "scene65"
        }
    },
    {
        "id": "scene65",
        "transitions": {
            "prev": "scene64",
            "next": "scene66"
        }
    },
    {
        "id": "scene66",
        "transitions": {
            "prev": "scene65",
            "next": "scene67"
        }
    },
    {
        "id": "scene67",
        "transitions": {
            "prev": "scene66",
            "next": "scene68"
        }
    },
    {
        "id": "scene68",
        "transitions": {
            "prev": "scene67",
            "next": "scene69"
        }
    },
    {
        "id": "scene69",
        "transitions": {
            "prev": "scene68",
            "next": "scene70"
        }
    },
    {
        "id": "scene70",
        "transitions": {
            "prev": "scene69",
            "next": "scene71"
        }
    },
    {
        "id": "scene71",
        "transitions": {
            "prev": "scene70",
            "next": "scene72"
        }
    },
    {
        "id": "scene72",
        "transitions": {
            "prev": "scene71",
            "next": "scene73"
        }
    },
    {
        "id": "scene73",
        "transitions": {
            "prev": "scene72",
            "next": "scene74"
        }
    },
    {
        "id": "scene74",
        "transitions": {
            "prev": "scene73",
            "next": "scene75"
        }
    },
    {
        "id": "scene75",
        "transitions": {
            "prev": "scene74",
            "next": "scene76"
        }
    },
    {
        "id": "scene76",
        "transitions": {
            "prev": "scene75",
            "next": "scene77"
        }
    },
    {
        "id": "scene77",
        "transitions": {
            "prev": "scene76",
            "next": "scene78"
        }
    },
    {
        "id": "scene78",
        "transitions": {
            "prev": "scene77",
            "next": "scene79"
        }
    },
    {
        "id": "scene79",
        "transitions": {
            "prev": "scene78",
            "next": "scene80"
        }
    },
    {
        "id": "scene80",
        "transitions": {
            "prev": "scene79",
            "next": "scene81"
        }
    },
    {
        "id": "scene81",
        "transitions": {
            "prev": "scene80",
            "next": "scene82"
        }
    },
    {
        "id": "scene82",
        "transitions": {
            "prev": "scene81",
            "next": "scene83"
        }
    },
    {
        "id": "scene83",
        "transitions": {
            "prev": "scene82",
            "next": "scene84"
        }
    },
    {
        "id": "scene84",
        "transitions": {
            "prev": "scene83",
            "next": "scene85"
        }
    },
    {
        "id": "scene85",
        "transitions": {
            "prev": "scene84",
            "next": "scene86"
        }
    },
    {
        "id": "scene86",
        "transitions": {
            "prev": "scene85",
            "next": "scene87"
        }
    },
    {
        "id": "scene87",
        "transitions": {
            "prev": "scene86",
            "next": "scene88"
        }
    },
    {
        "id": "scene88",
        "transitions": {
            "prev": "scene87",
            "next": "scene89"
        }
    },
    {
        "id": "scene89",
        "transitions": {
            "prev": "scene88",
            "next": "scene90"
        }
    },
    {
        "id": "scene90",
        "transitions": {
            "prev": "scene89",
            "next": "scene91"
        }
    },
    {
        "id": "scene91",
        "transitions": {
            "prev": "scene90",
            "next": "scene92"
        }
    },
    {
        "id": "scene92",
        "transitions": {
            "prev": "scene91",
            "next": "scene93"
        }
    },
    {
        "id": "scene93",
        "transitions": {
            "prev": "scene92",
            "next": "scene94"
        }
    },
    {
        "id": "scene94",
        "transitions": {
            "prev": "scene93",
            "next": "scene95"
        }
    },
    {
        "id": "scene95",
        "transitions": {
            "prev": "scene94",
            "next": "scene96"
        }
    },
    {
        "id": "scene96",
        "transitions": {
            "prev": "scene95",
            "next": "scene97"
        }
    },
    {
        "id": "scene97",
        "transitions": {
            "prev": "scene96",
            "next": "scene98"
        }
    },
    {
        "id": "scene98",
        "transitions": {
            "prev": "scene97",
            "next": "scene99"
        }
    },
    {
        "id": "scene99",
        "transitions": {
            "prev": "scene98",
            "next": "scene100"
        }
    },
    {
        "id": "scene100",
        "transitions": {
            "prev": "scene99",
            "next": "scene101"
        }
    },
    {
        "id": "scene101",
        "transitions": {
            "prev": "scene100",
            "next": "scene102"
        }
    },
    {
        "id": "scene102",
        "transitions": {
            "prev": "scene101",
            "next": "scene103"
        }
    },
    {
        "id": "scene103",
        "transitions": {
            "prev": "scene102",
            "next": "scene104"
        }
    },
    {
        "id": "scene104",
        "transitions": {
            "prev": "scene103",
            "next": "scene105"
        }
    },
    {
        "id": "scene105",
        "transitions": {
            "prev": "scene104",
            "next": "scene106"
        }
    },
    {
        "id": "scene106",
        "transitions": {
            "prev": "scene105",
            "next": "scene107"
        }
    },
    {
        "id": "scene107",
        "transitions": {
            "prev": "scene106",
            "next": "scene108"
        }
    },
    {
        "id": "scene108",
        "transitions": {
            "prev": "scene107",
            "next": "scene109"
        }
    },
    {
        "id": "scene109",
        "transitions": {
            "prev": "scene108",
            "next": "scene110"
        }
    },
    {
        "id": "scene110",
        "transitions": {
            "prev": "scene109",
            "next": "scene111"
        }
    },
    {
        "id": "scene111",
        "transitions": {
            "prev": "scene110",
            "next": "scene112"
        }
    },
    {
        "id": "scene112",
        "transitions": {
            "prev": "scene111",
            "next": "scene113"
        }
    },
    {
        "id": "scene113",
        "transitions": {
            "prev": "scene112"
        }
    }
];

function convertToObject(data) {
    let newData = {};
    data.forEach((item) => {
        newData[item.id] = item; 
    });
    return newData;
}

module.exports = convertToObject(sceneData);