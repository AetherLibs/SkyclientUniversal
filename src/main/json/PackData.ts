import Actions from "./Actions";

class PackData {
    id?: string;
    file?: string;
    display?: string;
    description?: string;
    url?: string;
    icon?: string;
    icon_scaling?: string;
    creator?: string;
    discordcode?: string;
    categories?: string[];
    actions?: Actions[];
    outdated?: boolean;
    hidden?: boolean;
    selected?: boolean;
    enabled?: boolean;

    getId() {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    getFile() {
        return this.file;
    }

    setFile(file: string) {
        this.file = file;
        return this;
    }

    getDisplay() {
        return this.display;
    }

    setDisplay(display: string) {
        this.display = display;
        return this;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    getUrl() {
        return this.url;
    }

    setUrl(url: string) {
        this.url = url;
        return this;
    }

    getIcon() {
        return this.icon;
    }

    setIcon(icon: string) {
        this.icon = icon;
        return this;
    }

    getIcon_scaling() {
        return this.icon_scaling;
    }

    setIcon_scaling(icon_scaling: string) {
        this.icon_scaling = icon_scaling;
        return this;
    }

    getCreator() {
        return this.creator;
    }

    setCreator(creator: string) {
        this.creator = creator;
        return this;
    }

    getDiscordcode() {
        return this.discordcode;
    }

    setDiscordcode(discordcode: string) {
        this.discordcode = discordcode;
        return this;
    }

    getCategories() {
        return this.categories;
    }

    setCategories(categories: string[]) {
        this.categories = categories;
        return this;
    }

    getActions() {
        return this.actions;
    }

    setActions(actions: Actions[]) {
        this.actions = actions;
        return this;
    }

    isOutdated() {
        return this.outdated;
    }

    setOutdated(outdated: boolean) {
        this.outdated = outdated;
        return this;
    }

    isHidden() {
        return this.hidden;
    }

    setHidden(hidden: boolean) {
        this.hidden = hidden;
        return this;
    }

    toString() {
        return "PackData(" +
        "id='" + this.id + '\'' +
        ", file='" + this.file + '\'' +
        ", display='" + this.display + '\'' +
        ", description='" + this.description + '\'' +
        ", url='" + this.url + '\'' +
        ", icon='" + this.icon + '\'' +
        ", icon_scaling='" + this.icon_scaling + '\'' +
        ", creator='" + this.creator + '\'' +
        ", discordcode='" + this.discordcode + '\'' +
        ", categories=" + this.categories?.toString + '\'' +
        ", actions=" + this.actions?.toString + '\'' +
        ", outdated=" + this.outdated + '\'' +
        ", hidden=" + this.hidden + '\'' +
        ')';
    }
}

export default PackData;