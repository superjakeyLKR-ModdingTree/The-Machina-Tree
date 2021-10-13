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
                return player.x.points.add(1.5).pow(0.75)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id)) + "x"
            }
        }
    }
})
