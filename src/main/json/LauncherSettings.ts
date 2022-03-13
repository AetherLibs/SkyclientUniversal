class LauncherSettings {
    crashAssistance!: boolean;
    enableAdvanced!: boolean;
    enableAnalytics!: boolean;
    enableHistorical!: boolean;
    enableReleases!: boolean;
    enableSnapshots!: boolean;
    keepLauncherOpen!: boolean;
    profileSorting!: string;
    showGameLog!: boolean;
    showMenu!: boolean;
    soundOn!: boolean;

    toString() {
        return "LauncherSettings(" +
                "crashAssistance=" + this.crashAssistance +
                ", enableAdvanced=" + this.enableAdvanced +
                ", enableAnalytics=" + this.enableAnalytics +
                ", enableHistorical=" + this.enableHistorical +
                ", enableReleases=" + this.enableReleases +
                ", enableSnapshots=" + this.enableSnapshots +
                ", keepLauncherOpen=" + this.keepLauncherOpen +
                ", profileSorting='" + this.profileSorting + '\'' +
                ", showGameLog=" + this.showGameLog +
                ", showMenu=" + this.showMenu +
                ", soundOn=" + this.soundOn +
                ')';
    }
}

export default LauncherSettings;