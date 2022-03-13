
class MinecraftProfile {

    gameDir!: string;
    icon!: string;
    javaArgs!: string;
    lastUsed!: string;
    lastVersionId!: string;
    name!: string;
    type!: string;

    public MinecraftProfile(gameDir: string, icon: string, javaArgs: string, lastUsed: string, lastVersionId: string, name: string, type: string) {
        this.gameDir = gameDir;
        this.icon =  icon;
        this.javaArgs = javaArgs;
        this.lastUsed = lastUsed;
        this.lastVersionId = lastVersionId;
        this.name = name;
        this.type = type;
    }

    toString() {
        return "MinecraftProfile(" +
                "gameDir='" + this.gameDir + '\'' +
                ", icon='" + this.icon + '\'' +
                ", javaArgs='" + this.javaArgs + '\'' +
                ", lastUsed='" + this.lastUsed + '\'' +
                ", lastVersionId='" + this.lastVersionId + '\'' +
                ", name='" + this.name + '\'' +
                ", type='" + this.type + '\'' +
                ')';
    }
}




export default MinecraftProfile;
