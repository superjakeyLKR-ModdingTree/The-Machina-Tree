addLayer("x", {
    name: "𝑥-Machina", 
    symbol: "𝑥", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), 
    resource: "𝑥-Machina points", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainMult() { 
        mult = new Decimal(1)
        if (hasUpgrade("x", 14)) mult = mult.times(upgradeEffect("x", 14))
        return mult
    },
    gainExp() { 
        return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Gotta start somewhere.",
            description: "Generate 1 machina point/s.",
            cost: new Decimal(1),
        },
        12: {
            title: "More Points.",
            description: "Double machina point generation.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade("x", 11)}
        },
        13: {
            title: "Wealthy.",
            description: "Gain a boost to machina point production based off of your unspent 𝑥-Machina points.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade("x", 12)},
            effect() {
                return player.x.points.add(1).pow(0.7)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id)) + "x"
            }
        },
        14: {
            title: "Never Enough.",
            description: "Machina points boost 𝑥-Machina point gain slightly.",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade("x", 13)},
            effect() {
                return player.points.add(1).pow(0.1)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id)) + "x"
            }
        }
    }
}),
addLayer("ach", {
    name: "Achievments",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#6A0DAD",
    row: "side",
    requires: new Decimal(0), 
    resource: "achievements",
    achievements: {
        11: {
            name: "It's a start.",
            tooltip: "Get your first 𝑥-Machina point.",
            done() {return player.x.points.gte(1)}
        },
        12: {
            name: "Raking them in.",
            tooltip: "Have 5 𝑥-Machina points.",
            done() {return player.x.points.gte(5)}
        }
    }
})
