export class FollowParentBehavior {
    constructor(priority) {
        this.priority = priority;
        this.speed_multiplier = 1.10;
    }
    setSpeedMultiplier(speed_multiplier) {
        this.speed_multiplier = speed_multiplier;
    }
    toJson() {
        return new Map().set("minecraft:behavior.follow_parent", {
            "priority": this.priority,
            "speed_multiplier": this.speed_multiplier
        });
    }
}
