import MinecraftProfile from './MinecraftProfile'
import LauncherSettings from './LauncherSettings'

export class LauncherProfiles {
    profiles?: { [index: string]: MinecraftProfile; };
    settings?: LauncherSettings;
    version?: number;
    selectedProfile?: string;

    /* 
        Gets the LauncherProfile json.
    */
    toString() {
        return "LauncherProfiles(" +
                "profiles=" + this.profiles +
                ", settings=" + this.settings +
                ", version=" + this.version +
                ", selectedProfile='" + this.selectedProfile + '\'' +
                ')';
    }
}