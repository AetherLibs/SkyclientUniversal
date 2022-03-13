import Actions from './Actions';
import Warning from './Warning'

class ModData {
    id?: string;
    nicknames?: string[];
    enabled?: boolean;
    file?: string;
    url?: string;
    display?: string;
    description?: string;
    icon?: string;
    icon_scaling?: string;
    creator?: string;
    discordcode?: string;
    actions?: Actions[];
    categories?: string[];
    files?: string[];
    hidden?: boolean;
    selected?: boolean;
    hash?: string;
    packages?: string[];
    warning?: Warning;

    getId() {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    getNicknames() {
        return this.nicknames;
    }

    setNicknames(nicknames: string[]) {
        this.nicknames = nicknames;
        return this;
    }

    isEnabled() {
        return this.enabled;
    }

    setEnabled(enabled: boolean) {
        this.enabled = enabled;
        return this;
    }

    getFile() {
        return this.file;
    }

    setFile(file: string) {
        this.file = file;
        return this;
    }

    getUrl() {
        return this.url;
    }

    setUrl(url: string) {
        this.url = url;
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

    getActions() {
        return this.actions;
    }

    setActions(actions: Actions[]) {
        this.actions = actions;
        return this;
    }

    getCategories() {
        return this.categories;
    }

    setCategories(categories: string[]) {
        this.categories = categories;
        return this;
    }

    getFiles() {
        return this.files;
    }

    setFiles(files: string[]) {
        this.files = files;
        return this;
    }

    toString() {
        return "ModData(" +
        "id='" + this.id + '\'' +
        ", nicknames=" + this.nicknames +
        ", enabled=" + this.enabled +
        ", file='" + this.file + '\'' +
        ", url='" + this.url + '\'' +
        ", display='" + this.display + '\'' +
        ", description='" + this.description + '\'' +
        ", icon='" + this.icon + '\'' +
        ", icon_scaling='" + this.icon_scaling + '\'' +
        ", creator='" + this.creator + '\'' +
        ", discordcode='" + this.discordcode + '\'' +
        ", actions=" + this.actions?.toString() + '\'' +
        ", categories=" + this.categories?.toString + '\'' +
        ", files=" + this.files?.toString() + '\'' +
        ')';
    }
}

export default ModData;