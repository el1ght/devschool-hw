class Warrior{
    ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite",
        "Conqueror", "Champion", "Master", "Greatest"]
    constructor() {
        this.warrior_level = 1;
        this.warrior_experience = 100;
        this.warrior_newlevel_exp = 0;
        this.warrior_rank = "Pushover";
        this.warrior_achievements = [];
    }

    battle(enemyLevel){
        const levelDifference = enemyLevel - this.warrior_level;
        if(enemyLevel < 1 || enemyLevel > 100){
            return "Invalid level";
        }
        if(levelDifference === 0){
            this.warrior_experience += 10;
            this.warrior_newlevel_exp += 10;
            this.levelUp();
            return "A good fight";
        }
        else if(levelDifference === -1){
            this.warrior_experience += 5;
            this.warrior_newlevel_exp += 5;
            this.levelUp();
            return "A good fight";
        }
        else if(levelDifference <= -2){
            return "Easy fight";

        }
        else if(levelDifference >= 5 && Math.floor(this.warrior_level/ 10) < Math.floor(enemyLevel / 10)){
            return "You've been defeated";
        }
        else {
            this.warrior_experience += 20 * levelDifference * levelDifference;
            this.warrior_newlevel_exp += 20 * levelDifference * levelDifference;
            this.levelUp();
            return "An intense fight";
        }
    }
    levelUp() {
        if (this.warrior_level < 100) {
            while (this.warrior_newlevel_exp >= 100) {
                if (this.warrior_level >= 100){
                    this.warrior_level = 100;
                    this.warrior_newlevel_exp = 0;
                    this.warrior_experience = 10000;
                    this.warrior_rank = this.calculateRank();
                }
                else{
                    this.warrior_level += 1;
                    this.warrior_newlevel_exp -= 100;
                }
            }
            this.warrior_rank = this.calculateRank();
        }

    }
    calculateRank() {
        let rankIndex = Math.floor(this.warrior_level / 10);
        return this.ranks[rankIndex];
    }

    training([description, expForTraining, minLevel]){
        if(this.warrior_level >= minLevel){
            this.warrior_experience += expForTraining;
            this.warrior_newlevel_exp += expForTraining;
            this.levelUp();
            this.warrior_achievements.push(description);
            return description;
        }
        else{
            return "Not strong enough";
        }

    }
    level(){
        return this.warrior_level;
    }
    experience(){
        return this.warrior_experience;
    }
    rank(){
        return this.warrior_rank;
    }
    achievements(){
        return this.warrior_achievements;
    }
}